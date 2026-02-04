# 🎫 FINAL - Simple General Pricing Guide

## ✅ Simplified Pricing System

All tickets now have the **same price** - no more adult/child distinction!

---

## 🚀 How It Works

**Simple Formula:**
```
total_price = ticket_count × price_per_ticket
```

The system uses `adult_price` from the schedule as the **general ticket price** for everyone.

---

## 📝 Request Format

### Minimal Request (1 ticket by default)
```json
{
  "id_schedule": 1
}
```

### Multiple Tickets
```json
{
  "id_schedule": 1,
  "ticket_count": 3
}
```

### With Custom Buyer Info
```json
{
  "id_schedule": 1,
  "ticket_count": 3,
  "buyer_name": "Jane Doe",
  "buyer_email": "jane@email.com",
  "buyer_phone": "08198765432"
}
```

---

## 🎯 Postman Testing

### Create Purchase - 3 Tickets

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

**Body:**
```json
{
  "id_schedule": 1,
  "ticket_count": 3
}
```

---

## ✅ Success Response

```json
{
  "status": true,
  "message": "Ticket purchase created successfully",
  "data": {
    "id_ticketpurchase": 1,
    "purchase_date": "2026-02-05T01:20:00.000Z",
    "buyer_name": "johndoe",
    "buyer_email": "john@email.com",
    "buyer_phone": "08123456789",
    "total_price": 450000,
    "id_schedule": 1,
    "id_user": 1,
    "schedule": {
      "id_schedule": 1,
      "departure": "Jakarta",
      "destination": "Surabaya",
      "adult_price": 150000,
      "train": { ... }
    },
    "ticket_details": {
      "ticket_count": 3,
      "price_per_ticket": 150000,
      "calculated_total": 450000
    }
  }
}
```

---

## 💰 Price Calculation Examples

Assuming schedule has `adult_price: 150000`:

| ticket_count | Calculation | Total Price |
|--------------|-------------|-------------|
| 1 (default) | 1 × 150000 | 150000 |
| 2 | 2 × 150000 | 300000 |
| 3 | 3 × 150000 | 450000 |
| 5 | 5 × 150000 | 750000 |
| 10 | 10 × 150000 | 1500000 |

---

## ❌ Error Cases

### Error 1: Zero Tickets
```json
{
  "id_schedule": 1,
  "ticket_count": 0
}
```
**Response (400):**
```json
{
  "status": false,
  "message": "At least one ticket is required"
}
```

---

### Error 2: Too Many Tickets
```json
{
  "id_schedule": 1,
  "ticket_count": 15
}
```
**Response (400):**
```json
{
  "status": false,
  "message": "Maximum 10 tickets per purchase"
}
```

---

### Error 3: Missing Schedule
```json
{
  "ticket_count": 3
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

## 🧪 Complete Test Sequence

### Test 1: Default (1 Ticket)
```
POST http://localhost:3000/purchase
Body: {"id_schedule": 1}
Expected: total_price = 150000
```

### Test 2: Multiple Tickets
```
POST http://localhost:3000/purchase
Body: {"id_schedule": 1, "ticket_count": 3}
Expected: total_price = 450000
```

### Test 3: Maximum Tickets
```
POST http://localhost:3000/purchase
Body: {"id_schedule": 1, "ticket_count": 10}
Expected: total_price = 1500000
```

### Test 4: With Custom Buyer
```
POST http://localhost:3000/purchase
Body: {
  "id_schedule": 1,
  "ticket_count": 2,
  "buyer_name": "Jane Doe",
  "buyer_email": "jane@email.com",
  "buyer_phone": "08198765432"
}
Expected: total_price = 300000
```

### Test 5: View Purchases
```
GET http://localhost:3000/purchase/my
Headers: x-user-id: 1, x-username: johndoe
```

---

## 📊 API Summary

### Required Fields
- `id_schedule` (required)

### Optional Fields
- `ticket_count` (default: 1, max: 10)
- `buyer_name` (default: user's username)
- `buyer_email` (default: user's email)
- `buyer_phone` (default: user's phone)

### Auto-Calculated
- `total_price` = `ticket_count × schedule.adult_price`

---

## 💻 cURL Command

```bash
curl -X POST http://localhost:3000/purchase \
  -H "Content-Type: application/json" \
  -H "x-user-id: 1" \
  -H "x-username: johndoe" \
  -H "x-user-email: john@email.com" \
  -H "x-user-phone: 08123456789" \
  -d '{
    "id_schedule": 1,
    "ticket_count": 3
  }'
```

---

## 🎯 Key Features

✅ **Simple** - Just specify ticket count  
✅ **Fair** - Same price for everyone  
✅ **Auto-calculated** - No manual price input  
✅ **Transparent** - Shows price breakdown  
✅ **Validated** - Min 1, Max 10 tickets  
✅ **Secure** - No price manipulation  

---

## 📱 Quick Copy-Paste for Postman

### Request 1: Buy 1 Ticket
```json
{
  "id_schedule": 1
}
```

### Request 2: Buy 3 Tickets
```json
{
  "id_schedule": 1,
  "ticket_count": 3
}
```

### Request 3: Buy 5 Tickets
```json
{
  "id_schedule": 1,
  "ticket_count": 5
}
```

---

## ✨ Benefits of General Pricing

1. **Simpler API** - Fewer parameters
2. **Easier to understand** - One price for all
3. **Faster checkout** - Less fields to fill
4. **Fair pricing** - No discrimination
5. **Easy calculation** - Simple multiplication

---

**Ready to test!** 🚀

Just send:
```json
{
  "id_schedule": 1,
  "ticket_count": 3
}
```

And the system will automatically calculate:
```
3 tickets × 150,000 = 450,000
```

Happy Testing! 🎉
