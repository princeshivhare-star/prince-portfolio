"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Globe } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg"
    >
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/12 rounded-full blur-[80px] animate-pulse-slow" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-[120px]" />
      </div>

      {/* Floating ring decoration */}
      <div className="absolute top-32 right-16 w-64 h-64 border border-blue-500/10 rounded-full animate-spin-slow hidden lg:block" />
      <div className="absolute top-40 right-24 w-48 h-48 border border-purple-500/10 rounded-full animate-spin-slow hidden lg:block" style={{ animationDirection: "reverse" }} />

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-blue-500/20 text-sm font-medium text-blue-400 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Available for new projects
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-bold leading-[1.08] mb-6"
              style={{ fontSize: "clamp(2.6rem, 5.5vw, 4.2rem)" }}
            >
              <span className="text-text-primary">App Developer</span>
              <br />
              <span className="gradient-text text-glow">&amp; Full Stack</span>
              <br />
              <span className="text-text-primary">Developer</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-text-secondary text-lg leading-relaxed mb-10 max-w-lg"
            >
              I build modern mobile-first apps, SaaS platforms, dashboards, and
              scalable web applications — from pixel-perfect UI to production-ready backend.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <a
                href="#projects"
                className="group flex items-center gap-2.5 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-sm shimmer-btn hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:-translate-y-0.5"
              >
                View Projects
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href="#contact"
                className="flex items-center gap-2.5 px-7 py-3.5 rounded-2xl glass border border-border hover:border-blue-500/40 text-text-primary font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5"
              >
                Contact Me
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-4"
            >
              <span className="text-text-muted text-sm">Find me on</span>
              <div className="flex gap-3">
                {[
                  { icon: Linkedin, href: "https://www.linkedin.com/in/prince-shivhare-/", label: "LinkedIn" },
                  { icon: Globe, href: "https://prince-web-dev-portfolio.vercel.app", label: "Portfolio" },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-10 h-10 rounded-xl glass border border-border hover:border-blue-500/40 flex items-center justify-center text-text-secondary hover:text-blue-400 transition-all duration-200"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right — visual panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex justify-center items-center"
          >
            {/* Code card */}
            <div className="relative w-full max-w-md">
              {/* Glow backdrop */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-2xl" />

              <div className="relative glass-strong rounded-3xl p-6 border border-blue-500/15">
                {/* Window bar */}
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-green-500/70" />
                  <span className="ml-3 font-mono text-xs text-text-muted">prince.dev / main</span>
                </div>

                {/* Code snippet */}
                <pre className="font-mono text-xs leading-6 overflow-x-auto">
                  <code>
                    <span className="text-purple-400">const</span>{" "}
                    <span className="text-blue-300">developer</span>{" "}
                    <span className="text-text-secondary">= </span>
                    <span className="text-yellow-400">{"{"}</span>
                    {"\n"}
                    {"  "}
                    <span className="text-cyan-400">name</span>
                    <span className="text-text-secondary">: </span>
                    <span className="text-green-400">'Prince Shivhare'</span>
                    <span className="text-text-secondary">,</span>
                    {"\n"}
                    {"  "}
                    <span className="text-cyan-400">role</span>
                    <span className="text-text-secondary">: </span>
                    <span className="text-green-400">'App &amp; Full Stack Dev'</span>
                    <span className="text-text-secondary">,</span>
                    {"\n"}
                    {"  "}
                    <span className="text-cyan-400">stack</span>
                    <span className="text-text-secondary">: [</span>
                    <span className="text-green-400">'React'</span>
                    <span className="text-text-secondary">, </span>
                    <span className="text-green-400">'Next.js'</span>
                    <span className="text-text-secondary">, </span>
                    <span className="text-green-400">'Node.js'</span>
                    <span className="text-text-secondary">],</span>
                    {"\n"}
                    {"  "}
                    <span className="text-cyan-400">focus</span>
                    <span className="text-text-secondary">: [</span>
                    <span className="text-green-400">'Mobile-First'</span>
                    <span className="text-text-secondary">, </span>
                    <span className="text-green-400">'SaaS'</span>
                    <span className="text-text-secondary">],</span>
                    {"\n"}
                    {"  "}
                    <span className="text-cyan-400">available</span>
                    <span className="text-text-secondary">: </span>
                    <span className="text-orange-400">true</span>
                    {"\n"}
                    <span className="text-yellow-400">{"}"}</span>
                    <span className="text-text-secondary">;</span>
                  </code>
                </pre>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-3 mt-6">
                  {[
                    { value: "10+", label: "Projects" },
                    { value: "3+", label: "Years Exp." },
                    { value: "100%", label: "Commitment" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-xl bg-white/3 border border-border p-3 text-center"
                    >
                      <div className="font-display font-bold text-lg gradient-text-blue">
                        {stat.value}
                      </div>
                      <div className="text-text-muted text-xs mt-0.5">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating tech badges */}
              {[
                { label: "React Native", top: "-14px", right: "20px", color: "blue" },
                { label: "Next.js 14", bottom: "30px", left: "-20px", color: "purple" },
                { label: "Node.js", top: "50%", right: "-20px", color: "cyan" },
              ].map((badge) => (
                <motion.div
                  key={badge.label}
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: Math.random() * 2, ease: "easeInOut" }}
                  style={{ position: "absolute", top: badge.top, bottom: badge.bottom, left: badge.left, right: badge.right }}
                  className={`px-3 py-1.5 rounded-full glass border text-xs font-semibold ${
                    badge.color === "blue"
                      ? "border-blue-500/30 text-blue-400"
                      : badge.color === "purple"
                      ? "border-purple-500/30 text-purple-400"
                      : "border-cyan-500/30 text-cyan-400"
                  }`}
                >
                  {badge.label}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-text-muted text-xs">scroll down</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-px h-8 bg-gradient-to-b from-blue-500/50 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
