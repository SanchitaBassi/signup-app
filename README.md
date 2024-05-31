MelodyVerse is a web application that allows users to sign up and view a list of posts. The application is built using Node.js, Express.js, MongoDB, React.js, and Tailwind CSS. It includes JWT-based authentication and various best practices for security and performance.

Features
User Signup: Register with a username, email, password, and optional fields such as name and profile picture.
JWT Authentication: Secure user authentication using JSON Web Tokens.
Post List: Infinite scroll implementation to fetch and display posts.
Responsive Design: Mobile-first design using Tailwind CSS.
Error Handling: Informative error messages for a better user experience.
Security Best Practices: Input validation, sanitization, and password hashing.

**Installation**


**Backend**
**Clone the Repository:**
bash
git clone https://github.com/ySanchitaBassi/signup-app.git
cd melodyverse/backend

**Install Dependencies:**
bash
npm install


**Environment Variables:**
**Create a .env file in the backend directory with the following content:**
**plaintext**
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000


**Start the Server:**
bash
npm start


**Frontend**

**Navigate to Frontend Directory:**
bash
cd ../frontend

**Install Dependencies:**
bash
npm install

**Start the Development Server:**
bash
npm start
