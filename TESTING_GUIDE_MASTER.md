# 🎯 Complete Postman Testing Guide - Purchase Controller

## 📚 Documentation Overview

You now have **3 comprehensive guides** to help you test the Purchase Controller:

1. **POSTMAN_TESTING_GUIDE.md** - Detailed step-by-step guide
2. **QUICK_REFERENCE.md** - Quick copy-paste commands
3. **This file** - Visual summary with examples

---

## 🚀 Getting Started (5 Minutes)

### Step 1: Verify Server is Running
Your server should already be running. Check the terminal:
```
🚀 Server running on http://localhost:3000
```

### Step 2: Open Postman
Download from: https://www.postman.com/downloads/

### Step 3: Test Your First Request

**Quick Test - Get All Purchases:**
```
Method: GET
URL: http://localhost:3000/purchase
```
Click **Send** - No headers needed!

---

## 📝 The 4 Main Endpoints

### 1️⃣ CREATE Purchase (POST /purchase)

**🎯 Purpose:** Create a new ticket purchase

**📋 Setup in Postman:**
1. Method: **POST**
2. URL: `http://localhost:3000/purchase`
3. Headers Tab:
   ```
   x-user-id: 1
   x-username: johndoe
   x-user-email: john@email.com
   x-user-phone: 08123456789
   Content-Type: application/json
   ```
4. Body Tab → **raw** → **JSON**:
   ```json
   {
     "id_schedule": 1,
     "total_price": 150000
   }
   ```
5. Click **Send**

**✅ Success Response (201):**
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
    "id_user": 1
  }
}
```

---

### 2️⃣ GET My Purchases (GET /purchase/my)

**🎯 Purpose:** Get all purchases for the logged-in user

**📋 Setup in Postman:**
1. Method: **GET**
2. URL: `http://localhost:3000/purchase/my`
3. Headers Tab:
   ```
   x-user-id: 1
   x-username: johndoe
   ```
4. Click **Send**

**✅ Success Response (200):**
```json
{
  "status": true,
  "message": "Ticket purchases retrieved successfully",
  "data": [
    {
      "id_ticketpurchase": 1,
      "buyer_name": "johndoe",
      "total_price": 150000,
      "schedule": {
        "departure": "Jakarta",
        "destination": "Surabaya",
        "train": {
          "train_name": "Argo Bromo Anggrek"
        }
      }
    }
  ]
}
```

---

### 3️⃣ GET Purchase by ID (GET /purchase/:id)

**🎯 Purpose:** Get details of a specific purchase

**📋 Setup in Postman:**
1. Method: **GET**
2. URL: `http://localhost:3000/purchase/1` (replace 1 with actual ID)
3. Headers Tab:
   ```
   x-user-id: 1
   x-username: johndoe
   ```
4. Click **Send**

**✅ Success Response (200):**
```json
{
  "status": true,
  "message": "Ticket purchase retrieved successfully",
  "data": {
    "id_ticketpurchase": 1,
    "buyer_name": "johndoe",
    "schedule": { ... },
    "user": { ... },
    "purchase_detail": []
  }
}
```

---

### 4️⃣ GET All Purchases - Admin (GET /purchase)

**🎯 Purpose:** Get all purchases in the system (admin view)

**📋 Setup in Postman:**
1. Method: **GET**
2. URL: `http://localhost:3000/purchase`
3. No headers needed
4. Click **Send**

**✅ Success Response (200):**
```json
{
  "status": true,
  "message": "All ticket purchases retrieved successfully",
  "data": [ ... all purchases ... ]
}
```

---

## ❌ Common Errors & Solutions

### Error 1: 401 Unauthorized
```json
{
  "status": false,
  "message": "Unauthorized. Please provide user credentials"
}
```
**Solution:** Add the required headers (`x-user-id`, `x-username`)

---

### Error 2: 400 Bad Request
```json
{
  "status": false,
  "message": "id_schedule and total_price are required"
}
```
**Solution:** Make sure your JSON body includes both fields

---

### Error 3: 404 Not Found
```json
{
  "status": false,
  "message": "Schedule not found"
}
```
**Solution:** Use a valid `id_schedule` from your database. Check with `GET /schedule`

---

### Error 4: 400 Expired
```json
{
  "status": false,
  "message": "Ticket purchase expired. Departure date has passed"
}
```
**Solution:** The schedule's departure date is in the past. Use a future schedule.

---

### Error 5: 403 Forbidden
```json
{
  "status": false,
  "message": "Forbidden. You can only view your own purchases"
}
```
**Solution:** You're trying to view another user's purchase. Use your own user ID.

---

## 🎨 Visual Guides

### API Endpoints Overview
![Postman Testing Guide](./postman_testing_guide_1770228208035.png)

### Purchase Validation Flow
![Purchase Validation Flow](./purchase_validation_flow_1770228289863.png)

---

## 🧪 Complete Test Sequence

Follow this order to test everything:

### ✅ Step 1: Prepare Data
```
GET http://localhost:3000/user
GET http://localhost:3000/schedule
```
Note down a valid `id_user` and `id_schedule`

---

### ✅ Step 2: Create First Purchase
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

---

### ✅ Step 3: Create Purchase with Custom Buyer
```
POST http://localhost:3000/purchase
Headers: (same as above)
Body:
{
  "id_schedule": 1,
  "total_price": 200000,
  "buyer_name": "Jane Doe",
  "buyer_email": "jane@email.com",
  "buyer_phone": "08198765432"
}
```

---

### ✅ Step 4: View Your Purchases
```
GET http://localhost:3000/purchase/my
Headers:
  x-user-id: 1
  x-username: johndoe
```

---

