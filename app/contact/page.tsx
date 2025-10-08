"use client"
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
      duration: 0.7,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 },
  },
};

const EMAIL_TO = "felixkiprotich2000@gmail.com";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Use mailto for simple client-side email sending
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

  return (
    <motion.section
      className="min-h-screen flex items-center justify-center bg-[var(--background)] text-[var(--foreground)] px-4 py-16"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="w-full max-w-4xl dark:bg-neutral-800 rounded-xl shadow-xl p-8 flex flex-col md:flex-row gap-12"
        variants={itemVariants}
      >
        {/* Left Side: Info */}
        <motion.div
          className="flex-1 flex flex-col gap-8 justify-center"
          variants={itemVariants}
        >
          <motion.h1
            className="text-3xl md:text-4xl font-bold mb-2 text-emerald-300"
            variants={itemVariants}
          >
            Get in Touch
          </motion.h1>
          <motion.p
            className="text-gray-500 dark:text-gray-300 mb-6"
            variants={itemVariants}
          >
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Drop me a message and I&apos;ll get back to you soon!
          </motion.p>
          <motion.div
            className="flex flex-col gap-5"
            variants={itemVariants}
          >
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-emerald-300" size={20} />
              <a
                href={`mailto:${EMAIL_TO}`}
                className="hover:text-emerald-500 transition-colors text-sm md:text-base cursor-pointer"
                style={{ textDecoration: "none" }}
              >
                {EMAIL_TO}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-emerald-300" size={20} />
              <a
                href="tel:+254758364336"
                className="hover:text-emerald-500 transition-colors text-sm md:text-base cursor-pointer"
                style={{ textDecoration: "none" }}
              >
                +254 758364336
              </a>
            </div>
            <div className="flex items-center gap-3">
              <FaWhatsapp className="text-emerald-300" size={20} />
              <a
                href="https://wa.me/254758364336"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-500 transition-colors text-sm md:text-base cursor-pointer"
                style={{ textDecoration: "none" }}
              >
                +254 758364336
              </a>
            </div>
            <div className="flex items-center gap-3">
              <FaLinkedin className="text-emerald-300" size={20} />
              <a
                href="https://linkedin.com/in/kiprotich-felix-b87a11228/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-500 transition-colors text-sm md:text-base cursor-pointer"
                style={{ textDecoration: "none" }}
              >
                linkedin.com/in/kiprotich-felix-b87a11228
              </a>
            </div>
            <div className="flex items-center gap-3">
              <FaGithub className="text-emerald-500" size={20} />
              <a
                href="https://github.com/Tech-goodat"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-500 transition-colors text-sm md:text-base cursor-pointer"
                style={{ textDecoration: "none" }}
              >
                github.com/Tech-goodat
              </a>
            </div>
          </motion.div>
        </motion.div>
        {/* Right Side: Form */}
        <motion.form
          className="flex-1 flex flex-col gap-4 mt-6 md:mt-0"
          variants={itemVariants}
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="rounded-md border border-gray-600 dark:border-gray-600 bg-transparent px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition"
            required
            value={form.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="rounded-md border border-gray-600 dark:border-gray-600 bg-transparent px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition"
            required
            value={form.email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={4}
            className="rounded-md border border-gray-600 dark:border-gray-600 bg-transparent px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition"
            required
            value={form.message}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="bg-emerald-400 hover:bg-emerald-500 text-white font-semibold rounded-md py-2 transition"
            disabled={sending}
          >
            {sending ? "Sending..." : "Send Message"}
          </button>
        </motion.form>
      </motion.div>
    </motion.section>
  );
};

export default Contact;