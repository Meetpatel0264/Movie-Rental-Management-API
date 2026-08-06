Google Drive Screen recoding link :- https://drive.google.com/file/d/1VL1PJtBBTjkNM06eo2Y3GgUpdEAq2rKD/view?usp=drivesdk


# 🎬 Movie Rental Management API

A RESTful Movie Rental Management API built with **Node.js**, **Express.js**, **MongoDB**, and **JWT Authentication**.

## 🚀 Features

- User Registration & Login
- JWT Authentication & Role Authorization
- CRUD APIs
- Movie Rental Management
- Customer Management
- Staff Management
- Store Management
- Category, Language, Country, City, Address APIs
- Inventory Management
- Error Handling Middleware
- MongoDB with Mongoose

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs
- dotenv

## 📁 Project Structure

```
Movie-Rental-Management-API/
│
├── config/
│   └── db.js
├── controllers/
├── Middleware/
├── models/
├── routes/
├── utils/
├── .env
├── .gitignore
├── package.json
└── index.js
```

## ⚙️ Environment Variables

Create a `.env` file in the root directory.

```env
MONGO_URI=mongodb://127.0.0.1:27017/movieRentalDB
PORT=9094
JWT_SECRET=mySrectKey
JWT_EXPIRE=7d
```

## 📦 Installation

```bash
git clone <repository-url>
cd Movie-Rental-Management-API
npm install
```

## ▶️ Run Project

```bash
npm start
```

or

```bash
npm run dev
```

Server

```
http://localhost:9094
```

## 🔐 JWT Authentication

Generate token after login.

Send token in every protected API.

```
Authorization: Bearer <your_token>
```

## 📌 API Modules

- Authentication
- Actor
- Address
- Category
- City
- Country
- Customer
- Film
- Film Actor
- Film Category
- Inventory
- Language
- Rental
- Staff
- Store

## 👨‍💻 Author

Meet Patel

---
Made with ❤️ using Node.js & MongoDB
