"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import {
  MdHome,
  MdPsychology,
  MdWork,
  MdContactMail,
  MdSchool,
  MdThumbUp,
  MdClose,
  MdMenu
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
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <div
        className='flex w-full lg:px-[160px] items-center justify-between fixed top-0 left-0 right-0 z-50 h-16 px-6'
        style={{
          background: scrolled || menuOpen ? 'rgba(255,255,255,0.96)' : 'transparent',
          backdropFilter: scrolled || menuOpen ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled || menuOpen ? 'blur(20px)' : 'none',
          borderBottom: scrolled || menuOpen ? '1px solid rgba(251,146,60,0.2)' : '1px solid transparent',
          transition: 'background 0.4s, border-color 0.4s',
        }}
      >
        {/* Logo */}
        <Link href="/" className='flex gap-2.5 items-center group'>
         
          <h1 className='font-semibold text-lg text-gray-700 group-hover:text-gray-900 transition-colors'>
            Good<span className='text-orange-400'>At</span>
          </h1>
        </Link>

        {/* Desktop links */}
        <div className='hidden lg:flex'>
          <ul className='flex text-[13px] gap-1 text-gray-700'>
            {navLinks.map(link => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className='relative px-4 py-2 rounded-lg block transition-colors'
                    style={{ color: isActive ? '#1f2937' : '#374151', fontWeight: isActive ? '500' : '400' }}
                  >
                    {isActive && (
                      <span
                        className='absolute inset-0 rounded-lg bg-orange-400/15 border border-orange-400/30'
                      />
                    )}
                    <span className='relative z-10'>{link.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Desktop CTA */}
        <Link
          href="/projects"
          className='hidden lg:flex items-center justify-center w-[140px] rounded-lg py-2 text-[13px] font-medium text-white transition-all hover:-translate-y-px hover:shadow-lg bg-orange-400 hover:bg-orange-500'
          style={{ boxShadow: '0 4px 20px rgba(251,146,60,0.3)' }}
        >
          See Projects
        </Link>

        {/* Hamburger button — mobile only */}
        <button
          className='lg:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 rounded-lg transition-colors text-gray-700'
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          <motion.span
            className='block h-0.5 w-5 rounded-full origin-center'
            style={{ background: 'currentColor' }}
            animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25 }}
          />
          <motion.span
            className='block h-0.5 w-5 rounded-full'
            style={{ background: 'currentColor' }}
            animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className='block h-0.5 w-5 rounded-full origin-center'
            style={{ background: 'currentColor' }}
            animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25 }}
          />
        </button>
      </div>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className='fixed top-16 left-0 right-0 z-40 lg:hidden px-4 pt-4 pb-6 flex flex-col gap-1'
            style={{
              background: 'rgba(255,255,255,0.96)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              borderBottom: '1px solid rgba(251,146,60,0.2)',
            }}
          >
            {navLinks.map((link, i) => {
              const Icon = link.icon;
              const isActive = pathname === link.href;
              return (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.25 }}
                >
                  <Link
                    href={link.href}
                    className='flex items-center gap-3 px-4 py-3 rounded-xl transition-colors'
                    style={{
                      background: isActive ? 'rgba(251,146,60,0.12)' : 'transparent',
                      border: isActive ? '1px solid rgba(251,146,60,0.3)' : '1px solid transparent',
                      color: isActive ? '#1f2937' : '#374151',
                    }}
                  >
                    <Icon size={20} style={{ color: isActive ? '#fb923c' : '#9ca3af' }} />
                    <span className='text-sm font-medium'>{link.label}</span>
                    {isActive && (
                      <span
                        className='ml-auto w-1.5 h-1.5 rounded-full bg-orange-400'
                      />
                    )}
                  </Link>
                </motion.div>
              );
            })}

            <div className='mt-3 px-1'>
              <Link
                href="/projects"
                className='flex items-center justify-center w-full rounded-xl py-3 text-sm font-medium text-white bg-orange-400 hover:bg-orange-300'
                style={{ boxShadow: '0 4px 20px rgba(251,146,60,0.3)' }}
              >
                See Projects
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;