"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  MdHome,         // Home
  MdPsychology,   // Skills
  MdWork,         // Projects
  MdContactMail,  // Contact
  MdSchool,       // Education
  MdThumbUp       // Testimonials
} from "react-icons/md";

const navLinks = [
  { href: "/", label: "Home", icon: MdHome },
  { href: "/skills", label: "Skills", icon: MdPsychology },
  { href: "/education", label: "Education", icon: MdSchool },
  { href: "/projects", label: "Projects", icon: MdWork },
  { href: "/testimonials", label: "Testimonials", icon: MdThumbUp },
  { href: "/contact", label: "Contact", icon: MdContactMail },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className='flex w-full lg:px-[200px] lg:mt-12 items-center justify-between'>
      <Link href="/" className='flex gap-3 ml-5 mt-5 lg:mt-0 w-full lg:w-7 items-center justify-center'>
        <Image src="/logo.png" width={35} height={35} alt="logo"/>
        <h1 className='font-semibold '>Good<span className='text-emerald-500'>At</span></h1>
      </Link>
      <div className='hidden lg:flex'>
        <ul className='flex text-[13px] gap-8 mr-5 text-gray-300'>
          {navLinks.map(link => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`hover:text-emerald-500 cursor-pointer ${pathname === link.href ? "text-emerald-500 font-bold" : ""}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Link href="/projects" className='hidden bg-emerald-500 cursor-pointer w-[160px] rounded-md p-1.5  items-center justify-center text-white lg:flex'>
        See Projects
      </Link>
      {/* Floating bottom navbar for mobile */}
      <nav className="fixed bottom-0 left-0 w-full bg-zinc-900/95 flex justify-around items-center py-2 z-50 shadow-2xl border-t border-zinc-800 lg:hidden">
        {navLinks.map(link => {
          const Icon = link.icon;
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex flex-col items-center justify-center px-2 py-1 transition-colors duration-200 ${
                isActive ? "text-emerald-400" : "text-gray-300"
              }`}
              aria-label={link.label}
            >
              <Icon size={26} />
              <span className="text-[10px] mt-1">{link.label}</span>
              {isActive && (
                <span className="block w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1" />
              )}
            </Link>
          );
        })}
      </nav>
    </div>
  )
}

export default Navbar