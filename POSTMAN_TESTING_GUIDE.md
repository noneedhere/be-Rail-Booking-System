# 🧪 Postman Testing Guide - Purchase Controller

## Prerequisites
✅ Server running on `http://localhost:3000`  
✅ Database has at least one user and one schedule

---

## 📝 Step-by-Step CRUD Testing

### STEP 0: Prepare Test Data (Optional - Check Existing Data)

#### Get All Users (to get a valid user ID)
```
GET http://localhost:3000/user
```

**Expected Response:**
```json
{
  "status": true,
  "data": [
    {
      "id_user": 1,
      "username": "johndoe",
      "role": "CUSTOMER"
    }
  ],
  "message": "User has retrieved"
}
```
📌 **Note the `id_user`** - you'll use this for authentication headers

---

#### Get All Schedules (to get a valid schedule ID)
```
GET http://localhost:3000/schedule
```

**Expected Response:**
```json
{
  "status": true,
  "data": [
    {
      "id_schedule": 1,
      "departure": "Jakarta",
      "destination": "Surabaya",
      "departure_date": "2026-03-01T08:00:00.000Z",
      "arrival_date": "2026-03-01T16:00:00.000Z",
      "adult_price": 150000,
      "child_price": 75000
    }
  ]
}
```
📌 **Note the `id_schedule`** - you'll use this when creating a purchase

---

## 🔴 CREATE - Create Ticket Purchase

### Request Details:
```
Method: POST
URL: http://localhost:3000/purchase
```

### Headers:
```
x-user-id: 1
x-username: johndoe
x-user-email: john@email.com
x-user-phone: 08123456789
Content-Type: application/json
```

### Body (raw JSON):
```json
{
  "id_schedule": 1,
  "total_price": 150000
}
```

### ✅ Expected Success Response (201):
```json
{
  "status": true,
  "message": "Ticket purchase created successfully",
  "data": {
    "id_ticketpurchase": 1,
    "purchase_date": "2026-02-05T01:00:00.000Z",
    "buyer_name": "johndoe",
    "buyer_email": "john@email.com",
    "buyer_phone": "08123456789",
    "total_price": 150000,
    "id_schedule": 1,
    "id_user": 1,
    "schedule": {
      "id_schedule": 1,
      "departure": "Jakarta",
      "destination": "Surabaya",
      "departure_date": "2026-03-01T08:00:00.000Z",
      "arrival_date": "2026-03-01T16:00:00.000Z",
      "adult_price": 150000,
      "child_price": 75000,
      "quota_total": 100,
      "status": "ACTIVED",
      "id_train": 1,
      "train": {
        "id_train": 1,
        "train_name": "Argo Bromo Anggrek",
        "description": "Executive train",
        "train_picture": ""
      }
    },
    "user": {
      "id_user": 1,
      "username": "johndoe",
      "email": "john@email.com",
      "phone": "08123456789"
    }
  }
}
```

### 📌 Postman Setup Steps:
1. Create new request in Postman
2. Set method to **POST**
3. Enter URL: `http://localhost:3000/purchase`
4. Go to **Headers** tab:
   - Add `x-user-id` = `1`
   - Add `x-username` = `johndoe`
   - Add `x-user-email` = `john@email.com`
   - Add `x-user-phone` = `08123456789`
   - Add `Content-Type` = `application/json`
5. Go to **Body** tab:
   - Select **raw**
   - Select **JSON** from dropdown
   - Paste the JSON body above
6. Click **Send**

---

### Test Case 2: Create Purchase with Custom Buyer Info

### Body (raw JSON):
```json
{
  "id_schedule": 1,
  "total_price": 150000,
  "buyer_name": "Jane Doe",
  "buyer_email": "jane@email.com",
  "buyer_phone": "08198765432"
}
```

**Result:** The purchase will be created with the custom buyer info instead of the logged-in user's info.

---

### ❌ Error Test Cases:

#### Test Case 3: Missing Authentication
Remove all `x-user-*` headers and send the request.

**Expected Response (401):**
```json
{
  "status": false,
  "message": "Unauthorized. Please provide user credentials"
}
```

---

