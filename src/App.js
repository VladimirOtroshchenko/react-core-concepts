import React from 'react';
import './App.css';
import { Component, FunctionalComponent, PureComponent, CreateElement } from './components';

const  App = () => {
  return (
    <div className="App">
      <Component />
      <FunctionalComponent />
      <PureComponent />
      <CreateElement />
    </div>
  );
}

export default App;
