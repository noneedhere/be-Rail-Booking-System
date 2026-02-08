# 🚂 Rail Booking System - Complete CRUD Guide

This guide provides comprehensive documentation for all CRUD operations across all controllers in the Rail Booking System backend.

---

## 📋 Table of Contents

1. [Authentication](#1-authentication)
2. [User Management](#2-user-management)
3. [Train Management](#3-train-management)
4. [Carriage Management](#4-carriage-management)
5. [Seat Management](#5-seat-management)
6. [Schedule Management](#6-schedule-management)
7. [Purchase Management](#7-purchase-management)

---

## 🔐 Authentication & Authorization

### Base URL
```
http://localhost:3000
```

### Authentication Header
Most endpoints require JWT authentication. Include the token in the Authorization header:
```
Authorization: Bearer <your_jwt_token>
```

### User Roles
- **ADMIN**: Full access to all resources
- **CUSTOMER**: Limited access (view schedules, make purchases, manage own profile)

---

## 1. Authentication

### 1.1 Register User
**Endpoint:** `POST /auth/register`  
**Access:** Public  
**Description:** Register a new user account

**Request Body:**
```json
{
  "username": "john_doe",
  "email": "john@example.com",
  "password": "securePassword123",
  "role": "CUSTOMER",
  "nik": "1234567890123456",
  "phone": "081234567890",
  "address": "123 Main Street"
}
```

**Response (201):**
```json
{
  "status": true,
  "message": "User registered successfully",
  "data": {
    "id_user": 1,
    "username": "john_doe",
    "email": "john@example.com",
    "role": "CUSTOMER"
  }
}
```

---

### 1.2 Login
**Endpoint:** `POST /auth/login`  
**Access:** Public  
**Description:** Login and receive JWT token

**Request Body:**
```json
{
  "email": "john@example.com",
  "password": "securePassword123"
}
```

**Response (200):**
```json
{
  "status": true,
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "data": {
    "id_user": 1,
    "username": "john_doe",
    "email": "john@example.com",
    "role": "CUSTOMER"
  }
}
```

---

## 2. User Management

### 2.1 Get All Users
**Endpoint:** `GET /user`  
**Access:** ADMIN only  
**Description:** Retrieve all users with optional search

**Query Parameters:**
- `search` (optional): Search by username

**Example:**
```
GET /user?search=john
```

**Response (200):**
```json
{
  "status": true,
  "data": [
    {
      "id_user": 1,
      "username": "john_doe",
      "email": "john@example.com",
      "role": "CUSTOMER",
      "nik": "1234567890123456",
      "phone": "081234567890",
      "address": "123 Main Street",
      "profile_picture": "profile_123.jpg"
    }
  ],
  "message": "Users have been retrieved"
}
```

---

### 2.2 Get User by ID
**Endpoint:** `GET /user/:id`  
**Access:** ADMIN or own profile (CUSTOMER)  
**Description:** Get specific user details

**Example:**
```
GET /user/1
```

**Response (200):**
```json
{
  "status": true,
  "data": {
    "id_user": 1,
    "username": "john_doe",
    "email": "john@example.com",
    "role": "CUSTOMER",
    "nik": "1234567890123456",
    "phone": "081234567890",
    "address": "123 Main Street",
    "profile_picture": "profile_123.jpg"
  },
  "message": "User found"
}
```

---

### 2.3 Create User
**Endpoint:** `POST /user`  
**Access:** ADMIN only  
**Description:** Create a new user

**Request Body:**
```json
{
  "username": "jane_smith",
  "email": "jane@example.com",
  "password": "password123",
  "role": "CUSTOMER",
  "nik": "9876543210987654",
  "phone": "089876543210",
  "address": "456 Oak Avenue"
}
```

**Response (201):**
```json
{
  "status": true,
  "data": {
    "id_user": 2,
    "username": "jane_smith",
    "email": "jane@example.com",
    "role": "CUSTOMER"
  },
  "message": "User has been created"
}
```

---

### 2.4 Update User
**Endpoint:** `PUT /user/:id`  
**Access:** ADMIN or own profile (CUSTOMER)  
**Description:** Update user information

**Request Body (all fields optional):**
```json
{
  "username": "jane_updated",
  "email": "jane_new@example.com",
  "password": "newPassword123",
  "phone": "081111111111",
  "address": "789 New Street"
}
```

**Response (200):**
```json
{
  "status": true,
  "data": {
    "id_user": 2,
    "username": "jane_updated",
    "email": "jane_new@example.com"
  },
  "message": "User has been updated"
}
```

---

### 2.5 Update Profile Picture
**Endpoint:** `PUT /user/picture/:id`  
**Access:** ADMIN or own profile (CUSTOMER)  
**Description:** Upload/update user profile picture

**Request Type:** `multipart/form-data`

**Form Data:**
- `profile_picture`: Image file (jpg, jpeg, png)

**Response (200):**
```json
{
  "status": true,
  "data": {
    "id_user": 1,
    "profile_picture": "profile_1234567890.jpg"
  },
  "message": "Picture has changed"
}
```

---

### 2.6 Delete User
**Endpoint:** `DELETE /user/:id`  
**Access:** ADMIN only  
**Description:** Delete a user

**Example:**
```
DELETE /user/2
```

**Response (200):**
```json
{
  "status": true,
  "message": "User has been deleted"
}
```

---

## 3. Train Management

### 3.1 Get All Trains
**Endpoint:** `GET /train`  
**Access:** Public (authenticated)  
**Description:** Retrieve all trains with optional search

**Query Parameters:**
- `search` (optional): Search by train name

**Example:**
```
GET /train?search=express
```

**Response (200):**
```json
{
  "status": true,
  "data": [
    {
      "id_train": 1,
      "train_name": "Argo Bromo Express",
      "description": "Luxury express train",
      "train_status": "AVAILABLE"
    }
  ],
  "message": "Train has retrieved"
}
```

---

### 3.2 Get Train by ID
**Endpoint:** `GET /train/:id`  
**Access:** Public (authenticated)  
**Description:** Get specific train details

**Example:**
```
GET /train/1
```

**Response (200):**
```json
{
  "status": true,
  "data": {
    "id_train": 1,
    "train_name": "Argo Bromo Express",
    "description": "Luxury express train",
    "train_status": "AVAILABLE"
  },
  "message": "Train found"
}
```

---

### 3.3 Create Train
**Endpoint:** `POST /train`  
**Access:** ADMIN only  
**Description:** Create a new train

**Request Type:** `multipart/form-data`

**Form Data:**
- `train_name`: String (required)
- `description`: String (required)
- `train_picture`: Image file (optional)

**Response (201):**
```json
{
  "status": true,
  "data": {
    "id_train": 1,
    "train_name": "Argo Bromo Express",
    "description": "Luxury express train",
    "train_picture": "train_1234567890.jpg"
  },
  "message": "Train has been created"
}
```

---

### 3.4 Update Train
**Endpoint:** `PUT /train/:id`  
**Access:** ADMIN only  
**Description:** Update train information

**Request Body (all fields optional):**
```json
{
  "train_name": "Argo Bromo Anggrek",
  "description": "Updated luxury express train"
}
```

**Response (200):**
```json
{
  "status": true,
  "data": {
    "id_train": 1,
    "train_name": "Argo Bromo Anggrek",
    "description": "Updated luxury express train"
  },
  "message": "Train has been updated"
}
```

---

### 3.5 Update Train Picture
**Endpoint:** `PUT /train/picture/:id`  
**Access:** ADMIN only  
**Description:** Upload/update train picture

**Request Type:** `multipart/form-data`

**Form Data:**
- `train_picture`: Image file (jpg, jpeg, png)

**Response (200):**
```json
{
  "status": true,
  "data": {
    "id_train": 1,
    "train_picture": "train_9876543210.jpg"
  },
  "message": "Picture has changed"
}
```

---

### 3.6 Delete Train
**Endpoint:** `DELETE /train/:id`  
**Access:** ADMIN only  
**Description:** Delete a train (only if not in active schedule)

**Example:**
```
DELETE /train/1
```

**Response (200):**
```json
{
  "status": true,
  "message": "Train has been deleted"
}
```

**Error (409) - Train in use:**
```json
{
  "status": false,
  "message": "Train cannot be deleted because it still has active schedules"
}
```

---

## 4. Carriage Management

### 4.1 Get All Carriages
**Endpoint:** `GET /carriage`  
**Access:** Public (authenticated)  
**Description:** Retrieve all carriages with optional search

**Query Parameters:**
- `search` (optional): Search by carriage name

**Example:**
```
GET /carriage?search=executive
```

**Response (200):**
```json
{
  "status": true,
  "data": [
    {
      "id_carriage": 1,
      "carriage_name": "Executive A",
      "quota": 50,
      "carriage_category": "EXECUTIVE",
      "train": {
        "id_train": 1,
        "train_name": "Argo Bromo Express"
      }
    }
  ],
  "message": "Carriage has retrieved"
}
```

---

### 4.2 Get Carriage by ID
**Endpoint:** `GET /carriage/:id`  
**Access:** Public (authenticated)  
**Description:** Get specific carriage details

**Example:**
```
GET /carriage/1
```

**Response (200):**
```json
{
  "status": true,
  "data": {
    "id_carriage": 1,
    "carriage_name": "Executive A",
    "quota": 50,
    "carriage_category": "EXECUTIVE",
    "train": {
      "id_train": 1,
      "train_name": "Argo Bromo Express"
    }
  },
  "message": "Carriage found"
}
```

---

### 4.3 Create Carriage
**Endpoint:** `POST /carriage`  
**Access:** ADMIN only  
**Description:** Create a new carriage with automatic seat generation

**Request Body:**
```json
{
  "carriage_name": "Executive B",
  "quota": 50,
  "carriage_category": "EXECUTIVE",
  "id_train": 1
}
```

**Carriage Categories:**
- `EXECUTIVE` - 50 seats (A1-A10, B1-B10, C1-C10, D1-D10, E1-E10)
- `BUSINESS` - 60 seats (A1-A12, B1-B12, C1-C12, D1-D12, E1-E12)
- `ECONOMY` - 80 seats (A1-A16, B1-B16, C1-C16, D1-D16, E1-E16)

**Response (201):**
```json
{
  "status": true,
  "data": {
    "id_carriage": 2,
    "carriage_name": "Executive B",
    "quota": 50,
    "carriage_category": "EXECUTIVE",
    "id_train": 1,
    "seats_created": 50
  },
  "message": "Carriage and seats have been created"
}
```

---

### 4.4 Update Carriage
**Endpoint:** `PUT /carriage/:id`  
**Access:** ADMIN only  
**Description:** Update carriage information

**Request Body (all fields optional):**
```json
{
  "carriage_name": "Executive B Updated",
  "quota": 55,
  "carriage_category": "BUSINESS"
}
```

> ⚠️ **Warning:** Changing quota or category will regenerate all seats and delete existing seat assignments!

**Response (200):**
```json
{
  "status": true,
  "data": {
    "id_carriage": 2,
    "carriage_name": "Executive B Updated",
    "quota": 60,
    "carriage_category": "BUSINESS"
  },
  "message": "Carriage has been updated and seats regenerated"
}
```

---

### 4.5 Delete Carriage
**Endpoint:** `DELETE /carriage/:id`  
**Access:** ADMIN only  
**Description:** Delete a carriage and all its seats

**Example:**
```
DELETE /carriage/2
```

**Response (200):**
```json
{
  "status": true,
  "message": "Carriage has been deleted"
}
```

---

## 5. Seat Management

### 5.1 Get All Seats
**Endpoint:** `GET /seat`  
**Access:** Public (authenticated)  
**Description:** Retrieve all seats with optional search

**Query Parameters:**
- `search` (optional): Search by seat number

**Example:**
```
GET /seat?search=A1
```

**Response (200):**
```json
{
  "status": true,
  "data": [
    {
      "id_seat": 1,
      "seat_num": "A1",
      "carriage": {
        "id_carriage": 1,
        "carriage_name": "Executive A",
        "quota": 50,
        "train": {
          "id_train": 1,
          "train_name": "Argo Bromo Express"
        }
      }
    }
  ],
  "message": "Seat has retrieved"
}
```

---

### 5.2 Get Seat by ID
**Endpoint:** `GET /seat/:id`  
**Access:** Public (authenticated)  
**Description:** Get specific seat details

**Example:**
```
GET /seat/1
```

**Response (200):**
```json
{
  "status": true,
  "data": {
    "id_seat": 1,
    "seat_num": "A1",
    "carriage": {
      "id_carriage": 1,
      "carriage_name": "Executive A",
      "quota": 50,
      "train": {
        "id_train": 1,
        "train_name": "Argo Bromo Express"
      }
    }
  },
  "message": "Seat found"
}
```

---

### 5.3 Create Seat
**Endpoint:** `POST /seat`  
**Access:** ADMIN only  
**Description:** Create a new seat (manual creation)

**Request Body:**
```json
{
  "seat_num": "F1",
  "id_carriage": 1
}
```

**Response (201):**
```json
{
  "status": true,
  "data": {
    "id_seat": 51,
    "seat_num": "F1",
    "id_carriage": 1
  },
  "message": "Seat has been created"
}
```

**Error (400) - Quota exceeded:**
```json
{
  "status": false,
  "message": "Carriage quota (50) exceeded"
}
```

---

### 5.4 Update Seat
**Endpoint:** `PUT /seat/:id`  
**Access:** ADMIN only  
**Description:** Update seat information

**Request Body (all fields optional):**
```json
{
  "seat_num": "F2",
  "id_carriage": 2
}
```

**Response (200):**
```json
{
  "status": true,
  "data": {
    "id_seat": 51,
    "seat_num": "F2",
    "id_carriage": 2
  },
  "message": "Seat has been updated"
}
```

---

### 5.5 Delete Seat
**Endpoint:** `DELETE /seat/:id`  
**Access:** ADMIN only  
**Description:** Delete a seat

**Example:**
```
DELETE /seat/51
```

**Response (200):**
```json
{
  "status": true,
  "message": "Seat has been deleted"
}
```

---

## 6. Schedule Management

### 6.1 Get All Schedules
**Endpoint:** `GET /schedule`  
**Access:** Public (authenticated)  
**Description:** Retrieve all schedules with optional search

**Query Parameters:**
- `search` (optional): Search by schedule name, departure, or destination

**Example:**
```
GET /schedule?search=Jakarta
```

**Response (200):**
```json
{
  "status": true,
  "data": [
    {
      "id_schedule": 1,
      "schedule_name": "Jakarta - Surabaya Morning",
      "departure": "Jakarta",
      "destination": "Surabaya",
      "departure_date": "2026-03-01T06:00:00.000Z",
      "arrival_date": "2026-03-01T14:00:00.000Z",
      "price": 350000,
      "quota_total": 200,
      "status": "ACTIVED",
      "train": {
        "id_train": 1,
        "train_name": "Argo Bromo Express"
      }
    }
  ],
  "message": "Schedule has retrieved"
}
```

---

### 6.2 Get Schedule by ID
**Endpoint:** `GET /schedule/:id`  
**Access:** Public (authenticated)  
**Description:** Get specific schedule details

**Example:**
```
GET /schedule/1
```

**Response (200):**
```json
{
  "status": true,
  "data": {
    "id_schedule": 1,
    "schedule_name": "Jakarta - Surabaya Morning",
    "departure": "Jakarta",
    "destination": "Surabaya",
    "departure_date": "2026-03-01T06:00:00.000Z",
    "arrival_date": "2026-03-01T14:00:00.000Z",
    "price": 350000,
    "quota_total": 200,
    "status": "ACTIVED"
  },
  "message": "Schedule found"
}
```

---

### 6.3 Create Schedule
**Endpoint:** `POST /schedule`  
**Access:** ADMIN only  
**Description:** Create a new schedule with automatic seat schedule generation

**Request Body:**
```json
{
  "schedule_name": "Jakarta - Bandung Express",
  "departure": "Jakarta",
  "destination": "Bandung",
  "departure_date": "2026-03-15T08:00:00.000Z",
  "arrival_date": "2026-03-15T11:00:00.000Z",
  "price": 150000,
  "id_train": 1
}
```

**Response (201):**
```json
{
  "status": true,
  "data": {
    "id_schedule": 2,
    "schedule_name": "Jakarta - Bandung Express",
    "departure": "Jakarta",
    "destination": "Bandung",
    "departure_date": "2026-03-15T08:00:00.000Z",
    "arrival_date": "2026-03-15T11:00:00.000Z",
    "price": 150000,
    "quota_total": 200,
    "status": "ACTIVED",
    "id_train": 1
  },
  "message": "Schedule and seat schedules have been created"
}
```

> 📝 **Note:** Creating a schedule automatically:
> - Sets train status to "ACTIVE"
> - Creates seat_schedule entries for all seats in the train
> - Calculates quota_total based on train capacity

---

### 6.4 Update Schedule
**Endpoint:** `PUT /schedule/:id`  
**Access:** ADMIN only  
**Description:** Update schedule information

**Request Body (all fields optional):**
```json
{
  "schedule_name": "Jakarta - Bandung Premium",
  "price": 175000,
  "status": "CANCELLED"
}
```

**Schedule Status Options:**
- `ACTIVED` - Active schedule
- `FINISHED` - Completed journey
- `CANCELLED` - Cancelled schedule

**Response (200):**
```json
{
  "status": true,
  "data": {
    "id_schedule": 2,
    "schedule_name": "Jakarta - Bandung Premium",
    "price": 175000,
    "status": "CANCELLED"
  },
  "message": "Schedule has been updated"
}
```

---

### 6.5 Delete Schedule
**Endpoint:** `DELETE /schedule/:id`  
**Access:** ADMIN only  
**Description:** Delete a schedule and update train status

**Example:**
```
DELETE /schedule/2
```

**Response (200):**
```json
{
  "status": true,
  "message": "Schedule has been deleted"
}
```

> 📝 **Note:** Deleting a schedule automatically sets train status to "AVAILABLE" if no other active schedules exist

---

## 7. Purchase Management

### 7.1 Create Ticket Purchase
**Endpoint:** `POST /purchase`  
**Access:** CUSTOMER or ADMIN  
**Description:** Create a new ticket purchase with seat assignments

**Request Body:**
```json
{
  "id_schedule": 1,
  "buyer_name": "John Doe",
  "buyer_email": "john@example.com",
  "buyer_phone": "081234567890",
  "seat_ids": [1, 2, 3]
}
```

**Field Descriptions:**
- `id_schedule` (required): The schedule ID for the journey
- `buyer_name` (optional): Main buyer name (defaults to authenticated user's username)
- `buyer_email` (optional): Main buyer email (defaults to authenticated user's email)
- `buyer_phone` (optional): Main buyer phone (defaults to authenticated user's phone)
- `seat_ids` (required): Array of seat IDs to book (max 10 seats)

**Response (201):**
```json
{
  "status": true,
  "message": "Ticket purchase created successfully",
  "data": {
    "id_ticketpurchase": 1,
    "purchase_date": "2026-02-08T08:47:00.000Z",
    "buyer_name": "John Doe",
    "buyer_email": "john@example.com",
    "buyer_phone": "081234567890",
    "total_price": 1050000,
    "schedule": {
      "id_schedule": 1,
      "schedule_name": "Jakarta - Surabaya Morning",
      "departure": "Jakarta",
      "destination": "Surabaya",
      "departure_date": "2026-03-01T06:00:00.000Z",
      "arrival_date": "2026-03-01T14:00:00.000Z",
      "train_name": "Argo Bromo Express"
    },
    "tickets": [
      {
        "id_purchasedetail": 1,
        "passenger_name": "John Doe",
        "seat_number": "A1",
        "carriage_name": "Executive A",
        "carriage_category": "EXECUTIVE",
        "price": 350000
      },
      {
        "id_purchasedetail": 2,
        "passenger_name": "John Doe",
        "seat_number": "A2",
        "carriage_name": "Executive A",
        "carriage_category": "EXECUTIVE",
        "price": 350000
      },
      {
        "id_purchasedetail": 3,
        "passenger_name": "John Doe",
        "seat_number": "B1",
        "carriage_name": "Business A",
        "carriage_category": "BUSINESS",
        "price": 350000
      }
    ],
    "price_summary": {
      "base_price_per_seat": 150000,
      "total_seats": 3,
      "total_amount": 1050000,
      "breakdown": [
        {
          "seat_number": "A1",
          "category": "EXECUTIVE",
          "price": 300000
        },
        {
          "seat_number": "A2",
          "category": "EXECUTIVE",
          "price": 300000
        },
        {
          "seat_number": "B1",
          "category": "BUSINESS",
          "price": 450000
        }
      ]
    }
  }
}
```

**Price Calculation:**
- Base price is from the schedule
- Price multipliers by carriage category:
  - **ECONOMY**: 1.0x (base price)
  - **EXECUTIVE**: 2.0x (base price × 2)
  - **BUSINESS**: 5.0x (base price × 5)

**Validation Rules:**
- Schedule must exist and be ACTIVED
- All seats must be AVAILABLE (not already BOOKED)
- Seats must belong to the train assigned to the schedule
- Maximum 10 seats per purchase
- Total price is calculated automatically based on carriage categories

**Error (400) - Seat already booked:**
```json
{
  "status": false,
  "message": "The following seats are already booked: A1, A2"
}
```

---

### 7.2 Get My Purchases
**Endpoint:** `GET /purchase/my`  
**Access:** CUSTOMER (own purchases) or ADMIN  
**Description:** Get all purchases for the authenticated user

**Response (200):**
```json
{
  "status": true,
  "message": "Purchases retrieved successfully",
  "data": [
    {
      "id_ticketpurchase": 1,
      "purchase_date": "2026-02-08T07:35:00.000Z",
      "buyer_name": "John Doe",
      "buyer_email": "john@example.com",
      "buyer_phone": "081234567890",
      "total_price": 700000,
      "schedule": {
        "id_schedule": 1,
        "schedule_name": "Jakarta - Surabaya Morning",
        "departure": "Jakarta",
        "destination": "Surabaya",
        "departure_date": "2026-03-01T06:00:00.000Z",
        "arrival_date": "2026-03-01T14:00:00.000Z",
        "status": "ACTIVED"
      },
      "purchase_detail": [
        {
          "id_purchasedetail": 1,
          "buyer_name": "John Doe",
          "seat": {
            "seat_num": "A1"
          }
        },
        {
          "id_purchasedetail": 2,
          "buyer_name": "Jane Doe",
          "seat": {
            "seat_num": "A2"
          }
        }
      ]
    }
  ]
}
```

---

### 7.3 Get Purchase by ID
**Endpoint:** `GET /purchase/:id`  
**Access:** CUSTOMER (own purchase) or ADMIN  
**Description:** Get detailed purchase information

**Example:**
```
GET /purchase/1
```

**Response (200):**
```json
{
  "status": true,
  "message": "Purchase found",
  "data": {
    "id_ticketpurchase": 1,
    "purchase_date": "2026-02-08T07:35:00.000Z",
    "buyer_name": "John Doe",
    "buyer_email": "john@example.com",
    "buyer_phone": "081234567890",
    "total_price": 700000,
    "schedule": {
      "id_schedule": 1,
      "schedule_name": "Jakarta - Surabaya Morning",
      "departure": "Jakarta",
      "destination": "Surabaya",
      "departure_date": "2026-03-01T06:00:00.000Z",
      "arrival_date": "2026-03-01T14:00:00.000Z",
      "price": 350000,
      "status": "ACTIVED",
      "train": {
        "id_train": 1,
        "train_name": "Argo Bromo Express"
      }
    },
    "purchase_detail": [
      {
        "id_purchasedetail": 1,
        "buyer_name": "John Doe",
        "buyer_email": "john@example.com",
        "buyer_phone": "081234567890",
        "total_price": 350000,
        "seat": {
          "id_seat": 1,
          "seat_num": "A1",
          "carriage": {
            "carriage_name": "Executive A",
            "carriage_category": "EXECUTIVE"
          }
        }
      }
    ]
  }
}
```

---

### 7.4 Get All Purchases (Admin)
**Endpoint:** `GET /purchase`  
**Access:** ADMIN only  
**Description:** Get all purchases in the system

**Response (200):**
```json
{
  "status": true,
  "message": "All purchases retrieved successfully",
  "data": [
    {
      "id_ticketpurchase": 1,
      "purchase_date": "2026-02-08T07:35:00.000Z",
      "buyer_name": "John Doe",
      "total_price": 700000,
      "user": {
        "id_user": 1,
        "username": "john_doe",
        "email": "john@example.com"
      },
      "schedule": {
        "schedule_name": "Jakarta - Surabaya Morning",
        "departure": "Jakarta",
        "destination": "Surabaya"
      }
    }
  ]
}
```

---

## 🔒 Access Control Summary

| Endpoint | ADMIN | CUSTOMER | Public |
|----------|-------|----------|--------|
| **Authentication** |
| POST /auth/register | ✅ | ✅ | ✅ |
| POST /auth/login | ✅ | ✅ | ✅ |
| **User Management** |
| GET /user | ✅ | ❌ | ❌ |
| GET /user/:id | ✅ | ✅ (own) | ❌ |
| POST /user | ✅ | ❌ | ❌ |
| PUT /user/:id | ✅ | ✅ (own) | ❌ |
| PUT /user/picture/:id | ✅ | ✅ (own) | ❌ |
| DELETE /user/:id | ✅ | ❌ | ❌ |
| **Train Management** |
| GET /train | ✅ | ✅ | ❌ |
| GET /train/:id | ✅ | ✅ | ❌ |
| POST /train | ✅ | ❌ | ❌ |
| PUT /train/:id | ✅ | ❌ | ❌ |
| PUT /train/picture/:id | ✅ | ❌ | ❌ |
| DELETE /train/:id | ✅ | ❌ | ❌ |
| **Carriage Management** |
| GET /carriage | ✅ | ✅ | ❌ |
| GET /carriage/:id | ✅ | ✅ | ❌ |
| POST /carriage | ✅ | ❌ | ❌ |
| PUT /carriage/:id | ✅ | ❌ | ❌ |
| DELETE /carriage/:id | ✅ | ❌ | ❌ |
| **Seat Management** |
| GET /seat | ✅ | ✅ | ❌ |
| GET /seat/:id | ✅ | ✅ | ❌ |
| POST /seat | ✅ | ❌ | ❌ |
| PUT /seat/:id | ✅ | ❌ | ❌ |
| DELETE /seat/:id | ✅ | ❌ | ❌ |
| **Schedule Management** |
| GET /schedule | ✅ | ✅ | ❌ |
| GET /schedule/:id | ✅ | ✅ | ❌ |
| POST /schedule | ✅ | ❌ | ❌ |
| PUT /schedule/:id | ✅ | ❌ | ❌ |
| DELETE /schedule/:id | ✅ | ❌ | ❌ |
| **Purchase Management** |
| POST /purchase | ✅ | ✅ | ❌ |
| GET /purchase/my | ✅ | ✅ (own) | ❌ |
| GET /purchase/:id | ✅ | ✅ (own) | ❌ |
| GET /purchase | ✅ | ❌ | ❌ |

---

## 📝 Common Error Responses

### 400 Bad Request
```json
{
  "status": false,
  "message": "Validation error message"
}
```

### 401 Unauthorized
```json
{
  "status": false,
  "message": "No token provided" 
}
```

### 403 Forbidden
```json
{
  "status": false,
  "message": "Access denied. Admin only."
}
```

### 404 Not Found
```json
{
  "status": false,
  "message": "Resource not found"
}
```

### 409 Conflict
```json
{
  "status": false,
  "message": "Resource conflict (e.g., email already exists)"
}
```

---

## 🧪 Testing with Postman

### Setup
1. Create a new Postman collection
2. Set base URL as environment variable: `{{base_url}} = http://localhost:3000`
3. Create an environment variable for token: `{{token}}`

### Authentication Flow
1. **Register** → Save user credentials
2. **Login** → Copy token from response
3. **Set token** → Add to environment variable `{{token}}`
4. **Use token** → Add to Authorization header: `Bearer {{token}}`

### Example Postman Request
```
Method: POST
URL: {{base_url}}/purchase
Headers:
  Authorization: Bearer {{token}}
  Content-Type: application/json
Body (raw JSON):
{
  "id_schedule": 1,
  "tickets": [
    {
      "buyer_name": "Test User",
      "buyer_email": "test@example.com",
      "buyer_phone": "081234567890",
      "id_seat": 1
    }
  ]
}
```

---

## 🎯 Quick Start Guide

### 1. Register and Login
```bash
# Register
curl -X POST http://localhost:3000/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "username": "testuser",
    "email": "test@example.com",
    "password": "password123",
    "role": "CUSTOMER",
    "nik": "1234567890123456",
    "phone": "081234567890",
    "address": "Test Address"
  }'

# Login
curl -X POST http://localhost:3000/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "password123"
  }'
```

### 2. View Available Schedules
```bash
curl -X GET http://localhost:3000/schedule \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

### 3. Make a Purchase
```bash
curl -X POST http://localhost:3000/purchase \
  -H "Authorization: Bearer YOUR_TOKEN_HERE" \
  -H "Content-Type: application/json" \
  -d '{
    "id_schedule": 1,
    "tickets": [
      {
        "buyer_name": "John Doe",
        "buyer_email": "john@example.com",
        "buyer_phone": "081234567890",
        "id_seat": 1
      }
    ]
  }'
```

---

## 📚 Additional Resources

- **Prisma Schema:** `prisma/schema.prisma`
- **Controllers:** `src/controllers/`
- **Routes:** `src/routes/`
- **Middleware:** `src/middleware/`

---

**Last Updated:** February 8, 2026  
**Version:** 1.0.0  
**Author:** Rail Booking System Team
