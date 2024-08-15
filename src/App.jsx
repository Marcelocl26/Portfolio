import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import About from './pages/About';
import ParticleBackground from './components/ParticleBackground';
import Contact from './pages/Contact';

import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <ParticleBackground />
        <div className="overlay"></div> {/* Capa semitransparente */}
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="experience" element={<Experience />} />
            <Route path="projects" element={<Projects />} />
            <Route path="contact" element={<Contact />} />
            <Route path="about" element={<About />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
