# Test 1: Register Customer
Write-Host "`n=== Test 1: Register Customer ===" -ForegroundColor Cyan
$body1 = @{
    username = 'testcustomer'
    email = 'customer@test.com'
    password = 'password123'
    phone = '081234567890'
    role = 'CUSTOMER'
} | ConvertTo-Json

try {
    $response1 = Invoke-WebRequest -Uri 'http://localhost:3000/auth/register' -Method POST -Body $body1 -ContentType 'application/json' -UseBasicParsing
    Write-Host "Status: $($response1.StatusCode)" -ForegroundColor Green
    Write-Host $response1.Content
} catch {
    Write-Host "Status: $($_.Exception.Response.StatusCode.value__)" -ForegroundColor Red
    Write-Host $_.Exception.Message
}

# Test 2: Register Admin
Write-Host "`n=== Test 2: Register Admin ===" -ForegroundColor Cyan
$body2 = @{
    username = 'testadmin'
    email = 'admin@test.com'
    password = 'admin123'
    phone = '081234567891'
    role = 'ADMIN'
} | ConvertTo-Json

try {
    $response2 = Invoke-WebRequest -Uri 'http://localhost:3000/auth/register' -Method POST -Body $body2 -ContentType 'application/json' -UseBasicParsing
    Write-Host "Status: $($response2.StatusCode)" -ForegroundColor Green
    Write-Host $response2.Content
} catch {
    Write-Host "Status: $($_.Exception.Response.StatusCode.value__)" -ForegroundColor Red
    Write-Host $_.Exception.Message
}

# Test 3: Login as Customer
Write-Host "`n=== Test 3: Login as Customer ===" -ForegroundColor Cyan
$body3 = @{
    email = 'customer@test.com'
    password = 'password123'
} | ConvertTo-Json

try {
    $response3 = Invoke-WebRequest -Uri 'http://localhost:3000/auth/login' -Method POST -Body $body3 -ContentType 'application/json' -UseBasicParsing
    Write-Host "Status: $($response3.StatusCode)" -ForegroundColor Green
    $loginData = $response3.Content | ConvertFrom-Json
    Write-Host $response3.Content
    $global:customerToken = $loginData.token
    Write-Host "`nCustomer Token saved!" -ForegroundColor Yellow
} catch {
    Write-Host "Status: $($_.Exception.Response.StatusCode.value__)" -ForegroundColor Red
    Write-Host $_.Exception.Message
}

# Test 4: Login as Admin
Write-Host "`n=== Test 4: Login as Admin ===" -ForegroundColor Cyan
$body4 = @{
    email = 'admin@test.com'
    password = 'admin123'
} | ConvertTo-Json

try {
    $response4 = Invoke-WebRequest -Uri 'http://localhost:3000/auth/login' -Method POST -Body $body4 -ContentType 'application/json' -UseBasicParsing
    Write-Host "Status: $($response4.StatusCode)" -ForegroundColor Green
    $loginData = $response4.Content | ConvertFrom-Json
    Write-Host $response4.Content
    $global:adminToken = $loginData.token
    Write-Host "`nAdmin Token saved!" -ForegroundColor Yellow
} catch {
    Write-Host "Status: $($_.Exception.Response.StatusCode.value__)" -ForegroundColor Red
    Write-Host $_.Exception.Message
}

# Test 5: Customer access schedules (should succeed)
Write-Host "`n=== Test 5: Customer Access Schedules (Should Succeed) ===" -ForegroundColor Cyan
try {
    $headers5 = @{
        'Authorization' = "Bearer $global:customerToken"
    }
    $response5 = Invoke-WebRequest -Uri 'http://localhost:3000/schedule' -Method GET -Headers $headers5 -UseBasicParsing
    Write-Host "Status: $($response5.StatusCode)" -ForegroundColor Green
    Write-Host $response5.Content
} catch {
    Write-Host "Status: $($_.Exception.Response.StatusCode.value__)" -ForegroundColor Red
    Write-Host $_.Exception.Message
}

# Test 6: Customer access all users (should fail - 403)
Write-Host "`n=== Test 6: Customer Access All Users (Should Fail) ===" -ForegroundColor Cyan
try {
    $headers6 = @{
        'Authorization' = "Bearer $global:customerToken"
    }
    $response6 = Invoke-WebRequest -Uri 'http://localhost:3000/user' -Method GET -Headers $headers6 -UseBasicParsing
    Write-Host "Status: $($response6.StatusCode)" -ForegroundColor Green
    Write-Host $response6.Content
} catch {
    Write-Host "Status: $($_.Exception.Response.StatusCode.value__)" -ForegroundColor Yellow
    $reader = New-Object System.IO.StreamReader($_.Exception.Response.GetResponseStream())
    $reader.BaseStream.Position = 0
    $reader.DiscardBufferedData()
    Write-Host $reader.ReadToEnd()
}

# Test 7: Admin access all users (should succeed)
Write-Host "`n=== Test 7: Admin Access All Users (Should Succeed) ===" -ForegroundColor Cyan
try {
    $headers7 = @{
        'Authorization' = "Bearer $global:adminToken"
    }
    $response7 = Invoke-WebRequest -Uri 'http://localhost:3000/user' -Method GET -Headers $headers7 -UseBasicParsing
    Write-Host "Status: $($response7.StatusCode)" -ForegroundColor Green
    Write-Host $response7.Content
} catch {
    Write-Host "Status: $($_.Exception.Response.StatusCode.value__)" -ForegroundColor Red
    Write-Host $_.Exception.Message
}

# Test 8: Access without token (should fail - 401)
Write-Host "`n=== Test 8: Access Without Token (Should Fail) ===" -ForegroundColor Cyan
try {
    $response8 = Invoke-WebRequest -Uri 'http://localhost:3000/schedule' -Method GET -UseBasicParsing
    Write-Host "Status: $($response8.StatusCode)" -ForegroundColor Green
    Write-Host $response8.Content
} catch {
    Write-Host "Status: $($_.Exception.Response.StatusCode.value__)" -ForegroundColor Yellow
    $reader = New-Object System.IO.StreamReader($_.Exception.Response.GetResponseStream())
    $reader.BaseStream.Position = 0
    $reader.DiscardBufferedData()
    Write-Host $reader.ReadToEnd()
}

Write-Host "`n=== Testing Complete ===" -ForegroundColor Green
Write-Host "Customer Token: $global:customerToken" -ForegroundColor Gray
Write-Host "Admin Token: $global:adminToken" -ForegroundColor Gray
