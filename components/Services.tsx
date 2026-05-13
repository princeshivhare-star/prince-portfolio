"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Smartphone,
  Code2,
  LayoutDashboard,
  Server,
  Globe,
  MonitorSmartphone,
  Wrench,
} from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "Mobile App UI Design",
    description:
      "Pixel-perfect, mobile-first app interfaces with smooth interactions, intuitive navigation, and polished visual design across iOS and Android patterns.",
    color: "#f97316",
    tags: ["React Native UI", "Mobile-First", "Figma-to-Code"],
  },
  {
    icon: Code2,
    title: "Full Stack App Development",
    description:
      "End-to-end application development from React/Next.js frontend to Node.js/MongoDB backend — production-ready and scalable.",
    color: "#3b82f6",
    tags: ["React", "Next.js", "Node.js", "MongoDB"],
  },
  {
    icon: LayoutDashboard,
    title: "SaaS Dashboard Development",
    description:
      "Multi-tenant SaaS platforms with authentication, role management, analytics dashboards, and business logic — built to grow.",
    color: "#8b5cf6",
    tags: ["SaaS", "Auth", "Analytics", "Admin Panel"],
  },
  {
    icon: Server,
    title: "Backend API Development",
    description:
      "RESTful APIs built with Express.js, secured with JWT, connected to MongoDB — fast, documented, and designed for scale.",
    color: "#22c55e",
    tags: ["REST API", "Express.js", "JWT", "MongoDB"],
  },
  {
    icon: Globe,
    title: "Landing Page Development",
    description:
      "High-conversion landing pages with smooth animations, compelling layouts, and mobile-responsive design that drives action.",
    color: "#06b6d4",
    tags: ["Next.js", "Tailwind", "Framer Motion", "SEO"],
  },
  {
    icon: MonitorSmartphone,
    title: "Responsive Website Development",
    description:
      "Fully responsive websites that look exceptional on every screen — from mobile to widescreen — with accessibility and performance baked in.",
    color: "#ec4899",
    tags: ["Responsive", "Tailwind CSS", "Cross-browser"],
  },
  {
    icon: Wrench,
    title: "Deployment & Maintenance",
    description:
      "Vercel deployments, CI/CD pipeline setup, post-launch monitoring, performance tuning, and ongoing maintenance to keep your app running smoothly.",
    color: "#a78bfa",
    tags: ["Vercel", "CI/CD", "Performance", "Monitoring"],
  },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="section-pad relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="flex items-center gap-3 mb-4"
          >
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-pink-500" />
            <span className="text-pink-400 font-mono text-sm tracking-widest uppercase">
              What I Do
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-display font-bold text-4xl md:text-5xl text-text-primary"
          >
            Services &amp; <span className="gradient-text">Capabilities</span>
          </motion.h2>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="group glass rounded-2xl border border-border p-6 hover:border-white/15 transition-all duration-300"
              style={{
                transition: "transform 0.3s, box-shadow 0.3s, border-color 0.3s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = `0 0 30px ${service.color}15`;
                (e.currentTarget as HTMLElement).style.borderColor = `${service.color}25`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "";
                (e.currentTarget as HTMLElement).style.borderColor = "";
              }}
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                style={{ background: `${service.color}15` }}
              >
                <service.icon size={22} style={{ color: service.color }} />
              </div>

              {/* Content */}
              <h3 className="font-display font-bold text-text-primary text-base mb-3">
                {service.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-4">
                {service.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-lg text-xs font-medium"
                    style={{ background: `${service.color}10`, color: `${service.color}cc` }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
