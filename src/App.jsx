import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';

function App() {
  return (
    <div className="scroll-smooth antialiased bg-white text-gray-900 dark:bg-black dark:text-white">
      <Hero />
      <About />
      <Projects />
      <Resume />
      <footer className="border-t border-black/5 bg-white/70 py-8 text-center text-sm text-gray-600 backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-gray-300">
        © {new Date().getFullYear()} Your Name. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
