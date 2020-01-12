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
    name: 'Pixel Union',
    position: 'Tier 2 Technical Support',
    summary: 'Find & report bugs, fix bugs, commit bugs, repeat.',
    technologies: 'Shopify Liquid, HTML, CSS, & JavaScript'
  },
  {
    id: 2,
    name: 'Insert Name of App',
    position: 'Founder/CEO/CTO',
    summary: 'A currenlty non-existant full-stack web-application',
    technologies: 'All of the most modern bells and whistles on the block currently'
  },
  {
    id: 3,
    name: 'Learning Japanese',
    position: '学生',
    summary: 'Self-learning one of the hardest languages to learn as a native English speaker.',
    technologies: 'Duolingo, Anki Decks, YouTube.'
  }
];

function App() {
  const mainClass = classNames({
    'main-content': true
  });

  const { state, openProject } = useApplicationData(data);

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
          <ProjectCard
          key={state.openProject[0].id}
            name={state.openProject[0].name}
            position={state.openProject[0].position}
            summary={state.openProject[0].summary}
            technologies={state.openProject[0].technologies}
          />
        )}
        <Footer />
      </main>
  );
}

export default App;
