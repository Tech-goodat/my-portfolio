"use client"
import React from 'react';
import { FaLaptopCode, FaServer, FaRobot } from 'react-icons/fa';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.7
    }
  })
};

const Skills = () => {
  return (
    <motion.div
      className='flex w-full flex-col items-center px-4 py-8 md:px-10 lg:px-[200px]'
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className='lg:mt-[120px] flex flex-col w-full items-center'
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        <h1 className='flex w-full items-center gap-3 ml-4 lg:ml-9'>
          My <span className='text-emerald-500'>skills</span>
        </h1>
        <h2 className='w-full mt-5 flex items-center text-3xl md:text-4xl font-semibold text-center ml-4 lg:ml-9'>What I Do</h2>
      </motion.div>
      <div className='w-full mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center'>
        {[{
          icon: <FaLaptopCode size={50} className='text-emerald-200' />,
          title: 'Frontend Development',
          desc: 'I’m a frontend developer skilled in React.js, Next.js, and Tailwind CSS, creating fast, responsive, and visually appealing interfaces with clean code, smooth user experiences, and seamless API integrations.'
        }, {
          icon: <FaServer size={50} className='text-emerald-200' />,
          title: 'Backend Development',
          desc: 'I’m a backend developer skilled in Python, Flask, and Django, building secure, scalable APIs with robust database design, JWT authentication, and efficient server-side logic for seamless frontend integration.'
        }, {
          icon: <FaRobot size={50} className='text-emerald-200' />,
          title: 'Artificial Intelligence',
          desc: 'I’m an AI developer skilled in Python and machine learning, creating intelligent systems that automate tasks, analyze data, and enhance user experiences through smart, data-driven solutions.'
        }].map((card, i) => (
          <motion.div
            key={card.title}
            className='bg-neutral-800 gap-3 w-full max-w-xs min-h-[250px] flex flex-col items-center justify-center rounded-md shadow-lg p-6'
            custom={i}
            variants={cardVariants}
            initial='hidden'
            animate='visible'
            whileInView='visible'
            viewport={{ once: true, amount: 0.3 }}
          >
            {card.icon}
            <h2 className='text-[16px] px-5 flex w-full font-semibold text-center '>{card.title}</h2>
            <p className='flex w-full text-[13px] px-5 '>{card.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default Skills