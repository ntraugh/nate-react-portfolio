import React from 'react'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import HeroImg from '../components/HeroImg'

const Project = () => {
  return ( <div>
      <Navbar />
      <HeroImg heading="Projects" text="View my projects below" />
      <Footer />
    </div>
  )
}

export default Project