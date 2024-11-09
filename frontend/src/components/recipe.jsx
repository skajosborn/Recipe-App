import React, { useState } from 'react'
import './recipe.css'

const Recipe = (props) => {
    const [ recipeItem, setRecipeItem ] = useState(props.recipe)
  return (
    <div className="recipe">
        <div className="recipe-image">
            <img src={recipeItem.photoUri} alt={recipeItem.title} />
        </div>
        <div className="recipe-title">
            <h2>{recipeItem.title}</h2>
        </div>
        <div className="recipe-author">
            <p>{recipeItem.author}</p>
        </div>
        <div className="recipe-ingredients">
            <h3>Ingredients</h3>
            <p>{recipeItem.ingredients}</p>
        </div>
        <button>View Recipe</button>
    </div>
  )
}

export default Recipe


// const recipeSchema = new mongoose.Schema({
//     "title": {
//         type: String,
//         required: true,
//         trim: true,
//     },
//     "ingredients": {
//         type: String,
//         required: true,
//         trim: true,
//     },
//     "instructions": {
//         type: String,
//         required: true,
//         trim: true,
//     },
//     "author": {
//         type: String,
//         required: true,
//         trim: true,
//     },
//     "createdAt": {
//         type: Date,
//         default: Date.now,
//     },
//     "updatedAt": {
//         type: Date,
//         default: Date.now,
//     },
//     "photoUri": {
//         type: String,
//         required: false,
//     }
//     }
// )