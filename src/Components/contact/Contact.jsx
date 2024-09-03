import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'

const Contact = () => {

    const [result, setResult] = React.useState("");
    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "feea802d-ec3f-4c1c-9d24-d5c3f0d4cd1d");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
          setResult("Email sent Successfully! We'll get back to you as soon as possible.");
          event.target.reset();
        } else {
          console.log("Error", data);
          setResult(data.message);
        }
      };
    

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
        1234 Rainbow Street, Greenfields, <br/>Johannesburg, 2000, South Africa</li>
      </ul>
      </div>

      <div className='con-col'>
        <form onSubmit={onSubmit} >
            <label>Your Name</label>
            <input type="text" name='name' placeholder='Enter your name' required/>

            <label>Phone Number</label>
            <input type="tel" name='phone' placeholder='Enter mobile number' required/>

            <label>Write your message</label>
            <textarea name="message" rows="6" required></textarea>

            <button type='submit' className='btn dark-btn'>Send email</button>
        </form>
        <span>{result} </span>
      </div>
    </div>
  )
}

export default Contact
