import React from 'react'
import './Navbar.scss';

function Navbar() {
  return (
    <>
      <div className="sticky-wrapper">
        <div className="nav-bar">
          <div className="nav-logo family-oswald">EXPERT</div>
          <ul className="site-menu">
            <li><a href="#home" className="nav-link">Home</a></li>
            <li><a href="#project" className="nav-link">Project</a></li>
            <li><a href="#process" className="nav-link">Process</a></li>
            <li><a href="#testimonials" className="nav-link">Testimonials</a></li>
            <li><a href="#services" className="nav-link">Services</a></li>
          </ul>
          <ul className="site-menu ml-auto">
            <li><a href="#pricing" className="nav-link">Pricing</a></li>
            <li><a href="#contact" className="nav-link">Contact</a></li>
          </ul>
        </div>
      </div>      
    </>
  )
}

export default Navbar