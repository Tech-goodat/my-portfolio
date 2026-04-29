import React from 'react';
import {
  FaWhatsapp, FaPhoneAlt, FaGithub, FaLinkedin, FaEnvelope,
  FaHome, FaUser, FaProjectDiagram
} from "react-icons/fa";
import Link from 'next/link';

const Footer = () => {
  return (
    <footer
      className="relative mt-20 px-6 pt-14 pb-8 lg:px-[120px]"
      style={{
        borderTop: '1px solid rgba(59,130,246,0.12)',
        background: 'rgba(10,22,40,0.5)',
      }}
    >
      {/* Subtle top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(59,130,246,0.4), rgba(6,182,212,0.4), transparent)' }}
      />

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-lg text-slate-200">
              Good<span style={{ background: 'linear-gradient(135deg, #3b82f6, #06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>At</span>
            </span>
          </div>
          <p className="text-[13px] text-slate-500 leading-relaxed max-w-xs">
            Software developer building clean, scalable, and user-focused applications.
          </p>
          <div className="flex gap-2 mt-1">
            {[
              { icon: FaGithub, href: "https://github.com/Tech-goodat", color: '#818cf8' },
              { icon: FaLinkedin, href: "https://www.linkedin.com/in/felix-kiprotich-b87a11228/", color: '#3b82f6' },
            ].map(({ icon: Icon, href, color }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-8 h-8 rounded-lg transition-all"
                style={{
                  background: `${color}12`,
                  border: `1px solid ${color}25`,
                  color,
                }}
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-3">
          <span className="text-xs font-medium uppercase tracking-widest" style={{ color: '#60a5fa' }}>Navigation</span>
          {[
            { href: "/", icon: FaHome, label: "Home" },
            { href: "/skills", icon: FaUser, label: "Skills" },
            { href: "/projects", icon: FaProjectDiagram, label: "Projects" },
            { href: "/contact", icon: FaEnvelope, label: "Contact" },
          ].map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center gap-2.5 text-[13px] text-slate-400 hover:text-slate-200 transition-colors group"
            >
              <link.icon size={12} className="text-slate-600 group-hover:text-blue-400 transition-colors" />
              {link.label}
            </Link>
          ))}
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-3">
          <span className="text-xs font-medium uppercase tracking-widest" style={{ color: '#60a5fa' }}>Contact</span>
          {[
            { icon: FaWhatsapp, href: "https://wa.me/254758364336", label: "WhatsApp", color: '#22c55e' },
            { icon: FaPhoneAlt, href: "tel:+254758364336", label: "+254 758364336", color: '#06b6d4' },
            { icon: FaEnvelope, href: "mailto:felixkiprotich2000@gmail.com", label: "felixkiprotich2000@gmail.com", color: '#3b82f6' },
          ].map((item, i) => (
            <a
              key={i}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-[13px] text-slate-400 hover:text-slate-200 transition-colors"
            >
              <item.icon size={12} style={{ color: item.color }} />
              <span className="truncate">{item.label}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="max-w-5xl mx-auto mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2"
        style={{ borderTop: '1px solid rgba(59,130,246,0.08)' }}
      >
        <p className="text-xs text-slate-600">
          &copy; {new Date().getFullYear()} Felix Kiprotich. All rights reserved.
        </p>
        <p className="text-xs text-slate-600">
          Built with{' '}
          <span style={{ color: '#3b82f6' }}>Next.js</span>{' '}
          &amp;{' '}
          <span style={{ color: '#06b6d4' }}>Tailwind CSS</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
