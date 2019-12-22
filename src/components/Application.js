import React from 'react';
import './Application.scss';
import ProjectGrid from './ProjectGrid';

const data = {
  projects: [
    {
      title: 'Scheduler',
      image: '/images/scheduler.png',
      description: 'A React application that uses Hooks and shows examples of TDD',
      link: 'https://github.com/MathewKostiuk/react-scheduler'
    },
    {
      title: 'Lettuce Share',
      image: '/images/lettuce-share.png',
      description: 'Final project at Lighthouse Labs. Built using Ruby on Rails!',
      link: 'lettuceshare.ca'
    },
    {
      title: 'Tiny App',
      image: '/images/tiny-app.png',
      description: 'A URL shortner using Node & Express with bcrypt',
      link: 'https://github.com/MathewKostiuk/tiny-app'
    },
    {
      title: 'Jungle',
      image: '/images/jungle-rails.png',
      description: 'An e-commerce website built on Ruby on Rails',
      link: 'https://morning-ridge-74809.herokuapp.com/'
    },
    {
      title: 'Map Share',
      image: '/images/mapshare.png',
      description: 'Lighthouse Labs mid-term project built using Node and Express while taking advantage of the Google Maps API',
      link: 'https://github.com/MathewKostiuk/mapshare-lhl-midterm'
    },
    {
      title: 'Scheduler',
      image: '/images/scheduler.png',
      description: 'A React application that uses Hooks and shows examples of TDD',
      link: 'https://github.com/MathewKostiuk/react-scheduler'
    }
  ]
}

function App() {
  return (
      <ProjectGrid projects={data.projects} />
  );
}

export default App;
