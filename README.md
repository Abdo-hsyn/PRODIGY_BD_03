# 🛡️ Role-Based Auth API with Node.js, Express, Sequelize & JWT

This project is a secure backend API built with **Node.js**, **Express**, **Sequelize ORM**, and **JWT**. It implements **user authentication**, **authorization**, and **role-based access control** for three roles: `user`, `admin`, and `owner`.

---

## 📦 Features

- User registration and login using JWT
- Password hashing using `bcryptjs`
- Role-based access control middleware
- Sequelize ORM + MySQL (or any SQL database)
- Secure protected routes based on roles

---

## 🚀 Getting Started

### 1. Clone the project

```bash
git clone [https://github.com/Abdo-hsyn/PRODIGY_BD_03.git]
cd your-repo-name
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file in the root with:

```env
PORT=3000
JWT_SECRET=your_super_secret_key
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_db_password
DB_NAME=your_database
DB_DIALECT=mysql
```

### 4. Run migrations (optional if you use sync)

```bash
npx sequelize-cli db:migrate
```

### 5. Start the server

```bash
npm start
```

---

## 🧪 Testing the API

Use **Postman** or any REST client to test:

### ✅ Register

```http
POST /api/auth/register
Content-Type: application/json

{
  "username": "admin1",
  "email": "admin@example.com",
  "password": "password123",
  "role": "admin"
}
```

### ✅ Login

```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "admin@example.com",
  "password": "password123"
}
```

> Response will contain a JWT token.

### 🔒 Access Protected Route (Profile)

```http
GET /api/user/profile
Authorization: Bearer <your_token>
```

### 🔐 Access Admin or Owner Route

```http
GET /api/admin/dashboard
Authorization: Bearer <admin_or_owner_token>
```

---

## 🧱 Project Structure

```
.
├── controllers/
│   └── authController.js
├── middleware/
│   └── auth.js
├── models/
│   └── index.js
│   └── User.js
├── routes/
│   └── authRoutes.js
│   └── userRoutes.js
├── .env
├── index.js
└── README.md
```

---

## 🔑 Roles

- `user`: Limited access (profile only)
- `admin`: Full access to admin routes
- `owner`: Full access to owner & admin routes

---

## 🧑‍💻 Author

Abdelrehman Hussein  
Backend Developer — Prodigy InfoTech Internship (Task 3)

---

## 📜 License

MIT License
