import React from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';

export default function App() {
  return (
    <main className="text-black-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Projects />
      <Resume />
      <Contact />
      <Portfolio />
    </main>
  );
}
