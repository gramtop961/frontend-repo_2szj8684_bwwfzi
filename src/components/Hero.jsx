import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Sparkles } from 'lucide-react';

const DEV_SPLINE_URL = 'https://prod.spline.design/6YVwBEm90LkAMPxS/scene.splinecode';

const Hero = () => {
  return (
    <section className="relative min-h-[86vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene={DEV_SPLINE_URL} style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(17,24,39,0)_0%,rgba(17,24,39,0.2)_40%,rgba(17,24,39,0.65)_65%,rgba(17,24,39,0.9)_100%)]" />

      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-28 lg:py-32">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-indigo-300/90 bg-indigo-500/10 border border-indigo-400/30 rounded-full px-3 py-1">
              <Sparkles size={16} />
              <span className="text-xs font-medium tracking-wide">Software Developer</span>
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight">
              Building delightful software experiences
            </h1>
            <p className="mt-4 text-slate-300/90 text-base sm:text-lg">
              I craft performant web apps with React, TypeScript, and modern backend APIs.
              Explore a selection of recent projects and experiments below.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="inline-flex items-center gap-2 rounded-md bg-indigo-500 px-4 py-2 text-white shadow-sm hover:bg-indigo-400 transition-colors">
                View Projects <ArrowRight size={16} />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-4 py-2 text-slate-100 hover:bg-white/10 transition-colors">
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
