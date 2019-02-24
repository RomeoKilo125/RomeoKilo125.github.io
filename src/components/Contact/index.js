import React from 'react';
import './style.css'

function Contact() {
  return (<div className='contact contact-grid'>
    <div className='contact contact-item'>
      <a href='https://twitter.com/RomeoKilo125' target='blank'>
        <i class="fab fa-twitter"></i>
      </a>
    </div>
    <div className='contact contact-item'>
      <a href='https://github.com/RomeoKilo125' target='blank'>
        <i class="fab fa-github"></i>
      </a>
    </div>
    <div className='contact contact-item'>
      <a href='https://linkedin.com/in/romeokilo125/' target='blank'>
        <i class="fab fa-linkedin-in"></i>
      </a>
    </div>
    <div></div>
    <div className='contact contact-item'>
      <a href='mailto:RomeoKilo125@gmail.com' target='blank'>
        <i class="fas fa-envelope"></i>
      </a>
    </div>
  </div>)
}

export default Contact;
