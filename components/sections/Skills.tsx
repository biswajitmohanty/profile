'use client';

import { motion } from 'framer-motion';
import { skills } from '@/data/portfolio';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { Server, Globe, Smartphone, Cloud, Database, Wrench } from 'lucide-react';

const skillCategories = [
  {
    key: 'backend' as keyof typeof skills,
    label: 'Backend & Architecture',
    icon: Server,
    color: '#00d4ff',
    description: 'Core expertise in enterprise Java ecosystems',
    colSpan: 'col-span-2 lg:col-span-2',
  },
  {
    key: 'frontend' as keyof typeof skills,
    label: 'Frontend Development',
    icon: Globe,
    color: '#7c3aed',
    description: 'Modern web frameworks and UI libraries',
    colSpan: 'col-span-2 lg:col-span-1',
  },
  {
    key: 'cloud' as keyof typeof skills,
    label: 'Cloud & DevOps',
    icon: Cloud,
    color: '#10b981',
    description: 'Cloud-native architectures and CI/CD pipelines',
    colSpan: 'col-span-2 lg:col-span-2',
  },
  {
    key: 'mobile' as keyof typeof skills,
    label: 'Mobile Development',
    icon: Smartphone,
    color: '#f59e0b',
    description: 'Cross-platform mobile applications',
    colSpan: 'col-span-2 lg:col-span-1',
  },
  {
    key: 'database' as keyof typeof skills,
    label: 'Databases',
    icon: Database,
    color: '#ef4444',
    description: 'SQL, NoSQL, and in-memory data stores',
    colSpan: 'col-span-2 lg:col-span-1',
  },
  {
    key: 'tools' as keyof typeof skills,
    label: 'Tools & Practices',
    icon: Wrench,
    color: '#8b5cf6',
    description: 'Development tools, security, and API standards',
    colSpan: 'col-span-2 lg:col-span-2',
  },
];

interface SkillCardProps {
  category: (typeof skillCategories)[0];
  items: string[];
  index: number;
}

function SkillCard({ category, items, index }: SkillCardProps) {
  const Icon = category.icon;

  return (
    <motion.div
      className={`${category.colSpan} glass-card rounded-2xl p-6 group hover:border-opacity-50 transition-all duration-300 relative overflow-hidden`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      style={{
        borderColor: `${category.color}20`,
      }}
    >
      {/* Glow effect on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
        style={{
          background: `radial-gradient(circle at 50% 0%, ${category.color}10, transparent 70%)`,
        }}
      />

      {/* Top border accent */}
      <div
        className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl"
        style={{
          background: `linear-gradient(90deg, transparent, ${category.color}, transparent)`,
        }}
      />

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div
            className="p-2 rounded-lg"
            style={{ background: `${category.color}20` }}
          >
            <Icon size={20} style={{ color: category.color }} />
          </div>
          <div>
            <h3 className="font-bold text-white text-sm sm:text-base">{category.label}</h3>
            <p className="text-[#64748b] text-xs">{category.description}</p>
          </div>
        </div>

        {/* Skill badges */}
        <div className="flex flex-wrap gap-2">
          {items.map((skill, skillIndex) => (
            <motion.span
              key={skill}
              className="px-3 py-1 rounded-full text-xs font-medium border transition-all duration-200"
              style={{
                backgroundColor: `${category.color}10`,
                borderColor: `${category.color}25`,
                color: category.color,
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + skillIndex * 0.03 }}
              whileHover={{
                backgroundColor: `${category.color}25`,
                borderColor: `${category.color}50`,
                scale: 1.05,
              }}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="skills" className="section-padding bg-[#1a1a2e] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="absolute left-0 top-1/2 w-72 h-72 rounded-full bg-[#00d4ff]/5 blur-[80px]" />
      <div className="absolute right-0 bottom-0 w-96 h-96 rounded-full bg-[#7c3aed]/5 blur-[100px]" />

      <div className="container-custom relative z-10">
        {/* Section header */}
        <motion.div
          ref={ref as React.RefObject<HTMLDivElement>}
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <motion.p
            className="text-[#00d4ff] font-mono text-sm mb-2"
            initial={{ opacity: 0 }}
            animate={isIntersecting ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.1 }}
          >
            // tech stack
          </motion.p>
          <h2 className="section-heading">
            Skills &{' '}
            <span className="gradient-text">Technologies</span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-[#00d4ff] to-[#7c3aed]" />
          <p className="text-[#94a3b8] mt-4 max-w-xl mx-auto text-sm sm:text-base">
            A decade of hands-on experience across the full stack — from microservices and cloud infrastructure to modern front-end frameworks.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={category.key}
              category={category}
              items={skills[category.key]}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
