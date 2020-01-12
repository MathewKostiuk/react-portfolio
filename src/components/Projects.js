import React from 'react';

import Project from './Project';

import './Projects.scss';

export default function Projects({
  heading,
  cssClass,
  projects,
  openProject
}) {

  const mappedProjects = projects.map((project) => {
    return <Project
      key={project.id}
      id={project.id}
      name={project.name}
      openProject={openProject}
    />;
  });

  return (
    <section className={ cssClass }>
      <h2>{ heading }</h2>
      <ul>
        { mappedProjects }
      </ul>
    </section>
  )
}
