"use client";

import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
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
      className="flex flex-col min-h-screen pt-24 pb-16 lg:pt-0 justify-center items-center px-6 lg:grid lg:grid-cols-2 lg:px-[120px] gap-12"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Left */}
      <motion.div
        className="flex w-full gap-4 items-start justify-center flex-col max-w-xl mx-auto"
        variants={itemVariants}
      >
        {/* Status badge */}
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium"
          style={{
            background: "rgba(59,130,246,0.1)",
            border: "1px solid rgba(59,130,246,0.25)",
            color: "#60a5fa",
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Available for work
        </motion.div>

        {/* Greeting */}
        <motion.p
          variants={itemVariants}
          className="text-slate-400 text-base font-light tracking-wide"
        >
          Hello, I&apos;m
        </motion.p>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl font-bold leading-tight"
          style={{
            background:
              "linear-gradient(135deg, #e2e8f0 30%, #3b82f6 70%, #06b6d4)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Felix Kiprotich
        </motion.h1>

        {/* Role */}
        <motion.div variants={itemVariants} className="flex items-center gap-3">
          <span className="text-lg text-slate-300 font-medium">
            Software Developer
          </span>
          <span
            className="h-px flex-1 max-w-[80px]"
            style={{
              background:
                "linear-gradient(90deg, rgba(59,130,246,0.6), transparent)",
            }}
          />
        </motion.div>

        {/* Mobile note */}
        <motion.p
          variants={itemVariants}
          className="text-[11px] text-slate-500 flex items-center gap-1.5"
        >
          <span style={{ color: "#06b6d4" }}>✦</span>
          This portfolio looks even better on mobile, I promise! 😂
        </motion.p>

        {/* Bio */}
        <motion.p
          variants={itemVariants}
          className="text-[14.5px] leading-relaxed text-slate-400 max-w-lg"
        >
          Frontend engineer with expertise in{" "}
          <span style={{ color: "#60a5fa" }}>React</span>,{" "}
          <span style={{ color: "#06b6d4" }}>Next.js</span>, and{" "}
          <span style={{ color: "#818cf8" }}>Tailwind CSS</span>, experienced in
          building responsive apps and consuming APIs. Transitioning into
          fullstack with Python, REST APIs, and scalable backend systems.
        </motion.p>

        {/* CTA + Socials */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col gap-4 w-full mt-2"
        >
          <a
            href="/Resume.pdf"
            download
            className="flex items-center justify-center gap-2 py-3 px-6 rounded-xl text-sm font-medium w-full max-w-xs"
            style={{
              background: "linear-gradient(135deg, #2563eb, #0891b2)",
              color: "#fff",
            }}
          >
            Download CV
          </a>

          <div className="flex items-center gap-4">
            <span className="text-slate-500 text-sm">Find me on</span>

            <div className="flex gap-2">
              <a
                href="https://www.linkedin.com/in/felix-kiprotich-b87a11228/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-xl"
                style={{
                  background: "rgba(59,130,246,0.1)",
                  border: "1px solid rgba(59,130,246,0.25)",
                  color: "#60a5fa",
                }}
              >
                <CiLinkedin size={20} />
              </a>

              <a
                href="https://github.com/Tech-goodat"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-xl"
                style={{
                  background: "rgba(6,182,212,0.1)",
                  border: "1px solid rgba(6,182,212,0.25)",
                  color: "#22d3ee",
                }}
              >
                <FaGithub size={18} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={itemVariants}
          className="flex gap-6 mt-4 pt-4 w-full"
          style={{ borderTop: "1px solid rgba(59,130,246,0.1)" }}
        >
          {[
            { num: "3+", label: "Projects Shipped" },
            { num: "2+", label: "Years Coding" },
            { num: "5+", label: "Tech Stack" },
          ].map((s) => (
            <div key={s.label} className="flex flex-col gap-0.5">
              <span
                className="text-xl font-bold"
                style={{
                  background:
                    "linear-gradient(135deg, #3b82f6, #06b6d4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {s.num}
              </span>
              <span className="text-[11px] text-slate-500">{s.label}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Right */}
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
          <div
            className="absolute inset-0 rounded-2xl"
            style={{
              background:
                "linear-gradient(135deg, #3b82f6, #06b6d4, #818cf8)",
              filter: "blur(24px)",
              opacity: 0.35,
              transform: "scale(1.08)",
            }}
          />

          <div
            className="relative p-[2px] rounded-2xl"
            style={{
              background:
                "linear-gradient(135deg, #3b82f6, #06b6d4, #818cf8)",
            }}
          >
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
            className="absolute -bottom-4 -left-4 px-3 py-2 rounded-xl text-xs font-medium"
            style={{
              background: "rgba(10, 22, 40, 0.95)",
              border: "1px solid rgba(59,130,246,0.3)",
              color: "#60a5fa",
            }}
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.1, duration: 0.5 }}
          >
            ⚡ Fullstack Dev
          </motion.div>

          <motion.div
            className="absolute -top-4 -right-4 px-3 py-2 rounded-xl text-xs font-medium"
            style={{
              background: "rgba(10, 22, 40, 0.95)",
              border: "1px solid rgba(6,182,212,0.3)",
              color: "#22d3ee",
            }}
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.3, duration: 0.5 }}
          >
            🤖 AI-Powered
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Home;