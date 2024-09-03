import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Bootcamps from './Components/Bootcamps/Bootcamps'
import Title from './Components/Title/Title'
import About from './Components/About/about'
import TechGallery from './Components/TechGallery/TechGallery'
import Reviews from './Components/Reviews/Reviews'
import Contact from './Components/contact/Contact'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='container'>
        <Title subTitle ='Our Courses' title='What we offer'/>
      <Bootcamps/>
    
      <About/>
      <Title subTitle ='What you could learn' title='Tech Gallery'/>
    <TechGallery/>

    <Title subTitle ='Student Reviews' title='What our students say'/>
    <Reviews/>
    <Title subTitle ='Contact us' title='Get in touch'/>
    <Contact/>


    </div>

    </div>
    
  )
}

export default App
