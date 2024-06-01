import React from 'react'
import '../styles/contact.css'

import { FaLinkedin } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

function Contact() {
  return (
    <div className='contact-container'>
        <h1>Contact Me</h1>
        <hr className='hr-divider'/>
            <a href='https://www.linkedin.com/in/jackkieny/' 
                target='_blank'
                rel='noreferrer noopener'
                className='contact-link contact-section'>
                <FaLinkedin className='contact-icon'/>
                <p>LinkedIn</p>
            </a>
            <a href='mailto:jackkieny@cox.net'
                className='contact-link contact-section'>
                <CiMail className='contact-icon'/>
                <p>jackkieny@cox.net</p>
            </a>
    </div>
  )
}

export default Contact