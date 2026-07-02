import React from 'react';
import {
  FaWhatsapp, FaPhoneAlt, FaGithub, FaLinkedin, FaEnvelope,
  FaHome, FaUser, FaProjectDiagram
} from "react-icons/fa";
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="relative mt-20 px-6 pt-14 pb-8 lg:px-[120px] bg-white border-t border-gray-200">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-lg text-gray-700">
              Good<span className="text-orange-400">At</span>
            </span>
          </div>
          <p className="text-[13px] text-gray-500 leading-relaxed max-w-xs">
            Software developer building clean, scalable, and user-focused applications.
          </p>
          <div className="flex gap-2 mt-1">
            {[
              { icon: FaGithub, href: "https://github.com/Tech-goodat", accent: "orange" },
              { icon: FaLinkedin, href: "https://www.linkedin.com/in/felix-kiprotich-b87a11228/", accent: "lime" },
            ].map(({ icon: Icon, href, accent }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center w-8 h-8 rounded-lg transition-all border ${
                  accent === "orange"
                    ? "bg-orange-50 border-orange-200 text-orange-400 hover:bg-orange-100"
                    : "bg-lime-50 border-lime-200 text-lime-700 hover:bg-lime-100"
                }`}
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-3">
          <span className="text-xs font-medium uppercase tracking-widest text-orange-400">
            Navigation
          </span>
          {[
            { href: "/", icon: FaHome, label: "Home" },
            { href: "/skills", icon: FaUser, label: "Skills" },
            { href: "/projects", icon: FaProjectDiagram, label: "Projects" },
            { href: "/contact", icon: FaEnvelope, label: "Contact" },
          ].map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center gap-2.5 text-[13px] text-gray-500 hover:text-gray-700 transition-colors group"
            >
              <link.icon size={12} className="text-gray-400 group-hover:text-orange-400 transition-colors" />
              {link.label}
            </Link>
          ))}
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-3">
          <span className="text-xs font-medium uppercase tracking-widest text-orange-400">
            Contact
          </span>
          {[
            { icon: FaWhatsapp, href: "https://wa.me/254758364336", label: "WhatsApp", accent: "lime" },
            { icon: FaPhoneAlt, href: "tel:+254758364336", label: "+254 758364336", accent: "lime" },
            { icon: FaEnvelope, href: "mailto:felixkiprotich2000@gmail.com", label: "felixkiprotich2000@gmail.com", accent: "orange" },
          ].map((item, i) => (
            <a
              key={i}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-[13px] text-gray-500 hover:text-gray-700 transition-colors"
            >
              <item.icon size={12} className={item.accent === "orange" ? "text-orange-400" : "text-lime-700"} />
              <span className="truncate">{item.label}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-5xl mx-auto mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 border-t border-gray-100">
        <p className="text-xs text-gray-400">
          &copy; {new Date().getFullYear()} Felix Kiprotich. All rights reserved.
        </p>
        <p className="text-xs text-gray-400">
          Built with <span className="text-orange-400 font-medium">Next.js</span> &amp;{' '}
          <span className="text-lime-700 font-medium">Tailwind CSS</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;