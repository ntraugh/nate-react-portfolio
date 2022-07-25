import React from 'react'
import "./HeroImgStyle.css"

const HeroImg = (props) => {
  return (
    <div className='hero-img2'>
        <div className='heading'>
            <h1>{props.heading}</h1>
            <p>{props.text}</p>
        </div>  
    </div>
  )
}

export default HeroImg