import express from 'express';
import recipeSchema from '../models/recipe.js';


const recipeRouter = express.Router();

// Get all recipes
recipeRouter.get('/', async (req, res) => {
    try {
        const recipes = await recipeSchema.find()
        res.send(200).json(recipes)
    }
    catch (error) {
        console.log(error)
        res.status(404).json({ message: "unable to find recipe"})
    }
})

// Get recipeSchema by id
recipeRouter.get('/:id', async (req, res) => {
    try {
        const recipes = await recipeSchema.findById(req.params.id)
        res.status(200).json(recipes)
    }
    catch (error) {
        console.log(error)
        res.status(404).json({ message: "unable to find recipe"})
    }
})


// Create a recipeSchema (Check here for RECIPE ERRORS)
recipeRouter.post('/', async (req, res) => {
    try {
        const recipes = await recipeSchema.create(req.body)
        res.status(201).json(recipes)
    }
    catch (error) {
        console.log(error)
        res.status(404).json({ message: "unable to register recipe"})
    }
})

// Update a recipeSchema by id
recipeRouter.put('/:id', async (req, res) => {
        try {
            const recipes = await recipeSchema.findByIdAndUpdate(req.params.id, req.body)
            res.status(200).json(recipes)
        }
        catch (error) {
            console.log(error)
            res.status(404).json({ message: "unable to update recipe"})
        }
})

//Delete a recipeSchema by id
recipeRouter.delete('/:id', async (req, res) => {
    try {
        const recipes = await recipeSchema.findByIdAndDelete(req.params.id)
        res.status(200).json(recipes)
    }
    catch (error) {
        console.log(error)
        res.status(404).json({ message: "unable to delete recipe"})
    }
})

export default recipeRouter;