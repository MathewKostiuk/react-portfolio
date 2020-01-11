import React from 'react';

import './ProjectSnippet.scss';

export default function ProjectSnippet({
  heading,
  cssClass
}) {
  return (
    <section className={ cssClass }>
      <h2>{ heading }</h2>
      <ul>
        <li>
          Pixel Union - Tier 2 Technical Support
        </li>
        <li>
          Insert name of app I'm working on
        </li>
        <li>
          Learning Japanese
        </li>
      </ul>
    </section>
  )
}
