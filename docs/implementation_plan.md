# Authentication & Authorization System Implementation Plan

## Overview

This plan implements a production-ready authentication and authorization system for the Train Ticket Booking System backend. The system will provide JWT-based authentication, role-based access control (RBAC), and ownership validation for user-specific operations.

## User Review Required

> [!IMPORTANT]
> **Password Hashing Change**: The current system uses MD5 for password hashing, which is **cryptographically insecure**. This plan will replace MD5 with **bcrypt** for secure password hashing. This is a breaking change - existing passwords will need to be re-hashed or migrated.

> [!WARNING]
> **Role Enum Mismatch**: The requirements specify roles as `ADMIN` and `USER`, but the Prisma schema defines them as `ADMIN` and `CUSTOMER`. This plan will use the **schema's `CUSTOMER`** role to maintain database consistency. Please confirm this is acceptable.

> [!NOTE]
> **Login Method**: The current implementation uses `username` for login. The requirements specify using `email` for login. This plan will **add support for both** - users can login with either email or username.

---

## Proposed Changes

### Authentication & Middleware

#### [NEW] [authController.ts](file:///d:/sekolah/Kelas%2012/Dalam%20Sekoalh/RPL/Next/BE2/src/controllers/authController.ts)

New dedicated authentication controller with:
- **Register endpoint**: Creates new users with bcrypt password hashing, validates unique email, validates role enum values
- **Login endpoint**: Authenticates users via email or username, generates JWT with `id_user`, `email`, `role` payload
- Standardized JSON responses with `status`, `message`, `data` structure

#### [MODIFY] [authMiddleware.ts](file:///d:/sekolah/Kelas%2012/Dalam%20Sekoalh/RPL/Next/BE2/src/middleware/authMiddleware.ts)

Enhanced authentication middleware:
- Verify JWT from `Authorization: Bearer <token>` header
- Attach `req.user` with `id_user`, `email`, `role` to all authenticated requests
- Return 401 for missing/invalid/expired tokens
- Add TypeScript interface for `AuthRequest` extending Express `Request`

#### [NEW] [roleGuard.ts](file:///d:/sekolah/Kelas%2012/Dalam%20Sekoalh/RPL/Next/BE2/src/middleware/roleGuard.ts)

Role-based authorization middleware:
- Accept variable number of allowed roles as parameters
- Check `req.user.role` against allowed roles
- Return 403 Forbidden if role not permitted
- Reusable across all protected routes

---

### Route Protection

#### [NEW] [authRoute.ts](file:///d:/sekolah/Kelas%2012/Dalam%20Sekoalh/RPL/Next/BE2/src/routes/authRoute.ts)

Public authentication routes:
- `POST /auth/register` - User registration
- `POST /auth/login` - User login

#### [MODIFY] [userRoute.ts](file:///d:/sekolah/Kelas%2012/Dalam%20Sekoalh/RPL/Next/BE2/src/routes/userRoute.ts)

Apply role guards:
- `GET /` - Admin only (view all users)
- `GET /:id` - Admin or owner (users can view their own profile)
- `POST /` - Public (registration moved to authRoute, this becomes admin-only user creation)
- `PUT /:id` - Admin or owner
- `PUT /picture/:id` - Admin or owner
- `DELETE /:id` - Admin only
- Remove `/login` endpoint (moved to authRoute)

#### [MODIFY] [trainRoute.ts](file:///d:/sekolah/Kelas%2012/Dalam%20Sekoalh/RPL/Next/BE2/src/routes/trainRoute.ts)

Apply role guards:
- All CRUD operations - Admin only
- View operations could be public or authenticated (will make authenticated for both roles)

#### [MODIFY] [carriageRoute.ts](file:///d:/sekolah/Kelas%2012/Dalam%20Sekoalh/RPL/Next/BE2/src/routes/carriageRoute.ts)

Apply role guards:
- All CRUD operations - Admin only

#### [MODIFY] [seatRoute.ts](file:///d:/sekolah/Kelas%2012/Dalam%20Sekoalh/RPL/Next/BE2/src/routes/seatRoute.ts)

Apply role guards:
- All CRUD operations - Admin only

#### [MODIFY] [scheduleRoute.ts](file:///d:/sekolah/Kelas%2012/Dalam%20Sekoalh/RPL/Next/BE2/src/routes/scheduleRoute.ts)

Apply role guards:
- View schedules - Authenticated (both Admin and Customer)
- CRUD operations - Admin only

#### [MODIFY] [purchaseRoute.ts](file:///d:/sekolah/Kelas%2012/Dalam%20Sekoalh/RPL/Next/BE2/src/routes/purchaseRoute.ts)

Apply role guards and ownership validation:
- Create purchase - Authenticated (both roles, but customers can only create for themselves)
- View own purchases - Authenticated with ownership check
- View all purchases - Admin only
- Cancel purchase - Customer only (with ownership check and date validation)
- Admin can view/manage all purchases

---

### Controller Updates

#### [MODIFY] [userController.ts](file:///d:/sekolah/Kelas%2012/Dalam%20Sekoalh/RPL/Next/BE2/src/controllers/userController.ts)

