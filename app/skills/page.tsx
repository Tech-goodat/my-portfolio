import React from 'react'
import { SiFrontendmentor } from "react-icons/si";
import { GiServerRack } from "react-icons/gi";
import { GiArtificialIntelligence } from "react-icons/gi";

const Skills = () => {
  return (
    <div className='flex w-full flex-col lg:px-[200px] items-center'>
      <div className='lg:mt-[120px] flex flex-col w-full items-center'>
      <h1 className='flex w-full  items-center gap-3'>
        My <span className='text-emerald-500'>skills</span>
        </h1>
        <h2 className='w-full mt-5 flex items-center text-4xl font-semibold'>What I Do</h2>
      
      </div>
      <div className='w-full mt-5 flex flex-col lg:grid lg:grid-cols-3'>
        <div className='bg-neutral-800 gap-3 w-[300px] h-[250px] items-center flex flex-col justify-center rounded-md'> 
          <SiFrontendmentor size={50} className='text-emerald-200'/>
          <h2 className='text-[15px] px-5 flex w-full font-semibold'>Fronted Development</h2>
          <p className='flex w-full text-[12px]  px-5'>I’m a frontend developer skilled in React.js, Next.js, and Tailwind CSS, creating fast, responsive, and visually appealing interfaces with clean code, smooth user experiences, and seamless API integrations.
</p>
        </div>
        <div className='bg-neutral-800 gap-3 w-[300px] h-[250px] items-center flex flex-col justify-center rounded-md'> 
          < GiServerRack size={50} className='text-emerald-200'/>
          <h2 className='text-[15px] px-5 flex w-full font-semibold'>Backend Development</h2>
          <p className='flex text-[12px] w-full  px-5'>I’m a backend developer skilled in Python, Flask, and Django, building secure, scalable APIs with robust database design, JWT authentication, and efficient server-side logic for seamless frontend integration.

</p>
        </div>
        <div className='bg-neutral-800 gap-3 w-[300px] h-[250px] items-center flex flex-col justify-center rounded-md'> 
          <GiArtificialIntelligence  size={50} className='text-emerald-200'/>
          <h2 className='text-[15px] px-5 flex w-full font-semibold'>Artificial Intelligence</h2>
          <p className='flex text-[12px] w-full px-5'>I’m an AI developer skilled in Python and machine learning, creating intelligent systems that automate tasks, analyze data, and enhance user experiences through smart, data-driven solutions.

</p>
        </div>
        
      </div>
    </div>
  )
}

export default Skills