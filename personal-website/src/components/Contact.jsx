import React from 'react'
import "./CSS/contact.css"

const Contact = () => {
  return (
    <>
        <div className='contact-main'>
            <div className='contact-heading font2 gradient'>
                Contact Info
            </div>
        <div className='contact-container'>
            <div className='email font4'>
                <div className='text'>
                    Email
                </div>
                <div className='email-id'>
                    <a href='mailto:kartikay6840@gmail.com' target='_blank'>
                        kartikay6840@gmail.com
                    </a>
                </div>
            </div>

            {/* <div className='phone font4'>
                <div className='text'>
                    Phone
                </div>
                <div className='phone-number font4'>
                    <a>
                        +91 - 9599 - 0586 - 99
                    </a>
                </div>
            </div> */}
        </div>
            
        </div>
    </>
  )
}

export default Contact
