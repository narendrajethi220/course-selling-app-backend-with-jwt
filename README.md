```markdown
# Course Selling App - Backend (JWT Authentication)

## Description
This project is a simple course-selling application that supports two types of users:
1. **Admins**: Can sign up, create courses, and view all available courses.
2. **Users**: Can sign up, view courses, purchase courses, and view purchased courses.

The app mimics a real-world platform like Udemy, allowing admins to manage courses and users to buy them. The app uses MongoDB as the database, so ensure that a MongoDB instance is set up before starting the project.

## Features
- Admins can create accounts and add new courses.
- Users can create accounts, browse available courses, and purchase them.
- Secure endpoints for each type of user with JWT authentication.

## Tech Stack
- Node.js
- Express.js
- MongoDB
- Mongoose (ODM for MongoDB)
- dotenv (for environment variables)
- **JWT** (for authentication)

## Setup
1. Clone the repository.
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Set up a MongoDB instance and create a `.env` file in the root directory with the following content:
   ```
   MONGODB_URL=your-mongodb-connection-url
   JWT_SECRET=your-secret-key
   ```
4. Start the server:
   ```bash
   npm start
   ```

## Routes

### Admin Routes
#### 1. **POST /admin/signup**
   - **Description**: Creates a new admin account.
   - **Input Body**:
     ```json
     { "username": "admin", "password": "pass" }
     ```
   - **Output**:
     ```json
     { "message": "Admin created successfully" }
     ```

#### 2. **POST /admin/courses**
   - **Description**: Creates a new course.
   - **Input**: 
     - Headers: 
       ```json
       { "Authorization": "Bearer your-jwt-token" }
       ```
     - Body:
       ```json
       { 
         "title": "course title", 
         "description": "course description", 
         "price": 100, 
         "imageLink": "https://linktoimage.com" 
       }
       ```
   - **Output**:
     ```json
     { 
       "message": "Course created successfully", 
       "courseId": "new course id" 
     }
     ```

#### 3. **GET /admin/courses**
   - **Description**: Returns all the courses.
   - **Input**: 
     - Headers:
       ```json
       { "Authorization": "Bearer your-jwt-token" }
       ```
   - **Output**:
     ```json
     { 
       "courses": [
         {
           "id": 1,
           "title": "course title",
           "description": "course description",
           "price": 100,
           "imageLink": "https://linktoimage.com",
           "published": true
         }
       ]
     }
     ```

### User Routes
#### 1. **POST /users/signup**
   - **Description**: Creates a new user account.
   - **Input Body**:
     ```json
     { "username": "user", "password": "pass" }
     ```
   - **Output**:
     ```json
     { "message": "User created successfully" }
     ```

#### 2. **POST /users/login**
   - **Description**: Logs in a user and returns a JWT token.
   - **Input Body**:
     ```json
     { "username": "user", "password": "pass" }
     ```
   - **Output**:
     ```json
     { "token": "your-jwt-token" }
     ```

#### 3. **GET /users/courses**
   - **Description**: Lists all the courses.
   - **Input**: 
     - Headers:
       ```json
       { "Authorization": "Bearer your-jwt-token" }
       ```
   - **Output**:
     ```json
     { 
       "courses": [
         {
           "_id": "66ebc9dd65b3fed264102463",
           "title": "FSD",
           "description": "Full Stack Development",
           "imageLink": "https://linktoimage.com",
           "price": 100
         },
         {
           "_id": "66ebcc7b701b95c686978ce1",
           "title": "AI/ML",
           "description": "Artificial Intelligence and Machine Learning",
           "imageLink": "https://linktoimage.com",
           "price": 199
         }
       ]
     }
     ```

#### 4. **POST /users/courses/:courseId**
   - **Description**: Purchases a course by ID.
   - **Input**: 
     - Headers:
       ```json
       { "Authorization": "Bearer your-jwt-token" }
       ```
   - **Output**:
     ```json
     { "message": "Course purchased successfully" }
     ```

#### 5. **GET /users/purchasedCourses**
   - **Description**: Lists all the courses purchased by the user.
   - **Input**:
     - Headers:
       ```json
       { "Authorization": "Bearer your-jwt-token" }
       ```
   - **Output**:
     ```json
     { 
       "purchasedCourses": [
         {
           "_id": "66ebc9dd65b3fed264102463",
           "title": "FSD",
           "description": "Full Stack Development",
           "imageLink": "https://linktoimage.com",
           "price": 100
         }
       ]
     }
     ```

## License
This project is for educational purposes only.
```
