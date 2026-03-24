'use client';

import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Linkedin, Download, CheckCircle2 } from 'lucide-react';
import { personalInfo, stats } from '@/data/portfolio';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const highlights = [
  'Led cloud migration initiatives for European banking clients',
  'Built SEPA Instant Payment platform processing millions of transactions',
  'Managed and mentored 12+ engineers across distributed teams',
  'Expert in Java, Spring Boot, React, AWS, and Kubernetes',
  'Experience across fintech, healthcare, e-commerce, and aviation domains',
];

function AnimatedCounter({ target, suffix = '', duration = 2000 }: { target: string; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.5, triggerOnce: true });
  const hasAnimated = useRef(false);

  const numericTarget = parseFloat(target.replace(/[^0-9.]/g, ''));
  const hasSuffix = target.replace(String(numericTarget), '');

  useEffect(() => {
    if (isIntersecting && !hasAnimated.current && numericTarget > 0) {
      hasAnimated.current = true;
      let startTime: number | null = null;
      const startValue = 0;

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(startValue + (numericTarget - startValue) * easeOut);
        setCount(current);
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isIntersecting, numericTarget, duration]);

  return (
    <span ref={ref as React.RefObject<HTMLSpanElement>}>
      {count}
      {hasSuffix}
    </span>
  );
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function About() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="about" className="section-padding bg-[#0a0a1a] relative">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-[#7c3aed]/5 to-transparent" />

      <div className="container-custom relative z-10">
        {/* Section header */}
        <motion.div
          ref={ref as React.RefObject<HTMLDivElement>}
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isIntersecting ? 'visible' : 'hidden'}
        >
          <motion.p variants={itemVariants} className="text-[#00d4ff] font-mono text-sm mb-2">
            // about me
          </motion.p>
          <motion.h2 variants={itemVariants} className="section-heading">
            Who I{' '}
            <span className="gradient-text">Am</span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-[#00d4ff] to-[#7c3aed]"
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Personal */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              {/* Profile card */}
              <div className="glass-card rounded-2xl p-8 mb-6">
                {/* Avatar placeholder */}
                <div className="flex items-center gap-5 mb-6">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#00d4ff] to-[#7c3aed] flex items-center justify-center text-3xl font-bold text-white">
                      BM
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-green-400 border-2 border-[#1a1a2e]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{personalInfo.name}</h3>
                    <p className="text-[#00d4ff] text-sm font-medium">{personalInfo.title}</p>
                    <p className="text-[#64748b] text-xs mt-1">{personalInfo.experience} of experience</p>
                  </div>
                </div>

                <p className="text-[#94a3b8] leading-relaxed mb-6">
                  {personalInfo.bio}
                </p>

                {/* Contact info */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <MapPin size={16} className="text-[#00d4ff] shrink-0" />
                    <span className="text-[#94a3b8]">{personalInfo.location}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Mail size={16} className="text-[#00d4ff] shrink-0" />
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-[#94a3b8] hover:text-[#00d4ff] transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Linkedin size={16} className="text-[#00d4ff] shrink-0" />
                    <a
                      href={`https://${personalInfo.linkedin}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#94a3b8] hover:text-[#00d4ff] transition-colors"
                    >
                      {personalInfo.linkedin}
                    </a>
                  </div>
                </div>
              </div>

              {/* Download CV button */}
              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-[#00d4ff]/30 text-[#00d4ff] hover:bg-[#00d4ff]/10 transition-colors font-medium text-sm"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download size={16} />
                Request Resume / CV
              </motion.a>
            </div>
          </motion.div>

          {/* Right - Professional */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {/* What I bring */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-white mb-4">What I Bring</h3>
              <div className="space-y-3">
                {highlights.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                  >
                    <CheckCircle2 size={18} className="text-[#00d4ff] shrink-0 mt-0.5" />
                    <span className="text-[#94a3b8] text-sm leading-relaxed">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Stats grid */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">By The Numbers</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="glass-card rounded-xl p-4 text-center hover:border-[#00d4ff]/30 transition-colors"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.03 }}
                  >
                    <div className="text-2xl font-bold gradient-text counter-text mb-1">
                      <AnimatedCounter target={stat.value} duration={1500 + index * 100} />
                    </div>
                    <div className="text-xs text-[#64748b] leading-tight">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
