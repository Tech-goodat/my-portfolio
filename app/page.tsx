"use client"
import React from 'react';
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import Image from 'next/image';
import { motion } from 'framer-motion';


const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
      duration: 0.7
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7
    }
  }
};

const Home = () => {
  return (
    <motion.div
      className="flex flex-col min-h-screen justify-center items-center px-4 py-8 lg:grid lg:grid-cols-2 lg:px-[120px] lg:mt-[10px]"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="flex w-full gap-3 items-center justify-center flex-col max-w-xl mx-auto lg:items-start" variants={itemVariants}>
        <motion.h2 className="text-[18px] gap-2 flex w-full" variants={itemVariants}>
          Hello, <span className="text-emerald-300">I&apos;m</span>
        </motion.h2>
        <motion.h2 className="text-4xl font-bold text-emerald-300 gap-2 flex w-full" variants={itemVariants}>
          Felix Kiprotich
        </motion.h2>
        <motion.h2 className="text-xl gap-2 flex w-full" variants={itemVariants}>
          Seasoned Software <span className="text-emerald-300">&</span> AI Engineer
        </motion.h2>
        <motion.p className="flex text-[14px] md:text-[15px] mt-2  lg:text-left" variants={itemVariants}>
          I&apos;m a Fullstack Software and AI Engineer passionate about building intelligent, user-focused web and mobile applications. I combine strong frontend and backend expertise with creativity to deliver innovative, scalable solutions.
        </motion.p>
        <motion.div className="flex mt-5 w-full items-center justify-center lg:justify-start" variants={itemVariants}>
          <button className="bg-emerald-300 w-[400px] cursor-pointer rounded-md p-1.5 items-center justify-center text-gray-900 flex text-[13px] mt-3 hover:bg-emerald-500 hover:text-gray-900">
            Download CV
          </button>
        </motion.div>
        <motion.div className="flex w-full flex-wrap items-center text-[15px] mt-8 gap-3 justify-center lg:justify-start" variants={itemVariants}>
          <p>Check out my</p>
          <span>-</span>
          <a
            href="https://www.linkedin.com/in/kiprotich-felix-b87a11228/"
            target="_blank"
            rel="noopener noreferrer"
            className="items-center p-1 bg-emerald-300 cursor-pointer border rounded-full border-emerald-400 hover:bg-emerald-800 text-gray-900 transition-colors"
            aria-label="LinkedIn"
          >
            <CiLinkedin size={22} />
          </a>
          <a
            href="https://github.com/Tech-goodat"
            target="_blank"
            rel="noopener noreferrer"
            className="items-center p-1 bg-emerald-300 cursor-pointer border rounded-full border-emerald-400 hover:bg-emerald-800 text-gray-900 transition-colors"
            aria-label="GitHub"
          >
            <FaGithub size={22} />
          </a>
        </motion.div>
      </motion.div>
      <motion.div className="flex w-full items-center justify-center flex-col mt-10 lg:mt-0" variants={itemVariants}>
        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.8, delay: 0.5, type: 'spring' }}>
          <Image src="/jerry.png" width={320} height={320} alt="jerry" className="rounded-full shadow-lg w-[220px] h-[220px] md:w-[320px] md:h-[320px] object-cover" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Home