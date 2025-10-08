import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Image from 'next/image';

const Home = () => {
  return (
    <div className='flex lg:px-[200px] flex-col lg:grid lg:grid-cols-2 lg:mt-[120px]'>
      <div className='flex w-full  gap-3 items-center justify-center flex-col'>
        <h2 className='text-[18px] gap-2 flex w-full'>Hello, <span className='text-emerald-500'>I&apos;m</span></h2>
        <h2 className='text-4xl font-bold text-emerald-500 gap-2 flex w-full'>Felix Kiprotich</h2>
        <h2 className='text-xl font-  gap-2 flex w-full'>Seasoned Software <span className='text-emerald-500'>&</span> AI Engineer</h2>
        <p className='flex text-[12px]'>I&apos;m a Fullstack Software and AI Engineer passionate about building intelligent, user-focused web and mobile applications. I combine strong frontend and backend expertise with creativity to deliver innovative, scalable solutions.</p>
        <div className='flex mt-5 w-full items-center'>
          <button className='bg-emerald-600 w-[160px] cursor-pointer  rounded-md p-1.5  items-center justify-center text-white flex text-[13px] mt-3'>Download CV</button>
         
        </div>
         <div className='flex w-full items-center text-[15px] mt-10 gap-3'>
            <p>Check out my </p>
            <p>-</p>
            <div className='items-center p-1 bg-emerald-700 cursor-pointer border rounded-full border-emerald-400' ><FaInstagram size={22}/></div>
            <div className='items-center p-1 bg-emerald-700 cursor-pointer border rounded-full border-emerald-400' ><CiLinkedin size={22}/></div>
            <div className='items-center p-1 bg-emerald-700 cursor-pointer border rounded-full border-emerald-400' ><FaGithub size={22}/></div>
            <div className='items-center p-1 bg-emerald-700 cursor-pointer border rounded-full border-emerald-400' ><FaXTwitter size={22}/></div>

            
          </div>
      </div>
      <div className='flex w-full items-center justify-center flex-col'>
        <Image src="/jerry.png" width={400} height={400} alt="jerry"/>
      </div>
    </div>
  )
}

export default Home