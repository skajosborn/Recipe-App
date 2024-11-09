import mongoose from 'mongoose';

const recipeSchema = new mongoose.Schema({
    "title": {
        type: String,
        required: true,
        trim: true,
    },
    "ingredients": {
        type: String,
        required: true,
        trim: true,
    },
    "instructions": {
        type: String,
        required: true,
        trim: true,
    },
    "author": {
        type: String,
        required: true,
        trim: true,
    },
    "createdAt": {
        type: Date,
        default: Date.now,
    },
    "updatedAt": {
        type: Date,
        default: Date.now,
    },
    "photoUri": {
        type: String,
        required: false,
    }
    }
)

const recipe = mongoose.model('recipe', recipeSchema)

export default recipe;