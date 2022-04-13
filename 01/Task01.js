import React from 'react';
import Home from '../src/components/Home';
import Contact from '../src/components/Contact';
import { Route } from 'react-router-dom';

const Task01 = () => {
  return (
    <>
      <h1>Task01</h1>
      <Route path='/task01/home' component={Home} />
      <Route path='/task01/contact' component={Contact} />
    </>
  );
};

export default Task01;
