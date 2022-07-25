import React from 'react'
import "./HeroStyle.css"
import webDev from "../images/webDev.jpg"
import { Link } from "react-router-dom"

const Hero = () => {
  return (
    <div className='hero'>
        <div className='mask'>
            <img className='hero-img' src={ webDev } 
            alt="hero"></img>
        </div>
        <div className='content'>
            <p>Hello, I'm Nate:</p>
            <h1>Professional Web Developer</h1>
            <div>
                <Link to="/project" className='btn'> Project
                </Link>
                <Link to="/About" className='btn btn-light'> About
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Hero