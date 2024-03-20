import React from 'react';
import Header from './components/Header.js';
import AboutMe from './components/AboutMe.js';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return(
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<AboutMe />} />
      </Routes>
    </div>
  );
}

export default App;
