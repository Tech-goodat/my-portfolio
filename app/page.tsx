"use client";
import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import { motion } from "framer-motion";

const containerVariants: any = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: any = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const Home = () => {
  return (
    <motion.div
      className="flex flex-col min-h-screen mt-20 pt-18 pb-16 lg:pt-0 justify-center items-center px-6 lg:grid lg:grid-cols-2 lg:px-[120px] gap-12 bg-white"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Left: Text content */}
      <motion.div
        className="flex w-full gap-4 items-start justify-center flex-col max-w-xl mx-auto"
        variants={itemVariants}
      >
        {/* Status badge */}
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-orange-50 border border-orange-200 text-orange-400"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-lime-700 animate-pulse" />
          Available for work
        </motion.div>

        {/* Greeting */}
        <motion.p
          variants={itemVariants}
          className="text-gray-500 text-base font-light tracking-wide"
        >
          Hello, I&apos;m
        </motion.p>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl font-bold leading-tight text-gray-700"
        >
          Felix <span className="text-orange-400">Kiprotich</span>
        </motion.h1>

        {/* Role */}
        <motion.div variants={itemVariants} className="flex items-center gap-3">
          <span className="text-lg text-gray-700 font-medium">
            Software Engineer
          </span>
          <span className="h-px flex-1 max-w-[80px] bg-orange-300" />
        </motion.div>

        {/* Mobile note */}
        <motion.p
          variants={itemVariants}
          className="text-[11px] text-gray-400 hidden md:flex items-center gap-1.5"
        >
          <span className="text-lime-600">✦</span>
          This portfolio looks even better on mobile, I promise! 😂
        </motion.p>

        {/* Bio */}
        <motion.p
          variants={itemVariants}
          className="text-[14.5px] leading-relaxed text-gray-600 max-w-lg"
        >
          Fullstack Engineer with strong frontend expertise in{" "}
          <span className="text-orange-400 font-medium">React</span>,{" "}
          <span className="text-orange-400 font-medium">Next.js</span>, and{" "}
          <span className="text-lime-600 font-medium">Tailwind CSS</span>,
          building responsive, high-performance web applications and
          seamless user experiences.
          <br />
          <br />
          Focused on backend systems, APIs, and scalable architectures using
          Python, REST/GraphQL APIs, and cloud services, with growing
          specialization in AI integrations (LLMs, automation pipelines) and
          IoT systems for connected, data-driven applications.
        </motion.p>

        {/* CTA + Socials */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col gap-4 w-full mt-2"
        >
          <a
            href="/kiprotichCV.pdf"
            download
            className="flex items-center justify-center gap-2 py-3 px-6 rounded-xl text-sm font-semibold w-full max-w-xs bg-orange-400 hover:bg-orange-500 text-white transition-colors shadow-sm hover:shadow-md"
          >
            Download CV
          </a>

          <div className="flex items-center gap-4">
            <span className="text-gray-400 text-sm">Find me on</span>

            <div className="flex gap-2">
              <a
                href="https://www.linkedin.com/in/felix-kiprotich-b87a11228/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-xl bg-orange-50 border border-orange-200 text-orange-600 hover:bg-orange-100 transition-colors"
              >
                <CiLinkedin size={20} />
              </a>

              <a
                href="https://github.com/Tech-goodat"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-xl bg-lime-50 border border-lime-200 text-lime-700 hover:bg-lime-100 transition-colors"
              >
                <FaGithub size={18} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={itemVariants}
          className="flex gap-6 mt-4 pt-4 w-full border-t border-gray-200"
        >
          {[
            { num: "3+", label: "Projects Shipped" },
            { num: "4+", label: "Years Coding" },
            { num: "5+", label: "Tech Stack" },
          ].map((s) => (
            <div key={s.label} className="flex flex-col gap-0.5">
              <span className="text-xl font-bold text-orange-400">
                {s.num}
              </span>
              <span className="text-[11px] text-gray-500">{s.label}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Right: Image */}
      <motion.div
        className="flex w-full items-center justify-center mt-8 lg:mt-0"
        variants={itemVariants}
      >
        <motion.div
          initial={{ scale: 0.85, opacity: 0, rotate: -3 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.5, type: "spring", bounce: 0.3 }}
          className="relative"
        >
          {/* Image */}
          <div className="relative p-[2px] rounded-2xl bg-orange-300">
            <Image
              src="/pic.jpg"
              width={420}
              height={420}
              alt="Felix Kiprotich"
              className="rounded-2xl object-cover w-[300px] h-[300px] sm:w-[360px] sm:h-[360px] lg:w-[420px] lg:h-[420px]"
            />
          </div>

          {/* Badges */}
          <motion.div
            className="absolute -bottom-4 -left-4 px-3 py-2 rounded-xl text-xs font-medium bg-white border border-orange-200 text-orange-600 shadow-sm"
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.1 }}
          >
            ⚡ Fullstack Dev
          </motion.div>

         
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Home;