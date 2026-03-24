'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { testimonials } from '@/data/portfolio';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const avatarColors = ['#00d4ff', '#7c3aed', '#10b981', '#f59e0b', '#ef4444'];

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="testimonials" className="section-padding bg-[#1a1a2e] relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="absolute left-0 top-1/2 w-64 h-64 -translate-y-1/2 rounded-full bg-[#7c3aed]/5 blur-[80px]" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          ref={ref as React.RefObject<HTMLDivElement>}
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#00d4ff] font-mono text-sm mb-2">// kind words</p>
          <h2 className="section-heading">
            What People{' '}
            <span className="gradient-text">Say</span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-[#00d4ff] to-[#7c3aed]" />
          <p className="text-[#94a3b8] mt-4 max-w-xl mx-auto text-sm sm:text-base">
            Feedback from colleagues, managers, and clients I&apos;ve had the privilege of working with.
          </p>
        </motion.div>

        {/* Scrollable cards */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {testimonials.map((testimonial, index) => {
            const color = avatarColors[index % avatarColors.length];
            return (
              <motion.div
                key={index}
                className="glass-card rounded-2xl p-6 flex-shrink-0 w-[300px] sm:w-[360px] snap-start relative overflow-hidden group hover:border-white/20 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -4 }}
                style={{ borderColor: `${color}15` }}
              >
                {/* Background glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                  style={{ background: `radial-gradient(circle at 100% 0%, ${color}06, transparent 60%)` }}
                />

                {/* Quote icon */}
                <div className="absolute top-4 right-4 opacity-20">
                  <Quote size={32} style={{ color }} />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <p className="text-[#94a3b8] text-sm leading-relaxed mb-5 italic">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-xs font-bold text-white shrink-0"
                      style={{ background: `linear-gradient(135deg, ${color}, ${color}80)` }}
                    >
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">{testimonial.name}</p>
                      <p className="text-[#64748b] text-xs">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Scroll hint */}
        <p className="text-center text-[#64748b] text-xs mt-4">← Scroll to see more →</p>
      </div>
    </section>
  );
}
