# HEALiO 🏃‍♂️

A comprehensive MERN stack fitness tracking web application that helps users monitor their daily health activities and visualize their progress over time.

![Tech Stack](https://img.shields.io/badge/Stack-MERN-green)
![React](https://img.shields.io/badge/React-19.2.4-blue)
![Node](https://img.shields.io/badge/Node-Express-green)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-brightgreen)

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Installation](#-installation)
- [Running the Application](#-running-the-application)
- [Usage](#-usage)
- [Project Structure](#-project-structure)
- [API Endpoints](#-api-endpoints)
- [Database Schema](#-database-schema)
- [Screenshots](#-screenshots)
- [Contributing](#-contributing)
- [License](#-license)
- [Author](#-author)

## Overview

**HEALiO** is a modern fitness tracking platform that empowers users to take control of their health journey. By logging daily activities such as meals, calories, macronutrients, steps, water intake, sleep hours, and workout intensity, users can gain valuable insights into their fitness progress through intuitive data visualizations.

The application features a secure authentication system, real-time data analytics, and responsive design, making it the perfect companion for fitness enthusiasts looking to optimize their health routines.

## 🚀 Features

### Authentication & Security
- **Secure User Authentication**: JWT-based token authentication system
- **Password Encryption**: Bcrypt hashing for secure password storage
- **Protected Routes**: Middleware-based route protection for user privacy
- **Session Management**: Automatic token expiration and validation
- **Persistent Login**: LocalStorage-based session persistence

### Activity Tracking
- **Daily Health Logging**: Comprehensive form to track:
  - Meals consumed
  - Total calories
  - Macronutrients (Protein, Carbs, Fats)
  - Step count
  - Water intake (liters)
  - Sleep duration (hours)
  - Workout intensity levels (Not Done, Light, Moderate, Intense)
- **Data Validation**: Real-time form validation with error handling
- **Single Entry Per Day**: Prevents duplicate entries for the same day
- **Historical Data**: Access and view all past entries

### Data Visualization
- **Interactive Charts**: Powered by Chart.js for smooth, responsive visualizations
- **Multiple Time Frames**: Switch between daily, weekly, and monthly views
- **Multiple Metrics**: Track different health parameters:
  - Calories
  - Protein
  - Carbohydrates
  - Fats
  - Steps
  - Water intake
  - Sleep hours
- **Average Statistics**: View calculated averages for each time period
- **Trend Analysis**: Identify patterns and progress over time

### User Experience
- **Responsive Design**: Mobile-first approach using TailwindCSS
- **Modern UI**: Clean, intuitive interface with green accent theme
- **Fast Navigation**: React Router for seamless page transitions
- **Loading States**: Smooth user feedback during data operations
- **Error Handling**: User-friendly error messages and validation feedback

## 🛠️ Tech Stack

### Frontend
| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 19.2.4 | UI Framework |
| **Vite** | 7.2.4 | Build Tool & Dev Server |
| **React Router DOM** | 7.13.0 | Client-side Routing |
| **TailwindCSS** | 4.1.18 | Styling Framework |
| **Chart.js** | 4.5.1 | Data Visualization |
| **react-chartjs-2** | 5.3.1 | React wrapper for Chart.js |
| **Axios** | 1.13.2 | HTTP Client |
| **ESLint** | 9.39.1 | Code Linting |

### Backend
| Technology | Version | Purpose |
|------------|---------|---------|
| **Node.js** | - | Runtime Environment |
| **Express** | 5.2.1 | Web Framework |
| **MongoDB** | 7.1.0 | Database Driver |
| **Mongoose** | 9.1.5 | ODM for MongoDB |
| **JWT** | 9.0.3 | Authentication Tokens |
| **Bcrypt** | 6.0.0 | Password Hashing |
| **CORS** | 2.8.6 | Cross-Origin Resource Sharing |
| **Nodemon** | 3.1.11 | Development Server |
| **dotenv** | 17.2.3 | Environment Variables |

## 📦 Installation

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v16 or higher) - [Download](https://nodejs.org/)
- **MongoDB** (v5 or higher) - [Download](https://www.mongodb.com/try/download/community)
- **npm** or **yarn** package manager
- **Git** (for cloning the repository)

### Step-by-Step Installation

1. **Clone the repository**
```bash
git clone https://github.com/dahiya001rohit/Healio.git
cd Healio
```

2. **Install Server Dependencies**
```bash
cd server
npm install
```

3. **Install Client Dependencies**
```bash
cd ../client
npm install
```

4. **Set Up Environment Variables**

Create a `.env` file in the **server** directory:
```env
# Server Configuration
PORT=5000

# Database Configuration
MONGO_URL=mongodb://localhost:27017/healio
# Or use MongoDB Atlas:
# MONGO_URL=mongodb+srv://<username>:<password>@cluster.mongodb.net/healio

# JWT Configuration
JWT_SECRET=your_super_secret_jwt_key_here_change_this_in_production
JWT_EXPIRES_IN=7d
```

Create a `.env` file in the **client** directory:
```env
# API Configuration
VITE_API_URL=http://localhost:5000
```

5. **Start MongoDB**

If using local MongoDB:
```bash
# On Linux/Mac
sudo systemctl start mongod

# On Windows
net start MongoDB
```

## 🚀 Running the Application

### Development Mode

#### Option 1: Run Both Servers Separately

**Terminal 1 - Start Backend Server:**
```bash
cd server
npm run dev
```
Server will start at `http://localhost:5000`

**Terminal 2 - Start Frontend Development Server:**
```bash
cd client
npm run dev
```
Client will start at `http://localhost:5173`

#### Option 2: Using Concurrently (Optional Setup)

You can create a root `package.json` to run both servers together:

```json
{
  "scripts": {
    "dev": "concurrently \"cd server && npm run dev\" \"cd client && npm run dev\"",
    "install-all": "cd server && npm install && cd ../client && npm install"
  },
  "devDependencies": {
    "concurrently": "^8.0.0"
  }
}
```

Then run:
```bash
npm install
npm run dev
```

### Production Mode

1. **Build the Frontend:**
```bash
cd client
npm run build
```

2. **Start the Backend Server:**
```bash
cd server
npm start
```

3. **Serve the built frontend** (configure Express to serve static files):
```javascript
// In server/index.js
const path = require('path');
app.use(express.static(path.join(__dirname, '../client/dist')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});
```

### Access the Application

Open your browser and navigate to:
- **Development:** `http://localhost:5173`
- **Production:** `http://localhost:5000`

## 📱 Usage

### Getting Started

1. **Sign Up**
   - Navigate to the signup page
   - Enter your name, email, and password
   - Click "Sign Up" to create your account
   - You'll be automatically logged in with a JWT token

2. **Log In**
   - If you already have an account, go to the login page
   - Enter your email and password
   - Access your personalized dashboard

3. **Today's Update**
   - Click on "Today's Update" from the navigation
   - Fill in your daily health metrics:
     - **Meals**: What you ate (e.g., "Egg, Chicken, Rice")
     - **Calories**: Total caloric intake (e.g., 2500)
     - **Protein**: Grams of protein (e.g., 120)
     - **Carbs**: Grams of carbohydrates (e.g., 150)
     - **Fats**: Grams of fats (e.g., 70)
     - **Steps**: Daily step count (e.g., 10000)
     - **Water**: Liters consumed (e.g., 2)
     - **Sleep**: Hours slept (e.g., 8)
     - **Workout Intensity**: Choose from dropdown (Not Done, Light, Moderate, Intense)
   - Submit the form
   - Note: You can only submit once per day

4. **Track Progress**
   - Navigate to the "Track" page
   - View your data visualized in interactive charts
   - **Time Period Selection**: Switch between daily, weekly, or monthly views
   - **Metric Selection**: Choose which metric to visualize (calories, protein, carbs, fats, steps, water, sleep)
   - **View Statistics**: See average values for the selected time period
   - **Analyze Trends**: Identify patterns in your fitness journey

### Tips for Best Results

- **Consistency**: Log your data daily for accurate tracking
- **Accuracy**: Be honest with your entries for meaningful insights
- **Regular Monitoring**: Check your charts weekly to stay motivated
- **Set Goals**: Use the averages to set realistic fitness goals
- **Long-term View**: Monthly charts help identify long-term trends

## 🗂️ Project Structure

```
Healio/
├── client/                          # React Frontend Application
│   ├── public/                      # Static files
│   ├── src/
│   │   ├── assets/                  # Images, fonts, etc.
│   │   ├── components/              # React Components
│   │   │   ├── Home/
│   │   │   │   ├── LoggedHome.jsx   # Dashboard for logged-in users
│   │   │   │   └── UnloggedHome.jsx # Landing page for visitors
│   │   │   ├── Login.jsx            # Login form component
│   │   │   ├── Navbar.jsx           # Navigation bar
│   │   │   ├── ProctedRoutes.jsx    # Route protection wrapper
│   │   │   ├── SignUp.jsx           # Registration form
│   │   │   ├── TodaysUpdate.jsx     # Daily logging form
│   │   │   └── Track.jsx            # Data visualization page
│   │   ├── Hooks/
│   │   │   └── useAuth.js           # Custom authentication hook
│   │   ├── utils/
│   │   │   ├── api.js               # Axios instance configuration
│   │   │   └── trackFunctions.js    # Data processing utilities
│   │   ├── App.jsx                  # Main application component
│   │   ├── main.jsx                 # Application entry point
│   │   └── index.css                # Global styles
│   ├── eslint.config.js             # ESLint configuration
│   ├── index.html                   # HTML template
│   ├── package.json                 # Client dependencies
│   └── vite.config.js               # Vite configuration
│
└── server/                          # Express Backend Application
    ├── controllers/                 # Business Logic
    │   ├── getFunction.js           # GET request handlers
    │   ├── JWT.js                   # JWT token utilities
    │   └── postFunctions.js         # POST request handlers
    ├── middleware/
    │   └── auth.js                  # JWT authentication middleware
    ├── models/                      # MongoDB Schemas
    │   ├── track.js                 # Daily tracking schema
    │   └── users.js                 # User schema
    ├── routers/
    │   └── postRouter.js            # POST route definitions
    ├── connectDatabase.js           # MongoDB connection setup
    ├── index.js                     # Server entry point
    └── package.json                 # Server dependencies
```

## 🔐 API Endpoints

### Public Routes

#### Register User
```http
POST /signup
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securepassword123"
}

Response:
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

#### Login User
```http
POST /login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "securepassword123"
}

Response:
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

### Protected Routes (Require JWT Token)

#### Log Daily Update
```http
POST /todays-update
Authorization: Bearer <token>
Content-Type: application/json

{
  "meals": "Egg, Chicken, Rice",
  "calories": 2500,
  "protein": 120,
  "carbs": 150,
  "fats": 70,
  "steps": 10000,
  "water": 2,
  "sleep": 8,
  "workoutIntensity": "Moderate"
}

Response:
{
  "success": "success"
}
```

#### Get Tracking Data
```http
GET /track
Authorization: Bearer <token>

Response:
[
  {
    "_id": "...",
    "userId": "...",
    "date": "2026-02-10",
    "meals": "Egg, Chicken, Rice",
    "calories": 2500,
    "protein": 120,
    "carbs": 150,
    "fats": 70,
    "steps": 10000,
    "water": 2,
    "sleep": 8,
    "workoutIntensity": "Moderate",
    "createdAt": "2026-02-10T10:30:00.000Z",
    "updatedAt": "2026-02-10T10:30:00.000Z"
  },
  ...
]
```

## 🗄️ Database Schema

### Users Collection
```javascript
{
  _id: ObjectId,
  name: String (required),
  email: String (required, unique),
  hashPassword: String (required),
  createdAt: Date,
  updatedAt: Date
}
```

### Daily Track Collection
```javascript
{
  _id: ObjectId,
  userId: ObjectId (required, indexed, ref: 'users'),
  date: Date (required, indexed),
  meals: String (default: 'no-data'),
  calories: Number (default: null),
  protein: Number (default: null),
  carbs: Number (default: null),
  fats: Number (default: null),
  steps: Number (default: null),
  water: Number (default: null),
  sleep: Number (default: null),
  workoutIntensity: String (default: 'Not Done'),
  createdAt: Date,
  updatedAt: Date
}

// Unique compound index on userId and date
Index: { userId: 1, date: 1 } (unique)
```

## 📸 Screenshots

### Home Page
*Landing page with call-to-action for new users*

### Dashboard
*Personalized dashboard for logged-in users*

### Today's Update Form
*Comprehensive form for daily health logging*

### Track Page - Charts
*Interactive data visualizations with multiple metrics*

### Mobile Responsive
*Fully responsive design across all devices*

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Open a Pull Request**

### Development Guidelines
- Follow the existing code style
- Write meaningful commit messages
- Add comments for complex logic
- Test your changes thoroughly
- Update documentation as needed

### Ideas for Contribution
- [ ] Add AI-powered meal recommendations
- [ ] Implement social features (friends, challenges)
- [ ] Create mobile app version
- [ ] Add more chart types (bar, pie, radar)
- [ ] Implement export to PDF/CSV
- [ ] Add goal setting and achievement badges
- [ ] Create nutrition database integration
- [ ] Add dark/light theme toggle
- [ ] Implement email notifications/reminders
- [ ] Add profile customization options

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

```
MIT License

Copyright (c) 2026 Rohit Dahiya

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 👤 Author

**Rohit Dahiya**

- GitHub: [@dahiya001rohit](https://github.com/dahiya001rohit)
- Repository: [HEALiO](https://github.com/dahiya001rohit/Healio)

## 🙏 Acknowledgments

- Chart.js team for the excellent charting library
- TailwindCSS for the utility-first CSS framework
- MongoDB team for the robust database solution
- React community for the powerful UI library
- All contributors and users of HEALiO

## 📞 Support

If you have any questions or need help with the project:

1. Check the [Issues](https://github.com/dahiya001rohit/Healio/issues) page
2. Create a new issue if your question hasn't been answered
3. Star ⭐ this repository if you find it helpful!

---

<div align="center">

**Made with ❤️ for fitness enthusiasts worldwide**

⭐ Star this repo if you like it! ⭐

</div>
