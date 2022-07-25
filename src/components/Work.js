import React from 'react'
import "./ProjectCardStyle.css"
import ProjectCard from './ProjectCard'
import { Projects } from './ProjectCardData'




const Project = () => {
  return (
    <div className='work-container'>
        <div className='project-container'>
           {Projects.map((project, index) => {
                return (
                    <ProjectCard 
                    key={index}
                    image={project.image}
                    title={project.title}
                    text={project.text}
                    website={project.website}
                    />
                )
           })}
        </div>
    </div>
  )
}

export default Project