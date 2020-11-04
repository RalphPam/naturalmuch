import React from 'react'
import logo from '../assets/NaturalmuchLogo.svg'
import cart from '../assets/shopping_cart-24px.svg'

function Navbar() {
  return (
    <nav className='nav-container'>
      <ul className='nav-links'>
        <li>Home</li>
        <li>Blog</li>
        <li>Our Story</li>
      </ul>
      <img className='naturalmuch' src={logo} alt='Naturalmuch Logo' />
      <div className='cart-container'>
        <img className='cart' src={cart} alt='Shopping Cart' />
        <button className='nav-btn'>Log in / Sign up</button>
      </div>
    </nav>
  )
}

export default Navbar
