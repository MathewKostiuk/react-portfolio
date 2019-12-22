import React from 'react';
import './Project.scss';

export default function Project({
  image,
  title,
  description,
  link
}) {

  return (
    <article className="project">
      <figure>
        <img className="project__image" src={image} alt="demo-project" />
      </figure>

      <h1 className="project__title">{title}</h1>
      <div className="project__description">{description}</div>
      <a className="project__link" src={link} >GitHub</a>
    </article>
  )
}
