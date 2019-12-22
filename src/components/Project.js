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
      <img className="project__image" src={image}alt="demo-project"/>
      <h1 className="project__title">{title}</h1>
      <div className="project__description">{description}</div>
    </article>
  )
}
