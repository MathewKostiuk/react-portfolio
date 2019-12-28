import React, { useEffect } from 'react';

import './Introduction.scss';

export default function Introduction() {

  return(
    <section className='introduction'>
      <div className='introduction__text'>
        <h2 className='introduction__text__name'>Hi, my name's Mathew</h2>
        <p className='introduction__text__description'>I'm a full stack web developer.</p>
        <a href='https://github.com/MathewKostiuk' target='_blank'>
          <img className='introduction__icon' src='/images/mark-github.png'/>
        </a>
      </div>
    </section>
  )
}
