"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Globe, BookOpen, Zap } from "lucide-react";

const projects = [
  {
    title: "Smart Booking SaaS",
    url: "https://smart-booking-saas.vercel.app",
    description:
      "A modern booking SaaS platform with responsive UI, backend API, authentication, business dashboard, and booking management — built for scale.",
    tags: ["Next.js", "Node.js", "MongoDB", "Auth", "SaaS", "Dashboard"],
    icon: BookOpen,
    accent: "#3b82f6",
    accentBg: "from-blue-600/20 to-purple-600/10",
    badge: "SaaS Platform",
    featured: true,
  },
  {
    title: "Web Dev Portfolio",
    url: "https://prince-web-dev-portfolio.vercel.app",
    description:
      "A personal web development portfolio showcasing frontend, UI/UX, and responsive website work — clean, fast, and conversion-focused.",
    tags: ["React", "Tailwind", "Framer Motion", "Vercel"],
    icon: Globe,
    accent: "#8b5cf6",
    accentBg: "from-purple-600/20 to-indigo-600/10",
    badge: "Portfolio",
    featured: false,
  },
  {
    title: "Automation Agency",
    url: "https://ai-automation-agency-sigma.vercel.app",
    description:
      "A business automation website with clean landing page design, service sections, and conversion-focused layout built for client acquisition.",
    tags: ["Next.js", "Tailwind", "Landing Page", "Business"],
    icon: Zap,
    accent: "#06b6d4",
    accentBg: "from-cyan-600/20 to-blue-600/10",
    badge: "Agency Site",
    featured: false,
  },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="section-pad relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="flex items-center gap-3 mb-4"
          >
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-cyan-500" />
            <span className="text-cyan-400 font-mono text-sm tracking-widest uppercase">
              Live Projects
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-display font-bold text-4xl md:text-5xl text-text-primary"
          >
            Real-World <span className="gradient-text">Deployments</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15 }}
            className="text-text-secondary mt-4 max-w-lg"
          >
            Live products I&apos;ve built and shipped — click to explore each one.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -6 }}
              className="group relative glass rounded-3xl border border-border overflow-hidden cursor-pointer block"
              style={{ transition: "box-shadow 0.3s, border-color 0.3s" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = `0 0 40px ${project.accent}22`;
                (e.currentTarget as HTMLElement).style.borderColor = `${project.accent}30`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "";
                (e.currentTarget as HTMLElement).style.borderColor = "";
              }}
            >
              {/* Top gradient strip */}
              <div
                className={`h-1 w-full bg-gradient-to-r`}
                style={{ background: `linear-gradient(90deg, ${project.accent}, ${project.accent}60)` }}
              />

              {/* Mock browser header */}
              <div className="bg-[#0a0f1e] px-4 py-3 flex items-center gap-2.5 border-b border-border">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                </div>
                <div className="flex-1 bg-border/50 rounded px-3 py-1 font-mono text-[10px] text-text-muted truncate">
                  {project.url.replace("https://", "")}
                </div>
              </div>

              {/* Preview area */}
              <div className={`bg-gradient-to-br ${project.accentBg} h-40 flex items-center justify-center`}>
                <project.icon size={48} className="opacity-20" style={{ color: project.accent }} />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center bg-black/20">
                  <div
                    className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold"
                    style={{ background: project.accent, color: "#fff" }}
                  >
                    <ExternalLink size={14} />
                    Visit Live Site
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <span
                      className="text-xs font-mono px-2 py-0.5 rounded-full mb-2 inline-block"
                      style={{ background: `${project.accent}20`, color: project.accent }}
                    >
                      {project.badge}
                    </span>
                    <h3 className="font-display font-bold text-text-primary text-lg">
                      {project.title}
                    </h3>
                  </div>
                  <ExternalLink
                    size={16}
                    className="text-text-muted group-hover:text-blue-400 transition-colors mt-1 shrink-0"
                  />
                </div>
                <p className="text-text-secondary text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-md bg-border text-text-muted text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
