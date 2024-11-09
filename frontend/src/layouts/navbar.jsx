import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'


const navbar = () => {
  return (
    <div className='navbar' style={{position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000}}>
        <div className="site-info">
            <div className="logo">
                <img src="" alt="" />
            </div>
            <div className="site-title">
                <h1>ONLY FIVE ⭐ Recipe App</h1>
            </div>
        </div>
        <div className="nav-links">
            <ul>
                <Link to='/'>
                    <li className='nav-link'>Home</li>
                </Link>
                <Link to='/recipes'>
                    <li className='nav-link'>Recipes</li>
                </Link>
                <Link to='/about'>
                    <li className='nav-link'>About</li>
                </Link>
                <Link to='/contact'>
                    <li className='nav-link'>Contact</li>
                </Link>
                <Link to='/profile'>
                    <li className='nav-link'>Profile</li>
                </Link>
                <Link to='/login'>
                    <li className='nav-link'>Login</li>
                </Link>
                <Link to='/register'>
                    <li className='nav-link'>Register</li>
                </Link>
            </ul>
        </div>
    </div>
  )
}

export default navbar
