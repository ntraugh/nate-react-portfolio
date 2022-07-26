import React from 'react'
import "./ContactFormStyle.css"
import emailjs from '@emailjs/browser';


const ContactForm = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_h757pq6', 'template_zivpeap', e.target, 'VlQlNjYp5bfyIYVaX')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
  return (
    <div className='form'>
       <form netlify onSubmit={sendEmail}>
        <label>Name</label>
        <input typeof='text' id='name' name='name' placeholder='Name'></input>
        <label>Email</label>
        <input typeof='email' id='email' name='email' placeholder='Email'></input>
        <label>Message</label>
        <textarea rows="6" id='message' name='message' placeholder='Type message here'></textarea>
        <button className='btn' type='sumbit'>Submit</button>
       </form>
    </div>
  )
}

export default ContactForm