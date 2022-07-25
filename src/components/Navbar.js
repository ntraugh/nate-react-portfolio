import "./NavbarStyle.css"

import React from 'react'
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="header">
        <a href="https://www.linkedin.com/in/nate-traugh-7bb18a20a/">
            <h1>LinkedIn</h1>
        </a>
        <ul className="nav-menu">
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
    </div>
  )
}

export default Navbar