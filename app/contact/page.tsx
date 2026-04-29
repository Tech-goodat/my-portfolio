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
const LINKEDIN =
  "https://www.linkedin.com/in/felix-kiprotich-b87a11228/";
const GITHUB = "https://github.com/Tech-goodat";

const contactItems = [
  {
    icon: FaEnvelope,
    label: "Email",
    value: EMAIL_TO,
    href: `mailto:${EMAIL_TO}`,
    copyKey: "email",
    color: "#3b82f6",
  },
  {
    icon: FaPhoneAlt,
    label: "Phone",
    value: PHONE,
    href: `tel:${PHONE.replace(/\s/g, "")}`,
    copyKey: "phone",
    color: "#06b6d4",
  },
  {
    icon: FaWhatsapp,
    label: "WhatsApp",
    value: WHATSAPP,
    href: `https://wa.me/${WHATSAPP.replace(/\D/g, "")}`,
    copyKey: "whatsapp",
    color: "#22c55e",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "View Profile",
    href: LINKEDIN,
    copyKey: "linkedin",
    color: "#3b82f6",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "Tech-goodat",
    href: GITHUB,
    copyKey: "github",
    color: "#818cf8",
  },
];

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

    const subject = encodeURIComponent(
      `Portfolio Contact from ${form.name}`
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );

    window.location.href = `mailto:${EMAIL_TO}?subject=${subject}&body=${body}`;

    setTimeout(() => setSending(false), 2000);
  };

  const inputStyle: React.CSSProperties = {
    background: "rgba(5,13,26,0.6)",
    border: "1px solid rgba(59,130,246,0.2)",
    borderRadius: "12px",
    padding: "12px 16px",
    color: "#e2e8f0",
    fontSize: "14px",
    outline: "none",
    width: "100%",
    transition: "border-color 0.2s",
  };

  return (
    <motion.section
      className="min-h-screen flex items-center justify-center px-6 pt-28 pb-16 lg:pt-20"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="w-full max-w-5xl">
        {/* Header */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center gap-3 mb-12"
        >
          <span
            className="text-xs font-medium px-3 py-1 rounded-full tracking-widest uppercase"
            style={{
              background: "rgba(59,130,246,0.1)",
              border: "1px solid rgba(59,130,246,0.25)",
              color: "#60a5fa",
            }}
          >
            Let&apos;s Connect
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-center">
            Get In{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Touch
            </span>
          </h1>

          <p className="text-slate-400 text-center max-w-md text-sm leading-relaxed">
            Open to new projects, creative ideas, or opportunities. Drop a
            message and I&apos;ll get back to you.
          </p>
        </motion.div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Contact Info */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col gap-3 p-6 rounded-2xl"
            style={{
              background: "rgba(13,31,56,0.8)",
              border: "1px solid rgba(59,130,246,0.12)",
            }}
          >
            <h2 className="text-lg font-semibold text-slate-200 mb-2">
              Contact Info
            </h2>

            {contactItems.map((item) => {
              const Icon = item.icon;
              const isCopied = copied === item.copyKey;

              return (
                <div
                  key={item.copyKey}
                  className="flex items-center justify-between gap-3 py-3 px-4 rounded-xl"
                  style={{
                    background: "rgba(5,13,26,0.5)",
                    border: "1px solid rgba(59,130,246,0.1)",
                  }}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                      style={{
                        background: `${item.color}15`,
                        border: `1px solid ${item.color}25`,
                      }}
                    >
                      <Icon size={14} style={{ color: item.color }} />
                    </div>

                    <div className="min-w-0">
                      <p className="text-[11px] text-slate-500">
                        {item.label}
                      </p>
                      <a
                        href={item.href}
                        target={
                          item.href.startsWith("http")
                            ? "_blank"
                            : undefined
                        }
                        rel="noopener noreferrer"
                        className="text-[13px] text-slate-300 hover:text-white block truncate"
                      >
                        {item.value}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={() =>
                      handleCopy(item.value, item.copyKey)
                    }
                    className="w-7 h-7 flex items-center justify-center rounded-lg"
                    style={{
                      background: isCopied
                        ? "#22c55e15"
                        : "transparent",
                      color: isCopied
                        ? "#22c55e"
                        : "rgba(148,163,184,0.5)",
                    }}
                  >
                    {isCopied ? (
                      <FaCheck size={11} />
                    ) : (
                      <FaRegCopy size={11} />
                    )}
                  </button>
                </div>
              );
            })}
          </motion.div>

          {/* Form */}
          <motion.form
            variants={itemVariants}
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 p-6 rounded-2xl"
            style={{
              background: "rgba(13,31,56,0.8)",
              border: "1px solid rgba(59,130,246,0.12)",
            }}
          >
            <h2 className="text-lg font-semibold text-slate-200 mb-2">
              Send a Message
            </h2>

            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              value={form.name}
              onChange={handleChange}
              style={inputStyle}
            />

            <input
              type="email"
              name="email"
              placeholder="your@email.com"
              required
              value={form.email}
              onChange={handleChange}
              style={inputStyle}
            />

            <textarea
              name="message"
              placeholder="Your message..."
              rows={5}
              required
              value={form.message}
              onChange={handleChange}
              style={{ ...inputStyle, resize: "none" }}
            />

            <button
              type="submit"
              disabled={sending}
              className="py-3 rounded-xl text-sm font-semibold mt-2 flex items-center justify-center gap-2"
              style={{
                background:
                  "linear-gradient(135deg, #2563eb, #0891b2)",
                color: "#fff",
                opacity: sending ? 0.7 : 1,
              }}
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