"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const educationData = [
  {
    image: '/cert.png',
    alt: 'moringa',
    cert: '/Flatiron%20school%20certificate.pdf',
    certLabel: 'Download Certificate',
    title: <><span className='font-semibold text-xl gap-1 w-full flex'>Moringa <span className='text-emerald-300'>School</span></span></>,
    desc: "I studied software engineering at Moringa School, where I gained hands-on experience in fullstack development, mastering modern frameworks, collaborative teamwork, and real-world project building.",
    skills: ['Next.js', 'React.js', 'Python', 'SQL']
  },
  {
    image: '/father.jpeg',
    alt: 'multimedia',
    cert: null,
    certLabel: null,
    title: <><span className='font-semibold text-xl gap-1 w-full flex'>Multimedia <span className='text-emerald-300'>University</span></span></>,
    desc: "I studied Economics at Multimedia University of Kenya, where I developed strong analytical, statistical, and problem-solving skills that sharpened my logical thinking and laid the foundation for my transition into software engineering.",
    skills: ['Regression Analysis', 'Maths For Science']
  }
];

const Education = () => {
  return (
    <motion.div
      className='min-h-screen flex flex-col w-full items-center px-4 py-8 md:px-10 lg:px-[200px] bg-[var(--background)] text-[var(--foreground)]'
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className='flex flex-col gap-5 w-full items-center'
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        <h1 className='flex w-full text-[14px] gap-2'>My <span className='text-emerald-300'>Education</span></h1>
        <h2 className='flex w-full font-bold text-4xl'>Background</h2>
      </motion.div>
      <div className='w-full mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 place-items-center'>
        {educationData.map((edu, idx) => (
          <motion.div
            key={idx}
            className='bg-neutral-800 rounded-md grid grid-cols-1 sm:grid-cols-2 w-full max-w-xl min-h-[320px] shadow-lg'
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 * idx }}
          >
            <div className='flex p-4 flex-col w-full items-center'>
              <Image src={edu.image} className='rounded-md object-cover' width={220} height={180} alt={edu.alt} />
              {edu.cert && (
                <a
                  href={edu.cert}
                  download
                  className='bg-emerald-500 w-full cursor-pointer rounded-md p-1.5 items-center justify-center text-white flex text-[13px] mt-12 hover:bg-emerald-600 transition-colors'
                >
                  {edu.certLabel}
                </a>
              )}
            </div>
            <div className='flex w-full p-4 flex-col items-center'>
              {edu.title}
              <p className='flex text-[14px] mt-5 '>{edu.desc}</p>
              <h2 className='text-emerald-300 text-[14px] mt-5 font-semibold w-full flex'>Skills</h2>
              <ul className='list-disc flex  items-start w-full text-[12px] gap-5 pl-5'>
                {edu.skills.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Education