#### Test Case 4: Missing Required Fields
```json
{
  "id_schedule": 1
}
```

**Expected Response (400):**
```json
{
  "status": false,
  "message": "id_schedule and total_price are required"
}
```

---

#### Test Case 5: Invalid Schedule ID
```json
{
  "id_schedule": 99999,
  "total_price": 150000
}
```

**Expected Response (404):**
```json
{
  "status": false,
  "message": "Schedule not found"
}
```

---

#### Test Case 6: Expired Schedule (Past Departure Date)
If you have a schedule with `departure_date` in the past:

```json
{
  "id_schedule": 2,
  "total_price": 150000
}
```

**Expected Response (400):**
```json
{
  "status": false,
  "message": "Ticket purchase expired. Departure date has passed"
}
```

---

## 🟢 READ - Get My Ticket Purchases

### Request Details:
```
Method: GET
URL: http://localhost:3000/purchase/my
```

### Headers:
```
x-user-id: 1
x-username: johndoe
```

### ✅ Expected Success Response (200):
```json
{
  "status": true,
  "message": "Ticket purchases retrieved successfully",
  "data": [
    {
      "id_ticketpurchase": 1,
      "purchase_date": "2026-02-05T01:00:00.000Z",
      "buyer_name": "johndoe",
      "buyer_email": "john@email.com",
      "buyer_phone": "08123456789",
      "total_price": 150000,
      "id_schedule": 1,
      "id_user": 1,
      "schedule": {
        "id_schedule": 1,
        "departure": "Jakarta",
        "destination": "Surabaya",
        "departure_date": "2026-03-01T08:00:00.000Z",
        "arrival_date": "2026-03-01T16:00:00.000Z",
        "train": {
          "id_train": 1,
          "train_name": "Argo Bromo Anggrek"
        }
      },
      "purchase_detail": []
    }
  ]
}
```

### 📌 Postman Setup Steps:
1. Create new request
2. Set method to **GET**
3. Enter URL: `http://localhost:3000/purchase/my`
4. Go to **Headers** tab:
   - Add `x-user-id` = `1`
   - Add `x-username` = `johndoe`
5. Click **Send**

---

## 🟢 READ - Get Ticket Purchase by ID

### Request Details:
```
Method: GET
URL: http://localhost:3000/purchase/1
```

### Headers:
```
x-user-id: 1
x-username: johndoe
```

### ✅ Expected Success Response (200):
```json
{
  "status": true,
  "message": "Ticket purchase retrieved successfully",
  "data": {
    "id_ticketpurchase": 1,
    "purchase_date": "2026-02-05T01:00:00.000Z",
    "buyer_name": "johndoe",
    "buyer_email": "john@email.com",
    "buyer_phone": "08123456789",
    "total_price": 150000,
    "id_schedule": 1,
    "id_user": 1,
    "schedule": {
      "id_schedule": 1,
      "departure": "Jakarta",
      "destination": "Surabaya",
      "train": { ... }
    },
    "user": {
      "id_user": 1,
      "username": "johndoe",
      "email": "john@email.com",
      "phone": "08123456789"
    },
    "purchase_detail": []
  }
}
```

### 📌 Postman Setup Steps:
1. Create new request
2. Set method to **GET**
3. Enter URL: `http://localhost:3000/purchase/1` (replace `1` with actual purchase ID)
4. Go to **Headers** tab:
   - Add `x-user-id` = `1`
   - Add `x-username` = `johndoe`
5. Click **Send**

---

### ❌ Error Test Case: Access Other User's Purchase

Try to access a purchase that belongs to another user:

**Headers:**
```
x-user-id: 2
x-username: otheruser
```

**Expected Response (403):**
```json
{
  "status": false,
  "message": "Forbidden. You can only view your own purchases"
}
```

---

## 🟢 READ - Get All Purchases (Admin)

### Request Details:
```
Method: GET
URL: http://localhost:3000/purchase
```

### Headers:
```
(No authentication required - but should be protected for admin only)
```

