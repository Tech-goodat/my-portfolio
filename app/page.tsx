"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, Variants, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowRight,
  FaArrowUp,
  FaPaperPlane,
  FaLaptopCode,
  FaServer,
  FaRobot,
  FaMicrochip,
  FaDatabase,
  FaCloud,
  FaCode,
  FaExternalLinkAlt,
  FaWhatsapp,
  FaCheckCircle,
  FaTerminal,
  FaBolt,
  FaChartLine,
  FaLightbulb,
  FaLayerGroup,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiDjango,
  SiPostgresql,
  SiPython,
} from "react-icons/si";

/* =========================================================
   DESIGN SYSTEM
========================================================= */

const blue = "oklch(62.3% 0.214 259.815)";
const blueDark = "oklch(55% 0.18 259.815)";
const blueLight = "oklch(94% 0.025 259.815)";
const blueSoft = "oklch(97% 0.012 259.815)";
const cyan = "oklch(70.4% 0.14 182.503)";

const EMAIL_TO = "felixkiprotich2000@gmail.com";
const WHATSAPP = "+254758364336";
const LINKEDIN =
  "https://www.linkedin.com/in/felix-kiprotich-b87a11228/";
const GITHUB = "https://github.com/Tech-goodat/";

const NAV_LINKS = [
  { label: "Work", href: "#projects" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Journey", href: "#journey" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

/* =========================================================
   ANIMATIONS
========================================================= */

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeIn: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

/* =========================================================
   SMALL COMPONENTS
========================================================= */

const SectionLabel = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <div className="flex items-center gap-3 mb-4">
    <span
      className="w-8 h-px"
      style={{ backgroundColor: blue }}
    />

    <span
      className="text-xs font-bold uppercase tracking-[0.2em]"
      style={{ color: blue }}
    >
      {children}
    </span>
  </div>
);

const SectionTitle = ({
  children,
  description,
}: {
  children: React.ReactNode;
  description?: string;
}) => (
  <motion.div variants={fadeUp} className="mb-12">
    <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900">
      {children}
    </h2>

    {description && (
      <p className="mt-4 max-w-2xl text-slate-500 leading-relaxed">
        {description}
      </p>
    )}
  </motion.div>
);

/* =========================================================
   NAVBAR
========================================================= */

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#hero"
          className="flex items-center gap-3"
        >
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center text-white font-black"
            style={{ backgroundColor: blue }}
          >
            F
          </div>

          <div>
            <p className="font-bold text-sm text-slate-900">
              Felix Kiprotich
            </p>

            <p className="text-[10px] text-slate-400 uppercase tracking-wider">
              Software Engineer
            </p>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-slate-500 hover:text-slate-900 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-white transition-opacity hover:opacity-90"
          style={{ backgroundColor: blue }}
        >
          Let&apos;s Talk
          <FaArrowRight size={10} />
        </a>

      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden border-t border-slate-100 bg-white"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

/* =========================================================
   HERO
========================================================= */

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-white"
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="relative max-w-7xl mx-auto px-6 py-20 md:py-28 grid lg:grid-cols-[1.2fr_.8fr] gap-16 items-center"
      >
        <div>
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-200 bg-white shadow-sm mb-7"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>

            <span className="text-[11px] font-semibold text-slate-500">
              Available for opportunities
            </span>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="text-sm font-bold uppercase tracking-[0.2em] mb-4"
            style={{ color: blue }}
          >
            Software Engineer · AI · Data · Intelligent Systems
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-[-0.05em] leading-[0.95] text-slate-900"
          >
            I build software
            <br />
            that does more
            <br />
            than{" "}
            <span style={{ color: blue }}>
              just work.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-7 max-w-xl text-lg leading-relaxed text-slate-500"
          >
            I&apos;m Felix, a software engineer focused on building
            intelligent applications, reliable backend systems and
            data-driven products. I&apos;m particularly interested in
            turning raw data into meaningful insights, useful actions
            and smarter software.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex flex-wrap gap-3 mt-8"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-bold text-white shadow-lg shadow-blue-500/20 transition-opacity hover:opacity-90"
              style={{ backgroundColor: blue }}
            >
              Explore My Work
              <FaArrowRight size={12} />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-bold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: blueDark }}
            >
              Start a Conversation
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="flex items-center gap-5 mt-9"
          >
            <a
              href={GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-slate-900 transition"
            >
              <FaGithub size={20} />
            </a>

            <a
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-600 transition"
            >
              <FaLinkedin size={20} />
            </a>

            <a
              href={`mailto:${EMAIL_TO}`}
              className="text-slate-400 hover:text-slate-900 transition"
            >
              <FaEnvelope size={19} />
            </a>

            <div className="h-5 w-px bg-slate-200" />

            <span className="text-xs text-slate-400">
              Nairobi, Kenya · Working globally
            </span>
          </motion.div>
        </div>

        <motion.div
          variants={fadeUp}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative">
            <div
              className="absolute -inset-5 rounded-[2rem] border border-dashed rotate-3"
              style={{ borderColor: blueLight }}
            />

            <div className="relative w-72 h-80 sm:w-80 sm:h-96 rounded-[2rem] overflow-hidden bg-slate-100 shadow-2xl">
              <Image
                src="/pic.jpg"
                alt="Felix Kiprotich"
                fill
                priority
                className="object-cover"
              />

              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/50 to-transparent" />
            </div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -left-10 bottom-8 bg-white border border-slate-100 shadow-xl rounded-2xl p-4"
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-white"
                  style={{ backgroundColor: blue }}
                >
                  <FaCode size={15} />
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-wider text-slate-400">
                    Currently
                  </p>

                  <p className="text-sm font-bold text-slate-800">
                    Building intelligent systems
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 7, 0] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -right-8 top-10 bg-white border border-slate-100 shadow-xl rounded-2xl px-4 py-3"
            >
              <div className="flex items-center gap-2">
                <FaBolt className="text-emerald-500" />

                <span className="text-xs font-bold text-slate-700">
                  Data + AI
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      <div className="relative border-t border-slate-100 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-slate-400">
          <span>Next.js</span>
          <span>React</span>
          <span>Python</span>
          <span>Django REST Framework</span>
          <span>PostgreSQL</span>
          <span>Data Systems</span>
          <span>AI Integrations</span>
        </div>
      </div>
    </section>
  );
};

