import React from 'react';

import './Introduction.scss';

export default function Introduction() {

  return(
    <section id='home' className='introduction'>
      <div className='introduction__text'>
        <h2 className='introduction__text__name'>Hi, my name's <span className='brand-text'>Mathew</span></h2>
        <p className='introduction__text__description'>I'm a <span className='brand-text'>full stack web developer.</span></p>
        <div className='introduction__links'>
          <a className='introduction__link' rel="noopener noreferrer" href='https://github.com/MathewKostiuk' target='_blank'>
            <img className='introduction__icon' src='/images/mark-github.png' alt='GitHub Icon'/>
          </a>
          <a className='introduction__link' rel="noopener noreferrer" href='https://www.linkedin.com/in/mathew-kostiuk-59403a147/' target='_blank'>
            <svg fill="#F0F2F2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50px" height="50px">
              <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  )
}
