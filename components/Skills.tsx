"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillGroups = [
  {
    category: "Frontend",
    skills: [
      { name: "React", level: 95, color: "#61DAFB" },
      { name: "Next.js", level: 93, color: "#ffffff" },
      { name: "Tailwind CSS", level: 92, color: "#38BDF8" },
      { name: "UI/UX Design", level: 85, color: "#a78bfa" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 88, color: "#84CC16" },
      { name: "Express.js", level: 87, color: "#f0f4ff" },
      { name: "MongoDB", level: 82, color: "#4ADE80" },
      { name: "REST APIs", level: 90, color: "#fb923c" },
    ],
  },
  {
    category: "Tools & Platforms",
    skills: [
      { name: "Mobile-First Design", level: 94, color: "#f472b6" },
      { name: "SaaS Development", level: 85, color: "#818cf8" },
      { name: "Dashboard Dev", level: 88, color: "#34d399" },
      { name: "Vercel Deployment", level: 92, color: "#ffffff" },
    ],
  },
];

const techTags = [
  "React", "Next.js 14", "Node.js", "Express.js", "MongoDB",
  "Python", "REST APIs", "Tailwind CSS", "Framer Motion",
  "JWT Auth", "Vercel", "Git", "TypeScript", "Responsive Design",
  "SaaS", "Dashboard", "Mobile-First", "UI/UX",
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="section-pad relative" ref={ref}>
      <div className="absolute inset-0 grid-bg opacity-50" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="flex items-center gap-3 mb-4"
          >
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-purple-500" />
            <span className="text-purple-400 font-mono text-sm tracking-widest uppercase">Tech Stack</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-display font-bold text-4xl md:text-5xl text-text-primary"
          >
            Skills &amp; <span className="gradient-text">Expertise</span>
          </motion.h2>
        </div>

        {/* Skill bars */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: gi * 0.15 }}
              className="glass rounded-2xl p-6 border border-border"
            >
              <h3 className="font-display font-semibold text-text-primary text-sm uppercase tracking-widest mb-6">
                {group.category}
              </h3>
              <div className="space-y-5">
                {group.skills.map((skill, si) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-text-secondary text-sm">{skill.name}</span>
                      <span className="text-text-muted font-mono text-xs">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-border rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: gi * 0.15 + si * 0.1 + 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="h-full rounded-full"
                        style={{ background: `linear-gradient(90deg, ${skill.color}88, ${skill.color})` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tag cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap gap-3 justify-center"
        >
          {techTags.map((tag, i) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5 + i * 0.03 }}
              whileHover={{ scale: 1.08, borderColor: "rgba(59,130,246,0.5)" }}
              className="px-4 py-2 rounded-full glass border border-border text-text-secondary text-sm cursor-default transition-colors hover:text-blue-400"
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
