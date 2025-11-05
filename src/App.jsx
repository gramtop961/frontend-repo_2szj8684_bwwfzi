import React from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import ProjectsPreview from './components/ProjectsPreview.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <Header />
      <main className="flex-1">
        <Hero />
        <ProjectsPreview />
      </main>
      <Footer />
    </div>
  );
}

export default App;
