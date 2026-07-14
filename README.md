# TASKFLOW - Task Manager App

> **Technical Assessment Submission**
> **Python ERP Full Stack Developer Intern**

---

## 📄 Submitted To

**HR Department**
**EvolvEd. Ventures – Floreo**

## 👨‍💻 Submitted By

**MUHAMMED ZAHEER MV**
Python Full Stack Developer

* 📧 Email: **[muhdzaheermv@gmail.com](mailto:muhdzaheermv@gmail.com)**
* 📱 Phone: **+91 8137820807**
* 💻 GitHub: [https://github.com/muhdzaheermv](https://github.com/muhdzaheermv)
* 🔗 LinkedIn: [https://linkedin.com/in/muhammedzaheer](https://linkedin.com/in/muhammedzaheer)
* 🌐 Portfolio: [https://zaheermv.vercel.app](https://zaheermv.vercel.app)

**Submission Date:** **14 July 2026**

---

# 📌 Project Overview

**TASKFLOW** is a modern full-stack task management web application developed using **React.js** and **Django REST Framework**. The application allows users to securely register, authenticate using JWT, and efficiently manage their daily tasks.

Each authenticated user has access only to their own tasks and can perform complete CRUD operations. The application includes advanced features such as task searching, filtering, progress tracking, dark mode, and a fully responsive interface.

---

# 🚀 Features

* 🔐 Secure User Registration & Login
* 🔑 JWT Authentication
* ✅ Create, Edit & Delete Tasks
* ✔️ Mark Tasks as Completed
* 🔍 Search Tasks
* 📂 Filter Tasks by Status
* 📊 Task Progress Tracking
* 🌙 Dark / Light Mode
* 📱 Responsive Design
* ⚡ RESTful API Architecture
* 👤 User-specific Task Management

---

# 🛠 Technology Stack

## Frontend

* React.js
* React Router DOM
* Axios
* Bootstrap
* Tailwind CSS

## Backend

* Python
* Django
* Django REST Framework
* SimpleJWT Authentication
* PostgreSQL
* django-environ

---

# 🏗 System Architecture

The application follows a **three-tier architecture** consisting of:

```
User
   │
   ▼
React Frontend
   │
Axios HTTP Requests
   │
   ▼
Django REST API
   │
JWT Authentication
   │
   ▼
PostgreSQL Database
```

The React frontend communicates with the Django backend through RESTful APIs. JWT tokens are used to authenticate users and secure protected endpoints. The backend manages business logic and database interactions, while PostgreSQL stores user and task data.

---

# 🔌 API Endpoints

| Method | Endpoint           | Description   |
| ------ | ------------------ | ------------- |
| POST   | `/api/register/`   | Register User |
| POST   | `/api/login/`      | User Login    |
| GET    | `/api/tasks/`      | Get All Tasks |
| POST   | `/api/tasks/`      | Create Task   |
| PUT    | `/api/tasks/{id}/` | Update Task   |
| DELETE | `/api/tasks/{id}/` | Delete Task   |

---

# 📁 Project Structure

```
task-manager/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── taskmanager/
│   ├── tasks/
│   ├── users/
│   ├── manage.py
│   ├── requirements.txt
│   └── .env.example
│
└── README.md
```

---

# 📸 Application Screenshots

### Login Page

*(Add Screenshot Here)*

---

### Register Page

*(Add Screenshot Here)*

---

### Dashboard

*(Add Screenshot Here)*

---

### Dark Mode

*(Add Screenshot Here)*

---

# 📦 Installation Guide

## Clone Repository

```bash
git clone https://github.com/muhdzaheermv/task-manager.git
```

---

## Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

---

## Backend Setup

```bash
cd backend

python -m venv venv

source venv/bin/activate

pip install -r requirements.txt

python manage.py migrate

python manage.py runserver
```

---

# 🔗 Project Links

## GitHub Repository

* **Main Repository**
  [https://github.com/muhdzaheermv/task-manager](https://github.com/muhdzaheermv/task-manager)

* **Frontend**
  [https://github.com/muhdzaheermv/task-manager/tree/main/frontend](https://github.com/muhdzaheermv/task-manager/tree/main/frontend)

* **Backend**
  [https://github.com/muhdzaheermv/task-manager/tree/main/backend](https://github.com/muhdzaheermv/task-manager/tree/main/backend)

---

## 🌍 Live Demo

**Frontend**

[https://task-manager-three-mu-58.vercel.app/](https://task-manager-three-mu-58.vercel.app/)

---

## 🚀 Deployment

**Vercel**

[https://vercel.com/muhdzaheermvs-projects/task-manager](https://vercel.com/muhdzaheermvs-projects/task-manager)

**Render**

[https://dashboard.render.com/web/srv-d9au2nflk1mc73c4dfi0](https://dashboard.render.com/web/srv-d9au2nflk1mc73c4dfi0)

---

# 🔐 Test Credentials

| Field    | Value      |
| -------- | ---------- |
| Username | `jhonedoe` |
| Password | `12345678` |

---

# 🎥 Live Demo Video

This video demonstrates the complete functionality of the **TASKFLOW - Task Manager App**, including user registration, JWT authentication, task creation, updating, deletion, searching, filtering, progress tracking, responsive design, and dark mode. It provides a complete walkthrough of the application's features and showcases the integration between the React frontend and Django REST Framework backend.

**Demo Video**

[https://youtu.be/QW14Ki1ODyo](https://youtu.be/QW14Ki1ODyo)

---

# 🎯 Conclusion

TASKFLOW demonstrates my understanding of modern full-stack web development using **React.js**, **Django REST Framework**, and **PostgreSQL**. The project incorporates secure JWT authentication, RESTful APIs, CRUD operations, responsive UI design, task search and filtering, progress tracking, and dark mode while following clean code principles and a modular architecture.

This assessment reflects my ability to build scalable, user-friendly, and production-ready web applications using industry-standard development practices.

---

## 👨‍💻 Developed By

**MUHAMMED ZAHEER MV**

Python Full Stack Developer

📧 [muhdzaheermv@gmail.com](mailto:muhdzaheermv@gmail.com)

🌐 [https://zaheermv.vercel.app](https://zaheermv.vercel.app)

💻 [https://github.com/muhdzaheermv](https://github.com/muhdzaheermv)

⭐ **If you found this project useful, feel free to star the repository!**