### ✅ Expected Success Response (200):
```json
{
  "status": true,
  "message": "All ticket purchases retrieved successfully",
  "data": [
    {
      "id_ticketpurchase": 1,
      "purchase_date": "2026-02-05T01:00:00.000Z",
      "buyer_name": "johndoe",
      "total_price": 150000,
      "id_user": 1,
      "schedule": { ... },
      "user": { ... },
      "purchase_detail": []
    },
    {
      "id_ticketpurchase": 2,
      "purchase_date": "2026-02-05T01:05:00.000Z",
      "buyer_name": "janedoe",
      "total_price": 200000,
      "id_user": 2,
      "schedule": { ... },
      "user": { ... },
      "purchase_detail": []
    }
  ]
}
```

### 📌 Postman Setup Steps:
1. Create new request
2. Set method to **GET**
3. Enter URL: `http://localhost:3000/purchase`
4. Click **Send** (no headers needed)

---

## 🔵 UPDATE - Not Implemented

The current controller doesn't have an UPDATE endpoint. If you need to update a purchase, you would need to add:

```typescript
export const updateTicketPurchase = async (req: AuthRequest, res: Response) => {
  // Implementation here
}
```

---

## 🔴 DELETE - Not Implemented

The current controller doesn't have a DELETE endpoint. If you need to delete a purchase, you would need to add:

```typescript
export const deleteTicketPurchase = async (req: AuthRequest, res: Response) => {
  // Implementation here
}
```

---

## 📊 Complete Test Flow

### Recommended Testing Order:

1. ✅ **GET** `/user` - Get a valid user ID
2. ✅ **GET** `/schedule` - Get a valid schedule ID
3. ✅ **POST** `/purchase` - Create first purchase
4. ✅ **POST** `/purchase` - Create second purchase (different buyer info)
5. ✅ **GET** `/purchase/my` - View your purchases
6. ✅ **GET** `/purchase/1` - View specific purchase
7. ✅ **GET** `/purchase` - View all purchases (admin)
8. ❌ **POST** `/purchase` - Test without auth (should fail)
9. ❌ **POST** `/purchase` - Test with invalid schedule (should fail)
10. ❌ **GET** `/purchase/1` - Test accessing other user's purchase (should fail)

---

## 🎯 Quick Copy-Paste Collection

### Test 1: Create Purchase
```
POST http://localhost:3000/purchase
Headers:
  x-user-id: 1
  x-username: johndoe
  x-user-email: john@email.com
  x-user-phone: 08123456789
  Content-Type: application/json
Body:
{
  "id_schedule": 1,
  "total_price": 150000
}
```

### Test 2: Get My Purchases
```
GET http://localhost:3000/purchase/my
Headers:
  x-user-id: 1
  x-username: johndoe
```

### Test 3: Get Purchase by ID
```
GET http://localhost:3000/purchase/1
Headers:
  x-user-id: 1
  x-username: johndoe
```

### Test 4: Get All Purchases
```
GET http://localhost:3000/purchase
```

---

## 💡 Tips for Postman

1. **Save Requests:** Save each request in a collection called "Purchase API"
2. **Environment Variables:** Create environment variables for:
   - `base_url` = `http://localhost:3000`
   - `user_id` = `1`
   - `username` = `johndoe`
3. **Use Variables:** Replace hardcoded values with `{{base_url}}`, `{{user_id}}`, etc.
4. **Tests Tab:** Add automatic tests to verify responses
5. **Pre-request Scripts:** Automatically set headers

---

## 🐛 Common Issues

### Issue 1: 401 Unauthorized
**Solution:** Make sure you've added all required headers (`x-user-id`, `x-username`)

### Issue 2: Schedule not found
**Solution:** Check if the schedule exists in your database with `GET /schedule`

### Issue 3: Expired schedule error
**Solution:** Make sure the schedule's `departure_date` is in the future

### Issue 4: Server not responding
**Solution:** Check if server is running with `npm run dev`

---

## 📝 Notes

- The current implementation uses **headers** for authentication (simple approach)
- In production, you should use **JWT tokens** instead
- The `id_user` from headers is used to identify the logged-in user
- Buyer info can be overridden via request body
- All dates are in ISO 8601 format (UTC)

---

Happy Testing! 🚀
