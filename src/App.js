import React from 'react';
import './App.scss';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Home from './containers/home';
import About from './containers/about';
import Resume from './containers/resume';
import Portfolio from './containers/portfolio';
import Skills from './containers/skills';
import Contact from './containers/contact';
import Navbar from './components/navBar';
import ParticlesBackground from './utils.js/particlesBackground';

function App() {
  const location = useLocation();
  const renderparticlesJSInHomepage = location.pathname === "/";

  return (
    <div className="App">
      {renderparticlesJSInHomepage && <ParticlesBackground />}

      {/* ✅ Navbar always visible */}
      <Navbar />

      <div className='App__main-page-content'>
        {/* ✅ AnimatePresence wraps Routes so page exit/enter animations work */}
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
