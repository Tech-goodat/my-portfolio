"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowCircleRight, FaHome, FaUser, FaProjectDiagram, FaEnvelope } from "react-icons/fa";


const Navbar = () => {
    return (
        <div className='flex w-full lg:px-[200px] lg:mt-12 items-center justify-between'>
            <div className='flex gap-3 ml-5 mt-5 lg:mt-0 w-full lg:w-7 items-center justify-center'>
                <Image src="/logo.png" width={35} height={35} alt="logo"/>
                <h1 className='font-semibold '>Good<span className='text-emerald-500'>At</span></h1>
            </div>
            <div className='hidden lg:flex'>
                <ul className='flex text-[13px] gap-12 mr-5 text-gray-300'>
                    <li>
                        <Link href="/" className='hover:text-emerald-500 cursor-pointer'>Home</Link>
                    </li>
                    <li>
                        <Link href="/skills" className='hover:text-emerald-500 cursor-pointer'>Skills</Link>
                    </li>
                    
                    <li>
                        <Link href="/contact" className='hover:text-emerald-500 cursor-pointer'>Contact</Link>
                    </li>
                     <li>
                        <Link href="/education" className='hover:text-emerald-500 cursor-pointer'>Education</Link>
                    </li>
                     <li>
                        <Link href="/testimonials" className='hover:text-emerald-500 cursor-pointer'>Testimonials</Link>
                    </li>
                </ul>
            </div>
            <Link href="/projects" className='hidden bg-emerald-500 cursor-pointer w-[160px] rounded-md p-1.5  items-center justify-center text-white lg:flex'>
                See Projects <FaArrowCircleRight className='ml-4' size={20}/>
            </Link>
         
            {/* Floating bottom navbar for mobile */}
            <nav className="fixed bottom-5 left-0 w-full bg-zinc-800 flex justify-around items-center py-2 z-50 lg:hidden">
                <Link href="/" className="text-gray-300 hover:text-emerald-500 flex flex-col items-center">
                    <FaHome size={24}/>
                </Link>
                <Link href="/skills" className="text-gray-300 hover:text-emerald-500 flex flex-col items-center">
                    <FaUser size={24}/>
                </Link>
                <Link href="/projects" className="text-gray-300 hover:text-emerald-500 flex flex-col items-center">
                    <FaProjectDiagram size={24}/>
                </Link>
                <Link href="/contact" className="text-gray-300 hover:text-emerald-500 flex flex-col items-center">
                    <FaEnvelope size={24}/>
                </Link>
                 <Link href="/testimonials" className="text-gray-300 hover:text-emerald-500 flex flex-col items-center">
                    <FaEnvelope size={24}/>
                </Link>
            </nav>
        </div>
    )
}

export default Navbar