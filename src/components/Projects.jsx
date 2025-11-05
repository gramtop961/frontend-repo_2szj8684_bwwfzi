import React from 'react';
import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';

const projects = [
  {
    title: 'Interactive Portfolio',
    description: 'A playful, modern 3D-enhanced portfolio with Framer Motion and Spline.',
    tags: ['React', 'Framer Motion', 'Spline', 'Tailwind'],
    link: '#',
  },
  {
    title: 'E-commerce UI',
    description: 'High-performance storefront with delightful micro-interactions and accessibility first.',
    tags: ['Next.js', 'TypeScript', 'Tailwind'],
    link: '#',
  },
  {
    title: 'Design System',
    description: 'A scalable component library following shadcn patterns and Radix primitives.',
    tags: ['Storybook', 'Radix', 'Design Tokens'],
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative w-full scroll-mt-24 bg-gradient-to-b from-white to-white dark:from-black dark:to-black py-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-10 flex items-center gap-3"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-pink-600 text-white">
            <Rocket className="h-5 w-5" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Featured Projects</h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, idx) => (
            <motion.a
              key={p.title}
              href={p.link}
              target={p.link?.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-black/5 bg-white/70 p-5 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-white/5"
            >
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-purple-500/10 to-blue-500/10" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{p.title}</h3>
              <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full border border-black/10 px-3 py-1 text-xs text-gray-700 dark:border-white/10 dark:text-gray-300">
                    {t}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
