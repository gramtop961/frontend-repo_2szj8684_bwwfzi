import React from 'react';
import { Routes, Route, Link, Navigate, useLocation } from 'react-router-dom';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';

function NavLink({ to, label }) {
  const location = useLocation();
  const active = location.pathname === to;
  return (
    <Link
      to={to}
      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
        active
          ? 'bg-black text-white dark:bg-white dark:text-black'
          : 'text-gray-700 hover:bg-black/5 dark:text-gray-300 dark:hover:bg-white/10'
      }`}
    >
      {label}
    </Link>
  );
}

function App() {
  return (
    <div className="min-h-screen scroll-smooth antialiased bg-white text-gray-900 dark:bg-black dark:text-white">
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 dark:supports-[backdrop-filter]:bg-black/40 dark:bg-black/60 border-b border-black/5 dark:border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="font-semibold tracking-tight text-lg">Your Name</Link>
          <nav className="flex items-center gap-1">
            <NavLink to="/" label="Home" />
            <NavLink to="/about" label="About" />
            <NavLink to="/projects" label="Projects" />
            <NavLink to="/resume" label="Resume" />
          </nav>
        </div>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <footer className="mt-16 border-t border-black/5 bg-white/70 py-8 text-center text-sm text-gray-600 backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-gray-300">
        © {new Date().getFullYear()} Your Name. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
