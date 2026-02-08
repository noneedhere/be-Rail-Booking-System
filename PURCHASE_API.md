# Purchase Controller API Documentation

## Overview
The Purchase Controller manages ticket purchases with full Prisma schema integration, schedule validation, and user authentication.

## Endpoints

### 1. Create Ticket Purchase
**POST** `/purchase`

**Authentication Required:** Yes

**Headers:**
```
x-user-id: <user_id>
x-username: <username>
x-user-email: <email>
x-user-phone: <phone>
```

**Request Body:**
```json
{
  "id_schedule": 1,
  "buyer_name": "John Doe",      // Optional - defaults to user's username
  "buyer_email": "john@email.com", // Optional - defaults to user's email
  "buyer_phone": "08123456789"    // Optional - defaults to user's phone
}
```

**Validations:**
- ✅ Schedule must exist
- ✅ Current date < departure_date (purchase allowed)
- ❌ Current date ≥ departure_date (expired)
- ❌ Current date ≥ arrival_date (completed)

**Response (201):**
```json
{
  "status": true,
  "message": "Ticket purchase created successfully",
  "data": {
    "id_ticketpurchase": 1,
    "purchase_date": "2026-02-05T00:52:40.000Z",
    "buyer_name": "John Doe",
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
      "train": { ... }
    },
    "user": { ... }
  }
}
```

---

### 2. Get My Ticket Purchases
**GET** `/purchase/my`

**Authentication Required:** Yes

**Description:** Retrieves all ticket purchases made by the currently logged-in user.

**Response (200):**
```json
{
  "status": true,
  "message": "Ticket purchases retrieved successfully",
  "data": [
    {
      "id_ticketpurchase": 1,
      "purchase_date": "2026-02-05T00:52:40.000Z",
      "buyer_name": "John Doe",
      "total_price": 150000,
      "schedule": {
        "departure": "Jakarta",
        "destination": "Surabaya",
        "train": { ... }
      },
      "purchase_detail": [
        {
          "seat": {
            "seat_num": "A1",
            "carriage": { ... }
          }
        }
      ]
    }
  ]
}
```

---

### 3. Get Ticket Purchase by ID
**GET** `/purchase/:id`

**Authentication Required:** Yes

**Description:** Get a specific ticket purchase. Users can only view their own purchases.

**Response (200):**
```json
{
  "status": true,
  "message": "Ticket purchase retrieved successfully",
  "data": { ... }
}
```

**Response (403) - Forbidden:**
```json
{
  "status": false,
  "message": "Forbidden. You can only view your own purchases"
}
```

---

### 4. Get All Ticket Purchases (Admin)
**GET** `/purchase`

**Authentication Required:** No (but should be protected for admin only)

**Description:** Retrieves all ticket purchases in the system.

**Response (200):**
```json
{
  "status": true,
  "message": "All ticket purchases retrieved successfully",
  "data": [ ... ]
}
```

---

## Error Responses

### 400 - Bad Request
```json
{
  "status": false,
  "message": "id_schedule and total_price are required"
}
```

### 401 - Unauthorized
```json
{
  "status": false,
  "message": "Unauthorized. User not authenticated"
}
```

### 404 - Not Found
```json
{
  "status": false,
  "message": "Schedule not found"
}
```

### Schedule Validation Errors
```json
{
  "status": false,
  "message": "Ticket purchase expired. Departure date has passed"
}
```

```json
{
  "status": false,
  "message": "Schedule is already completed. Ticket purchase not allowed"
}
```

---

## Testing with Postman/Thunder Client

### Example: Create Purchase
```bash
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

### Example: Get My Purchases
```bash
GET http://localhost:3000/purchase/my
Headers:
  x-user-id: 1
  x-username: johndoe
```

---

## Notes

1. **Field Names:** All field names use snake_case exactly as defined in Prisma schema (e.g., `id_user`, `id_schedule`)
2. **Authentication:** Currently uses headers. You can update `authMiddleware.ts` to use JWT tokens
3. **Auto-fill:** If buyer info is not provided, it automatically uses the logged-in user's data
4. **Relations:** All responses include related schedule and train data
