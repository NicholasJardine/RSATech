import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Bootcamps from './Components/Bootcamps/Bootcamps'
import Title from './Components/Title/Title'
import About from './Components/About/about'
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
      
    </div>
  )
}

export default App
