import React from 'react';

import './DesktopHeader.scss';

import Navigation from './Navigation';

export default function DesktopHeader() {

  return(
    <header className="desktop-header">
      <div className="desktop-header__logo">
        <h1>
          Mathew Kostiuk
        </h1>
      </div>
      <Navigation
        isMobile={false}
      />
    </header>
  )
}
