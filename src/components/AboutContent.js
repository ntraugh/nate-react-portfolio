import React from 'react'
import "./AboutContentStyle.css"
import {Link} from "react-router-dom"
import Raiders from "../images/raiders.jpg"
import Yankees from "../images/yankees.jpg"

const AboutContent = () => {
  return (
    <div className='about-content'>
       <div className='left'>
            <h1>What do I like to do?</h1>
            <p>I enjoy time at my computer just as much as time out with friends.
                A couple of my favorite sports teams include the Yankees and the Raiders.
                My favorite single player video game of all time is The Witcher 3.
            </p>
            <Link to="/contact">
                <button className='btn'>Contact Me</button>
            </Link>
       </div>
       <div className='right'>
            <div className='img-container'>
                <div className='img-stack top'>
                    <img src={Raiders} className="img" alt="raiders"></img>
                </div>
                <div className='img-stack bottom'>
                    <img src={Yankees} className="img" alt="yankees"></img>
                </div>
            </div>
       </div>
    </div>
  )
}

export default AboutContent