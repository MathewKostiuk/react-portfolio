import React from 'react';

import './ProjectCard.scss';

export default function ProjectCard() {

  return (
    <article className='project-card'>
      <div>
        <h2>Pixel Union</h2>
        <h3>Tier 2 Technical Support</h3>
      </div>
      <div className='project-card__details'>
        <h4>Summary:</h4>
        <p>Find & report bugs, fix bugs, commit bugs, repeat.</p>
      </div>
      <div className='project-card__details'>
        <h4>Technologies:</h4>
        <p>Shopify Liquid, HTML, CSS, & JavaScript</p>
      </div>
    </article>
  )
}
