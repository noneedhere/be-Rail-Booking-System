# 🎯 UPDATED - Postman Testing Guide (Auto Price Calculation)

## ⚡ What Changed?

The Purchase Controller now **automatically calculates** the `total_price` based on:
- Schedule's `adult_price` and `child_price`
- Number of adult tickets (`adult_count`)
- Number of child tickets (`child_count`)

**Formula:** `total_price = (adult_count × adult_price) + (child_count × child_price)`

---

## 🚀 Quick Start - Updated Request

### ✅ NEW: Create Purchase (Auto Price Calculation)

**Method:** `POST`  
**URL:** `http://localhost:3000/purchase`

**Headers:**
```
x-user-id: 1
x-username: johndoe
x-user-email: john@email.com
x-user-phone: 08123456789
Content-Type: application/json
```

**NEW Body (raw JSON):**
```json
{
  "id_schedule": 1,
  "adult_count": 2,
  "child_count": 1
}
```

**What happens:**
1. System finds schedule with `id_schedule: 1`
2. Gets `adult_price` (e.g., 150000) and `child_price` (e.g., 75000)
3. Calculates: `(2 × 150000) + (1 × 75000) = 375000`
4. Creates purchase with `total_price: 375000`

---

## 📝 Updated Test Cases

### Test 1: Purchase 2 Adult Tickets
```json
{
  "id_schedule": 1,
  "adult_count": 2
}
```
**Result:** `total_price = 2 × adult_price`  
(child_count defaults to 0)

---

### Test 2: Purchase 1 Adult + 2 Child Tickets
```json
{
  "id_schedule": 1,
  "adult_count": 1,
  "child_count": 2
}
```
**Result:** `total_price = (1 × adult_price) + (2 × child_price)`

---

### Test 3: Purchase Only Child Tickets
```json
{
  "id_schedule": 1,
  "adult_count": 0,
  "child_count": 3
}
```
**Result:** `total_price = 3 × child_price`

---

### Test 4: Default - 1 Adult Ticket
```json
{
  "id_schedule": 1
}
```
**Result:** `total_price = 1 × adult_price`  
(adult_count defaults to 1, child_count defaults to 0)

---

### Test 5: With Custom Buyer Info
```json
{
  "id_schedule": 1,
  "adult_count": 2,
  "child_count": 1,
  "buyer_name": "Jane Doe",
  "buyer_email": "jane@email.com",
  "buyer_phone": "08198765432"
}
```

---

## ✅ Updated Success Response

```json
{
  "status": true,
  "message": "Ticket purchase created successfully",
  "data": {
    "id_ticketpurchase": 1,
    "purchase_date": "2026-02-05T01:16:00.000Z",
    "buyer_name": "johndoe",
    "buyer_email": "john@email.com",
    "buyer_phone": "08123456789",
    "total_price": 375000,
    "id_schedule": 1,
    "id_user": 1,
    "schedule": {
      "id_schedule": 1,
      "departure": "Jakarta",
      "destination": "Surabaya",
      "adult_price": 150000,
      "child_price": 75000,
      "train": { ... }
    },
    "ticket_details": {
      "adult_count": 2,
      "child_count": 1,
      "adult_price": 150000,
      "child_price": 75000,
      "calculated_total": 375000
    }
  }
}
```

---

## ❌ Updated Error Cases

### Error 1: No Tickets Specified
```json
{
  "id_schedule": 1,
  "adult_count": 0,
  "child_count": 0
}
```
**Response (400):**
```json
{
  "status": false,
  "message": "At least one ticket (adult or child) is required"
}
```

---

### Error 2: Negative Ticket Count
```json
{
  "id_schedule": 1,
  "adult_count": -1
}
```
**Response (400):**
```json
{
  "status": false,
  "message": "Ticket counts cannot be negative"
}
```

---

### Error 3: Missing Schedule ID
```json
{
  "adult_count": 2
}
```
**Response (400):**
```json
{
  "status": false,
  "message": "id_schedule is required"
}
```

---

## 📊 Complete Test Sequence

