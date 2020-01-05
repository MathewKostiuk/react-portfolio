import React from 'react';
import './ProjectGrid.scss';
import Project from './Project';

import useApplicationData from '../hooks/useApplicationData';

export default function ProjectGrid({ projects }) {

  useApplicationData();

  const mappedProjects = projects.map((project) => {
    return <Project
      key={project.id}
      image={project.image}
      title={project.title}
      description={project.description}
      githubLink={project.githubLink}
    />
  })


  return (
    <section id='portfolio' className="project-grid">
      {mappedProjects}
    </section>
  )
}
