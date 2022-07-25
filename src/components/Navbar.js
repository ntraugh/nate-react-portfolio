import "./NavbarStyle.css"
import { FaBars, FaTimes } from "react-icons/fa"
import React, { useState } from 'react'
import { Link } from "react-router-dom"



const Navbar = () => {

  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  return (
    <div className="header">
        <a href="https://www.linkedin.com/in/nate-traugh-7bb18a20a/">
            <h1>LinkedIn</h1>
        </a>
        {/* if else for hamburger menu */}
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Project">Project</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
          {click ? (<FaTimes size={20} style={{color: "white"}} />) 
            : (<FaBars size={20} style={{color: "white"}} />)}
        </div>
    </div>
  )
}

export default Navbar