- Replace MD5 with bcrypt for password hashing in `createUser` and `updateUser`
- Remove `authentication` function (moved to authController)
- Add role validation to ensure only valid enum values are accepted

#### [MODIFY] [purchaseController.ts](file:///d:/sekolah/Kelas%2012/Dalam%20Sekoalh/RPL/Next/BE2/src/controllers/purchaseController.ts)

- Add ownership validation: customers can only view/cancel their own purchases
- Add date validation: prevent purchases for past schedules
- Add date validation: prevent cancellations after departure date
- Ensure `id_user` is set from `req.user.id_user` for authenticated requests

---

### Type Definitions

#### [NEW] [types/express.d.ts](file:///d:/sekolah/Kelas%2012/Dalam%20Sekoalh/RPL/Next/BE2/src/types/express.d.ts)

TypeScript declaration file to extend Express Request type:
```typescript
declare namespace Express {
  export interface Request {
    user?: {
      id_user: number;
      email: string;
      role: 'ADMIN' | 'CUSTOMER';
    };
  }
}
```

---

### Dependencies

#### [MODIFY] [package.json](file:///d:/sekolah/Kelas%2012/Dalam%20Sekoalh/RPL/Next/BE2/package.json)

Add bcrypt for secure password hashing:
```json
{
  "dependencies": {
    "bcrypt": "^5.1.1"
  },
  "devDependencies": {
    "@types/bcrypt": "^5.0.2"
  }
}
```

---

## Verification Plan

### Automated Tests

Since there are no existing test files in the project, verification will be done through manual API testing using Postman/cURL.

### Manual Verification

#### 1. Install Dependencies
```bash
npm install bcrypt @types/bcrypt
```

#### 2. Test Authentication Flow

**Register New User (Customer)**
```bash
POST http://localhost:3000/auth/register
Content-Type: application/json

{
  "username": "testcustomer",
  "email": "customer@test.com",
  "password": "password123",
  "phone": "081234567890",
  "role": "CUSTOMER"
}

Expected: 201 Created with user data (no password in response)
```

**Register New Admin**
```bash
POST http://localhost:3000/auth/register
Content-Type: application/json

{
  "username": "testadmin",
  "email": "admin@test.com",
  "password": "admin123",
  "phone": "081234567891",
  "role": "ADMIN"
}

Expected: 201 Created
```

**Login with Email**
```bash
POST http://localhost:3000/auth/login
Content-Type: application/json

{
  "email": "customer@test.com",
  "password": "password123"
}

Expected: 200 OK with JWT token
```

**Login with Username**
```bash
POST http://localhost:3000/auth/login
Content-Type: application/json

{
  "username": "testcustomer",
  "password": "password123"
}

Expected: 200 OK with JWT token
```

#### 3. Test Role-Based Access Control

**Customer Accessing Admin Route (Should Fail)**
```bash
GET http://localhost:3000/train
Authorization: Bearer <customer_token>

Expected: 403 Forbidden
```

**Admin Accessing Admin Route (Should Succeed)**
```bash
GET http://localhost:3000/train
Authorization: Bearer <admin_token>

Expected: 200 OK with train list
```

**Customer Accessing Shared Route (Should Succeed)**
```bash
GET http://localhost:3000/schedule
Authorization: Bearer <customer_token>

Expected: 200 OK with schedule list
```

#### 4. Test Ownership Validation

**Customer Viewing Own Purchases (Should Succeed)**
```bash
GET http://localhost:3000/purchase/user
Authorization: Bearer <customer_token>

Expected: 200 OK with user's purchases
```

**Customer Viewing All Purchases (Should Fail)**
```bash
GET http://localhost:3000/purchase
Authorization: Bearer <customer_token>

Expected: 403 Forbidden
```

**Admin Viewing All Purchases (Should Succeed)**
```bash
GET http://localhost:3000/purchase
Authorization: Bearer <admin_token>

Expected: 200 OK with all purchases
```

#### 5. Test Security Validations

**Duplicate Email Registration (Should Fail)**
```bash
POST http://localhost:3000/auth/register
Content-Type: application/json

{
  "username": "duplicate",
  "email": "customer@test.com",
  "password": "password123",
  "phone": "081234567892",
  "role": "CUSTOMER"
}

Expected: 409 Conflict - Email already registered
```

**Invalid Token (Should Fail)**
```bash
GET http://localhost:3000/schedule
Authorization: Bearer invalid_token_here

Expected: 401 Unauthorized - Invalid or expired token
```

**Missing Token (Should Fail)**
```bash
GET http://localhost:3000/schedule

Expected: 401 Unauthorized - No token provided
```

---

## Implementation Notes

- All password hashing will use bcrypt with salt rounds of 10
- JWT tokens will expire after 24 hours (configurable)
- Role validation will be case-sensitive and match Prisma enum exactly
- All error responses follow the standardized format: `{ status: false, message: string }`
- All success responses follow: `{ status: true, message: string, data?: any }`
- The `SECRET` environment variable must be set in `.env` for JWT signing
