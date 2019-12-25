import React, { useEffect } from 'react';
import './MobileHeader.scss';

import { checkViewportHeight } from '../helpers/checkViewport';

import Navigation from './Navigation';
import MenuIcon from './MenuIcon';

export default function MobileHeader() {

  useEffect(() => {
    const viewportHeight = checkViewportHeight();
    const mobileNavigation = document.querySelector('.mobile-navigation')
    mobileNavigation.style.height = `${viewportHeight}px`;
  });

  return (
    <header className="mobile-header">
      <div className="mobile-header__logo">
        <h1>
          Mathew Kostiuk
        </h1>
      </div>
      <Navigation isMobile={true} />
      <MenuIcon />
    </header>
  )
}
