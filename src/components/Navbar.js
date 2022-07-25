import "./NavbarStyle.css"
import { FaBars, FaTimes } from "react-icons/fa"
import React, { useState } from 'react'
import { Link } from "react-router-dom"



const Navbar = () => {

  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)

  const [color, setColor] = useState(false)
  const changeColor = () => {
    if(window.scrollY >= 1){
      setColor(true)
    }else{
      setColor(false)
    }
  }

  window.addEventListener("scroll", changeColor)
  return (
    <div className={color ? "header header-bg" : "header"}>
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