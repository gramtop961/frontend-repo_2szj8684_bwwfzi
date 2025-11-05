import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="border-t border-white/10 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="text-sm text-slate-400">© {new Date().getFullYear()} Dev Portfolio. All rights reserved.</p>
            <p className="text-sm text-slate-500 mt-1">Built with React, Tailwind, and a 3D Spline scene.</p>
          </div>
          <div className="flex items-center gap-4 text-sm text-slate-300">
            <a className="hover:text-white transition-colors" href="#">LinkedIn</a>
            <a className="hover:text-white transition-colors" href="#">GitHub</a>
            <a className="hover:text-white transition-colors" href="mailto:hello@example.com">Email</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
