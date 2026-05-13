"use client";

import { Code2, Linkedin, Globe, Heart } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-[#050812]">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
              <Code2 size={15} className="text-white" />
            </div>
            <span className="font-display font-bold text-sm text-text-primary">
              Prince<span className="gradient-text-blue">.</span>dev
            </span>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap gap-6 justify-center">
            {["#about", "#skills", "#projects", "#apps", "#services", "#contact"].map((href) => (
              <a
                key={href}
                href={href}
                className="text-text-muted text-sm hover:text-text-primary transition-colors capitalize"
              >
                {href.replace("#", "")}
              </a>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex gap-3">
            <a
              href="https://www.linkedin.com/in/prince-shivhare-/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl glass border border-border hover:border-blue-500/30 flex items-center justify-center text-text-muted hover:text-blue-400 transition-all"
            >
              <Linkedin size={15} />
            </a>
            <a
              href="https://prince-web-dev-portfolio.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl glass border border-border hover:border-blue-500/30 flex items-center justify-center text-text-muted hover:text-blue-400 transition-all"
            >
              <Globe size={15} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-text-muted text-xs flex items-center justify-center gap-1.5">
            © {year} Prince Shivhare. Built with
            <Heart size={11} className="text-red-400 fill-red-400" />
            using Next.js 14 &amp; Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
