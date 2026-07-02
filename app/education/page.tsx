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
    accent: "orange",
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
    accent: "lime",
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
    accent: "orange",
    year: "2019–2023",
  },
];

const accentClasses: Record<string, { border: string; badge: string; field: string; tag: string; certBtn: string; iconBg: string }> = {
  orange: {
    border: "border-l-orange-400",
    badge: "bg-orange-50 text-orange-600 border-orange-200",
    field: "text-orange-400",
    tag: "bg-orange-50 text-orange-700 border-orange-200",
    certBtn: "bg-white border-orange-300 text-orange-600 hover:bg-orange-50",
    iconBg: "bg-orange-50",
  },
  lime: {
    border: "border-l-lime-600",
    badge: "bg-lime-50 text-lime-700 border-lime-200",
    field: "text-lime-600",
    tag: "bg-lime-50 text-lime-800 border-lime-200",
    certBtn: "bg-white border-lime-300 text-lime-700 hover:bg-lime-50",
    iconBg: "bg-lime-50",
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

const Education = () => {
  return (
    <motion.div
      className="min-h-screen flex flex-col w-full items-center px-6 mt-15 pt-12 pb-16 lg:pt-12 lg:px-[120px] bg-white"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Header */}
      <motion.div variants={itemVariants} className="flex flex-col items-center gap-3 mb-14 w-full">
        <span className="text-xs font-medium px-3 py-1 rounded-full tracking-widest uppercase bg-orange-50 border border-orange-200 text-orange-400">
          Background
        </span>

        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-700">
          My <span className="text-orange-400">Education</span>
        </h1>

        <p className="text-gray-500 text-center max-w-lg text-sm leading-relaxed">
          A foundation built across formal academia, intensive coding programs,
          and AI-focused training.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="w-full max-w-4xl flex flex-col gap-6">
        {educationData.map((edu) => {
          const a = accentClasses[edu.accent];
          return (
            <motion.div
              key={edu.institution + edu.year}
              variants={itemVariants}
              whileHover={{ x: 4 }}
              className={`flex flex-col p-4 sm:flex-row gap-0 rounded-2xl overflow-hidden bg-white border border-gray-200 border-l-4 shadow-sm transition-all duration-300 ${a.border}`}
            >
              {/* Image side */}
              <div className={`sm:w-48 shrink-0 relative overflow-hidden rounded-xl ${a.iconBg}`}>
                <Image
                  src={edu.image}
                  className="w-full h-40 sm:h-full object-cover"
                  width={192}
                  height={220}
                  alt={edu.alt}
                />

                {edu.cert && (
                  <div className="absolute bottom-3 left-3 right-3">
                    <a
                      href={edu.cert}
                      download
                      className={`flex items-center justify-center gap-1.5 py-1.5 rounded-lg text-[11px] font-medium w-full border ${a.certBtn}`}
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
                    <h2 className="text-[16px] font-semibold text-gray-900">
                      {edu.institution}
                    </h2>
                    <p className={`text-sm font-medium ${a.field}`}>{edu.field}</p>
                  </div>

                  <span className={`text-xs px-2.5 py-1 rounded-lg self-start shrink-0 border ${a.badge}`}>
                    {edu.year}
                  </span>
                </div>

                <p className="text-[13px] leading-relaxed text-gray-600">{edu.desc}</p>

                <div className="flex flex-wrap gap-2 mt-auto pt-2 border-t border-gray-100">
                  {edu.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`text-[11px] px-2.5 py-1 rounded-lg border ${a.tag}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Education;