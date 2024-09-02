import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <nav className='container'>
      <img src={logo} alt=""  className='logo'/>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Courses</li>
        <li>Testimonials</li>
        <li>Contact us</li>
      </ul>
    </nav>
  )
}

export default Navbar
