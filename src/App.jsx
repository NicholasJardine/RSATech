import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Bootcamps from './Components/Bootcamps/Bootcamps'
import Title from './Components/Title/Title'
import About from './Components/About/about'
import TechGallery from './Components/TechGallery/TechGallery'
import Reviews from './Components/Reviews/Reviews'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='container'>
        <Title subTitle ='Our Courses' title='What we offer'/>
      <Bootcamps/>
      </div>
      <About/>
      <Title subTitle ='What you could learn' title='Tech Gallery'/>
    <TechGallery/>

    <div className='container'> 
    <Title subTitle ='Student Reviews' title='What our students say'/>
    <Reviews/>
    </div>

    </div>
    
  )
}

export default App
