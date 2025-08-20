# Full Stack Exam Application

This repository contains both the **backend (Node.js/Express + MongoDB)** and **frontend (React + Vite)** code for the Exam Application.  
Follow the steps below to set up and run the project successfully.

---

## 🚀 Backend Setup

### 1. Install Dependencies
Navigate to the backend folder and install required packages:

```bash
cd backend
npm install

```
### 2. At the root of the backend folder, create a file named .env and add the following environment variables:

```bash
MONGODB_URI=your_mongodb_connection_string
PORT=4001
USER_ACCESS_TOKEN_SECRET=user-access
```

### 3.Start the backend in development mode:

```bash
node index.js
```

