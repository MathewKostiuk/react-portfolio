import React, { useState, useEffect } from 'react';

import './Application.scss';

import Introduction from './Introduction';
import ProjectGrid from './ProjectGrid';
import DesktopHeader from './DesktopHeader';
import MobileHeader from './MobileHeader';
import ContactForm from './ContactForm';
import Footer from './Footer';

import { isMobile } from '../helpers/checkViewport';

import useApplicationData from '../hooks/useApplicationData';

const classNames = require('classnames');

function App() {
  const initialMobileCheck = isMobile();
  const [isMobileViewport, setIsMobile] = useState(initialMobileCheck);
  const [isBlurred, setIsBlurred] = useState(false);

  const mainClass = classNames({
    'main-content': true,
    'main-content__blurred': isBlurred
  });

  const { state } = useApplicationData();

  useEffect(() => {
    window.addEventListener('resize', () => {
      isMobile() ? setIsMobile(true) : setIsMobile(false);
    })
  })

  return (
    <>
      {isMobileViewport && (
        <MobileHeader setIsBlurred={setIsBlurred} />
      )}
      {!isMobileViewport && (
        <DesktopHeader />
      )}
      <main className={mainClass} >
        <Introduction />
        <ProjectGrid projects={state.projects} />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}

export default App;
