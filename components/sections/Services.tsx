'use client';

import { motion } from 'framer-motion';
import { Code2, Smartphone, Cloud, Zap, RefreshCw, Briefcase, ArrowRight } from 'lucide-react';
import { services } from '@/data/portfolio';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const iconMap = {
  Code2,
  Smartphone,
  Cloud,
  Zap,
  RefreshCw,
  Briefcase,
};

const serviceColors = [
  '#00d4ff',
  '#7c3aed',
  '#10b981',
  '#f59e0b',
  '#ef4444',
  '#8b5cf6',
];

export default function Services() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="services" className="section-padding bg-[#0a0a1a] relative">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute left-1/4 bottom-0 w-80 h-80 rounded-full bg-[#00d4ff]/5 blur-[80px]" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          ref={ref as React.RefObject<HTMLDivElement>}
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#00d4ff] font-mono text-sm mb-2">// what I offer</p>
          <h2 className="section-heading">
            Services I{' '}
            <span className="gradient-text">Provide</span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-[#00d4ff] to-[#7c3aed]" />
          <p className="text-[#94a3b8] mt-4 max-w-xl mx-auto text-sm sm:text-base">
            End-to-end technical solutions from architecture design to deployment — built for scale, reliability, and performance.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];
            const color = serviceColors[index % serviceColors.length];

            return (
              <motion.div
                key={service.title}
                className="glass-card rounded-2xl p-6 group hover:scale-[1.02] transition-all duration-300 relative overflow-hidden"
                style={{ borderColor: `${color}15` }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                {/* Top accent border */}
                <div
                  className="absolute top-0 left-0 right-0 h-0.5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                  style={{
                    background: `linear-gradient(90deg, ${color}, transparent)`,
                  }}
                />

                {/* Background glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle at 0% 0%, ${color}08, transparent 60%)`,
                  }}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{
                      background: `${color}15`,
                      border: `1px solid ${color}20`,
                    }}
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    {IconComponent && (
                      <IconComponent size={22} style={{ color }} />
                    )}
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-base font-bold text-white mb-3 group-hover:text-[#00d4ff] transition-colors leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-[#94a3b8] text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Learn more link */}
                  <button
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="flex items-center gap-1.5 text-sm font-medium transition-all duration-200 group/btn"
                    style={{ color: `${color}80` }}
                  >
                    <span className="group-hover/btn:text-white transition-colors" style={{ color: 'inherit' }}>
                      Get a quote
                    </span>
                    <ArrowRight
                      size={14}
                      className="transform group-hover/btn:translate-x-1 transition-transform"
                      style={{ color: 'inherit' }}
                    />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#94a3b8] mb-6 text-sm sm:text-base">
            Have a specific project in mind? Let&apos;s talk about how I can help.
          </p>
          <motion.button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] hover:opacity-90 transition-all shadow-lg shadow-[#00d4ff]/20"
            whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(0,212,255,0.3)' }}
            whileTap={{ scale: 0.95 }}
          >
            Start a Project
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
