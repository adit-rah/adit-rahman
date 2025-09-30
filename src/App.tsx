import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Terminal from './components/Terminal';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <Terminal>
            <Home />
          </Terminal>
        } />
        <Route path="/about" element={
          <Terminal>
            <About />
          </Terminal>
        } />
        <Route path="/projects" element={
          <Terminal>
            <Projects />
          </Terminal>
        } />
        <Route path="/resume" element={
          <Terminal>
            <Resume />
          </Terminal>
        } />
        <Route path="/blog" element={
          <Terminal>
            <Blog />
          </Terminal>
        } />
        <Route path="/contact" element={
          <Terminal>
            <Contact />
          </Terminal>
        } />
      </Routes>
    </Router>
  );
}

export default App;
