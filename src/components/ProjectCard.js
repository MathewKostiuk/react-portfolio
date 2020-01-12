import React from 'react';

import './ProjectCard.scss';

export default function ProjectCard({
  id,
  name,
  position,
  description,
  technologies
}) {

  return (
    <article className='project-card'>
      <div>
        <h2>{name}</h2>
        <h3>{position}</h3>
      </div>
      <div className='project-card__details'>
        <h4>Summary:</h4>
        <p>{description}</p>
      </div>
      <div className='project-card__details'>
        <h4>Technologies:</h4>
        <p>{technologies}</p>
      </div>
    </article>
  )
}
