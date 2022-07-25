import React from 'react'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import HeroImg from '../components/HeroImg'

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImg heading="About Me" text="A little bit about me" />
      <Footer />
    </div>
  )
}

export default About