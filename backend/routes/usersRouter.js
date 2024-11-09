import express from 'express';
import User from '../models/users.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config.js';


const usersRouter = express.Router();

// Get all users
usersRouter.get('/', async (req, res) => {
    try {
        const users = await User.find()
        res.status(200).json(users)
    }
    catch (error) {
        console.log(error)
        res.status(404).json({ message: "unable to find user"})
    }
})

// Get user by id
usersRouter.get('/:id', async (req, res) => {
    try {
        const users = await User.findById(req.params.id)
        res.status(200).json(users)
    }
    catch (error) {
        console.log(error)
        res.status(404).json({ message: "unable to find user"})
    }
})

// Get user by email
usersRouter.get('/email/:email', async (req, res) => {
    try {
        const users = await User.findOne({ email: req.params.email })
        res.status(200).json(users)
    }
    catch (error) {
        console.log(error)
        res.status(404).json({ message: "unable to find user"})
    }
})

// Create and Register a user (Check here for USER ERRORS)
usersRouter.post('/registers', async (req, res) => {
    try {
        const user = req.body;
        const hashedPassword = await bcrypt.hash(user.password, 10);
        user.password = hashedPassword;
        const users = await User.create(user)
        const token = jwt.sign({ id: users._id, email: users.email}, JWT_SECRET);
        res.cookie('token', token, { httpOnly: false, secure: false })
        res.status(201).json(users)
    }
    catch (error) {
        console.log(error)
        res.status(404).json({ message: "unable to register user"})
    }
})

// Login a user
usersRouter.post('/login', async (req, res) => {
    try {
        const user = req.body;
        const MONGO_USER = await User.findOne({ email: user.email });
        if (!MONGO_USER) {
            return res.status(404).json({ message: "User not found"});
        }
        const isPasswordCorrect = await bcrypt.compare(user.password, MONGO_USER.password);
        if (!isPasswordCorrect) {
            return res.status(401).json({ message: "Incorrect password"});
        }
        const token = jwt.sign({ id: MONGO_USER._id, email: MONGO_USER.email}, JWT_SECRET);
        res.cookie('token', token, { httpOnly: false, secure: false })
        res.status(200).json({ message: "Login successful", user: MONGO_USER});
    }
    catch (error) {
        console.log(error)
        res.status(404).json({ message: "unable to login user"})
    }
})

// Logout a user
usersRouter.post('/logout', async (req, res) => {
    try {
        res.clearCookie('token')
        res.status(200).json({ message: "Logout successful"})
    }
    catch (error) {
        console.log(error)
        res.status(404).json({ message: "unable to logout user"})
    }
})

// Update a user by id
usersRouter.put('/:id', async (req, res) => {
        try {
            await User.findByIdAndUpdate(req.params.id, req.body)
            const users = await User.findById(req.params.id)
            res.status(200).json(users)
        }
        catch (error) {
            console.log(error)
            res.status(404).json({ message: "unable to update user"})
        }
})

//Delete a user by id
usersRouter.delete('/:id', async (req, res) => {
    try {
        const users = await User.findByIdAndDelete(req.params.id)
        res.status(200).json(users)
    }
    catch (error) {
        console.log(error)
        res.status(404).json({ message: "unable to delete user"})
    }
})

export default usersRouter;