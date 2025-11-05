import React from 'react';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative w-full scroll-mt-24 bg-white py-20 dark:bg-black">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-10 flex items-center gap-3"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-purple-600 text-white">
            <User className="h-5 w-5" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">About Me</h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="rounded-2xl border border-black/5 bg-white/70 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5"
          >
            <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">Who I am</h3>
            <p className="text-gray-700 dark:text-gray-300">
              I’m a developer and designer focused on building thoughtful, interactive experiences. I care about clean design, performance, and crafting interfaces that feel alive.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl border border-black/5 bg-white/70 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5"
          >
            <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">Skills</h3>
            <ul className="grid grid-cols-2 gap-2 text-gray-700 dark:text-gray-300">
              <li>React / Next.js</li>
              <li>TypeScript</li>
              <li>Framer Motion</li>
              <li>Tailwind CSS</li>
              <li>Node / APIs</li>
              <li>UI/UX Design</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
