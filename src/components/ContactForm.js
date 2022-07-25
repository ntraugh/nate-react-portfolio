import React from 'react'
import "./ContactFormStyle.css"

const ContactForm = () => {
  return (
    <div className='form'>
       <form>
        <label>Name</label>
        <input typeof='text' placeholder='Name'></input>
        <label>Email</label>
        <input typeof='email' placeholder='Email'></input>
        <label>Message</label>
        <textarea rows="6" placeholder='Type message here'></textarea>
        <button className='btn'>Submit</button>
       </form>
    </div>
  )
}

export default ContactForm