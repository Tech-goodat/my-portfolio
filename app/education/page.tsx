"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { FaDownload } from "react-icons/fa";

const educationData = [
  {
    image: "/cert.png",
    alt: "Moringa School Certificate",
    cert: "/Flatiron%20school%20certificate.pdf",
    certLabel: "Certificate",
    institution: "Moringa School",
    field: "Software Engineering",
    desc:
      "Hands-on fullstack development program covering modern frameworks, collaborative engineering, and real-world project delivery.",
    skills: ["Next.js", "React.js", "Python", "Flask", "REST APIs"],
    color: "#3b82f6",
    year: "2023–2024",
  },
  {
    image: "/aicert.png",
    alt: "AI Certificate",
    cert: "/AICert.pdf",
    certLabel: "Certificate",
    institution: "Moringa School",
    field: "Generative AI for Developers",
    desc:
      "Deep dive into AI-powered development — leveraging generative models for code generation, debugging, and workflow optimization.",
    skills: [
      "AI Code Generation",
      "Prompt Engineering",
      "AI Debugging",
      "Optimization",
    ],
    color: "#06b6d4",
    year: "2024",
  },
  {
    image: "/father.jpeg",
    alt: "Multimedia University",
    cert: null,
    certLabel: null,
    institution: "Multimedia University",
    field: "Economics",
    desc:
      "Built strong analytical, statistical, and problem-solving foundations that directly inform my approach to software architecture and systems thinking.",
    skills: ["Regression Analysis", "Statistics", "Mathematical Modelling"],
    color: "#818cf8",
    year: "2019–2023",
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

const Education = () => {
  return (
    <motion.div
      className="min-h-screen flex flex-col w-full items-center px-6 pt-12 pb-16 lg:pt-12 lg:px-[120px]"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Header */}
      <motion.div
        variants={itemVariants}
        className="flex flex-col items-center gap-3 mb-14 w-full"
      >
        <span
          className="text-xs font-medium px-3 py-1 rounded-full tracking-widest uppercase"
          style={{
            background: "rgba(59,130,246,0.1)",
            border: "1px solid rgba(59,130,246,0.25)",
            color: "#60a5fa",
          }}
        >
          Background
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
            Education
          </span>
        </h1>

        <p className="text-slate-400 text-center max-w-lg text-sm leading-relaxed">
          A foundation built across formal academia, intensive coding programs,
          and AI-focused training.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="w-full max-w-4xl flex flex-col gap-6">
        {educationData.map((edu) => (
          <motion.div
            key={edu.institution + edu.year}
            variants={itemVariants}
            whileHover={{ x: 4 }}
            className="flex flex-col p-4 sm:flex-row gap-0 rounded-2xl overflow-hidden"
            style={{
              background: "rgba(13,31,56,0.8)",
              border: "1px solid rgba(59,130,246,0.12)",
              borderLeft: `3px solid ${edu.color}`,
              transition: "all 0.3s ease",
            }}
          >
            {/* Image side */}
            <div className="sm:w-48 shrink-0 relative overflow-hidden">
              <Image
                src={edu.image}
                className=" w-full h-40 sm:h-full"
                width={192}
                height={220}
                alt={edu.alt}
              />

              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(135deg, ${edu.color}15, transparent)`,
                }}
              />

              {edu.cert && (
                <div className="absolute bottom-3 left-3 right-3">
                  <a
                    href={edu.cert}
                    download
                    className="flex items-center justify-center gap-1.5 py-1.5 rounded-lg text-[11px] font-medium w-full"
                    style={{
                      background: "rgba(5,13,26,0.9)",
                      border: `1px solid ${edu.color}40`,
                      color: edu.color,
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    <FaDownload size={10} />
                    {edu.certLabel}
                  </a>
                </div>
              )}
            </div>

            {/* Content side */}
            <div className="flex flex-col p-5 flex-1 gap-3">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                <div>
                  <h2 className="text-[16px] font-semibold text-slate-100">
                    {edu.institution}
                  </h2>
                  <p className="text-sm font-medium" style={{ color: edu.color }}>
                    {edu.field}
                  </p>
                </div>

                <span
                  className="text-xs px-2.5 py-1 rounded-lg self-start shrink-0"
                  style={{
                    background: `${edu.color}12`,
                    color: edu.color,
                    border: `1px solid ${edu.color}25`,
                  }}
                >
                  {edu.year}
                </span>
              </div>

              <p className="text-[13px] leading-relaxed text-slate-400">
                {edu.desc}
              </p>

              <div
                className="flex flex-wrap gap-2 mt-auto pt-2"
                style={{ borderTop: "1px solid rgba(59,130,246,0.1)" }}
              >
                {edu.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-[11px] px-2.5 py-1 rounded-lg"
                    style={{
                      background: "rgba(59,130,246,0.06)",
                      border: "1px solid rgba(59,130,246,0.15)",
                      color: "rgba(148,163,184,0.9)",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Education;