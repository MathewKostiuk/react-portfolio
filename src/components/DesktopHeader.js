import React from 'react';

import './DesktopHeader.scss';

import Navigation from './Navigation';

export default function DesktopHeader() {

  return(
    <header className="desktop-header">
      <div className="name">
        <span>Mathew / マシュー</span>
      </div>
      <Navigation
      />
    </header>
  )
}
