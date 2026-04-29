"use client";

import React from "react";
import { FaLaptopCode, FaServer, FaRobot } from "react-icons/fa";
import { motion, Variants } from "framer-motion";

const skills = [
  {
    icon: FaLaptopCode,
    title: "Frontend Development",
    desc:
      "React.js, Next.js, and Tailwind CSS — building fast, responsive, visually striking interfaces with clean code, smooth UX, and seamless API integrations.",
    tags: ["React.js", "Next.js", "Tailwind CSS", "TypeScript"],
    color: "#3b82f6",
  },
  {
    icon: FaServer,
    title: "Backend Development",
    desc:
      "Python with Flask for robust backend systems — RESTful APIs, server-side logic, JWT auth, and database design for efficient, secure data handling.",
    tags: ["Python", "Flask", "REST APIs", "PostgreSQL"],
    color: "#06b6d4",
  },
  {
    icon: FaRobot,
    title: "Artificial Intelligence",
    desc:
      "Generative AI for software development — leveraging AI tools for code generation, debugging, and optimization to build innovative, efficient solutions.",
    tags: ["Generative AI", "Code Gen", "AI Debugging", "LLMs"],
    color: "#818cf8",
  },
];

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

const Skills = () => {
  return (
    <motion.div
      className="flex w-full flex-col items-center px-6 pt-28 pb-16 lg:pt-24 lg:px-[120px]"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Header */}
      <motion.div
        className="flex flex-col items-center gap-3 mb-14 w-full"
        variants={itemVariants}
      >
        <span
          className="text-xs font-medium px-3 py-1 rounded-full tracking-widest uppercase"
          style={{
            background: "rgba(59,130,246,0.1)",
            border: "1px solid rgba(59,130,246,0.25)",
            color: "#60a5fa",
          }}
        >
          Expertise
        </span>

        <h1 className="text-4xl md:text-5xl font-bold text-center leading-tight">
          What I{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Do
          </span>
        </h1>

        <p className="text-slate-400 text-center max-w-lg text-sm leading-relaxed">
          A blend of creative frontend craft and solid backend engineering —
          with AI tools woven throughout.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl">
        {skills.map((skill) => {
          const Icon = skill.icon;

          return (
            <motion.div
              key={skill.title}
              variants={itemVariants}
              whileHover={{ y: -6, scale: 1.01 }}
              className="relative flex flex-col p-6 gap-4 rounded-2xl group cursor-default"
              style={{
                background: "rgba(13, 31, 56, 0.8)",
                border: "1px solid rgba(59,130,246,0.12)",
                transition: "all 0.3s ease",
              }}
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{
                  background: `${skill.color}20`,
                  border: `1px solid ${skill.color}30`,
                }}
              >
                <Icon size={24} style={{ color: skill.color }} />
              </div>

              <div className="flex flex-col gap-2">
                <h2 className="text-[16px] font-semibold text-slate-100">
                  {skill.title}
                </h2>
                <p className="text-[13px] leading-relaxed text-slate-400">
                  {skill.desc}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-auto pt-2">
                {skill.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] px-2.5 py-1 rounded-lg font-medium"
                    style={{
                      background: `${skill.color}15`,
                      color: skill.color,
                      border: `1px solid ${skill.color}25`,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Bottom gradient accent */}
              <div
                className="absolute bottom-0 left-0 right-0 h-px rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(90deg, transparent, ${skill.color}, transparent)`,
                }}
              />
            </motion.div>
          );
        })}
      </div>

      {/* Tech stack strip */}
      <motion.div
        variants={itemVariants}
        className="mt-16 w-full max-w-5xl"
      >
        <p className="text-xs text-slate-500 text-center mb-5 uppercase tracking-widest">
          Full tech stack
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          {[
            "React",
            "Next.js",
            "TypeScript",
            "Python",
            "Flask",
            "Tailwind",
            "PostgreSQL",
            "AWS",
            "Git",
            "REST API",
            "JWT",
            "Vercel",
          ].map((tech) => (
            <span
              key={tech}
              className="text-xs px-3 py-1.5 rounded-lg"
              style={{
                background: "rgba(59,130,246,0.06)",
                border: "1px solid rgba(59,130,246,0.15)",
                color: "rgba(148,163,184,0.9)",
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Skills;