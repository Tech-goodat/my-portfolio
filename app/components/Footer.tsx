import React from 'react';
import { FaWhatsapp, FaPhoneAlt, FaGithub, FaLinkedin, FaEnvelope, FaHome, FaUser, FaProjectDiagram } from "react-icons/fa";
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="footer bg-[var(--background)] text-[var(--foreground)] py-10 px-4 border-t border-gray-600 dark:border-gray-700 mt-10">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Contact Section */}
        <div className="flex flex-col gap-2 items-center md:items-start">
          <span className="font-semibold text-lg mb-1">Contact <span className='text-emerald-400'>Me</span></span>
          <div className="flex flex-col gap-3 items-center md:items-start">
            <a
              href="https://wa.me/254758364336"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-[14px] gap-2 hover:text-emerald-500 cursor-pointer transition-colors"
              title="WhatsApp"
            >
              <FaWhatsapp /> WhatsApp
            </a>
            <a
              href="tel:+254758364336"
              className="flex items-center text-[14px] gap-2 hover:text-emerald-500 cursor-pointer transition-colors"
              title="Call"
            >
              <FaPhoneAlt /> +254 758364336
            </a>
            <a
              href="mailto:felixkiprotich2000@gmail.com"
              className="flex items-center gap-2 hover:text-emerald-400 text-[14px] cursor-pointer transition-colors"
              title="Email"
            >
              <FaEnvelope /> felixkiprotich2000@gmail.com
            </a>
          </div>
        </div>
        {/* Important Links Section */}
        <div className="flex flex-col gap-2 items-center">
          <span className="font-semibold text-lg text-emerald-400 mb-1">Important Links</span>
          <div className="flex flex-col gap-3 items-center">
            <Link href="/" className="flex items-center gap-2 text-[14px] hover:text-emerald-500 cursor-pointer transition-colors">
              <FaHome /> Home
            </Link>
            <Link href="/skills" className="flex items-center gap-2 text-[14px] hover:text-emerald-500 cursor-pointer transition-colors">
              <FaUser /> Skills
            </Link>
            <Link href="/projects" className="flex items-center gap-2 text-[14px] hover:text-emerald-500 cursor-pointer transition-colors">
              <FaProjectDiagram /> Projects
            </Link>
            <Link href="/contact" className="flex items-center gap-2 text-[14px] hover:text-emerald-500 cursor-pointer transition-colors">
              <FaEnvelope /> Contact
            </Link>
          </div>
        </div>
        {/* Socials Section */}
        <div className="flex flex-col gap-2 items-center md:items-end">
          <span className="font-semibold text-lg text-emerald-400 mb-1">Socials</span>
          <div className="flex gap-6 mt-1">
            <a
              href="https://github.com/Tech-goodat"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-500 cursor-pointer transition-colors"
              title="GitHub"
            >
              <FaGithub size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/kiprotich-felix-b87a11228/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-500 cursor-pointer transition-colors"
              title="LinkedIn"
            >
              <FaLinkedin size={22} />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center text-xs text-gray-400 mt-8">
        &copy; {new Date().getFullYear()} Felix Kiprotich. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;