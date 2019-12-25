import React from 'react';
import './Header.scss';

export default function Header() {

  return(
    <header className="header">
      <div className="header__logo">
        <h1>
          Mathew Kostiuk
        </h1>
      </div>
      <nav className="header__navigation">
        <ul>
          <li>
            Work
          </li>
          <li>
            Life
          </li>
          <li>
            Balance
          </li>
        </ul>
      </nav>
    </header>
  )
}
