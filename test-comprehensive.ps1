# Comprehensive API Testing Script
# Tests all authentication and authorization features

$testResults = @()
$timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"

Write-Host "`n========================================" -ForegroundColor Cyan
Write-Host "  Authentication System Testing" -ForegroundColor Cyan
Write-Host "  Started: $timestamp" -ForegroundColor Cyan
Write-Host "========================================`n" -ForegroundColor Cyan

function Test-Endpoint {
    param(
        [string]$TestName,
        [string]$Method,
        [string]$Uri,
        [hashtable]$Body = $null,
        [hashtable]$Headers = $null,
        [int]$ExpectedStatus = 200,
        [string]$ExpectedResult = "Success"
    )
    
    Write-Host "Testing: $TestName" -ForegroundColor Yellow
    
    try {
        $params = @{
            Uri = $Uri
            Method = $Method
            UseBasicParsing = $true
        }
        
        if ($Body) {
            $params['Body'] = ($Body | ConvertTo-Json)
            $params['ContentType'] = 'application/json'
        }
        
        if ($Headers) {
            $params['Headers'] = $Headers
        }
        
        $response = Invoke-WebRequest @params
        $actualStatus = $response.StatusCode
        $content = $response.Content
        
        if ($actualStatus -eq $ExpectedStatus) {
            Write-Host "  ✓ PASS - Status: $actualStatus" -ForegroundColor Green
            $script:testResults += [PSCustomObject]@{
                Test = $TestName
                Status = "PASS"
                Expected = $ExpectedStatus
                Actual = $actualStatus
                Response = $content
            }
            return $content
        } else {
            Write-Host "  ✗ FAIL - Expected: $ExpectedStatus, Got: $actualStatus" -ForegroundColor Red
            $script:testResults += [PSCustomObject]@{
                Test = $TestName
                Status = "FAIL"
                Expected = $ExpectedStatus
                Actual = $actualStatus
                Response = $content
            }
            return $null
        }
    } catch {
        $actualStatus = $_.Exception.Response.StatusCode.value__
        $reader = New-Object System.IO.StreamReader($_.Exception.Response.GetResponseStream())
        $reader.BaseStream.Position = 0
        $reader.DiscardBufferedData()
        $content = $reader.ReadToEnd()
        
        if ($actualStatus -eq $ExpectedStatus) {
            Write-Host "  ✓ PASS - Status: $actualStatus (Expected Failure)" -ForegroundColor Green
            $script:testResults += [PSCustomObject]@{
                Test = $TestName
                Status = "PASS"
                Expected = $ExpectedStatus
                Actual = $actualStatus
                Response = $content
            }
        } else {
            Write-Host "  ✗ FAIL - Expected: $ExpectedStatus, Got: $actualStatus" -ForegroundColor Red
            Write-Host "  Error: $content" -ForegroundColor Red
            $script:testResults += [PSCustomObject]@{
                Test = $TestName
                Status = "FAIL"
                Expected = $ExpectedStatus
                Actual = $actualStatus
                Response = $content
            }
        }
        return $null
    }
}

# ===== AUTHENTICATION TESTS =====
Write-Host "`n===== AUTHENTICATION TESTS =====" -ForegroundColor Magenta

# Test 1: Register Customer
$result1 = Test-Endpoint `
    -TestName "Register Customer User" `
    -Method POST `
    -Uri "http://localhost:3000/auth/register" `
    -Body @{
        username = "testcustomer"
        email = "customer@test.com"
        password = "password123"
        phone = "081234567890"
        role = "CUSTOMER"
    } `
    -ExpectedStatus 201

# Test 2: Register Admin
$result2 = Test-Endpoint `
    -TestName "Register Admin User" `
    -Method POST `
    -Uri "http://localhost:3000/auth/register" `
    -Body @{
        username = "testadmin"
        email = "admin@test.com"
        password = "admin123"
        phone = "081234567891"
        role = "ADMIN"
    } `
    -ExpectedStatus 201

# Test 3: Duplicate Email (Should Fail)
$result3 = Test-Endpoint `
    -TestName "Register Duplicate Email (Should Fail)" `
    -Method POST `
    -Uri "http://localhost:3000/auth/register" `
    -Body @{
        username = "duplicate"
        email = "customer@test.com"
        password = "password123"
        phone = "081234567892"
        role = "CUSTOMER"
    } `
    -ExpectedStatus 409

# Test 4: Invalid Role (Should Fail)
$result4 = Test-Endpoint `
    -TestName "Register Invalid Role (Should Fail)" `
    -Method POST `
    -Uri "http://localhost:3000/auth/register" `
    -Body @{
        username = "invalidrole"
        email = "invalid@test.com"
        password = "password123"
        phone = "081234567893"
        role = "SUPERUSER"
    } `
    -ExpectedStatus 400

# Test 5: Login Customer
$result5 = Test-Endpoint `
    -TestName "Login Customer with Email" `
    -Method POST `
    -Uri "http://localhost:3000/auth/login" `
    -Body @{
        email = "customer@test.com"
        password = "password123"
    } `
    -ExpectedStatus 200

if ($result5) {
    $loginData = $result5 | ConvertFrom-Json
    $global:customerToken = $loginData.token
    Write-Host "  → Customer Token Saved" -ForegroundColor Gray
}

# Test 6: Login Admin
$result6 = Test-Endpoint `
    -TestName "Login Admin with Email" `
    -Method POST `
    -Uri "http://localhost:3000/auth/login" `
    -Body @{
        email = "admin@test.com"
        password = "admin123"
    } `
    -ExpectedStatus 200

