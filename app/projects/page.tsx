"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 32,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const projects = [
  {
    title: "Lifepulse",
    description:
      "LifePulse is a health and wellness platform that helps users track fitness, nutrition, and personal health metrics through an intuitive dashboard, enabling better lifestyle decisions through data-driven insights.",
    image: "/lifepulse.png",
    github: "https://github.com/Tech-goodat/lifepulse_client",
    live: "https://lifepulse-client.vercel.app/",
    tags: ["Next.js", "Flask","SQLAlchemy", "Tailwind"],
    color: "#3b82f6",
  },
 /* {
    title: "Umbrella Payment App",
    description:
      "A digital wallet and payment platform — send, receive, and manage money securely. Includes authentication, transaction history, and a clean real-time dashboard.",
    image: "/umbrella.png",
    github: "https://github.com/Tech-goodat/umbrella",
    live: "https://umbrella-orpin-theta.vercel.app/home",
    tags: ["Next.js", "Tailwind", "Flask"],
    color: "#06b6d4",
  },
  */
  {
    title: "MajiSmart",
    description:
      "MajiSmart is an IoT-based water monitoring platform that tracks water usage in real time, detects leaks, and provides actionable insights through a web dashboard to help reduce water wastage.",
    image: "/majismart.png",
    github: "https://github.com/Tech-goodat/majismart",
    live: "https://majismart-seven.vercel.app/",
    tags: ["Next.js", "DRF", "Tailwind", "Shadcn", "Vapi AI", "IoT"],
    color: "#818cf8",
  },
];

const Projects = () => {
  return (
    <motion.section
      className="min-h-screen w-full px-6 pt-12 pb-16 lg:pt-12 lg:px-[120px] flex flex-col items-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Header */}
      <motion.div
        variants={itemVariants}
        className="flex flex-col items-center gap-3 mb-14"
      >
        <span
          className="text-xs font-medium px-3 py-1 rounded-full tracking-widest uppercase"
          style={{
            background: "rgba(59,130,246,0.1)",
            border: "1px solid rgba(59,130,246,0.25)",
            color: "#60a5fa",
          }}
        >
          Portfolio
        </span>

        <h1 className="text-4xl md:text-5xl font-bold text-center">
          My{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Projects
          </span>
        </h1>

        <p className="text-slate-400 text-center max-w-lg text-sm leading-relaxed">
          Real-world applications showcasing my skills in design, engineering,
          and problem-solving.
        </p>
      </motion.div>

      {/* Grid */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => {
          return (
            <motion.article
              key={project.title}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="relative flex flex-col rounded-2xl overflow-hidden group"
              style={{
                background: "rgba(13,31,56,0.8)",
                border: "1px solid rgba(59,130,246,0.12)",
                transition: "border-color 0.3s, box-shadow 0.3s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = `${project.color}50`;
                el.style.boxShadow = `0 16px 48px ${project.color}15`;
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(59,130,246,0.12)";
                el.style.boxShadow = "none";
              }}
            >
              {/* Image */}
              <div className="relative w-full h-48  p-2 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-contain rounded-2xl w-full h-full transition-transform duration-500 group-hover:scale-105"
                />

                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(13,31,56,0.9) 0%, transparent 60%)",
                  }}
                />

                {/* Tags */}
                <div className="absolute bottom-3 left-3 flex gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] px-2 py-0.5 rounded-md font-medium"
                      style={{
                        background: "rgba(5,13,26,0.85)",
                        border: `1px solid ${project.color}40`,
                        color: project.color,
                        backdropFilter: "blur(4px)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-5 gap-3">
                <h2 className="text-[17px] font-semibold text-slate-100">
                  {project.title}
                </h2>

                <p className="text-slate-400 text-[13px] leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* Links */}
                <div
                  className="flex gap-4 pt-3"
                  style={{
                    borderTop: "1px solid rgba(59,130,246,0.1)",
                  }}
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[13px] text-slate-400 hover:text-slate-200 transition-colors"
                  >
                    <FaGithub size={14} /> Code
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[13px] transition-colors"
                    style={{ color: project.color }}
                  >
                    <FaExternalLinkAlt size={12} /> Live Demo
                  </a>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </motion.section>
  );
};

export default Projects;