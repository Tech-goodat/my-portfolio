"use client";
import React from 'react';
import { IoIosStar } from "react-icons/io";
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

const testimonials = [
  {
    img: '/woman.jpeg',
    name: 'Anita Kahenya',
    title: 'Technical Mentor, Moringa School',
    text: 'Felix is a dedicated and talented developer. His attention to detail and ability to solve complex problems make him a valuable asset to any team. He consistently delivers high-quality work and is always eager to learn new technologies.',
    accent: 'orange',
  },
  {
    img: '/mother.jpeg',
    name: 'Titus',
    title: 'Project Manager, Moringa School',
    text: 'Working with Felix has been a pleasure. He communicates effectively, meets deadlines, and brings creative solutions to the table. His frontend skills are top-notch, and he adapts quickly to project requirements.',
    accent: 'lime',
  },
  {
    img: '/father.jpeg',
    name: 'John',
    title: 'Lead Engineer, BitNorm',
    text: 'Felix demonstrates strong technical skills and a passion for coding. He is reliable, proactive, and always willing to help others. His contributions have greatly improved our project outcomes.',
    accent: 'orange',
  },
];

const accentClasses: Record<string, { border: string; ring: string; quote: string }> = {
  orange: {
    border: 'hover:border-orange-300 hover:shadow-orange-100',
    ring: 'ring-orange-500',
    quote: 'text-orange-100',
  },
  lime: {
    border: 'hover:border-lime-300 hover:shadow-lime-100',
    ring: 'ring-lime-700',
    quote: 'text-lime-100',
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
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const Testimonials = () => {
  return (
    <motion.div
      className="flex w-full min-h-screen flex-col px-6 pt-28 pb-16 lg:pt-24 lg:px-[120px] items-center bg-white"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Header */}
      <motion.div variants={itemVariants} className="flex flex-col items-center gap-3 mb-14 w-full">
        <span className="text-xs font-medium px-3 py-1 rounded-full tracking-widest uppercase bg-orange-50 border border-orange-200 text-orange-400">
          Social Proof
        </span>

        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-700">
          What They <span className="text-orange-400">Say</span>
        </h1>

        <p className="text-gray-500 text-center max-w-md text-sm leading-relaxed">
          Words from mentors and collaborators who&apos;ve seen me work up close.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((t, idx) => {
          const a = accentClasses[t.accent];
          return (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className={`flex flex-col gap-4 p-5 rounded-2xl relative overflow-hidden bg-white border border-gray-200 shadow-sm transition-all duration-300 ${a.border}`}
            >
              {/* Decorative quote mark */}
              <div className={`absolute top-4 right-4 text-5xl font-serif leading-none select-none ${a.quote}`}>
                "
              </div>

              {/* Stars */}
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <IoIosStar key={i} size={13} className="text-orange-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-[13px] leading-relaxed text-gray-600 flex-1 relative z-10">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className={`p-[1.5px] rounded-full shrink-0 ring-2 ${a.ring}`}>
                  <Image
                    src={t.img}
                    className="rounded-full object-cover block"
                    width={36}
                    height={36}
                    alt={t.name}
                  />
                </div>

                <div>
                  <p className="text-[13px] font-semibold text-gray-700">{t.name}</p>
                  <p className="text-[11px] text-gray-500">{t.title}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Testimonials;