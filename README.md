# User Authentication API

## Project Overview
This is a Node.js authentication system using Express.js, Mongoose, and JWT (JSON Web Tokens) for user registration and login.

## Technology Stack
- Node.js
- Express.js
- MongoDB (Mongoose)
- bcrypt (for password hashing)
- jsonwebtoken (for authentication)

## Project Structure
- `connectDb.js`: Database connection utility
- `index.js`: Main application entry point
- `controllers/userAuth.controllers.js`: User authentication logic
- `models/users.model.js`: User data model and schema
- `routes/userAuth.routes.js`: Authentication routes

## Authentication Routes

### 1. User Signup `/user/signup`
- **HTTP Method**: POST
- **Payload Structure**:
```json
{
  "firstName": "John",
  "lastName": "Doe", // Optional
  "email": "john@example.com",
  "password": "securePassword123"
}
```

- **Possible Responses**:
  - **201 Created**: 
    ```json
    {
      "token": "generatedJWTToken",
      "newUser": {
        "_id": "uniqueMongoDBId",
        "firstName": "John",
        "email": "john@example.com",
        "createdAt": "timestamp",
        "updatedAt": "timestamp"
      }
    }
    ```
  - **409 Conflict**: If user already exists
    ```json
    {
      "error": "User already exists with john@example.com"
    }
    ```

### 2. User Login `/user/login`
- **HTTP Method**: POST
- **Payload Structure**:
```json
{
  "email": "john@example.com",
  "password": "securePassword123"
}
```

- **Possible Responses**:
  - **200 OK**: 
    ```json
    {
      "token": "generatedJWTToken",
      "userData": {
        "_id": "uniqueMongoDBId",
        "firstName": "John",
        "email": "john@example.com"
      }
    }
    ```
  - **400 Bad Request**: If user doesn't exist
    ```json
    {
      "error": "User doesn't exist. Do SignUp first!!!"
    }
    ```
  - **401 Unauthorized**: If password is incorrect
    ```json
    {
      "error": "Invalid email or password"
    }
    ```

## Key Features
- Unique email-based user registration
- Password hashing using bcrypt
- JWT-based authentication
- Error handling for existing users and authentication failures

## Environment Variables
- `PORT`: Server port (defaults to 3000)
- `dbUrl`: MongoDB connection string
- `SECRET_KEY`: JWT secret key for token generation

## Setup and Installation
1. Clone the repository
2. Run `npm install`
3. Create a `.env` file with necessary environment variables
4. Run `npm start`

## Security Notes
- Passwords are hashed before storage
- JWT tokens are generated with a secret key
- Unique email constraint prevents duplicate registrations
