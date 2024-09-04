import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Bootcamps from './Components/Bootcamps/Bootcamps'
import Title from './Components/Title/Title'
import About from './Components/About/about'
import TechGallery from './Components/TechGallery/TechGallery'
import Reviews from './Components/Reviews/Reviews'
import Contact from './Components/contact/Contact'
import Footer from './Components/Footer/Footer'
import Video from './Components/video/Video'

const App = () => {

  const [playState, setPlayState] = useState(false);
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='container'>
        <Title subTitle ='Our Courses' title='What we offer'/>
      <Bootcamps/>
    
      <About setPlayState={setPlayState}/>
      <Title subTitle ='What you could learn' title='Tech Gallery'/>
    <TechGallery/>

    <Title subTitle ='Student Reviews' title='What our students say'/>
    <Reviews/>
    <Title subTitle ='Contact us' title='Get in touch'/>
    <Contact/>
    <Footer/>


    </div>
    <Video playState={playState} setPlayState={setPlayState}/>
    </div>
    
  )
}

export default App
