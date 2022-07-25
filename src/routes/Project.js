import React from 'react'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import HeroImg from '../components/HeroImg'
import Work from '../components/Work'

const Project = () => {
  return ( <div>
      <Navbar />
      <HeroImg heading="View my projects below"/>
      <Work />
      <Footer />
    </div>
  )
}

export default Project