#!/usr/bin/env pwsh
<#
.SYNOPSIS
    Concurrent Booking Race Condition Test
.DESCRIPTION
    Tests that the booking system properly handles concurrent seat booking attempts.
    Two users will attempt to book the same seat simultaneously.
    Only one should succeed; the other should receive a 409 SEAT_CONFLICT error.
.NOTES
    Prerequisites:
    - Backend server running on localhost:5000
    - At least one ACTIVED schedule with available seats
    - Two user accounts for testing
#>

$BASE_URL = "http://localhost:5000"

# --- Configuration ---
# Test user credentials (update these for your environment)
$USER1_EMAIL = "zidane@example.com"
$USER1_PASS  = "zidane123"

Write-Host "============================================" -ForegroundColor Cyan
Write-Host " CONCURRENT BOOKING RACE CONDITION TEST" -ForegroundColor Cyan
Write-Host "============================================" -ForegroundColor Cyan
Write-Host ""

# --- Step 1: Login as User 1 ---
Write-Host "[1/5] Logging in as test user..." -ForegroundColor Yellow
$loginBody = @{ email = $USER1_EMAIL; password = $USER1_PASS } | ConvertTo-Json
$loginResp = Invoke-RestMethod -Uri "$BASE_URL/auth/login" -Method POST -Body $loginBody -ContentType "application/json"

if (-not $loginResp.token) {
    Write-Host "ERROR: Login failed. Check credentials." -ForegroundColor Red
    exit 1
}
$TOKEN = $loginResp.token
Write-Host "  Logged in successfully. Token obtained." -ForegroundColor Green
Write-Host ""

# --- Step 2: Find an active schedule with available seats ---
Write-Host "[2/5] Finding a schedule with available seats..." -ForegroundColor Yellow
$headers = @{ Authorization = "Bearer $TOKEN" }
$schedules = Invoke-RestMethod -Uri "$BASE_URL/schedule/" -Method GET -Headers $headers

$activeSchedules = $schedules.data | Where-Object { $_.status -eq "ACTIVED" }
if ($activeSchedules.Count -eq 0) {
    Write-Host "ERROR: No active schedules found. Create one first." -ForegroundColor Red
    exit 1
}

$targetSchedule = $activeSchedules[0]
$scheduleId = $targetSchedule.id_schedule
Write-Host "  Using schedule: $($targetSchedule.schedule_name) (ID: $scheduleId)" -ForegroundColor Green

# --- Step 3: Find an available seat ---
Write-Host "[3/5] Finding an available seat..." -ForegroundColor Yellow
$seatMap = Invoke-RestMethod -Uri "$BASE_URL/schedule/seatmapping/$scheduleId" -Method GET -Headers $headers

$availableSeat = $null
foreach ($carriage in $seatMap.data.carriages) {
    $seat = $carriage.seats | Where-Object { $_.status -eq "AVAILABLE" } | Select-Object -First 1
    if ($seat) {
        $availableSeat = $seat
        break
    }
}

if (-not $availableSeat) {
    Write-Host "ERROR: No available seats in schedule $scheduleId" -ForegroundColor Red
    exit 1
}

$seatId = $availableSeat.id_seat
$seatNum = $availableSeat.seat_num
Write-Host "  Target seat: $seatNum (ID: $seatId)" -ForegroundColor Green
Write-Host ""

# --- Step 4: Fire TWO concurrent booking requests for the SAME seat ---
Write-Host "[4/5] Firing 2 CONCURRENT booking requests for seat $seatNum..." -ForegroundColor Yellow
Write-Host "  Both requests target the SAME seat to trigger a race condition." -ForegroundColor DarkYellow
Write-Host ""

$bookingBody = @{
    id_schedule = $scheduleId
    seat_ids    = @($seatId)
    buyer_name  = "Race Condition Test"
    buyer_email = "test@example.com"
    buyer_phone = "08123456789"
} | ConvertTo-Json

