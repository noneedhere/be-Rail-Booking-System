@echo off
echo ========================================
echo  Testing Authentication System
echo ========================================
echo.

echo [TEST 1] Customer Login
curl -X POST http://localhost:3000/auth/login -H "Content-Type: application/json" -d "{\"email\":\"customer@test.com\",\"password\":\"password123\"}" > temp_customer.json
echo Done
echo.

echo [TEST 2] Admin Login  
curl -X POST http://localhost:3000/auth/login -H "Content-Type: application/json" -d "{\"email\":\"admin@test.com\",\"password\":\"admin123\"}" > temp_admin.json
echo Done
echo.

echo [TEST 3] Wrong Password (Should Fail)
curl -X POST http://localhost:3000/auth/login -H "Content-Type: application/json" -d "{\"email\":\"customer@test.com\",\"password\":\"wrong\"}"
echo.
echo.

echo [TEST 4] Access Without Token (Should Fail)
curl -X GET http://localhost:3000/schedule
echo.
echo.

echo ========================================
echo  Tests Complete
echo  Check temp_customer.json and temp_admin.json for tokens
echo ========================================
