import React from 'react';
import Header from './components/Header.js';
import AboutMe from './components/AboutMe.js';
import Portfolio from './components/Porfolio.js'; 
import Contact from './components/Contact.js';
import Resume from './components/Resume.js' 
import Footer from './components/Footer.js'; 
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return(
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <Footer /> 
    </div>
  );
}

export default App;
