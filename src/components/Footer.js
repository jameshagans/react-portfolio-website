import React from 'react';
import './Footer.css';
import Button from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <div class='footer-links'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
        I'd love to get in contact with you, so please feel free to reach me through my contact information or social mdia platforms.
        </p>
      </section>
        <div className='footer-link-wrapper'>
        
          <div class='footer-link-items'>
            <h2>Contact</h2>
            <Link to='mailto:jamesy.h95@gmail.com'>Email</Link>
            <Link to='tel:672-514-7025'>Phone</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
        
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='https://www.linkedin.com/in/james-hagans/'>LinkedIn</Link>
            <Link to='https://github.com/jameshagans'>Github</Link>
            <Link to='https://www.instagram.com/jamesy.h/'>Instagram</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              JJH 
              <i class='fas fa-fire' />
            </Link>
          </div>
          <small class='website-rights'>JJH © 2023</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='https://www.facebook.com/james.hagans2'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='https://www.instagram.com/jamesy.h/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='https://www.linkedin.com/in/james-hagans/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;