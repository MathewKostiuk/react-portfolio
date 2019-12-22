import React from 'react';
import './Application.scss';
import ProjectGrid from './ProjectGrid';

const data = {
  projects: [
    {
      id: 1,
      title: 'Scheduler',
      image: '/images/scheduler.png',
      description: 'A React application that uses Hooks and shows examples of TDD',
      githubLink: 'https://github.com/MathewKostiuk/react-scheduler'
    },
    {
      id: 2,
      title: 'Lettuce Share',
      image: '/images/lettuce-share.png',
      description: 'Final project at Lighthouse Labs. Built using Ruby on Rails!',
      githubLink: 'https://github.com/MathewKostiuk/final-project'
    },
    {
      id: 3,
      title: 'Tiny App',
      image: '/images/tiny-app.png',
      description: 'A URL shortner using Node & Express with bcrypt',
      githubLink: 'https://github.com/MathewKostiuk/tiny-app'
    },
    {
      id: 4,
      title: 'Jungle',
      image: '/images/jungle-rails.png',
      description: 'An e-commerce website built on Ruby on Rails',
      githubLink: 'https://github.com/MathewKostiuk/jungle-rails'
    },
    {
      id: 5,
      title: 'Map Share',
      image: '/images/mapshare.png',
      description: 'Lighthouse Labs mid-term project built using Node and Express while taking advantage of the Google Maps API',
      githubLink: 'https://github.com/MathewKostiuk/mapshare-lhl-midterm'
    },
    {
      id: 6,
      title: 'Scheduler',
      image: '/images/scheduler.png',
      description: 'A React application that uses Hooks and shows examples of TDD',
      githubLink: 'https://github.com/MathewKostiuk/react-scheduler'
    }
  ]
}

function App() {
  return (
      <ProjectGrid projects={data.projects} />
  );
}

export default App;
