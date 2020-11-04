import React from 'react'
import logo from '../assets/NaturalmuchLogoWhite.svg'
import facebook from '../assets/facebook-logo.svg'
import instagram from '../assets/instagram.svg'
import twitter from '../assets/twitter.svg'

const Footer = () => {
  return (
    <footer>
      <div className='footer-logo'>
        <img src={logo} alt='Naturalmuch Logo' />
        <h5>Subscribe to our newsletter</h5>
      </div>
      <div className='footer-email'>
        <input type='text' placeholder='Email Address'/>
        <button>Send</button>
      </div>
      <h5 className='quick-links'>Quick Links</h5>
      <div className='quick-container'>
        <ul className='ul-1'>
          <li>Blog</li>
          <li>Our Story</li>
          <li>Contact Us</li>
        </ul>
        <ul className='ul-2'>
          <li><img src={facebook} alt='Facebook Logo'/></li>
          <li><img src={instagram} alt='Instagram Logo'/></li>
          <li><img src={twitter} alt='Twitter Logo'/></li>
        </ul>
      </div>
      <p className='copyright'>&copy; Copyright 2020 Naturalmuch. All rights reserved.</p>
    </footer>
  )
}

export default Footer
