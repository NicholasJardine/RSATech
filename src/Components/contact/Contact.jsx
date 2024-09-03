import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'

const Contact = () => {
  return (
    <div className='contact'>
      <div className='con-col'>
      <h3>Reach us here <img src={msg_icon} alt="" /></h3>
      <p>You're welcome to contact us using the details provided below. We're here to assist with any inquiries or support you may need. Feel free to reach out, and we'll respond as soon as possible!</p>
      <ul>
        <li>
        <img src={mail_icon} alt=""/>
           support@rsatech.com 
        </li>
        <li> <img src={phone_icon} alt=""/>
           +2766443839
        </li>
        <li > <img src={location_icon} alt=""/>
        1234 Rainbow Street, Greenfields, Johannesburg, 2000, South Africa</li>
      </ul>
      </div>

      <div className='con-col'>
        <form >
            <label>Your Name</label>
            <input type="text" name='name' placeholder='Enter your name' required/>

            <label>Phone Number</label>
            <input type="tel" name='phone' placeholder='Enter mobile number' required/>

            <label>Write your message</label>
            <textarea name="message" rows="6" required></textarea>

            <button type='submit' className='btn-dark'>Submit form</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
