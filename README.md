# **Vortex Video Streaming App - Backend**

Welcome to the **Vortex Video Streaming App Backend**! This repository contains the backend services powering the Vortex application, a video streaming platform. The backend is built with a focus on learning and implementing modern backend development practices.  

This project is currently **under development** and serves as a learning exercise for building robust APIs, handling user authentication, and managing video streaming-related functionalities.

---

## **Features**

- **User Authentication**:  
  Secure user registration and login using hashed passwords and JWT-based authentication.

- **Role Management**:  
  Separate roles for Admin and User with role-based access control (RBAC).

- **Video Management**:  
  APIs for uploading, updating, and managing video metadata (title, description, etc.).

- **Video Streaming**:  
  Serve videos using optimized chunk-based streaming (to be implemented).

- **Middleware Integration**:  
  - CORS: Configurable for secure cross-origin requests.  
  - Cookie Parsing: For managing session-related tokens.  
  - Error Handling: Standardized error handling with custom error and response classes.

- **Async Wrappers**:  
  Industry-standard async handlers for streamlined request management.

---

## **Tech Stack**

- **Language**: JavaScript (ES6+)
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB (using Mongoose ODM)
- **Authentication**: JWT-based with refresh tokens
- **Middleware**: CORS, Cookie Parser, Express JSON/URL Encoders

---

## **Getting Started**

### **Prerequisites**

- Node.js (v18+ recommended)  
- MongoDB (running instance or MongoDB Atlas)  

### **Installation**

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/vortex-streaming-backend.git
   cd vortex-streaming-backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:  
   Create a `.env` file in the root directory and configure the following variables:
   ```env
   PORT=5000
   MONGODB_URL=mongodb://localhost:27017/vortex
   ACCESS_TOKEN_SECRET=<your_access_token_secret>
   REFRESH_TOKEN_SECRET=<your_refresh_token_secret>
   CORS_ORIGIN=http://localhost:3000
   ```

4. Start the server:
   ```bash
   npm run dev
   ```

5. Test the API endpoints using tools like Postman or cURL.

---

## **Project Structure**

```
vortex-video-streaming-backend/
├── node_modules/        # Installed npm dependencies
├── public/              # Public assets
│   └── temp/            # Temporary storage for uploads
├── src/                 # Source code
│   ├── controllers/     # Controllers for handling business logic
│   ├── middlewares/     # Custom middleware (e.g., auth, error handling)
│   ├── models/          # MongoDB models for Mongoose
│   ├── routes/          # API route definitions
│   ├── utils/           # Utility functions (e.g., asyncHandler)
│   ├── app.js           # Express application setup
│   ├── constants.js     # Project constants (e.g., DB_NAME)
│   └── db/              # Database connection logic
├── .env                 # Environment variables
├── .gitignore           # Files and folders to be ignored by Git
├── .prettierignore      # Files and folders to be ignored by Prettier
├── .prettierrc          # Prettier configuration
├── package-lock.json    # Auto-generated lockfile for npm dependencies
├── package.json         # Project metadata and scripts
└── README.md            # Project documentation

```

---

## **Development Progress**

- [x] Basic Express server setup  
- [x] MongoDB integration with Mongoose  
- [x] User authentication with JWT  
- [x] Middleware configuration (CORS, error handling, etc.)  

---

## **Contributing**

This is a learning-focused project. If you'd like to contribute:
1. Fork the repository.  
2. Create a feature branch.  
3. Submit a pull request with detailed explanations of your changes.  

---

## **Acknowledgements**

- A huge shoutout to **[Hitesh Choudhary](https://github.com/hiteshchoudhary)** for his incredible videos and resources on backend development, which have been instrumental in guiding this project. 🎉  
- Special thanks to the open-source community for creating tools and libraries used in this project.  

---