if ($result6) {
    $loginData = $result6 | ConvertFrom-Json
    $global:adminToken = $loginData.token
    Write-Host "  → Admin Token Saved" -ForegroundColor Gray
}

# Test 7: Login with Wrong Password (Should Fail)
$result7 = Test-Endpoint `
    -TestName "Login with Wrong Password (Should Fail)" `
    -Method POST `
    -Uri "http://localhost:3000/auth/login" `
    -Body @{
        email = "customer@test.com"
        password = "wrongpassword"
    } `
    -ExpectedStatus 401

# ===== AUTHORIZATION TESTS =====
Write-Host "`n===== AUTHORIZATION TESTS =====" -ForegroundColor Magenta

# Test 8: Access Without Token (Should Fail)
$result8 = Test-Endpoint `
    -TestName "Access Protected Route Without Token (Should Fail)" `
    -Method GET `
    -Uri "http://localhost:3000/schedule" `
    -ExpectedStatus 401

# Test 9: Access With Invalid Token (Should Fail)
$result9 = Test-Endpoint `
    -TestName "Access with Invalid Token (Should Fail)" `
    -Method GET `
    -Uri "http://localhost:3000/schedule" `
    -Headers @{ 'Authorization' = 'Bearer invalid_token_here' } `
    -ExpectedStatus 401

# Test 10: Customer Access Schedules (Should Succeed)
$result10 = Test-Endpoint `
    -TestName "Customer Access Schedules (Should Succeed)" `
    -Method GET `
    -Uri "http://localhost:3000/schedule" `
    -Headers @{ 'Authorization' = "Bearer $global:customerToken" } `
    -ExpectedStatus 200

# Test 11: Admin Access Schedules (Should Succeed)
$result11 = Test-Endpoint `
    -TestName "Admin Access Schedules (Should Succeed)" `
    -Method GET `
    -Uri "http://localhost:3000/schedule" `
    -Headers @{ 'Authorization' = "Bearer $global:adminToken" } `
    -ExpectedStatus 200

# Test 12: Customer Access All Users (Should Fail - Admin Only)
$result12 = Test-Endpoint `
    -TestName "Customer Access All Users (Should Fail)" `
    -Method GET `
    -Uri "http://localhost:3000/user" `
    -Headers @{ 'Authorization' = "Bearer $global:customerToken" } `
    -ExpectedStatus 403

# Test 13: Admin Access All Users (Should Succeed)
$result13 = Test-Endpoint `
    -TestName "Admin Access All Users (Should Succeed)" `
    -Method GET `
    -Uri "http://localhost:3000/user" `
    -Headers @{ 'Authorization' = "Bearer $global:adminToken" } `
    -ExpectedStatus 200

# Test 14: Customer Access Trains (Should Succeed)
$result14 = Test-Endpoint `
    -TestName "Customer View Trains (Should Succeed)" `
    -Method GET `
    -Uri "http://localhost:3000/train" `
    -Headers @{ 'Authorization' = "Bearer $global:customerToken" } `
    -ExpectedStatus 200

# Test 15: Customer Create Train (Should Fail - Admin Only)
$result15 = Test-Endpoint `
    -TestName "Customer Create Train (Should Fail)" `
    -Method POST `
    -Uri "http://localhost:3000/train" `
    -Headers @{ 'Authorization' = "Bearer $global:customerToken" } `
    -Body @{
        train_name = "Test Train"
        description = "Test Description"
    } `
    -ExpectedStatus 403

# Test 16: Customer Access Carriages (Should Fail - Admin Only)
$result16 = Test-Endpoint `
    -TestName "Customer Access Carriages (Should Fail)" `
    -Method GET `
    -Uri "http://localhost:3000/carriage" `
    -Headers @{ 'Authorization' = "Bearer $global:customerToken" } `
    -ExpectedStatus 403

# Test 17: Admin Access Carriages (Should Succeed)
$result17 = Test-Endpoint `
    -TestName "Admin Access Carriages (Should Succeed)" `
    -Method GET `
    -Uri "http://localhost:3000/carriage" `
    -Headers @{ 'Authorization' = "Bearer $global:adminToken" } `
    -ExpectedStatus 200

# ===== SUMMARY =====
Write-Host "`n========================================" -ForegroundColor Cyan
Write-Host "  TEST SUMMARY" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan

$passed = ($testResults | Where-Object { $_.Status -eq "PASS" }).Count
$failed = ($testResults | Where-Object { $_.Status -eq "FAIL" }).Count
$total = $testResults.Count

Write-Host "`nTotal Tests: $total" -ForegroundColor White
Write-Host "Passed: $passed" -ForegroundColor Green
Write-Host "Failed: $failed" -ForegroundColor $(if ($failed -eq 0) { "Green" } else { "Red" })

if ($failed -gt 0) {
    Write-Host "`nFailed Tests:" -ForegroundColor Red
    $testResults | Where-Object { $_.Status -eq "FAIL" } | ForEach-Object {
        Write-Host "  - $($_.Test)" -ForegroundColor Red
        Write-Host "    Expected: $($_.Expected), Got: $($_.Actual)" -ForegroundColor Gray
    }
}

# Save results to file
$testResults | ConvertTo-Json -Depth 10 | Out-File "test-results.json"
Write-Host "`nDetailed results saved to: test-results.json" -ForegroundColor Gray

Write-Host "`n========================================`n" -ForegroundColor Cyan
