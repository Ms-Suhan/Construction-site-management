# 🏗️ Construction Site Management System

![Node.js](https://img.shields.io/badge/Node.js-Backend-green)
![Express](https://img.shields.io/badge/Express.js-Framework-black)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-green)
![License](https://img.shields.io/badge/License-MIT-blue)
![Status](https://img.shields.io/badge/Project-Active-orange)

A **backend system for managing construction site operations** including projects, workers, materials, warehouses, and suppliers.

The goal of this project is to **digitize construction workflows** and provide an efficient way to manage construction site resources and communication between different roles.

---

# 📌 Features

* User authentication and authorization
* Role-based access control
* Project management
* Worker assignment to projects
* Warehouse and inventory management
* Material tracking
* Supplier management
* Secure password hashing
* Token-based authentication (JWT)
* REST API architecture

---

# 👥 User Roles

The system supports multiple types of users:

* **Admin**
* **Manager**
* **Site Engineer**
* **Worker**
* **Warehouse Manager**
* **Accountant**
* **Client**

Each role has **different permissions and responsibilities** in the system.

---

# 🛠 Tech Stack

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

### Authentication & Security

* JWT (JSON Web Tokens)
* Crypto (password hashing)

### Utilities

* dotenv
* cookie-parser

---

# 📁 Project Structure

```
construction-site-management/
│
├── controllers/        # Request logic
├── models/             # Database schemas
├── routes/             # API routes
├── services/           # Authentication & helper services
├── middleware/         # Authorization middleware
│
├── dbConnect.js        # MongoDB connection
├── server.js           # Main server entry point
├── package.json
└── .env
```

---

# ⚙️ How to Run This Project Locally

Follow these steps to run the backend on your system.

---

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/yourusername/construction-site-management.git
```

---

## 2️⃣ Navigate to Project Folder

```bash
cd construction-site-management
```

---

## 3️⃣ Install Dependencies

Install all required Node.js packages:

```bash
npm install
```

or

```bash
npm i
```

---

## 4️⃣ Create Environment Variables

Create a `.env` file in the root directory.

Example `.env` file:

```
PORT=8000
MONGO_URI=mongodb://localhost:27017/constructionDB
JWT_SECRET=supersecretkey
```

---

## 5️⃣ Start MongoDB

Make sure MongoDB is running on your system.

Example (Linux/Mac):

```bash
sudo service mongod start
```

or if using MongoDB Atlas, use your **Atlas connection string**.

---

## 6️⃣ Run the Server

Start the backend server:

```bash
npm start
```

or if you are using **nodemon**

```bash
npm run dev
```

---

## 🚀 Server Running

Once the server starts you should see:

```
Server Running at Port : 8000
```

Open browser or Postman:

```
http://localhost:8000
```

You should see:

```
Welcome to website
```

---

# 📡 Example API Routes

### Register User

```
POST /user/register
```

### Login User

```
POST /user/login
```

### Get User Profile

```
GET /user/profile
```

---

# 🔐 Authentication Flow

1. User registers
2. Password is hashed using crypto
3. User logs in
4. Server generates JWT token
5. Token stored in cookies
6. Protected routes verify token

---

# 🧱 Future Improvements

Planned features for the system:

* Task management for workers
* Equipment tracking
* Construction progress dashboard
* Real-time notifications
* File uploads for site reports
* Attendance tracking
* Budget monitoring
* Mobile responsive dashboard

---

# 🤝 Contributing

Contributions are welcome.

Steps:

1. Fork the repository
2. Create a new branch

```
git checkout -b feature-name
```

3. Commit changes

```
git commit -m "Added new feature"
```

4. Push to branch

```
git push origin feature-name
```

5. Open a Pull Request

---

# 📜 License

This project is licensed under the **MIT License**.

---

# 👨‍💻 Author

**Suhan**

GitHub: https://github.com/yourusername
