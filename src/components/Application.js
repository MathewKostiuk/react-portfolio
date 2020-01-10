import React  from 'react';

import './Application.scss';

import Introduction from './Introduction';
import DesktopHeader from './DesktopHeader';
import Navigation from './Navigation';
import ProjectSnippet from './ProjectSnippet';
import Footer from './Footer';

// import useApplicationData from '../hooks/useApplicationData';

const classNames = require('classnames');

function App() {
  const mainClass = classNames({
    'main-content': true
  });

  // const { state } = useApplicationData();

  return (
      <main className={mainClass} >
        <DesktopHeader />
        <Navigation />
        <Introduction />
        <ProjectSnippet heading="Current Projects" cssClass="current-projects"/>
      <ProjectSnippet heading="Past Projects" cssClass="past-projects"/>
        <Footer />
      </main>
  );
}

export default App;
