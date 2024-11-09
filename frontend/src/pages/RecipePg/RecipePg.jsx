import React, { useState } from 'react'
import Recipe from '../../components/recipe'
import './recipepg.css'

const Recipes = () => {
  const [recipes, setRecipes] = useState([
    {
      title: 'Thin Crust Pizza',
      ingredients: 'Pizza',
      instructions: 'instructions',
      author: 'Author',
      photoUri: 'https://media.istockphoto.com/id/1442417585/photo/person-getting-a-piece-of-cheesy-pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=k60TjxKIOIxJpd4F4yLMVjsniB4W1BpEV4Mi_nb4uJU=',
    },
    {
      title: 'All American Hamburger',
      ingredients: 'Burger',
      instructions: 'Burger',
      author: 'Burger',
      photoUri: 'https://media.istockphoto.com/id/2150300131/photo/cheeseburger-with-fries-on-plate-and-cola-restaurant-table.webp?a=1&b=1&s=612x612&w=0&k=20&c=gi94Lgw5MxbvBZaQsBeHWp6__OZxgcFX7IlbKYwuDYY=',
    },
    {
      title: 'Grilled Garlic Lobster',
      ingredients: 'lobster, garlic, lemon...',
      instructions: 'Spaghetti',
      author: 'Salvatore DeSilva',
      photoUri: 'https://asweetandsavorylife.com/wp-content/uploads/2018/08/3s-Charred-Lobster-with-Garlic-Lemon-Butter.jpg',
    },
    {
      title: 'Pan-seared Chicken',
      ingredients: 'Chicken, olive oil, paprika...',
      instructions: 'Preheat oven to 425...',
      author: 'Patricia Collins',
      photoUri: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNoaWNrZW4lMjBkaW5uZXJ8ZW58MHx8MHx8fDI%3D',
    },
    {
      title: 'Pan-seared Garlic Steak',
      ingredients: 'sirloin steak, garlic cloves, mozzarella...',
      instructions: 'Preheat oven to 375...',
      author: 'Don Escobar',
      photoUri: 'https://www.lemonblossoms.com/wp-content/uploads/2018/05/Pan_Seared_Steak_Recipe_S3-500x500.jpg',
    },
    {
      title: 'Rosemary Chicken Lasagna',
      ingredients: 'Chicken, rosemary, feta...',
      instructions: 'Preheat oven to 375...',
      author: 'Esther Role',
      photoUri: 'https://www.feastingathome.com/wp-content/uploads/2013/01/Chicken-Lasagna.jpg',
    }
  ]);

  return (
    <div className="recipe-pg">
      <div className="recipe-grid">
        {recipes.map((recipe, index) => {
          return (
            <Recipe key={index} recipe={recipe} />
          )
        })}
      </div>
    </div>
  )
}

export default Recipes