/* =========================================================
   CURRENTLY BUILDING
========================================================= */

const CurrentWork = () => {
  return (
    <section className="bg-slate-50 px-6 py-20">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="max-w-7xl mx-auto"
      >
        <SectionLabel>Right now</SectionLabel>

        <SectionTitle description="The projects currently shaping my engineering direction.">
          What I&apos;m building lately
        </SectionTitle>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            variants={fadeUp}
            className="group relative overflow-hidden rounded-3xl p-7 md:p-9 text-white"
            style={{ backgroundColor: blue }}
          >
            <div className="relative">
              <div className="flex items-center justify-between mb-10">
                <div className="w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center">
                  <FaMicrochip />
                </div>

                <span className="px-3 py-1 rounded-full bg-white/15 text-white text-[10px] font-bold uppercase tracking-wider">
                  In development
                </span>
              </div>

              <p className="text-xs uppercase tracking-[0.2em] text-white/70">
                Data · Telemetry · Intelligence
              </p>

              <h3 className="text-3xl font-black mt-2">
                MajiSmart
              </h3>

              <p className="text-white/75 mt-4 leading-relaxed max-w-lg">
                A water monitoring platform designed around real-time
                meter telemetry, anomaly detection and intelligent
                recommendations. The system simulates large-scale
                meter activity and processes that data through a
                Django backend.
              </p>

              <div className="flex flex-wrap gap-2 mt-7">
                {[
                  "Next.js",
                  "Django REST",
                  "MQTT",
                  "Python",
                  "Telemetry",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-lg bg-white/10 border border-white/15 text-[10px] text-white/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="relative overflow-hidden rounded-3xl bg-white border border-slate-200 p-7 md:p-9"
          >
            <div className="relative">
              <div className="flex items-center justify-between mb-10">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <FaChartLine />
                </div>

                <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-[10px] font-bold uppercase tracking-wider">
                  Client project
                </span>
              </div>

              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                Fleet · Operations · Finance
              </p>

              <h3 className="text-3xl font-black mt-2 text-slate-900">
                FanANa
              </h3>

              <p className="text-slate-500 mt-4 leading-relaxed max-w-lg">
                A fleet management platform focused on answering a
                practical business question: is each vehicle actually
                making money? The system brings together vehicles,
                drivers, fuel, trips, income, expenses and accounting
                into one operational dashboard.
              </p>

              <div className="flex flex-wrap gap-2 mt-7">
                {[
                  "Next.js",
                  "Django",
                  "REST API",
                  "PWA",
                  "Accounting",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-[10px] text-slate-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

/* =========================================================
   CAPABILITIES
========================================================= */

const capabilities = [
  {
    icon: FaLaptopCode,
    title: "Modern Frontends",
    description:
      "Responsive, production-ready interfaces using React, Next.js and Tailwind CSS.",
    tags: ["React", "Next.js", "Tailwind"],
  },
  {
    icon: FaServer,
    title: "Backend Systems",
    description:
      "APIs and application logic designed around clean architecture, security and maintainability.",
    tags: ["Python", "Django", "DRF"],
  },
  {
    icon: FaDatabase,
    title: "Data Systems",
    description:
      "Designing data models, relational databases and APIs that support real products and meaningful analysis.",
    tags: ["PostgreSQL", "SQLite", "REST"],
  },
  {
    icon: FaRobot,
    title: "AI Integrations",
    description:
      "Adding intelligence to applications through LLMs, automation, recommendations and decision support.",
    tags: ["LLMs", "Automation", "AI"],
  },
  {
    icon: FaMicrochip,
    title: "Telemetry & Intelligent Systems",
    description:
      "Working with real-time data, telemetry, event-driven systems and anomaly detection concepts.",
    tags: ["MQTT", "Telemetry", "Anomaly Detection"],
  },
  {
    icon: FaCloud,
    title: "Deployment",
    description:
      "Taking applications from local development to deployed, accessible production systems.",
    tags: ["Vercel", "Render", "Cloud"],
  },
];

const Capabilities = () => {
  return (
    <section
      id="capabilities"
      className="bg-white px-6 py-24 scroll-mt-16"
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="max-w-7xl mx-auto"
      >
        <SectionLabel>Capabilities</SectionLabel>

        <SectionTitle description="My foundation is software engineering, with a growing focus on data, AI and intelligent systems.">
          What I bring to the table
        </SectionTitle>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {capabilities.map((item) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                variants={fadeUp}
                whileHover={{ y: -5 }}
                className="group p-6 rounded-2xl border border-slate-200 bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-shadow"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                  style={{
                    backgroundColor: blueLight,
                    color: blue,
                  }}
                >
                  <Icon size={17} />
                </div>

                <h3 className="font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-500 leading-relaxed mt-2">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 rounded-md bg-slate-50 text-[10px] font-medium text-slate-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

/* =========================================================
   PROJECTS
========================================================= */

const projects = [
  {
    title: "MajiSmart",
    type: "Data & Intelligent Monitoring",
    description:
      "Real-time water telemetry platform exploring meter monitoring, anomaly detection and intelligent recommendations.",
    image: "/maji.png",
    github: "https://github.com/Tech-goodat/majismart",
    live: "https://majismart-jlut.vercel.app/",
    tags: ["Next.js", "Django", "MQTT", "Telemetry", "WebSockets", "Redis"],
    featured: true,
  },
  {
    title: "FleetFlow",
    type: "Fleet Management",
    description:
      "A business-focused fleet system for tracking vehicles, trips, fuel, income, expenses and profitability.",
    image: "/fleetflow.png",
    github: "#",
    live: "#",
    tags: ["Next.js", "Django", "PWA", "Finance"],
    featured: true,
  },
  {
    title: "NextDoor",
    type: "Marketplace",
    description:
      "Community-driven marketplace connecting local businesses with nearby residents.",
    image: "/nextdoor.png",
    github: "https://github.com/Tech-goodat/nextdoor_client",
    live: "https://nextdoor-client.vercel.app/",
    tags: ["Next.js", "DRF", "PostgreSQL"],
    featured: false,
  },
  {
    title: "Lifepulse",
    type: "Health Dashboard",
    description:
      "A dashboard for tracking fitness and nutrition data through a structured web application.",
    image: "/lifepulse.png",
    github: "https://github.com/Tech-goodat/lifepulse_client",
    live: "https://lifepulse-client.vercel.app/",
    tags: ["Next.js", "Flask", "SQLAlchemy"],
    featured: false,
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-slate-50 px-6 py-24 scroll-mt-16"
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
        className="max-w-7xl mx-auto"
      >
        <SectionLabel>Selected work</SectionLabel>

        <SectionTitle description="A few products I've designed, engineered and deployed while exploring different sides of software engineering.">
          Things I&apos;ve built
        </SectionTitle>

        <div className="grid md:grid-cols-2 gap-7">
          {projects.map((project) => (
            <motion.article
              key={project.title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="group overflow-hidden rounded-3xl bg-white border border-slate-200 shadow-sm"
            >
              <div className="relative h-60 bg-slate-100 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className=" transition-transform p-2 rounded-t-4xl duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0  opacity-60" />

                <span className="absolute top-5 left-5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur text-[10px] font-bold text-slate-700">
                  {project.type}
                </span>
              </div>

              <div className="p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-black text-slate-900">
                      {project.title}
                    </h3>

                    <p className="text-sm text-slate-500 leading-relaxed mt-3">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200 text-[10px] font-semibold text-slate-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 mt-7 pt-5 border-t border-slate-100">
                  {project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold text-white transition-opacity hover:opacity-90"
                      style={{ backgroundColor: blueDark }}
                    >
                      <FaGithub />
                      Source
                    </a>
                  )}

                  {project.live !== "#" && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold text-white transition-opacity hover:opacity-90"
                      style={{ backgroundColor: blue }}
                    >
                      <FaExternalLinkAlt size={10} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          variants={fadeUp}
          className="flex justify-center mt-10"
        >
          <a
            href={GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: blue }}
          >
            Explore GitHub
            <FaArrowRight size={10} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

/* =========================================================
   ENGINEERING APPROACH
========================================================= */

const EngineeringApproach = () => {
  const items = [
    {
      number: "01",
      title: "Understand the problem",
      text: "I start with what the product actually needs to accomplish, not just the interface it needs to display.",
      icon: FaLightbulb,
    },
    {
      number: "02",
      title: "Design the system",
      text: "I think through data, APIs, application logic and how different parts of the system communicate.",
      icon: FaLayerGroup,
    },
    {
      number: "03",
      title: "Build & integrate",
      text: "I turn the architecture into working software and connect the pieces into a usable product.",
      icon: FaTerminal,
    },
    {
      number: "04",
      title: "Make it intelligent",
      text: "Where useful, I explore automation, AI assistance, anomaly detection and data-driven recommendations.",
      icon: FaRobot,
    },
  ];

  return (
    <section
      className="text-white px-6 py-24"
      style={{ backgroundColor: blue }}
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="max-w-7xl mx-auto"
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-px bg-white/60" />

          <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/80">
            My approach
          </span>
        </div>

        <motion.h2
          variants={fadeUp}
          className="text-3xl md:text-4xl font-black tracking-tight"
        >
          From idea to system to product.
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="mt-4 max-w-2xl text-white/75 leading-relaxed"
        >
          I enjoy understanding what happens behind the screen,
          how data moves, how systems communicate, and where software
          can become more useful through automation and intelligence.
        </motion.p>

        <div className="grid md:grid-cols-4 gap-5 mt-14">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.number}
                variants={fadeUp}
                className="relative border border-white/20 rounded-2xl p-6 bg-white/10"
              >
                <span className="text-xs font-bold text-white/50">
                  {item.number}
                </span>

                <div className="mt-7 mb-5 text-white">
                  <Icon size={21} />
                </div>

                <h3 className="font-bold">
                  {item.title}
                </h3>

                <p className="text-sm text-white/70 leading-relaxed mt-3">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

/* =========================================================
   JOURNEY
========================================================= */

const Journey = () => {
  return (
    <section
      id="journey"
      className="bg-white px-6 py-24 scroll-mt-16"
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="max-w-5xl mx-auto"
      >
        <SectionLabel>My journey</SectionLabel>

        <SectionTitle description="The direction has become clearer with every project: build useful software, understand systems deeply and keep moving toward intelligent applications.">
          From web development to systems thinking
        </SectionTitle>

        <div className="relative border-l border-slate-200 ml-3 md:ml-6">
          <div className="space-y-12">
            <motion.div
              variants={fadeUp}
              className="relative pl-8 md:pl-12"
            >
              <span
                className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: blue }}
              />

              <p
                className="text-xs font-bold uppercase tracking-widest"
                style={{ color: blue }}
              >
                Foundation
              </p>

              <h3 className="text-xl font-black mt-2 text-slate-900">
                Full-stack engineering
              </h3>

              <p className="text-sm text-slate-500 leading-relaxed mt-3">
                Built a foundation across frontend development,
                backend APIs, databases, authentication and deployment.
                This gave me the ability to move beyond individual
                UI components and work across complete applications.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="relative pl-8 md:pl-12"
            >
              <span
                className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: cyan }}
              />

              <p className="text-xs font-bold uppercase tracking-widest text-emerald-600">
                Product thinking
              </p>

              <h3 className="text-xl font-black mt-2 text-slate-900">
                Building software around real problems
              </h3>

              <p className="text-sm text-slate-500 leading-relaxed mt-3">
                Projects like NextDoor and FanANa pushed the focus
                toward business workflows, user needs, data and
                practical product decisions rather than simply
                building interfaces.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="relative pl-8 md:pl-12"
            >
              <span
                className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: blue }}
              />

              <p
                className="text-xs font-bold uppercase tracking-widest"
                style={{ color: blue }}
              >
                Current direction
              </p>

              <h3 className="text-xl font-black mt-2 text-slate-900">
                Data, AI & intelligent systems
              </h3>

              <p className="text-sm text-slate-500 leading-relaxed mt-3">
                My recent work with MajiSmart is taking this further:
                collecting telemetry, understanding patterns,
                detecting anomalies and exploring how AI can turn
                raw data into meaningful insights, decisions and
                recommendations.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

/* =========================================================
   ABOUT
========================================================= */

const About = () => {
  return (
    <section
      id="about"
      className="bg-slate-50 px-6 py-24 scroll-mt-16"
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center"
      >
        <motion.div variants={fadeUp}>
          <SectionLabel>About me</SectionLabel>

          <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            I&apos;m interested in what happens
            <span style={{ color: blue }}>
              {" "}behind the interface.
            </span>
          </h2>

          <div className="space-y-4 mt-6 text-slate-500 leading-relaxed">
            <p>
              I&apos;m a software engineer who started from full-stack
              web development and is increasingly moving deeper into
              backend systems, data, AI integrations and intelligent
              applications.
            </p>

            <p>
              I like building things end-to-end, understanding the
              user problem, designing the application, building the
              API, modelling the data and getting the product into
              the hands of people who can actually use it.
            </p>

            <p>
              Recently, I&apos;ve become especially interested in the
              space where software meets real-world data: systems
              that monitor, detect, reason, recommend and automate.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 mt-7">
            {[
              "Problem solving",
              "System thinking",
              "Continuous learning",
              "Product mindset",
            ].map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white border border-slate-200 text-xs font-semibold text-slate-600"
              >
                <FaCheckCircle className="text-emerald-500" />
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="grid grid-cols-2 gap-4"
        >
          {[
            {
              icon: SiNextdotjs,
              label: "Frontend",
              value: "Next.js",
            },
            {
              icon: SiPython,
              label: "Language",
              value: "Python",
            },
            {
              icon: SiDjango,
              label: "Backend",
              value: "Django",
            },
            {
              icon: SiPostgresql,
              label: "Database",
              value: "PostgreSQL",
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="rounded-2xl bg-white border border-slate-200 p-6"
              >
                <Icon
                  size={25}
                  className="text-slate-700"
                />

                <p className="text-[10px] uppercase tracking-widest text-slate-400 mt-8">
                  {item.label}
                </p>

                <p className="font-black text-slate-900 mt-1">
                  {item.value}
                </p>
              </div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
};

/* =========================================================
   CTA
========================================================= */

const CTA = () => {
  return (
    <section className="px-6 py-20 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto overflow-hidden rounded-[2rem] relative"
        style={{ backgroundColor: blue }}
      >
        <div className="relative px-8 py-14 md:px-14 md:py-16 flex flex-col md:flex-row md:items-center justify-between gap-10">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-white/70 font-bold">
              Have a problem worth solving?
            </p>

            <h2 className="text-3xl md:text-4xl font-black text-white mt-3">
              Let&apos;s build something useful.
            </h2>

            <p className="text-white/75 max-w-xl mt-4 leading-relaxed">
              Whether it&apos;s a product, backend system, AI integration
              or something you&apos;re still figuring out, I&apos;d love to
              hear what you&apos;re working on.
            </p>
          </div>

          <a
            href="#contact"
            className="shrink-0 inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-white text-sm font-bold transition-opacity hover:opacity-90"
            style={{ backgroundColor: blueDark }}
          >
            Start a conversation
            <FaArrowRight size={11} />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

/* =========================================================
   CONTACT
========================================================= */

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [sending, setSending] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
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

    window.location.href =
      `mailto:${EMAIL_TO}?subject=${subject}&body=${body}`;

    setTimeout(() => setSending(false), 1500);
  };

  const input =
    "w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 outline-none focus:border-blue-500 transition-colors";

  return (
    <section
      id="contact"
      className="bg-slate-50 px-6 py-24 scroll-mt-16"
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="max-w-7xl mx-auto"
      >
        <SectionLabel>Contact</SectionLabel>

        <SectionTitle description="Have a project, role or idea you'd like to discuss? Send me a message.">
          Let&apos;s work together
        </SectionTitle>

        <div className="grid lg:grid-cols-2 gap-7">
          <motion.form
            variants={fadeUp}
            onSubmit={handleSubmit}
            className="bg-white border border-slate-200 rounded-3xl p-7"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                className={input}
              />

              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="Email address"
                className={input}
              />
            </div>

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={7}
              placeholder="Tell me about your project..."
              className={`${input} mt-4 resize-none`}
            />

            <button
              type="submit"
              disabled={sending}
              className="mt-4 inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-white disabled:opacity-60 transition-opacity hover:opacity-90"
              style={{ backgroundColor: blue }}
            >
              {sending ? "Opening email..." : "Send Message"}
              <FaPaperPlane size={11} />
            </button>
          </motion.form>

          <motion.div
            variants={fadeUp}
            className="rounded-3xl p-8 md:p-10 text-white flex flex-col justify-between"
            style={{ backgroundColor: blue }}
          >
            <div>
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-white/15">
                <FaPaperPlane />
              </div>

              <h3 className="text-3xl font-black mt-8">
                Let&apos;s talk.
              </h3>

              <p className="text-white/75 leading-relaxed mt-4 max-w-md">
                I&apos;m open to software engineering opportunities,
                freelance projects, collaborations and interesting
                technical problems.
              </p>
            </div>

            <div className="space-y-4 mt-12">
              <a
                href={`mailto:${EMAIL_TO}`}
                className="flex items-center gap-4 text-sm text-white/80 hover:text-white"
              >
                <FaEnvelope />
                {EMAIL_TO}
              </a>

              <a
                href={`https://wa.me/${WHATSAPP}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-sm text-white/80 hover:text-white"
              >
                <FaWhatsapp />
                WhatsApp
              </a>

              <a
                href={LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-sm text-white/80 hover:text-white"
              >
                <FaLinkedin />
                LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

/* =========================================================
   FOOTER
========================================================= */

const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-200 px-6 py-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5">
        <div className="flex items-center gap-3">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-black"
            style={{ backgroundColor: blue }}
          >
            F
          </div>

          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} Felix Kiprotich.
            Built with Next.js.
          </p>
        </div>

        <div className="flex items-center gap-5">
          <a
            href={GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-slate-900"
          >
            <FaGithub size={16} />
          </a>

          <a
            href={LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-blue-600"
          >
            <FaLinkedin size={16} />
          </a>

          <a
            href={`mailto:${EMAIL_TO}`}
            className="text-slate-400 hover:text-slate-900"
          >
            <FaEnvelope size={16} />
          </a>

          <a
            href={`https://wa.me/${WHATSAPP}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-emerald-600"
          >
            <FaWhatsapp size={16} />
          </a>

          <a
            href="#hero"
            className="ml-3 w-9 h-9 rounded-full flex items-center justify-center text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: blue }}
          >
            <FaArrowUp size={12} />
          </a>
        </div>
      </div>
    </footer>
  );
};

/* =========================================================
   PAGE
========================================================= */

const Home = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />

      <main>
        <Hero />
        <CurrentWork />
        <Capabilities />
        <Projects />
        <EngineeringApproach />
        <Journey />
        <About />
        <CTA />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default Home;