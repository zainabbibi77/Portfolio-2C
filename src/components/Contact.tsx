import React from 'react';
import { SiGmail } from "react-icons/si";
import { BsFillTelephoneFill } from "react-icons/bs";
import "../app/styles/contact.css"; // Import the CSS file for styling

const Contact = () => {
  return (
    <div id='contact' className='contact-container'>
        <div className='contact-grid'>
            <div className='contact-left'>
                <h2 className='contact-header' data-aos="zoom-in-up">Reach out to me directly</h2>
                <p className='contact-description' data-aos="zoom-in-up">
                  Drop me a line, give me a call, or send me a message
                </p>
                <div className='contact-info' data-aos="zoom-in-up">
                  <SiGmail size={30} /> xyz@gmail.com
                </div>
                <div className='contact-info' data-aos="zoom-in-up">
                  <BsFillTelephoneFill size={30} /> +92 310 2018984
                </div>
            </div>
            <div className='contact-right'>
              <div className='contact-input-container' data-aos="zoom-in-up">
                <label htmlFor="name">Name</label>
                <input type="text" className='contact-input' id='name' />
              </div>
              
              <div className='contact-input-container' data-aos="zoom-in-up">
                <label htmlFor="email">Email</label>
                <input type="text" className='contact-input' id='email' />
              </div>

              <div className='contact-input-container' data-aos="zoom-in-up">
                <label htmlFor="message">Message</label>
                <textarea className='contact-textarea' id='message' rows={8}></textarea>
              </div>
              <button className='contact-button' data-aos="zoom-in-up">Send</button>
            </div>
        </div>
    </div>
  )
}

export default Contact;
