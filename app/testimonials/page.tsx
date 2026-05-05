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
    color: '#3b82f6',
  },
  {
    img: '/mother.jpeg',
    name: 'Titus',
    title: 'Project Manager, Moringa School',
    text: 'Working with Felix has been a pleasure. He communicates effectively, meets deadlines, and brings creative solutions to the table. His frontend skills are top-notch, and he adapts quickly to project requirements.',
    color: '#06b6d4',
  },
  {
    img: '/father.jpeg',
    name: 'John',
    title: 'Lead Engineer, DevWorks',
    text: 'Felix demonstrates strong technical skills and a passion for coding. He is reliable, proactive, and always willing to help others. His contributions have greatly improved our project outcomes.',
    color: '#818cf8',
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
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const Testimonials = () => {
  return (
    <motion.div
      className="flex w-full min-h-screen flex-col px-6 pt-28 pb-16 lg:pt-24 lg:px-[120px] items-center"
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
            background: 'rgba(59,130,246,0.1)',
            border: '1px solid rgba(59,130,246,0.25)',
            color: '#60a5fa',
          }}
        >
          Social Proof
        </span>

        <h1 className="text-4xl md:text-5xl font-bold text-center">
          What They{" "}
          <span
            style={{
              background: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Say
          </span>
        </h1>

        <p className="text-slate-400 text-center max-w-md text-sm leading-relaxed">
          Words from mentors and collaborators who&apos;ve seen me work up close.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((t, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            whileHover={{ y: -6 }}
            className="flex flex-col gap-4 p-5 rounded-2xl relative overflow-hidden"
            style={{
              background: 'rgba(13,31,56,0.8)',
              border: '1px solid rgba(59,130,246,0.12)',
              transition: 'all 0.3s',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = `${t.color}40`;
              (e.currentTarget as HTMLElement).style.boxShadow = `0 12px 40px ${t.color}12`;
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(59,130,246,0.12)';
              (e.currentTarget as HTMLElement).style.boxShadow = 'none';
            }}
          >
            {/* Decorative quote mark */}
            <div
              className="absolute top-4 right-4 text-5xl font-serif leading-none select-none"
              style={{ color: `${t.color}20` }}
            >
              "
            </div>

            {/* Stars */}
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <IoIosStar key={i} size={13} style={{ color: '#fbbf24' }} />
              ))}
            </div>

            {/* Quote */}
            <p className="text-[13px] leading-relaxed text-slate-400 flex-1 relative z-10">
              &ldquo;{t.text}&rdquo;
            </p>

            {/* Author */}
            <div
              className="flex items-center gap-3 pt-4"
              style={{ borderTop: '1px solid rgba(59,130,246,0.1)' }}
            >
              <div
                className="p-[1.5px] rounded-full shrink-0"
                style={{
                  background: `linear-gradient(135deg, ${t.color}, transparent)`,
                }}
              >
                <Image
                  src={t.img}
                  className="rounded-full object-cover block"
                  width={36}
                  height={36}
                  alt={t.name}
                />
              </div>

              <div>
                <p className="text-[13px] font-semibold text-slate-200">
                  {t.name}
                </p>
                <p className="text-[11px] text-slate-500">{t.title}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Testimonials;