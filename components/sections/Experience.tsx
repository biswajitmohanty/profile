'use client';

import { motion } from 'framer-motion';
import { experience } from '@/data/portfolio';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { Building2, Calendar, ChevronRight } from 'lucide-react';

interface ExperienceCardProps {
  item: (typeof experience)[0];
  index: number;
  isLeft: boolean;
}

function ExperienceCard({ item, index, isLeft }: ExperienceCardProps) {
  return (
    <div className={`relative flex items-start gap-0 ${isLeft ? 'flex-row' : 'flex-row-reverse'} md:flex-row-reverse md:flex-row`}>
      {/* Timeline dot */}
      <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center z-10">
        <motion.div
          className="w-4 h-4 rounded-full border-2 flex items-center justify-center"
          style={{
            borderColor: item.color,
            backgroundColor: `${item.color}20`,
            boxShadow: `0 0 15px ${item.color}50`,
          }}
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ delay: index * 0.15, duration: 0.4, type: 'spring' }}
        >
          <div
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: item.color }}
          />
        </motion.div>
      </div>

      {/* Mobile dot */}
      <div className="flex md:hidden flex-col items-center mr-4 shrink-0">
        <motion.div
          className="w-4 h-4 rounded-full border-2 mt-1"
          style={{
            borderColor: item.color,
            backgroundColor: `${item.color}20`,
            boxShadow: `0 0 10px ${item.color}40`,
          }}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, type: 'spring' }}
        />
        {index < experience.length - 1 && (
          <div className="w-px flex-1 mt-2 min-h-[3rem]" style={{ background: `${item.color}30` }} />
        )}
      </div>

      {/* Card - alternating sides on desktop */}
      <motion.div
        className={`w-full md:w-[calc(50%-2rem)] ${isLeft ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}
        initial={{
          opacity: 0,
          x: isLeft ? -50 : 50,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
      >
        <div
          className="glass-card rounded-2xl p-6 hover:scale-[1.02] transition-transform duration-300 relative overflow-hidden group"
          style={{ borderColor: `${item.color}20` }}
        >
          {/* Top accent border */}
          <div
            className="absolute top-0 left-0 right-0 h-0.5"
            style={{
              background: `linear-gradient(90deg, ${item.color}, transparent)`,
            }}
          />

          {/* Glow on hover */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
            style={{
              background: `radial-gradient(circle at 0% 0%, ${item.color}08, transparent 60%)`,
            }}
          />

          <div className="relative z-10">
            {/* Header */}
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <h3
                  className="text-lg font-bold mb-1"
                  style={{ color: item.color }}
                >
                  {item.role}
                </h3>
                <div className="flex items-center gap-2 text-[#94a3b8] text-sm">
                  <Building2 size={14} className="shrink-0" />
                  <span className="font-medium">{item.company}</span>
                </div>
              </div>
              <div className="flex items-center gap-1.5 shrink-0">
                <Calendar size={12} className="text-[#64748b]" />
                <span
                  className="text-xs font-mono px-2 py-1 rounded-full border"
                  style={{
                    color: item.color,
                    borderColor: `${item.color}30`,
                    background: `${item.color}10`,
                  }}
                >
                  {item.period}
                </span>
              </div>
            </div>

            {/* Achievements */}
            <ul className="space-y-2">
              {item.achievements.map((achievement, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-2 text-sm text-[#94a3b8]"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + i * 0.05 }}
                >
                  <ChevronRight
                    size={14}
                    className="shrink-0 mt-0.5"
                    style={{ color: item.color }}
                  />
                  <span>{achievement}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Experience() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="experience" className="section-padding bg-[#0a0a1a] relative">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute left-1/2 top-0 w-96 h-96 -translate-x-1/2 rounded-full bg-[#00d4ff]/5 blur-[100px]" />

      <div className="container-custom relative z-10">
        {/* Section header */}
        <motion.div
          ref={ref as React.RefObject<HTMLDivElement>}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#00d4ff] font-mono text-sm mb-2">// career journey</p>
          <h2 className="section-heading">
            Work{' '}
            <span className="gradient-text">Experience</span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-[#00d4ff] to-[#7c3aed]" />
          <p className="text-[#94a3b8] mt-4 max-w-xl mx-auto text-sm sm:text-base">
            A decade of building enterprise software at leading technology companies, from startups to global organizations.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical center line (desktop) */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden md:block bg-gradient-to-b from-[#00d4ff]/30 via-[#7c3aed]/30 to-transparent" />

          {/* Experience items */}
          <div className="flex flex-col gap-10 md:gap-14">
            {experience.map((item, index) => (
              <ExperienceCard
                key={item.company}
                item={item}
                index={index}
                isLeft={index % 2 === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
