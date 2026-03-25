'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { personalInfo, roles, stats } from '@/data/portfolio';
import { useTypewriter } from '@/hooks/useTypewriter';

const socialLinks = [
  {
    icon: Linkedin,
    href: `https://${personalInfo.linkedin}`,
    label: 'LinkedIn',
  },
  {
    icon: Github,
    href: 'https://github.com/biswajit-mohanty',
    label: 'GitHub',
  },
  {
    icon: Mail,
    href: `mailto:${personalInfo.email}`,
    label: 'Email',
  },
];

const codeSnippet = `// Technical Lead @ HCL
const architect = {
  name: "Biswajit Mohanty",
  focus: ["Microservices", "Cloud"],
  stack: ["Java", "React", "AWS"],
  impact: "10M+ transactions/day",
  team: "12+ engineers",
};

architect.buildScalableSystems();`;

export default function Hero() {
  const { displayText, isTyping } = useTypewriter({
    words: roles,
    typingSpeed: 80,
    deletingSpeed: 50,
    pauseDuration: 2000,
  });


  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0a1a]"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="gradient-mesh" />

      {/* Animated orbs */}
      <div className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full bg-[#00d4ff]/5 blur-[80px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-[#7c3aed]/5 blur-[100px] animate-pulse-slow" style={{ animationDelay: '2s' }} />

      {/* Vertical social links */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-5 z-10">
        {socialLinks.map((social, index) => (
          <motion.a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className="text-[#64748b] hover:text-[#00d4ff] transition-colors"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 + index * 0.1 }}
            whileHover={{ scale: 1.2, x: 3 }}
          >
            <social.icon size={18} />
          </motion.a>
        ))}
        <div className="w-px h-16 bg-gradient-to-b from-[#64748b] to-transparent mt-2" />
      </div>

      {/* Main content */}
      <div className="container-custom relative z-10 pt-20 pb-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left column */}
          <div className="flex flex-col">
            {/* Status badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card w-fit mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm text-[#94a3b8]">Available for freelance projects</span>
            </motion.div>

            {/* Greeting */}
            <motion.p
              className="text-[#94a3b8] text-lg mb-2 font-mono"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              Hi, I&apos;m
            </motion.p>

            {/* Name */}
            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <span className="gradient-text">Biswajit</span>
              <br />
              <span className="text-white">Mohanty</span>
            </motion.h1>

            {/* Typewriter */}
            <motion.div
              className="flex items-center gap-2 mb-6 h-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <span className="text-xl sm:text-2xl font-semibold text-[#94a3b8]">I&apos;m a</span>
              <span className="text-xl sm:text-2xl font-semibold text-[#00d4ff] font-mono">
                {displayText}
                <span
                  className="inline-block w-0.5 h-6 bg-[#00d4ff] ml-0.5 align-middle"
                  style={{
                    animation: 'blink 0.75s step-end infinite',
                  }}
                />
              </span>
            </motion.div>

            <style jsx>{`
              @keyframes blink {
                from, to { opacity: 1; }
                50% { opacity: 0; }
              }
            `}</style>

            {/* Short bio */}
            <motion.p
              className="text-[#94a3b8] text-base sm:text-lg leading-relaxed mb-8 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              {personalInfo.shortBio}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <motion.button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] hover:opacity-90 transition-all shadow-lg shadow-[#00d4ff]/20"
                whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(0,212,255,0.4)' }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.button>
              <motion.button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 rounded-xl font-semibold text-[#00d4ff] glass-card hover:border-[#00d4ff]/50 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.button>
            </motion.div>

            {/* Quick stats */}
            <motion.div
              className="grid grid-cols-3 gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              {stats.slice(0, 3).map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-xs text-[#64748b] mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right column - Code snippet */}
          <motion.div
            className="hidden lg:block relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {/* Floating code card */}
            <div className="relative">
              {/* Decorative circles */}
              <div className="absolute -top-8 -right-8 w-48 h-48 rounded-full border border-[#00d4ff]/10 animate-spin-slow" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full border border-[#7c3aed]/10 animate-spin-slow" style={{ animationDirection: 'reverse' }} />

              {/* Code window */}
              <div className="glass-card rounded-2xl overflow-hidden shadow-2xl shadow-[#00d4ff]/10">
                {/* Window title bar */}
                <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/10">
                  <div className="w-3 h-3 rounded-full bg-red-400/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                  <div className="w-3 h-3 rounded-full bg-green-400/80" />
                  <span className="ml-2 text-xs text-[#64748b] font-mono">architect.ts</span>
                </div>

                {/* Code content */}
                <div className="p-6">
                  <pre className="font-mono text-sm leading-relaxed text-[#94a3b8] whitespace-pre">
                    {codeSnippet.split('\n').map((line, i) => (
                      <div key={i} className="flex">
                        <span className="text-[#64748b] w-6 select-none mr-4 text-right shrink-0">
                          {i + 1}
                        </span>
                        <span
                          className={
                            line.includes('//') ? 'text-[#64748b]' :
                            line.includes('"') ? 'text-green-400' :
                            line.includes('const') || line.includes(':') && !line.includes('"') ? 'text-[#00d4ff]' :
                            line.includes('(') ? 'text-yellow-400' :
                            'text-[#94a3b8]'
                          }
                        >
                          {line}
                        </span>
                      </div>
                    ))}
                  </pre>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                className="absolute -top-4 -right-4 glass-card px-3 py-2 rounded-xl text-xs font-semibold text-[#00d4ff] border border-[#00d4ff]/30"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                10+ Years Exp
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 glass-card px-3 py-2 rounded-xl text-xs font-semibold text-[#7c3aed] border border-[#7c3aed]/30"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                12+ Engineers Led
              </motion.div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
