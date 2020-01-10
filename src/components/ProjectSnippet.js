import React from 'react';

import './ProjectSnippet.scss';

export default function ProjectSnippet({
  heading,
  cssClass
}) {
  return (
    <section className={ cssClass }>
      <h2>{ heading }</h2>
      <p>
        Pixel Union - Tier 2 Technical Support
      </p>
      <p>
        Insert name of app I'm working on
      </p>
      <p>
        Learning Japanese
      </p>
    </section>
  )
}