### Step 1: Check Available Schedules
```
GET http://localhost:3000/schedule
```

**Example Response:**
```json
{
  "data": [
    {
      "id_schedule": 1,
      "departure": "Jakarta",
      "destination": "Surabaya",
      "adult_price": 150000,
      "child_price": 75000,
      "departure_date": "2026-03-01T08:00:00.000Z"
    }
  ]
}
```

---

### Step 2: Create Purchase with Auto Price
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
  "adult_count": 2,
  "child_count": 1
}
```

**Expected Calculation:**
- Adult: 2 × 150000 = 300000
- Child: 1 × 75000 = 75000
- **Total: 375000**

---

### Step 3: Verify Purchase
```
GET http://localhost:3000/purchase/my
Headers:
  x-user-id: 1
  x-username: johndoe
```

---

## 💡 Key Changes Summary

| Before | After |
|--------|-------|
| ❌ Manual `total_price` input | ✅ Auto-calculated from schedule |
| ❌ No ticket count tracking | ✅ `adult_count` and `child_count` |
| ❌ Price mismatch possible | ✅ Always accurate pricing |
| Required: `id_schedule`, `total_price` | Required: `id_schedule` only |

---

## 🎯 Postman Collection - Updated

### Request 1: Create Purchase (2 Adults, 1 Child)
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
  "adult_count": 2,
  "child_count": 1
}
```

---

### Request 2: Create Purchase (Default 1 Adult)
```
POST http://localhost:3000/purchase
Headers: (same as above)
Body:
{
  "id_schedule": 1
}
```

---

### Request 3: Create Purchase (Only Children)
```
POST http://localhost:3000/purchase
Headers: (same as above)
Body:
{
  "id_schedule": 1,
  "adult_count": 0,
  "child_count": 3
}
```

---

## 🔍 Price Calculation Examples

Assuming schedule has:
- `adult_price: 150000`
- `child_price: 75000`

| adult_count | child_count | Calculation | Total |
|-------------|-------------|-------------|-------|
| 1 | 0 | (1 × 150000) + (0 × 75000) | 150000 |
| 2 | 0 | (2 × 150000) + (0 × 75000) | 300000 |
| 1 | 1 | (1 × 150000) + (1 × 75000) | 225000 |
| 2 | 2 | (2 × 150000) + (2 × 75000) | 450000 |
| 0 | 3 | (0 × 150000) + (3 × 75000) | 225000 |
| 3 | 1 | (3 × 150000) + (1 × 75000) | 525000 |

---

## 📱 cURL Commands - Updated

### Create Purchase with Auto Price
```bash
curl -X POST http://localhost:3000/purchase \
  -H "Content-Type: application/json" \
  -H "x-user-id: 1" \
  -H "x-username: johndoe" \
  -H "x-user-email: john@email.com" \
  -H "x-user-phone: 08123456789" \
  -d '{
    "id_schedule": 1,
    "adult_count": 2,
    "child_count": 1
  }'
```

---

## ✅ Benefits of Auto Price Calculation

1. **No Price Manipulation** - Users can't set arbitrary prices
2. **Always Accurate** - Price matches schedule pricing
3. **Simpler API** - No need to calculate price on frontend
4. **Transparent** - Response shows breakdown of calculation
5. **Flexible** - Supports adult and child tickets separately

---

## 🎓 Testing Checklist

- [ ] Test with 1 adult ticket (default)
- [ ] Test with multiple adult tickets
- [ ] Test with only child tickets
- [ ] Test with mixed adult + child tickets
- [ ] Test with 0 tickets (should fail)
- [ ] Test with negative counts (should fail)
- [ ] Test with missing schedule ID (should fail)
- [ ] Verify total_price matches calculation
- [ ] Verify ticket_details in response

---

## 🚀 Ready to Test!

Your Purchase Controller now automatically calculates prices based on the schedule. No more manual price input needed!

**Start testing with:**
```json
{
  "id_schedule": 1,
  "adult_count": 2,
  "child_count": 1
}
```

Happy Testing! 🎉
