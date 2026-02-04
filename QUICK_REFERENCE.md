# 🚀 Quick Reference - Purchase Controller Testing

## 📋 Table of Contents
1. [Postman Setup](#postman-setup)
2. [cURL Commands](#curl-commands)
3. [Test Scenarios](#test-scenarios)

---

## 🎯 Postman Setup

### Step 1: Create New Collection
1. Open Postman
2. Click "New" → "Collection"
3. Name it: "Purchase API Tests"

### Step 2: Set Up Environment Variables (Optional but Recommended)
1. Click "Environments" → "Create Environment"
2. Add variables:
   ```
   base_url = http://localhost:3000
   user_id = 1
   username = johndoe
   user_email = john@email.com
   user_phone = 08123456789
   ```

---

## 📝 Test Requests

### ✅ TEST 1: Create Ticket Purchase

**Method:** `POST`  
**URL:** `http://localhost:3000/purchase`

**Headers:**
| Key | Value |
|-----|-------|
| x-user-id | 1 |
| x-username | johndoe |
| x-user-email | john@email.com |
| x-user-phone | 08123456789 |
| Content-Type | application/json |

**Body (raw JSON):**
```json
{
  "id_schedule": 1,
  "total_price": 150000
}
```

**Expected Status:** `201 Created`

**Expected Response:**
```json
{
  "status": true,
  "message": "Ticket purchase created successfully",
  "data": {
    "id_ticketpurchase": 1,
    "buyer_name": "johndoe",
    "buyer_email": "john@email.com",
    "total_price": 150000,
    "schedule": { ... }
  }
}
```

---

### ✅ TEST 2: Get My Purchases

**Method:** `GET`  
**URL:** `http://localhost:3000/purchase/my`

**Headers:**
| Key | Value |
|-----|-------|
| x-user-id | 1 |
| x-username | johndoe |

**Expected Status:** `200 OK`

**Expected Response:**
```json
{
  "status": true,
  "message": "Ticket purchases retrieved successfully",
  "data": [ ... ]
}
```

---

### ✅ TEST 3: Get Purchase by ID

**Method:** `GET`  
**URL:** `http://localhost:3000/purchase/1`

**Headers:**
| Key | Value |
|-----|-------|
| x-user-id | 1 |
| x-username | johndoe |

**Expected Status:** `200 OK`

---

### ✅ TEST 4: Get All Purchases (Admin)

**Method:** `GET`  
**URL:** `http://localhost:3000/purchase`

**Headers:** None required

**Expected Status:** `200 OK`

---

## 💻 cURL Commands

### Create Purchase
```bash
curl -X POST http://localhost:3000/purchase \
  -H "Content-Type: application/json" \
  -H "x-user-id: 1" \
  -H "x-username: johndoe" \
  -H "x-user-email: john@email.com" \
  -H "x-user-phone: 08123456789" \
  -d '{
    "id_schedule": 1,
    "total_price": 150000
  }'
```

### Get My Purchases
```bash
curl -X GET http://localhost:3000/purchase/my \
  -H "x-user-id: 1" \
  -H "x-username: johndoe"
```

### Get Purchase by ID
```bash
curl -X GET http://localhost:3000/purchase/1 \
  -H "x-user-id: 1" \
  -H "x-username: johndoe"
```

### Get All Purchases
```bash
curl -X GET http://localhost:3000/purchase
```

---

## 🧪 Test Scenarios

### Scenario 1: Happy Path - Complete Purchase Flow
1. ✅ GET `/user` - Verify user exists
2. ✅ GET `/schedule` - Find available schedule
3. ✅ POST `/purchase` - Create purchase
4. ✅ GET `/purchase/my` - Verify purchase appears in list
5. ✅ GET `/purchase/1` - View purchase details

### Scenario 2: Custom Buyer Information
**Body:**
```json
{
  "id_schedule": 1,
  "total_price": 150000,
  "buyer_name": "Jane Doe",
  "buyer_email": "jane@email.com",
  "buyer_phone": "08198765432"
}
```
**Result:** Purchase created with custom buyer info

### Scenario 3: Error - Missing Authentication
**Remove all headers** and send POST request

**Expected:** `401 Unauthorized`
```json
{
  "status": false,
  "message": "Unauthorized. Please provide user credentials"
}
```

### Scenario 4: Error - Missing Required Fields
**Body:**
```json
{
  "id_schedule": 1
}
```
**Expected:** `400 Bad Request`
```json
{
  "status": false,
  "message": "id_schedule and total_price are required"
}
```

### Scenario 5: Error - Invalid Schedule
**Body:**
```json
{
  "id_schedule": 99999,
  "total_price": 150000
}
```
**Expected:** `404 Not Found`
```json
{
  "status": false,
  "message": "Schedule not found"
}
```

### Scenario 6: Error - Access Other User's Purchase
**Try to access purchase ID 1 with different user:**

**Headers:**
```
x-user-id: 2
x-username: otheruser
```

**Expected:** `403 Forbidden`
```json
{
  "status": false,
  "message": "Forbidden. You can only view your own purchases"
}
```

---

## 📊 Response Status Codes

| Code | Meaning | When It Happens |
|------|---------|-----------------|
| 200 | OK | Successful GET request |
| 201 | Created | Successful POST (purchase created) |
| 400 | Bad Request | Missing fields or validation error |
| 401 | Unauthorized | Missing authentication headers |
| 403 | Forbidden | Trying to access other user's data |
| 404 | Not Found | Schedule or purchase not found |

---

## 🎨 Postman Collection JSON (Import This!)

Save this as `purchase-api.postman_collection.json` and import to Postman:

```json
{
  "info": {
    "name": "Purchase API",
    "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
  },
  "item": [
    {
      "name": "Create Purchase",
      "request": {
        "method": "POST",
        "header": [
          { "key": "x-user-id", "value": "1" },
          { "key": "x-username", "value": "johndoe" },
          { "key": "x-user-email", "value": "john@email.com" },
          { "key": "x-user-phone", "value": "08123456789" },
          { "key": "Content-Type", "value": "application/json" }
        ],
        "body": {
          "mode": "raw",
          "raw": "{\n  \"id_schedule\": 1,\n  \"total_price\": 150000\n}"
        },
        "url": {
          "raw": "http://localhost:3000/purchase",
          "protocol": "http",
          "host": ["localhost"],
          "port": "3000",
          "path": ["purchase"]
        }
      }
    },
    {
      "name": "Get My Purchases",
      "request": {
        "method": "GET",
        "header": [
          { "key": "x-user-id", "value": "1" },
          { "key": "x-username", "value": "johndoe" }
        ],
        "url": {
          "raw": "http://localhost:3000/purchase/my",
          "protocol": "http",
          "host": ["localhost"],
          "port": "3000",
          "path": ["purchase", "my"]
        }
      }
    },
    {
      "name": "Get Purchase by ID",
      "request": {
        "method": "GET",
        "header": [
          { "key": "x-user-id", "value": "1" },
          { "key": "x-username", "value": "johndoe" }
        ],
        "url": {
          "raw": "http://localhost:3000/purchase/1",
          "protocol": "http",
          "host": ["localhost"],
          "port": "3000",
          "path": ["purchase", "1"]
        }
      }
    },
    {
      "name": "Get All Purchases",
      "request": {
        "method": "GET",
        "url": {
          "raw": "http://localhost:3000/purchase",
          "protocol": "http",
          "host": ["localhost"],
          "port": "3000",
          "path": ["purchase"]
        }
      }
    }
  ]
}
```

---

## 🔍 Debugging Tips

### Check Server Status
```bash
# Server should be running
npm run dev
```

### Check Database Connection
Make sure your `.env` file has correct database credentials

### View Server Logs
Watch the terminal where `npm run dev` is running for error messages

### Common Header Mistakes
- ❌ `X-User-Id` (wrong case)
- ✅ `x-user-id` (correct)
- ❌ Missing `Content-Type: application/json`

---

## 📱 Testing Checklist

- [ ] Server is running on port 3000
- [ ] Database has at least 1 user
- [ ] Database has at least 1 schedule with future departure date
- [ ] Postman is installed
- [ ] Headers are set correctly (lowercase)
- [ ] Body is set to "raw" and "JSON"
- [ ] Schedule departure_date is in the future

---

## 🎯 Next Steps

After testing the basic CRUD operations:

1. **Add UPDATE endpoint** - Allow users to update their purchases
2. **Add DELETE endpoint** - Allow users to cancel purchases
3. **Implement JWT authentication** - Replace header-based auth
4. **Add purchase_detail** - Link seats to purchases
5. **Add payment integration** - Process actual payments

---

Happy Testing! 🚀

Need help? Check the full guide in `POSTMAN_TESTING_GUIDE.md`
