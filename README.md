# 🩺 DocDirect - MERN Stack Doctor Appointment System

A full-stack medical appointment scheduling application. This project consists of three main parts: a **User Frontend** for patients, an **Admin/Doctor Dashboard**, and a **Node.js/Express Backend**.

---

## 📂 Project Structure Overview

The project is organized into three main directories to separate concerns:

* **`backend/`**: Node.js, Express, and MongoDB (API and Database logic).
* **`frontend/`**: React.js application for patients to book appointments.
* **`admin/`**: React.js application for both Admin (managing doctors) and Doctors (managing appointments).

---

## 🛠️ Technology Stack

| Layer | Technology |
| :--- | :--- |
| **Frontend** | React.js, Tailwind CSS, React Router |
| **State Management** | Context API |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB (Mongoose) |
| **Authentication** | JWT (JSON Web Tokens) |
| **File Storage** | Cloudinary (for profile & doctor images) |
| **Payments** | Stripe / Razorpay |

---

## ✨ Core Features

### 1. Patient Portal (Frontend)
- **Specialty Filter:** Find doctors by category (Dermatologist, Pediatrician, etc.).
- **Smart Booking:** Real-time slot selection based on doctor availability.
- **Profile:** Upload and manage user data.
- **My Appointments:** Track status and cancel bookings.

### 2. Admin & Doctor Portal (Admin)
- **Admin Role:** Add/Remove doctors, manage system-wide appointments.
- **Doctor Role:** View personal dashboard, mark appointments as completed, manage earnings.
- **Availability:** Toggle "Available" status to hide/show on the patient portal.

---

