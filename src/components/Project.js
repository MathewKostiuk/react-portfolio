import React from 'react';
import './Project.scss';

export default function Project({
  title,
  description,
  githubLink
}) {

  return (
    <article className="project">
      <figure>
      </figure>

      <h3 className="project__title">{title}</h3>
      <div className="project__description">{description}</div>
      <a className="project__github-link" href={githubLink} target="_blank" rel="noopener noreferrer">GitHub Link</a>
    </article>
  )
}
