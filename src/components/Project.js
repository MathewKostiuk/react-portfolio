import React from 'react';
import './Project.scss';

export default function Project() {

  return (
    <article className="project">
      <img className="project__image" src="/images/scheduler.png"alt="demo-project"/>
      <h1 className="project__title">Scheduler</h1>
      <div className="project__description">A React application that uses Hooks and shows examples of TDD</div>
    </article>
  )
}
