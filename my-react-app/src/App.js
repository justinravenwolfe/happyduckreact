import React from 'react';
import Header from './components/Header.js';
import AboutMe from './components/AboutMe.js';
import Portfolio from './components/Porfolio.js'; 
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return(
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </div>
  );
}

export default App;