# Create two parallel jobs that send requests simultaneously
$job1 = Start-Job -ScriptBlock {
    param($url, $body, $token)
    try {
        $headers = @{
            Authorization  = "Bearer $token"
            "Content-Type" = "application/json"
        }
        $response = Invoke-WebRequest -Uri "$url/purchase" -Method POST -Body $body -Headers $headers -UseBasicParsing
        return @{
            StatusCode = $response.StatusCode
            Body       = $response.Content | ConvertFrom-Json
        }
    } catch {
        $statusCode = $_.Exception.Response.StatusCode.value__
        $errorBody = $_.ErrorDetails.Message
        try { $errorBody = $errorBody | ConvertFrom-Json } catch {}
        return @{
            StatusCode = $statusCode
            Body       = $errorBody
        }
    }
} -ArgumentList $BASE_URL, $bookingBody, $TOKEN

$job2 = Start-Job -ScriptBlock {
    param($url, $body, $token)
    try {
        $headers = @{
            Authorization  = "Bearer $token"
            "Content-Type" = "application/json"
        }
        $response = Invoke-WebRequest -Uri "$url/purchase" -Method POST -Body $body -Headers $headers -UseBasicParsing
        return @{
            StatusCode = $response.StatusCode
            Body       = $response.Content | ConvertFrom-Json
        }
    } catch {
        $statusCode = $_.Exception.Response.StatusCode.value__
        $errorBody = $_.ErrorDetails.Message
        try { $errorBody = $errorBody | ConvertFrom-Json } catch {}
        return @{
            StatusCode = $statusCode
            Body       = $errorBody
        }
    }
} -ArgumentList $BASE_URL, $bookingBody, $TOKEN

# Wait for both to complete
$results = @($job1, $job2) | Wait-Job | Receive-Job
Remove-Job $job1, $job2

# --- Step 5: Analyze results ---
Write-Host "[5/5] RESULTS:" -ForegroundColor Yellow
Write-Host "  ────────────────────────────────────────" -ForegroundColor DarkGray

$successCount = 0
$conflictCount = 0

for ($i = 0; $i -lt $results.Count; $i++) {
    $r = $results[$i]
    $label = "Request $($i + 1)"

    if ($r.StatusCode -eq 201) {
        $successCount++
        Write-Host "  $label → ✅ 201 CREATED (Booking succeeded)" -ForegroundColor Green
    } elseif ($r.StatusCode -eq 409) {
        $conflictCount++
        $errorCode = if ($r.Body.error_code) { $r.Body.error_code } else { "N/A" }
        Write-Host "  $label → ⚠️  409 CONFLICT (error_code: $errorCode)" -ForegroundColor DarkYellow
    } elseif ($r.StatusCode -eq 400) {
        $conflictCount++
        Write-Host "  $label → ⚠️  400 BAD REQUEST (seat unavailable)" -ForegroundColor DarkYellow
    } else {
        Write-Host "  $label → ❌ $($r.StatusCode) UNEXPECTED" -ForegroundColor Red
        Write-Host "    Body: $($r.Body | ConvertTo-Json -Depth 3)" -ForegroundColor DarkGray
    }
}

Write-Host "  ────────────────────────────────────────" -ForegroundColor DarkGray
Write-Host ""

# --- Verdict ---
if ($successCount -eq 1 -and $conflictCount -eq 1) {
    Write-Host "  ✅ TEST PASSED: Exactly 1 booking succeeded, 1 was rejected." -ForegroundColor Green
    Write-Host "  Race condition is properly prevented!" -ForegroundColor Green
} elseif ($successCount -eq 2) {
    Write-Host "  ❌ TEST FAILED: BOTH bookings succeeded — RACE CONDITION EXISTS!" -ForegroundColor Red
    Write-Host "  The same seat was double-booked. The fix is not working." -ForegroundColor Red
} elseif ($successCount -eq 0) {
    Write-Host "  ⚠️  TEST INCONCLUSIVE: Neither booking succeeded." -ForegroundColor Yellow
    Write-Host "  This can happen if both requests locked the row simultaneously." -ForegroundColor Yellow
    Write-Host "  Re-run the test. If it persists, check server logs." -ForegroundColor Yellow
} else {
    Write-Host "  ❓ UNEXPECTED: $successCount succeeded, $conflictCount conflicts" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "============================================" -ForegroundColor Cyan
Write-Host " TEST COMPLETE" -ForegroundColor Cyan
Write-Host "============================================" -ForegroundColor Cyan
