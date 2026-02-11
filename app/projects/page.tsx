"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
      duration: 0.7,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 },
  },
};

const projects = [
  {
    title: "HealthWise HMS",
    description:
      "A modern hospital management system for clinics and hospitals. Features include patient registration, appointment scheduling, billing, staff management, and medical records. Built with React, Flask, and AWS Amplify for a seamless and secure experience.",
    image: "/hospital.png",
    github: "https://github.com/Tech-goodat/Healthwise-HMS",
    live: "https://main.d2crs00234wk9u.amplifyapp.com/sign%20up",
  },
  {
    title: "Umbrella Payment App",
    description:
      "A digital wallet and payment platform that allows users to send, receive, and manage money securely. Includes user authentication, transaction history, and a clean dashboard. Built with Next.js, Tailwind CSS, and Flask for real-time updates and reliability.",
    image: "/umbrella.png",
    github: "https://github.com/Tech-goodat/umbrella",
    live: "https://umbrella-orpin-theta.vercel.app/home",
  },
  {
    title: "UsafiPlus Website",
    description:
      "A web platform for UsafiPlus, a sanitation and waste management service. Users can learn about services, book pickups, and contact support. Built with React, deployed on AWS , focusing on accessibility, responsiveness, and a modern user experience.",
    image: "/usafi.png",
    github: "https://github.com/Tech-goodat/usafi-app",
    live: "https://main.d1vn6nn8njjzxw.amplifyapp.com/",
  },
];

const Projects = () => {
  return (
    <motion.section
      className="min-h-screen w-full bg-[var(--background)] text-[var(--foreground)] px-4 py-16 flex flex-col items-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1
        className="text-3xl flex  md:text-4xl font-bold  mb-2 text-emerald-400"
        variants={itemVariants}
      >
        My Projects
      </motion.h1>
      <motion.p
        className="text-gray-400 flex lg:w-full lg:text-center   mb-10 max-w-2xl"
        variants={itemVariants}
      >
        Explore some of the projects I&apos;ve worked on. Each project showcases my skills, creativity, and passion for building impactful solutions.
      </motion.p>
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            className="bg-neutral-900/80 rounded-xl shadow-lg flex flex-col overflow-hidden hover:shadow-2xl transition-shadow"
            variants={itemVariants}
            whileHover={{ y: -8, scale: 1.02 }}
          >
            <div className="w-full h-48 bg-neutral-800 relative">
              <img
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex flex-col flex-1 p-6">
              <h2 className="text-xl font-semibold mb-2 text-emerald-300">{project.title}</h2>
              <p className="text-gray-300 mb-4 text-[15px] flex-1">{project.description}</p>
              <div className="flex gap-4 mt-auto">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-emerald-500 transition-colors text-[15px]"
                >
                  <FaGithub /> Code
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-emerald-500 transition-colors text-[15px]"
                >
                  <FaExternalLinkAlt /> Live
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;