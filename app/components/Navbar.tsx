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
        className='flex w-full lg:px-[200px] items-center justify-between fixed top-0 left-0 right-0 z-50 h-16 px-6'
        style={{
          background: scrolled || menuOpen ? 'rgba(5,13,26,0.96)' : 'transparent',
          backdropFilter: scrolled || menuOpen ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled || menuOpen ? 'blur(20px)' : 'none',
          borderBottom: scrolled || menuOpen ? '1px solid rgba(59,130,246,0.12)' : '1px solid transparent',
          transition: 'background 0.4s, border-color 0.4s',
        }}
      >
        {/* Logo */}
        <Link href="/" className='flex gap-2.5 items-center group'>
          <div
            className='w-8 h-8 rounded-lg overflow-hidden shrink-0'
            style={{ background: 'linear-gradient(135deg, #3b82f6, #06b6d4)', padding: '2px' }}
          >
            <Image src="/logo.png" width={28} height={28} alt="logo" className='rounded-md' />
          </div>
          <h1 className='font-semibold text-sm text-slate-200 group-hover:text-white transition-colors'>
            Good<span style={{ background: 'linear-gradient(135deg, #3b82f6, #06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>At</span>
          </h1>
        </Link>

        {/* Desktop links */}
        <div className='hidden lg:flex'>
          <ul className='flex text-[13px] gap-1 text-slate-300'>
            {navLinks.map(link => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className='relative px-4 py-2 rounded-lg block transition-colors'
                    style={{ color: isActive ? '#fff' : 'rgba(148,163,184,0.85)', fontWeight: isActive ? '500' : '400' }}
                  >
                    {isActive && (
                      <span
                        className='absolute inset-0 rounded-lg'
                        style={{ background: 'linear-gradient(135deg, rgba(59,130,246,0.2), rgba(6,182,212,0.12))', border: '1px solid rgba(59,130,246,0.28)' }}
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
          className='hidden lg:flex items-center justify-center w-[140px] rounded-lg py-2 text-[13px] font-medium text-white transition-all hover:-translate-y-px hover:shadow-lg'
          style={{ background: 'linear-gradient(135deg, #2563eb, #0891b2)', boxShadow: '0 4px 20px rgba(59,130,246,0.25)' }}
        >
          See Projects
        </Link>

        {/* Hamburger button — mobile only */}
        <button
          className='lg:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 rounded-lg transition-colors'
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          style={{ color: 'rgba(148,163,184,0.9)' }}
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
              background: 'rgba(5,13,26,0.96)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              borderBottom: '1px solid rgba(59,130,246,0.12)',
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
                      background: isActive ? 'linear-gradient(135deg, rgba(59,130,246,0.15), rgba(6,182,212,0.08))' : 'transparent',
                      border: isActive ? '1px solid rgba(59,130,246,0.25)' : '1px solid transparent',
                      color: isActive ? '#fff' : 'rgba(148,163,184,0.8)',
                    }}
                  >
                    <Icon size={20} style={{ color: isActive ? '#60a5fa' : 'rgba(148,163,184,0.6)' }} />
                    <span className='text-sm font-medium'>{link.label}</span>
                    {isActive && (
                      <span
                        className='ml-auto w-1.5 h-1.5 rounded-full'
                        style={{ background: 'linear-gradient(135deg, #3b82f6, #06b6d4)' }}
                      />
                    )}
                  </Link>
                </motion.div>
              );
            })}

            <div className='mt-3 px-1'>
              <Link
                href="/projects"
                className='flex items-center justify-center w-full rounded-xl py-3 text-sm font-medium text-white'
                style={{ background: 'linear-gradient(135deg, #2563eb, #0891b2)', boxShadow: '0 4px 20px rgba(59,130,246,0.3)' }}
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