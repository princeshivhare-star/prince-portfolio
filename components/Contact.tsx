"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Linkedin, Mail, ArrowRight, MessageSquare, Zap } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="section-pad relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-900/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <div className="w-8 h-px bg-gradient-to-r from-transparent to-blue-500" />
          <span className="text-blue-400 font-mono text-sm tracking-widest uppercase">
            Get in Touch
          </span>
          <div className="w-8 h-px bg-gradient-to-l from-transparent to-blue-500" />
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="font-display font-bold text-5xl md:text-6xl text-text-primary leading-tight mb-6"
        >
          Let&apos;s build your{" "}
          <span className="gradient-text">next modern app</span>
        </motion.h2>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15 }}
          className="text-text-secondary text-lg max-w-2xl mx-auto mb-12"
        >
          Have a project idea? Need a mobile app, SaaS platform, or full stack solution?
          I&apos;d love to hear about it. Let&apos;s discuss how we can bring it to life.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <a
            href="https://www.linkedin.com/in/prince-shivhare-/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-base shimmer-btn hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:-translate-y-0.5"
          >
            <Linkedin size={20} />
            Connect on LinkedIn
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
          <a
            href="mailto:princeshivhare@email.com"
            className="flex items-center justify-center gap-3 px-8 py-4 rounded-2xl glass border border-border hover:border-blue-500/30 text-text-primary font-semibold text-base transition-all duration-300 hover:-translate-y-0.5"
          >
            <Mail size={20} />
            Send an Email
          </a>
        </motion.div>

        {/* Info cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="grid sm:grid-cols-3 gap-4"
        >
          {[
            {
              icon: Zap,
              title: "Fast Response",
              desc: "Typically reply within 24 hours",
              color: "#f59e0b",
            },
            {
              icon: MessageSquare,
              title: "Open to Discuss",
              desc: "Projects of any scale or complexity",
              color: "#3b82f6",
            },
            {
              icon: Linkedin,
              title: "LinkedIn",
              desc: "linkedin.com/in/prince-shivhare-",
              color: "#0ea5e9",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="glass rounded-2xl border border-border p-5 text-left"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                style={{ background: `${item.color}15` }}
              >
                <item.icon size={18} style={{ color: item.color }} />
              </div>
              <div className="font-display font-semibold text-text-primary text-sm mb-1">
                {item.title}
              </div>
              <div className="text-text-muted text-xs">{item.desc}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
