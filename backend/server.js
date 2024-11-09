import express from 'express';
import cors from 'cors';
import recipeRouter from './routes/recipeRouter.js';
import usersRouter from './routes/usersRouter.js';
import connectToDatabase from './db/connectDB.js';
import cookieParser from 'cookie-parser';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from './config.js';

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser());

// Connect to Database
connectToDatabase();

// Auth Middleware for Protected Routes
app.use((req, res, next) => {
    const excludedRoutes = ['/api/users/login', '/api/users/register'];
    
    // Check if the route is excluded from authentication
    if (excludedRoutes.includes(req.path)) {
        return next();
    }

    const token = req.cookies.token;
    
    // Token missing case
    if (!token) {
        return res.status(401).json({ message: "Token not provided" });
    }
    
    try {
        // Verify the token
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded; // Pass the decoded token to the request object
        next();
    } catch (error) {
        return res.status(401).json({ message: "Unauthorized" });
    }
});

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to the Recipes API!');
});

app.use('/api/recipes', recipeRouter);
app.use('/api/users', usersRouter);

app.listen(8080, () => console.log('Server running on Port 8080'));