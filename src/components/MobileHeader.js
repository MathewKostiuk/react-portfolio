import React from 'react';
import './MobileHeader.scss';

import Navigation from './Navigation';
import MenuIcon from './MenuIcon';

export default function MobileHeader() {

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
