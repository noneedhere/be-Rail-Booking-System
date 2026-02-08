# Authentication & Authorization Documentation

This folder contains all the documentation for the authentication and authorization system implemented in the Train Ticket Booking System.

## 📚 Documentation Files

### 1. [README.md](./README.md)
**What it contains:**
- Quick navigation guide
- Quick start examples
- File descriptions

**When to read:** Start here for navigation

---

### 2. [walkthrough.md](./walkthrough.md) ⭐ **START HERE**
**What it contains:**
- Complete system overview
- Architecture diagrams (authentication & authorization flows)
- **All API endpoints with examples**
- **cURL testing commands**
- Role-based access control matrix
- Security features documentation
- Testing checklist

**When to read:** For API usage, testing, and understanding how the system works

---

### 3. [test_results.md](./test_results.md) ✅ **VERIFICATION**
**What it contains:**
- Comprehensive test results (21 tests - ALL PASSED)
- Detailed test cases for authentication, authorization, and RBAC
- Security features verification
- Route protection matrix
- Production readiness confirmation

**When to read:** To verify all features are working correctly

---

### 4. [implementation_plan.md](./implementation_plan.md)
**What it contains:**
- Technical implementation plan
- Breaking changes and important decisions
- Detailed file-by-file changes
- Verification procedures
- Manual testing steps

**When to read:** Before making changes or understanding the technical architecture

---

### 5. [task_checklist.md](./task_checklist.md)
**What it contains:**
- Complete task breakdown
- Implementation progress tracking
- All completed features checklist

**When to read:** To see what was implemented and track progress

---

## 🚀 Quick Start Guide

### 1. Register a New User
```bash
curl -X POST http://localhost:3000/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "username": "testuser",
    "email": "test@example.com",
    "password": "password123",
    "phone": "081234567890",
    "role": "CUSTOMER"
  }'
```

### 2. Login
```bash
curl -X POST http://localhost:3000/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "password123"
  }'
```

**Save the token from the response!**

### 3. Access Protected Routes
```bash
curl -X GET http://localhost:3000/schedule \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

---

## 🔐 Key Features

✅ **Secure Password Hashing** - Bcrypt with salt rounds of 10  
✅ **JWT Authentication** - 24-hour token expiration  
✅ **Role-Based Access Control** - ADMIN and CUSTOMER roles  
✅ **Ownership Validation** - Users can only access their own resources  
✅ **Date Validation** - Prevents invalid ticket purchases  

---

## 📖 Recommended Reading Order

1. **[walkthrough.md](./walkthrough.md)** - Start here for API usage and testing
2. **[implementation_plan.md](./implementation_plan.md)** - For technical details
3. **[task_checklist.md](./task_checklist.md)** - For implementation status

---

## 🛠️ Files Created/Modified

### New Files
- `src/controllers/authController.ts` - Authentication logic
- `src/routes/authRoute.ts` - Public auth endpoints
- `src/middleware/roleGuard.ts` - Role-based authorization
- `src/types/express.d.ts` - TypeScript type definitions

### Modified Files
- `src/middleware/authMiddleware.ts` - Updated to attach role
- `src/controllers/userController.ts` - Bcrypt integration
- `src/controllers/purchaseController.ts` - Fixed user interface
- `src/index.ts` - Added auth route
- All route files - Added role guards

---

## 🧪 Testing

See [walkthrough.md](./walkthrough.md) for complete testing examples with cURL commands.

**Quick test:**
1. Start server: `npm run dev`
2. Register a user (see Quick Start above)
3. Login to get token
4. Test protected routes with the token

---

## 📞 Support

For detailed API documentation and testing examples, refer to [walkthrough.md](./walkthrough.md).

For technical implementation details, refer to [implementation_plan.md](./implementation_plan.md).
