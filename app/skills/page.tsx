"use client";

import React from "react";
import { FaLaptopCode, FaServer, FaRobot } from "react-icons/fa";
import { motion, Variants } from "framer-motion";

const skills = [
  {
    icon: FaLaptopCode,
    title: "Frontend Development",
    desc:
      "React.js, Next.js, and Tailwind CSS, building fast, responsive, visually striking interfaces with clean code, smooth UX, and seamless API integrations.",
    tags: ["React.js", "Next.js", "Tailwind CSS", "TypeScript"],
    accent: "orange",
  },
  {
    icon: FaServer,
    title: "Backend Development",
    desc:
      "Python with Flask, DRF, and FastAPI for robust backend systems, RESTful APIs, server-side logic, JWT auth, and database design for efficient, secure data handling. Node.js for scalable, event-driven applications and real-time features.",
    tags: ["Python", "Flask", "DRF", "FastAPI", "Node.js", "REST APIs", "PostgreSQL"],
    accent: "lime",
  },
  {
    icon: FaRobot,
    title: "Artificial Intelligence Systems",
    desc:
      "Building AI-powered applications by integrating LLM APIs, designing intelligent backend workflows, and implementing real-world automation systems such as chat agents, decision pipelines, and data-driven services.",
    tags: [
      "LLM Integrations",
      "AI Agents",
      "Backend Automation",
      "Workflow Orchestration",
    ],
    accent: "orange",
  },
];

const accentClasses: Record<string, { icon: string; title: string; tag: string; border: string }> = {
  orange: {
    icon: "bg-orange-50 border-orange-200 text-orange-400",
    title: "text-orange-400",
    tag: "bg-orange-50 text-orange-400 border-orange-200",
    border: "hover:border-orange-300 hover:shadow-orange-100",
  },
  lime: {
    icon: "bg-lime-50 border-lime-200 text-lime-600",
    title: "text-lime-600",
    tag: "bg-lime-50 text-lime-600 border-lime-200",
    border: "hover:border-lime-300 hover:shadow-lime-100",
  },
};

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
      className="flex w-full flex-col mt-15 items-center px-6 pt-8 pb-16 lg:pt-5 lg:px-[120px] bg-white"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Header */}
      <motion.div
        className="flex flex-col items-center gap-3 mb-14 w-full"
        variants={itemVariants}
      >
        <span className="text-xs font-medium px-3 py-1 rounded-full tracking-widest uppercase bg-orange-50 border border-orange-200 text-orange-400">
          Expertise
        </span>

        <h1 className="text-4xl md:text-5xl font-bold text-center leading-tight text-gray-700">
          What I <span className="text-orange-400">Do</span>
        </h1>

        <p className="text-gray-500 text-center max-w-lg text-sm leading-relaxed">
          A blend of creative frontend craft and solid backend engineering —
          with AI tools woven throughout.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl">
        {skills.map((skill) => {
          const Icon = skill.icon;
          const a = accentClasses[skill.accent];

          return (
            <motion.div
              key={skill.title}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className={`relative flex flex-col p-6 gap-4 rounded-2xl group cursor-default bg-white border border-gray-200 shadow-sm transition-all duration-300 ${a.border}`}
            >
              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${a.icon}`}>
                <Icon size={22} />
              </div>

              <div className="flex flex-col gap-2">
                <h2 className={`text-[16px] font-semibold ${a.title}`}>
                  {skill.title}
                </h2>
                <p className="text-[13px] leading-relaxed text-gray-600">
                  {skill.desc}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-auto pt-2">
                {skill.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`text-[11px] px-2.5 py-1 rounded-lg font-medium border ${a.tag}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Tech stack strip */}
      <motion.div variants={itemVariants} className="mt-16 w-full max-w-5xl">
        <p className="text-xs text-gray-400 text-center mb-5 uppercase tracking-widest">
          Full tech stack
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          {[
            "React",
            "Next.js",
            "TypeScript",
            "Python",
            "Flask",
            "DRF",
            "FastAPI",
            "Node.js",
            "Tailwind CSS",
            "PostgreSQL",
            "AWS",
            "Git",
            "Docker",
            "REST API",
            "JWT",
            "LLM Integrations",
          ].map((tech) => (
            <span
              key={tech}
              className="text-xs px-3 py-1.5 rounded-lg bg-gray-50 border border-gray-200 text-gray-600"
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