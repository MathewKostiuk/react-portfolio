import React, { useEffect } from 'react';
import './MobileHeader.scss';

import { checkViewportHeight } from '../helpers/checkViewport';
import useVisualMode from '../hooks/useVisualMode';

import Navigation from './Navigation';
import MenuIcon from './MenuIcon';
import CloseIcon from './CloseIcon';

const OPEN = 'OPEN';
const CLOSED = 'CLOSED';

export default function MobileHeader({ setIsBlurred }) {

  const { transition, mobileMenuIsOpen } = useVisualMode(CLOSED);

  useEffect(() => {
    const viewportHeight = checkViewportHeight();
    const mobileNavigation = document.querySelector('.mobile-navigation');
    const mobileHeader = document.querySelector('.mobile-header');
    mobileNavigation.style.height = `${viewportHeight}px`;
    mobileNavigation.style.top = `${mobileHeader.clientHeight}px`
  });

  function onOpen() {
    mobileMenuIsOpen === 'OPEN' ?
      transition(CLOSED) :
      transition(OPEN);
      document.querySelector('.main-content').addEventListener('click', handleBodyClick);
      document.body.style.overflow = 'hidden';
      setIsBlurred(true);
  }

  function onClose() {
    mobileMenuIsOpen === 'CLOSED' ?
      transition(OPEN) :
      transition(CLOSED);
    document.querySelector('.main-content').removeEventListener('click', handleBodyClick);
    setIsBlurred(false);
    document.body.style.overflow = 'auto';
  }

  function handleBodyClick() {
    transition(CLOSED);
    document.querySelector('.main-content').removeEventListener('click', handleBodyClick);
    setIsBlurred(false);
    document.body.style.overflow = 'auto';
  }

  return (
    <header className="mobile-header no-blur">
      <div className="mobile-header__logo">
        <h1>
          Mathew Kostiuk
        </h1>
      </div>
      <Navigation isMobile={true} isMenuOpen={mobileMenuIsOpen} />
      {mobileMenuIsOpen !== 'OPEN' && (
        <MenuIcon onOpen={onOpen} />
      )}
      {mobileMenuIsOpen === 'OPEN' && (
        <CloseIcon onClose={onClose} />
      )}

    </header>
  )
}
