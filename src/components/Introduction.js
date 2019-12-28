import React, { useEffect } from 'react';

import './Introduction.scss';

export default function Introduction() {

  useEffect(() => {
    const introductionElement = document.querySelector('.introduction');
    introductionElement.style.backgroundImage = `url(/images/coloured-paper.jpg)`;
  });

  return(
    <section className='introduction'>
      <div className='introduction__text'>
        <h2 className='introduction__text__name'>Hi, my name's Mathew</h2>
        <p className='introduction__text__description'>I'm a full stack web developer.</p>
      </div>
    </section>
  )
}
