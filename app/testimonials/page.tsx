"use client"
import React from 'react';
import { ImQuotesRight } from "react-icons/im";
import { IoIosStar } from "react-icons/io";
import Image from 'next/image';
import { motion } from 'framer-motion';

const testimonials = [
  {
    img: '/woman.jpeg',
    name: 'Anita Kahenya',
    title: 'Technical Mentor, Moringa School',
    text: 'Felix is a dedicated and talented developer. His attention to detail and ability to solve complex problems make him a valuable asset to any team. He consistently delivers high-quality work and is always eager to learn new technologies.'
  },
  {
    img: '/mother.jpeg',
    name: 'Titus',
    title: 'Project Manager, Moringa School',
    text: 'Working with Felix has been a pleasure. He communicates effectively, meets deadlines, and brings creative solutions to the table. His frontend skills are top-notch, and he adapts quickly to project requirements.'
  },
  {
    img: '/father.jpeg',
    name: 'John ',
    title: 'Lead Engineer, DevWorks',
    text: 'Felix demonstrates strong technical skills and a passion for coding. He is reliable, proactive, and always willing to help others. His contributions have greatly improved our project outcomes.'
  }
];

const Testimonials = () => {
  return (
    <motion.div
      className='flex w-full min-h-screen flex-col px-4 py-8 md:px-10 lg:px-[200px] items-center bg-[var(--background)] text-[var(--foreground)]'
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className='lg:mt-[6px] flex flex-col  w-full items-center'>
        <motion.h1
          className='flex w-full ml-8 lg:ml-9 items-center gap-3 '
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          What<span className='text-emerald-500'>They</span>
        </motion.h1>
        <motion.h2
          className='w-full mt-5 flex items-center text-3xl md:text-4xl font-semibold  ml-8 lg:ml-9'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Say About Me
        </motion.h2>
      </div>
      <div className='w-full mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center'>
        {testimonials.map((testimonial, idx) => (
          <motion.div
            key={idx}
            className='bg-neutral-800 gap-3 w-full max-w-xs min-h-[250px] flex flex-col items-center justify-center rounded-md shadow-lg p-5'
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 * idx }}
          >
            <div className='flex w-full items-center justify-between'>
              <ImQuotesRight size={20} className='text-emerald-200' />
              <div className='flex items-center text-yellow-500 justify-center gap-2'>
                {[...Array(5)].map((_, i) => <IoIosStar key={i} size={15} />)}
              </div>
            </div>
            <p className='flex w-full text-[13px] mt-3'>{testimonial.text}</p>
            <div className='flex mt-4 items-center w-full'>
              <Image src={testimonial.img} className='rounded-full' width={35} height={35} alt={testimonial.name} />
              <div className='flex ml-4 w-full items-center flex-col'>
                <h1 className='flex w-full text-[14px] font-semibold'>{testimonial.name}</h1>
                <p className='flex w-full text-[13px]'>{testimonial.title}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Testimonials