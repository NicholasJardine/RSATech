import React from 'react'
import './bootcamps.css'
import program_1 from '../../assets/program-1.png'
import program_2 from '../../assets/program-2.png'
import program_3 from '../../assets/program-3.png'
import program_icon_1 from '../../assets/program-icon-1.png'
import program_icon_2 from '../../assets/program-icon-2.png'
import program_icon_3 from '../../assets/program-icon-3.png'

const Bootcamps = () => {
  return (
    <div className='bootcamps'>
        <div className="bootcamp">
            <img src={program_1} alt="" />
            <div className='campname'>
            <img src={program_icon_1} alt="" /> 
            <p>Mobile & Web</p>
        </div>
        </div>

        <div className="bootcamp">
            <img src={program_2} alt="" />
            <div className='campname'>
            <img src={program_icon_2} alt="" /> 
            <p>AWS Cloud practitioner</p>
        </div>
        </div>

        <div className="bootcamp">
            <img src={program_3} alt="" />
            <div className='campname'>
            <img src={program_icon_3} alt="" /> 
            <p>Solutions Architecture 101</p>
        </div>
        </div>

      
    </div>
  )
}

export default Bootcamps
