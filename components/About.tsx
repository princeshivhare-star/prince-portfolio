"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Smartphone, Code2, Server, Sparkles } from "lucide-react";

const highlights = [
  {
    icon: Smartphone,
    title: "Mobile-First Development",
    desc: "Every app I build starts with mobile — fluid layouts, touch interactions, and responsive flows that feel native across all devices.",
    color: "blue",
  },
  {
    icon: Code2,
    title: "Clean UI Engineering",
    desc: "Precision in every component. I obsess over spacing, typography, and motion to deliver interfaces users genuinely enjoy using.",
    color: "purple",
  },
  {
    icon: Server,
    title: "Scalable Backend",
    desc: "Production-grade Node.js APIs, MongoDB data modeling, and RESTful architecture designed to grow with your product.",
    color: "cyan",
  },
  {
    icon: Sparkles,
    title: "SaaS & Dashboard Expertise",
    desc: "From authentication flows to multi-tenant dashboards — I understand what makes a SaaS product sticky and performant.",
    color: "indigo",
  },
];

const colorMap: Record<string, string> = {
  blue: "from-blue-600/20 to-blue-600/5 border-blue-500/20 text-blue-400",
  purple: "from-purple-600/20 to-purple-600/5 border-purple-500/20 text-purple-400",
  cyan: "from-cyan-600/20 to-cyan-600/5 border-cyan-500/20 text-cyan-400",
  indigo: "from-indigo-600/20 to-indigo-600/5 border-indigo-500/20 text-indigo-400",
};

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="section-pad relative overflow-hidden">
      {/* BG accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent via-blue-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="w-8 h-px bg-gradient-to-r from-transparent to-blue-500" />
          <span className="text-blue-400 font-mono text-sm tracking-widest uppercase">About Me</span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left text */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-bold text-4xl md:text-5xl text-text-primary leading-tight mb-6"
            >
              Building apps that{" "}
              <span className="gradient-text">people love to use</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4 text-text-secondary leading-relaxed"
            >
              <p>
                I'm <strong className="text-text-primary">Prince Shivhare</strong> — an App Developer and Full Stack Developer
                with a passion for building digital products that combine great design with robust engineering.
              </p>
              <p>
                My work spans the full spectrum: from pixel-perfect mobile UI and responsive web interfaces,
                to scalable Node.js backends, REST APIs, and production SaaS platforms deployed on Vercel and beyond.
              </p>
              <p>
                I believe great apps aren't just functional — they're <em className="text-blue-300">experiences</em>.
                Every project I take on starts with a deep understanding of the user journey, then layers on
                clean code architecture, thoughtful UX decisions, and smooth, delightful interactions.
              </p>
              <p>
                Whether it's a booking SaaS, a healthcare dashboard, or a fintech mobile app — I bring
                the same level of craft and commitment to every build.
              </p>
            </motion.div>

            {/* Quick facts */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 gap-4 mt-8"
            >
              {[
                { key: "Location", val: "India" },
                { key: "Stack", val: "React / Next.js / Node" },
                { key: "Specialty", val: "Mobile-First & SaaS" },
                { key: "Deployment", val: "Vercel & Cloud" },
              ].map((item) => (
                <div key={item.key} className="glass rounded-xl p-4 border border-border">
                  <div className="text-text-muted text-xs font-mono mb-1">{item.key}</div>
                  <div className="text-text-primary text-sm font-medium">{item.val}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
                className={`rounded-2xl bg-gradient-to-br border p-5 ${colorMap[item.color]}`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 bg-current/10 ${colorMap[item.color].split(" ").pop()}`}>
                  <item.icon size={20} />
                </div>
                <h3 className="font-display font-semibold text-text-primary text-sm mb-2">
                  {item.title}
                </h3>
                <p className="text-text-secondary text-xs leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
