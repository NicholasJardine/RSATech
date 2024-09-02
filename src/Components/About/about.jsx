import React from 'react'
import './about.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
        <div className='about-left'>
            <img src={about_img} alt="" className='about-img'/>
            <img src={play_icon} alt="" className='play-icon'/>

        </div>
        <div className='about-right'>
            <h3>About College</h3>
            <h2>Essential skills training for the next generation</h2>
            <p>Our college is dedicated to equipping students with the practical skills and knowledge needed to thrive in today's tech-driven world. Through intensive bootcamps ranging from 8 to 12 weeks, we offer hands-on training in key areas such as software engineering, data analytics, and cloud computing. Each course is designed to be highly interactive and portfolio-driven, ensuring that students not only gain theoretical understanding but also develop real-world projects that showcase their expertise.</p>
            <p>With a focus on affordability and accessibility, our college aims to make high-quality tech education available to all. Whether you're looking to kickstart a career in technology or upskill for better opportunities, our bootcamps provide the perfect balance of rigorous curriculum, expert instruction, and practical experience. Graduates will leave with the confidence and credentials to succeed in the competitive fields of software development, data science, and cloud engineering.</p>
        </div>    
      
    </div>
  )
}

export default About
