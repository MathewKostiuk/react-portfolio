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

const data = [{
    id: 1,
    name: 'Pixel Union'
  },
  {
    id: 2,
    name: 'Insert Name of App'
  },
  {
    id: 3,
    name: 'Learning Japanese'
  }
];

function App() {
  const mainClass = classNames({
    'main-content': true
  });

  const { state, openProject } = useApplicationData(data);

  const currentlyOpenProject = state.projects.filter(project => project.id === state.openProject);

  return (
      <main className={mainClass} >
        <DesktopHeader />
        <Navigation />
        <Introduction />
        <Projects
        heading="Current Projects"
        cssClass="current-projects"
        projects={data}
        openProject={openProject}/>
        {/* <Projects heading="Past Projects" cssClass="past-projects"/> */}
        { state.openProject && (
          <ProjectCard />
        )}
        <Footer />
      </main>
  );
}

export default App;
