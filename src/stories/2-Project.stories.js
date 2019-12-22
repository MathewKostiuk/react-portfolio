import React from 'react';
import Project from '../components/Project';
import '../index.scss';

export default {
  title: 'Project'
};

const props = {
  image: '/images/scheduler.png',
  title: 'Scheduler',
  description: 'A React application that uses Hooks and shows examples of TDD'
}

export const standard = () => <Project image={props.image} title={props.title} description={props.description} />
