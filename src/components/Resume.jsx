import React from 'react';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';

const timeline = [
  {
    role: 'Senior Frontend Engineer',
    company: 'Tech Co.',
    period: '2023 — Present',
    points: ['Leading UI architecture', 'Performance optimization', 'Mentoring team'],
  },
  {
    role: 'Frontend Engineer',
    company: 'Startup Inc.',
    period: '2021 — 2023',
    points: ['Built product from 0→1', 'Design system contributor', 'A/B testing'],
  },
];

export default function Resume() {
  return (
    <section id="resume" className="relative w-full scroll-mt-24 bg-white py-20 dark:bg-black">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-10 flex items-center justify-between"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
              <FileText className="h-5 w-5" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Resume</h2>
          </div>
          <a
            href="#"
            className="rounded-full bg-gray-900 px-4 py-2 text-sm text-white transition hover:bg-gray-700 dark:bg-white dark:text-black dark:hover:bg-gray-200"
          >
            Download PDF
          </a>
        </motion.div>

        <div className="space-y-6">
          {timeline.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl border border-black/5 bg-white/70 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{item.role}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{item.company}</p>
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-300">{item.period}</span>
              </div>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-gray-700 dark:text-gray-300">
                {item.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
