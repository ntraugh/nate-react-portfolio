import React from 'react'
import "./FooterStyle.css"
import { FaMailBulk, FaGithub, FaLinkedin} from "react-icons/fa"

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='email'>
                    <h4>
                        <FaMailBulk size={20} style={{color: "white", marginRight: "2rem"}}/> 
                       <p>n.traugh@yahoo.com </p>   
                    </h4>
                </div>
            </div>
            <div className='right'>
                <h4>Socials</h4>
                <div className='social'>
                    <a href='https://github.com/ntraugh'>
                        <FaGithub
                            
                            size={30}
                            style={{ color: 'white', 
                            marginRight: "2rem"}}
                        />
                    </a>
                    <a href='https://www.linkedin.com/in/nate-traugh-7bb18a20a/'>
                        <FaLinkedin
                            size={30}
                            style={{color: 'white', 
                            marginRight: "2rem"}}
                        />    
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer