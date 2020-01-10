import React, { useState, useEffect } from 'react';

import './Application.scss';

import Introduction from './Introduction';
import DesktopHeader from './DesktopHeader';
import Footer from './Footer';

// import useApplicationData from '../hooks/useApplicationData';

const classNames = require('classnames');

function App() {
  const mainClass = classNames({
    'main-content': true
  });

  // const { state } = useApplicationData();

  return (
    <>
      <DesktopHeader />
      <main className={mainClass} >
        <Introduction />
      </main>
      <Footer />
    </>
  );
}

export default App;
