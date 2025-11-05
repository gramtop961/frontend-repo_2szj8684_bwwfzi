import React from 'react';
import { Code2, Github, Mail } from 'lucide-react';

const Header = () => {
  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-md bg-indigo-500/20 text-indigo-300 border border-indigo-400/30">
            <Code2 size={18} />
          </div>
          <span className="font-semibold tracking-tight">Dev Portfolio</span>
        </div>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-slate-300">
          <a className="hover:text-white transition-colors" href="#projects">Projects</a>
          <a className="hover:text-white transition-colors" href="#contact">Contact</a>
          <a className="hover:text-white transition-colors inline-flex items-center gap-1" href="https://github.com" target="_blank" rel="noreferrer">
            <Github size={16} /> GitHub
          </a>
          <a className="hover:text-white transition-colors inline-flex items-center gap-1" href="mailto:hello@example.com">
            <Mail size={16} /> Email
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
