import React, {useState} from 'react'
import "./ContactFormStyle.css"
import emailjs from '@emailjs/browser';


const ContactForm = () => {
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);

  function isValidEmail(email) {
    return /\S+@\S+\.\S+./.test(email);
  }

  const handleChange = event => {
    if (!isValidEmail(event.target.value)) {
      setError('Email is invalid');
    } else {
      setError(null);
    }

    setMessage(event.target.value);
  };
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
        <input typeof='text' id='name' name='name' required="true" placeholder='Name'></input>
        <label>Email</label>
        <input typeof='email' id='email' name='email'required="true" value={message} onChange={handleChange} placeholder='Email'/>
        {error && <h2 style={{color: "red"}}>{error}</h2>}
        <label>Message</label>
        <textarea rows="6" id='message' name='message' required="true" placeholder='Type message here'></textarea>
        {!error && <button className='btn' type='sumbit'>Submit</button>}
       </form>
    </div>
  )
}

export default ContactForm