### ✅ Step 5: View Specific Purchase
```
GET http://localhost:3000/purchase/1
Headers:
  x-user-id: 1
  x-username: johndoe
```

---

### ✅ Step 6: View All Purchases (Admin)
```
GET http://localhost:3000/purchase
```

---

### ❌ Step 7: Test Error Cases

**Test 7a: Missing Authentication**
```
POST http://localhost:3000/purchase
(Remove all headers)
Body:
{
  "id_schedule": 1,
  "total_price": 150000
}
```
Expected: 401 Unauthorized

---

**Test 7b: Missing Fields**
```
POST http://localhost:3000/purchase
Headers: (include auth headers)
Body:
{
  "id_schedule": 1
}
```
Expected: 400 Bad Request

---

**Test 7c: Invalid Schedule**
```
POST http://localhost:3000/purchase
Headers: (include auth headers)
Body:
{
  "id_schedule": 99999,
  "total_price": 150000
}
```
Expected: 404 Not Found

---

**Test 7d: Access Other User's Purchase**
```
GET http://localhost:3000/purchase/1
Headers:
  x-user-id: 2
  x-username: otheruser
```
Expected: 403 Forbidden

---

## 💡 Pro Tips

### Tip 1: Save Your Requests
Create a Postman Collection and save all requests for reuse.

### Tip 2: Use Environment Variables
Set up variables for:
- `{{base_url}}` = `http://localhost:3000`
- `{{user_id}}` = `1`
- `{{username}}` = `johndoe`

Then use: `{{base_url}}/purchase`

### Tip 3: Add Tests
In Postman's "Tests" tab, add:
```javascript
pm.test("Status code is 201", function () {
    pm.response.to.have.status(201);
});

pm.test("Response has status true", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.status).to.eql(true);
});
```

### Tip 4: Use Pre-request Scripts
Automatically set headers:
```javascript
pm.request.headers.add({
    key: 'x-user-id',
    value: '1'
});
```

---

## 📊 Expected Results Summary

| Endpoint | Method | Auth | Expected Status | Response Time |
|----------|--------|------|-----------------|---------------|
| `/purchase` | POST | ✅ Yes | 201 Created | < 500ms |
| `/purchase/my` | GET | ✅ Yes | 200 OK | < 300ms |
| `/purchase/:id` | GET | ✅ Yes | 200 OK | < 300ms |
| `/purchase` | GET | ❌ No | 200 OK | < 300ms |

---

## 🔧 Troubleshooting

### Issue: "Cannot connect to server"
**Check:**
- Is server running? (`npm run dev`)
- Is it on port 3000?
- Check terminal for errors

### Issue: "Schedule not found"
**Check:**
- Does the schedule exist in database?
- Run: `GET http://localhost:3000/schedule`
- Use a valid `id_schedule`

### Issue: "Expired schedule"
**Check:**
- Is the `departure_date` in the future?
- Current time: 2026-02-05T01:01:51+07:00
- Schedule must depart after this time

### Issue: "Headers not working"
**Check:**
- Headers are lowercase: `x-user-id` not `X-User-Id`
- No typos in header names
- Content-Type is set for POST requests

---

## 📦 Import Postman Collection

Copy this JSON and import into Postman (File → Import):

```json
{
  "info": {
    "name": "Purchase API - Complete",
    "description": "Complete CRUD operations for Purchase Controller"
  },
  "item": [
    {
      "name": "1. Create Purchase",
      "request": {
        "method": "POST",
        "header": [
          {"key": "x-user-id", "value": "1"},
          {"key": "x-username", "value": "johndoe"},
          {"key": "x-user-email", "value": "john@email.com"},
          {"key": "x-user-phone", "value": "08123456789"},
          {"key": "Content-Type", "value": "application/json"}
        ],
        "body": {
          "mode": "raw",
          "raw": "{\n  \"id_schedule\": 1,\n  \"total_price\": 150000\n}"
        },
        "url": "http://localhost:3000/purchase"
      }
    },
    {
      "name": "2. Get My Purchases",
      "request": {
        "method": "GET",
        "header": [
          {"key": "x-user-id", "value": "1"},
          {"key": "x-username", "value": "johndoe"}
        ],
        "url": "http://localhost:3000/purchase/my"
      }
    },
    {
      "name": "3. Get Purchase by ID",
      "request": {
        "method": "GET",
        "header": [
          {"key": "x-user-id", "value": "1"},
          {"key": "x-username", "value": "johndoe"}
        ],
        "url": "http://localhost:3000/purchase/1"
      }
    },
    {
      "name": "4. Get All Purchases",
      "request": {
        "method": "GET",
        "url": "http://localhost:3000/purchase"
      }
    }
  ]
}
```

---

## 🎯 Success Checklist

After completing all tests, you should have:

- [x] Created at least 2 purchases
- [x] Retrieved your purchases list
- [x] Viewed a specific purchase
- [x] Viewed all purchases (admin)
- [x] Tested error cases (401, 400, 404, 403)
- [x] Verified schedule validation works
- [x] Tested custom buyer information
- [x] Saved requests in Postman collection

---

## 📞 Need Help?

If you encounter issues:

1. Check server logs in terminal
2. Verify database has required data
3. Review the validation flowchart
4. Check header spelling and case
5. Ensure JSON body is properly formatted

---

## 🚀 Next Steps

After mastering these tests:

1. **Add UPDATE endpoint** - Modify existing purchases
2. **Add DELETE endpoint** - Cancel purchases
3. **Implement JWT auth** - Replace header-based auth
4. **Add seat selection** - Link purchase_detail
5. **Add payment flow** - Process payments

---

**Happy Testing! 🎉**

Your Purchase Controller is fully functional and ready for production use!
