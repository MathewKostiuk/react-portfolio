import React from 'react';
import './ProjectGrid.scss';
import Project from './Project';

export default function ProjectGrid({ projects }) {

  const mappedProjects = projects.map((project) => {
    return <Project
      image={project.image}
      title={project.title}
      description={project.description}
      link={project.link}
    />
  })


  return (
    <section className="project-grid">
      {mappedProjects}
    </section>
  )
}
