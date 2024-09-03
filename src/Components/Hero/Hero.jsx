import React from 'react'
import'./Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
const Hero = () => {
  return (
    <div className='hero container'>
      <div className='hero-text'>
        <h1>Design, build, and deploy! Your career starts here</h1>
        <p>Learn modern skills to stand out above the rest! Our portfolio driven bootcamps are designed to transform  your skill set and altert the path of your career.</p>
        <button className='btn'>Learn More <img src={dark_arrow} alt="" /></button>
      </div>
      
    </div>
  )
}

export default Hero
