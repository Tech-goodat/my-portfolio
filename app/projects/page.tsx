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
    title: "NextDoor",
    description:
      "NextDoor is a community-driven business platform that connects local businesses with nearby residents, enabling them to discover products, services, and announcements through an intuitive web marketplace.",
    image: "/nextdoor.png",
    github: "https://github.com/Tech-goodat/nextdoor_client",
    live: "https://nextdoor-client.vercel.app/",
    tags: ["Next.js", "DRF", "Tailwind", "Shadcn", "Oauth", "PostgreSQL"],
    accent: "lime",
  },
   {
    title: "MajiSmart",
    description:
      "MajiSmart is an IoT-based water monitoring platform that tracks water usage in real time, detects leaks, and provides actionable insights through a web dashboard to help reduce water wastage.",
    image: "/majismart.png",
    github: "https://github.com/Tech-goodat/majismart",
    live: "https://majismart-seven.vercel.app/",
    tags: ["Next.js", "DRF", "Tailwind", "Shadcn", "Vapi AI", "IoT"],
    accent: "lime",
  },
  {
    title: "Lifepulse",
    description:
      "LifePulse is a health and wellness platform that helps users track fitness, nutrition, and personal health metrics through an intuitive dashboard, enabling better lifestyle decisions through data-driven insights.",
    image: "/lifepulse.png",
    github: "https://github.com/Tech-goodat/lifepulse_client",
    live: "https://lifepulse-client.vercel.app/",
    tags: ["Next.js", "Flask", "SQLAlchemy", "Tailwind"],
    accent: "orange",
  },
 

];

const accentClasses: Record<string, { border: string; tag: string; link: string }> = {
  orange: {
    border: "hover:border-orange-300 hover:shadow-orange-100",
    tag: "bg-white border-orange-200 text-orange-600",
    link: "text-orange-600 hover:text-orange-700",
  },
  lime: {
    border: "hover:border-lime-300 hover:shadow-lime-100",
    tag: "bg-white border-lime-200 text-lime-700",
    link: "text-lime-700 hover:text-lime-800",
  },
};

const Projects = () => {
  return (
    <motion.section
      className="min-h-screen w-full px-6 pt-12 mt-15 pb-16 lg:pt-12 lg:px-[120px] flex flex-col items-center bg-white"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Header */}
      <motion.div variants={itemVariants} className="flex flex-col items-center gap-3 mb-14">
        <span className="text-xs font-medium px-3 py-1 rounded-full tracking-widest uppercase bg-orange-50 border border-orange-200 text-orange-400">
          Portfolio
        </span>

        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-700">
          My <span className="text-orange-400">Projects</span>
        </h1>

        <p className="text-gray-500 text-center max-w-lg text-sm leading-relaxed">
          Real-world applications showcasing my skills in design, engineering,
          and problem-solving.
        </p>
      </motion.div>

      {/* Grid */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => {
          const a = accentClasses[project.accent];
          return (
            <motion.article
              key={project.title}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className={`relative flex flex-col rounded-2xl overflow-hidden group bg-white border border-gray-200 shadow-sm transition-all duration-300 ${a.border}`}
            >
              {/* Image */}
              <div className="relative w-full h-48 p-2 overflow-hidden bg-gray-50">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object- rounded-t-2xl rounded-b-lg border border-gray-300 w-full h-full transition-transform duration-500 group-hover:scale-105"
                />

                {/* Tags */}
                <div className="absolute bottom-3 left-3 flex gap-1.5 flex-wrap">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-[10px] px-2 py-0.5 rounded-md font-medium border ${a.tag}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-5 gap-3">
                <h2 className="text-[17px] font-semibold text-gray-700">
                  {project.title}
                </h2>

                <p className="text-gray-600 text-[13px] leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* Links */}
                <div className="flex gap-4 pt-3 border-t border-gray-100">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[13px] text-gray-500 hover:text-gray-800 transition-colors"
                  >
                    <FaGithub size={14} /> Code
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 text-[13px] font-medium transition-colors ${a.link}`}
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