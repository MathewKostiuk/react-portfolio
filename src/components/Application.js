import React  from 'react';

import './Application.scss';

import Introduction from './Introduction';
import DesktopHeader from './DesktopHeader';
import Navigation from './Navigation';
import Projects from './Projects';
import ProjectCard from './ProjectCard';
import Footer from './Footer';

import useApplicationData from '../hooks/useApplicationData';

const classNames = require('classnames');

function App() {
  const mainClass = classNames({
    'main-content': true
  });

  const { state, openProject } = useApplicationData();

  return (
      <main className={mainClass} >
        <DesktopHeader />
        <Navigation />
        <Introduction />

        { state.projects.currentProjects && (
          <Projects
            heading="Current Projects"
            cssClass="current-projects"
            projects={state.projects.currentProjects}
            openProject={openProject} />
          )}

        {state.projects.pastProjects && (
          <Projects
            heading="Past Projects"
            cssClass="past-projects"
            projects={state.projects.pastProjects}
            openProject={openProject}
          />
        )}

        { state.openProject && (
          <ProjectCard
          key={state.openProject[0].id}
            name={state.openProject[0].name}
            position={state.openProject[0].position}
            description={state.openProject[0].description}
            technologies={state.openProject[0].tech_stack}
          />
        )}

        <Footer />
      </main>
  );
}

export default App;
