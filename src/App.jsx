import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Bootcamps from './Components/Bootcamps/Bootcamps'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='container'>
      <Bootcamps/>
      </div>
      
    </div>
  )
}

export default App
