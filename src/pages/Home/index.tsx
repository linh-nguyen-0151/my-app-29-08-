import React from 'react';
import { IMAGE } from 'assets';
import './style.css';

const HomePage = () => {
  return (
    <div className="app">
      <img src={IMAGE.LOGO_APP} className="app-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </div>
  );
};

export default HomePage;
