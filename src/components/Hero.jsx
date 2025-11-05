import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section id="home" className="relative h-[100svh] w-full overflow-hidden">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Subtle gradient overlay for readability */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/20 to-white/90 dark:from-black/80 dark:via-black/20 dark:to-black/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col px-6">
        {/* Brand */}
        <div className="flex items-center justify-between py-6">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-semibold tracking-tight text-gray-900 dark:text-gray-100"
          >
            My Portfolio
          </motion.div>
        </div>

        {/* Hero copy */}
        <div className="flex grow flex-col items-start justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl font-extrabold leading-tight text-gray-900 sm:text-6xl dark:text-white"
          >
            Hi, I’m <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">Your Name</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-4 max-w-xl text-base text-gray-700 sm:text-lg dark:text-gray-300"
          >
            I craft modern, playful, and interactive digital experiences. Explore my work, learn more about me, and see my resume below.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 flex flex-wrap items-center gap-3"
          >
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-3 text-white shadow-lg shadow-blue-600/20 transition hover:brightness-110"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <div className="ml-2 flex items-center gap-2 rounded-full bg-white/70 px-2 py-2 backdrop-blur dark:bg-black/40">
              <a href="mailto:you@example.com" aria-label="Email" className="rounded-full p-2 hover:bg-black/5 dark:hover:bg-white/10">
                <Mail className="h-5 w-5 text-gray-700 dark:text-gray-200" />
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub" className="rounded-full p-2 hover:bg-black/5 dark:hover:bg-white/10">
                <Github className="h-5 w-5 text-gray-700 dark:text-gray-200" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="rounded-full p-2 hover:bg-black/5 dark:hover:bg-white/10">
                <Linkedin className="h-5 w-5 text-gray-700 dark:text-gray-200" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mb-8 flex items-center justify-center"
        >
          <Link to="/about" className="rounded-full border border-black/10 bg-white/70 px-4 py-2 text-xs text-gray-700 backdrop-blur transition hover:bg-white dark:border-white/10 dark:bg-black/40 dark:text-gray-200 dark:hover:bg-black/60">
            Learn more about me
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
