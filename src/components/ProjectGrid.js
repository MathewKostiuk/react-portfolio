import React from 'react';
import './ProjectGrid.scss';
import Project from './Project';

export default function ProjectGrid({ projects }) {

  const mappedProjects = projects.map((project) => {
    return <Project
      key={project.id}
      title={project.name}
      description={project.description}
      githubLink={project.github_url}
      image={project.image_url}
    />
  })


  return (
    <section id='portfolio' className="project-grid">
      {mappedProjects}
    </section>
  )
}
