import React from 'react';
import { 
  FaWhatsapp, FaPhoneAlt, FaGithub, FaLinkedin, FaEnvelope, 
  FaHome, FaUser, FaProjectDiagram 
} from "react-icons/fa";
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="footer bg-[var(--background)] text-[var(--foreground)] py-12 px-4 border-t border-gray-600 dark:border-gray-700 mt-10">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Contact Section */}
        <div className="flex flex-col gap-3 items-start">
          <span className="font-semibold text-lg mb-2">Contact <span className='text-emerald-400'>Me</span></span>
          <a
            href="https://wa.me/254758364336"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-[15px] gap-2 hover:text-emerald-500 cursor-pointer transition-colors"
            title="WhatsApp"
          >
            <FaWhatsapp /> WhatsApp
          </a>
          <a
            href="tel:+254758364336"
            className="flex items-center text-[15px] gap-2 hover:text-emerald-500 cursor-pointer transition-colors"
            title="Call"
          >
            <FaPhoneAlt /> +254 758364336
          </a>
          <a
            href="mailto:felixkiprotich2000@gmail.com"
            className="flex items-center gap-2 hover:text-emerald-400 text-[15px] cursor-pointer transition-colors"
            title="Email"
          >
            <FaEnvelope /> felixkiprotich2000@gmail.com
          </a>
        </div>
        {/* Important Links Section */}
        <div className="flex flex-col gap-3 items-start">
          <span className="font-semibold text-lg text-emerald-400 mb-2">Important Links</span>
          <Link href="/" className="flex items-center gap-2 text-[15px] hover:text-emerald-500 cursor-pointer transition-colors">
            <FaHome /> Home
          </Link>
          <Link href="/skills" className="flex items-center gap-2 text-[15px] hover:text-emerald-500 cursor-pointer transition-colors">
            <FaUser /> Skills
          </Link>
          <Link href="/projects" className="flex items-center gap-2 text-[15px] hover:text-emerald-500 cursor-pointer transition-colors">
            <FaProjectDiagram /> Projects
          </Link>
          <Link href="/contact" className="flex items-center gap-2 text-[15px] hover:text-emerald-500 cursor-pointer transition-colors">
            <FaEnvelope /> Contact
          </Link>
        </div>
        {/* Socials Section */}
        <div className="flex flex-col gap-3 items-start">
          <span className="font-semibold text-lg text-emerald-400 mb-2">Socials</span>
          <a
            href="https://github.com/Tech-goodat"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[15px] hover:text-emerald-500 cursor-pointer transition-colors"
            title="GitHub"
          >
            <FaGithub size={20} /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/felix-kiprotich-b87a11228/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[15px] hover:text-emerald-500 cursor-pointer transition-colors"
            title="LinkedIn"
          >
            <FaLinkedin size={20} /> LinkedIn
          </a>
        </div>
      </div>
      <div className="text-left text-xs text-gray-400 mt-10 max-w-5xl mx-auto">
        &copy; {new Date().getFullYear()} Felix Kiprotich. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;