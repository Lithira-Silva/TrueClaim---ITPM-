# TrueClaim

> A smart Lost & Found claim management system developed as an **ITPM** project at **SLIIT** — Year 3, Semester 2.

---

## Overview

TrueClaim is a full-stack web application built with the **MERN stack** to streamline and automate the lost & found claim process. It allows users to report lost/found items, submit claims, and communicate through a real-time messaging system — all managed through a dedicated admin panel.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | Next.js 16, TypeScript, Tailwind CSS |
| Backend | Node.js, Express.js, TypeScript |
| Database | MongoDB Atlas (Mongoose) |
| Real-time | Socket.IO |
| HTTP Client | Axios |

---

## Project Structure

```
TrueClaim/
├── client/          # Next.js frontend
│   └── src/
│       ├── app/         # App router pages (admin, claims, items, messages)
│       ├── components/  # Reusable UI components
│       ├── lib/         # Axios config & utilities
│       └── types/       # TypeScript types
└── server/          # Express backend
    └── src/
        ├── config/      # Database connection
        ├── controllers/ # Route handlers (items, claims, messages, admin)
        ├── middlewares/ # Express middlewares
        ├── models/      # Mongoose models
        ├── routes/      # API route definitions
        ├── sockets/     # Socket.IO logic
        └── types/       # TypeScript types
```

---

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `GET/POST` | `/api/items` | Manage lost & found items |
| `GET/POST` | `/api/claims` | Submit and retrieve claims |
| `GET/POST` | `/api/messages` | Messaging between users |
| `GET/POST` | `/api/admin` | Admin management |

---

## Getting Started

### Prerequisites
- Node.js >= 18
- MongoDB Atlas account

### 1. Clone the repository
```bash
git clone https://github.com/Lithira-Silva/TrueClaim---ITPM-.git
cd TrueClaim---ITPM-
```

### 2. Configure environment variables

Create a `.env` file inside the `server/` directory:
```env
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
CLIENT_ORIGIN=http://localhost:3000
NODE_ENV=development
```

### 3. Install dependencies & run

**Backend:**
```bash
cd server
npm install
npm run dev
```

**Frontend:**
```bash
cd client
npm install
npm run dev
```

- Frontend: [http://localhost:3000](http://localhost:3000)
- Backend: [http://localhost:5000](http://localhost:5000)

---

## Team

Developed by Group members of **SLIIT — IT Project Management (ITPM)**, Year 3, Semester 2.

---

## License

This project is for academic purposes only.
