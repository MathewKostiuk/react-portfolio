import React from 'react';
import './Navigation.scss';

const classNames = require('classnames');

export default function Navigation({ isMobile, isMenuOpen }) {

const navClass = classNames({
  'mobile-navigation': isMobile,
  'mobile-navigation__open': isMenuOpen === 'OPEN',
  'desktop-navigation': !isMobile
})

  return (
    <nav className={navClass}>
      <ul>
        <li>
          <a href="#work">
            Work
            </a>
        </li>
        <li>
          <a href="#life">
            Life
            </a>
        </li>
        <li>
          <a href="#balance">
            Balance
            </a>
        </li>
      </ul>
    </nav>
  )
}
