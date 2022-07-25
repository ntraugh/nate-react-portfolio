import React from 'react'
import "./ProjectCardStyle.css"
import { NavLink } from "react-router-dom"



const ProjectCard = (props) => {
  return (
    <div className='work-container'>
        <div className='project-container'>
            <div className='project-card'>
                <img src={props.image} alt='project' />
                <h2 className='project-title'>{props.title}</h2>
                <div className='project-details'>
                    <p style={{color: 'black'}}>{props.text}</p>
                    <div className='pro-btns'>
                        <a href='{props.website}' className="btn">Live Site</a>
                        <NavLink to="url.com" className="btn">Repository</NavLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard