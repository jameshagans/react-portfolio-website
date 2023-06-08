import React from 'react'
import Button from './Button'
import './HeroSection.css'
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/video-1.mp4" autoPlay loop muted /> 
      {/* <h1>James Hagans</h1> */}
      <img className='profile' src='/images/profile_img_gray.jpeg' />
      <p>Full Stack Developer/Technical Team Lead</p>
      <div className="hero-btns">
      <a href="/images/resume.pdf" target="_blank" rel="noopener noreferrer" download>
          <button className="download-btn" buttonStyle="btn--outline" buttonSize="btn--large">
            VIEW RESUME
          </button>
        </a>
        {/* <Button className="btns" buttonStyle="btn--primary" buttonSize="btn--large">
          WATCH TRAILER <i className='fas fa-play-circle' />
        </Button> */}
      </div>
    </div>
  )
}

export default HeroSection
