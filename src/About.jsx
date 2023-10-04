import React from 'react'
import "./about.css"
import Navbar from "./Navbar"
import How from './How'
import Team from './Team'
import Features from './Features'
import Footer from "./Footer"
import { Link } from 'react-router-dom'


const About = () => {
  return (
    <div>
      <Navbar />
      <div className="url">
        <div className="container">
            <div>
                <h3>
                    <Link to='/'>Home</Link>
                </h3>
                <span>/</span>
                <h3>
                    About
                </h3>
            </div>
        </div>
    </div>
      <How />
      <Team />
      <Features />
      <Footer />
    </div>



  )
}

export default About