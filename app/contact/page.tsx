"use client";

import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaWhatsapp,
  FaLinkedin,
  FaGithub,
  FaRegCopy,
  FaCheck,
} from "react-icons/fa";

const EMAIL_TO = "felixkiprotich2000@gmail.com";
const PHONE = "+254 758364336";
const WHATSAPP = "+254 758364336";
const LINKEDIN = "https://www.linkedin.com/in/felix-kiprotich-b87a11228/";
const GITHUB = "https://github.com/Tech-goodat";

const contactItems = [
  {
    icon: FaEnvelope,
    label: "Email",
    value: EMAIL_TO,
    href: `mailto:${EMAIL_TO}`,
    copyKey: "email",
    accent: "orange",
  },
  {
    icon: FaPhoneAlt,
    label: "Phone",
    value: PHONE,
    href: `tel:${PHONE.replace(/\s/g, "")}`,
    copyKey: "phone",
    accent: "lime",
  },
  {
    icon: FaWhatsapp,
    label: "WhatsApp",
    value: WHATSAPP,
    href: `https://wa.me/${WHATSAPP.replace(/\D/g, "")}`,
    copyKey: "whatsapp",
    accent: "lime",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "View Profile",
    href: LINKEDIN,
    copyKey: "linkedin",
    accent: "orange",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "Tech-goodat",
    href: GITHUB,
    copyKey: "github",
    accent: "orange",
  },
];

const accentIconClasses: Record<string, string> = {
  orange: "bg-orange-50 border-orange-200 text-orange-400",
  lime: "bg-lime-50 border-lime-200 text-lime-700",
};

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [sending, setSending] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCopy = (value: string, label: string) => {
    navigator.clipboard.writeText(value);
    setCopied(label);
    setTimeout(() => setCopied(null), 1800);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );

    window.location.href = `mailto:${EMAIL_TO}?subject=${subject}&body=${body}`;

    setTimeout(() => setSending(false), 2000);
  };

  const inputClass =
    "bg-white border border-gray-200 focus:border-orange-400 rounded-xl px-4 py-3 text-gray-800 text-sm outline-none w-full transition-colors";

  return (
    <motion.section
      className="min-h-screen flex items-center justify-center px-6 pt-28 pb-16 lg:pt-20 bg-white"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="w-full max-w-5xl">
        {/* Header */}
        <motion.div variants={itemVariants} className="flex flex-col items-center gap-3 mb-12">
          <span className="text-xs font-medium px-3 py-1 rounded-full tracking-widest uppercase bg-orange-50 border border-orange-200 text-orange-400">
            Let&apos;s Connect
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-700">
            Get In <span className="text-orange-400">Touch</span>
          </h1>

          <p className="text-gray-500 text-center max-w-md text-sm leading-relaxed">
            Open to new projects, creative ideas, or opportunities. Drop a
            message and I&apos;ll get back to you.
          </p>
        </motion.div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Contact Info */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col gap-3 p-6 rounded-2xl bg-white border border-gray-200 shadow-sm"
          >
            <h2 className="text-lg font-semibold text-gray-700 mb-2">
              Contact Info
            </h2>

            {contactItems.map((item) => {
              const Icon = item.icon;
              const isCopied = copied === item.copyKey;

              return (
                <div
                  key={item.copyKey}
                  className="flex items-center justify-between gap-3 py-3 px-4 rounded-xl bg-gray-50 border border-gray-100"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border ${accentIconClasses[item.accent]}`}
                    >
                      <Icon size={14} />
                    </div>

                    <div className="min-w-0">
                      <p className="text-[11px] text-gray-400">{item.label}</p>
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="text-[13px] text-gray-700 hover:text-gray-800 block truncate"
                      >
                        {item.value}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={() => handleCopy(item.value, item.copyKey)}
                    className={`w-7 h-7 flex items-center justify-center rounded-lg transition-colors ${
                      isCopied ? "bg-lime-100 text-lime-700" : "text-gray-400 hover:bg-gray-100"
                    }`}
                  >
                    {isCopied ? <FaCheck size={11} /> : <FaRegCopy size={11} />}
                  </button>
                </div>
              );
            })}
          </motion.div>

          {/* Form */}
          <motion.form
            variants={itemVariants}
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 p-6 rounded-2xl bg-white border border-gray-200 shadow-sm"
          >
            <h2 className="text-lg font-semibold text-gray-700 mb-2">
              Send a Message
            </h2>

            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              value={form.name}
              onChange={handleChange}
              className={inputClass}
            />

            <input
              type="email"
              name="email"
              placeholder="your@email.com"
              required
              value={form.email}
              onChange={handleChange}
              className={inputClass}
            />

            <textarea
              name="message"
              placeholder="Your message..."
              rows={5}
              required
              value={form.message}
              onChange={handleChange}
              className={`${inputClass} resize-none`}
            />

            <button
              type="submit"
              disabled={sending}
              className="py-3 rounded-xl text-sm font-semibold mt-2 flex items-center justify-center gap-2 bg-orange-400 hover:bg-orange-300 text-white transition-colors disabled:opacity-70"
            >
              {sending ? "Sending..." : "Send Message"}
            </button>
          </motion.form>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;