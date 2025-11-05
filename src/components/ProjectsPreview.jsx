import React from 'react';
import { ExternalLink, Layout, Globe, ShieldCheck } from 'lucide-react';

const projects = [
  {
    title: 'Design System Toolkit',
    description: 'Component library with tokens, theming, and accessibility baked in.',
    icon: <Layout size={18} />,
    link: '#',
    tag: 'Frontend'
  },
  {
    title: 'API Gateway Service',
    description: 'FastAPI-based gateway with rate limiting and auth strategies.',
    icon: <ShieldCheck size={18} />,
    link: '#',
    tag: 'Backend'
  },
  {
    title: 'Global Content Platform',
    description: 'Internationalized site with edge-rendering and analytics.',
    icon: <Globe size={18} />,
    link: '#',
    tag: 'Full‑stack'
  }
];

const ProjectsPreview = () => {
  return (
    <section id="projects" className="relative py-20 sm:py-24 lg:py-28 border-t border-white/10 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Featured work</h2>
          <p className="mt-2 text-slate-300/90">A snapshot of projects that highlight product thinking, DX, and performance.</p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, idx) => (
            <a
              key={idx}
              href={p.link}
              className="group rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-5 hover:border-white/20 transition-colors"
            >
              <div className="flex items-center gap-3 text-indigo-300">
                <div className="p-2 rounded-md bg-indigo-500/15 border border-indigo-400/30">
                  {p.icon}
                </div>
                <span className="text-xs font-medium uppercase tracking-wide text-indigo-200/90">{p.tag}</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold group-hover:text-white">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-300/90">{p.description}</p>
              <div className="mt-4 inline-flex items-center gap-1 text-sm text-indigo-300 group-hover:gap-1.5 transition-all">
                View details <ExternalLink size={14} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPreview;
