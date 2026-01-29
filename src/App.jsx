import React, { useState, useEffect, useRef, useMemo } from 'react';
import emailjs from "emailjs-com";
import {
  ArrowRight,
  Github,
  Twitter,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Palette,
  Briefcase,
  User,
  Download,
  Menu,
  X,
  Terminal,
  Database,
  Smartphone,
  Cloud,
  Boxes,
  GitBranch,
  Shield,
} from 'lucide-react';

import ProfilePicture from "./assets/prof.jpeg"


const useOnScreen = (options) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.unobserve(entry.target);
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [ref, options]);

  return [ref, visible];
};

const Reveal = ({ children, delay = 0, className = "" }) => {
  const [ref, visible] = useOnScreen({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

/* --- SUB-COMPONENTS --- */

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: "About", href: "#about" },
    { name: "Resume", href: "#resume" },
    { name: "Projects", href: "#projects" },
    { name: "Art", href: "#art" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-neutral-950/80 backdrop-blur-md py-4 border-b border-white/5" : "py-6 bg-transparent"}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold tracking-tighter text-white mix-blend-difference z-50">
          ABHINAV<span className="text-neutral-500">YADAV</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-neutral-400 hover:text-white transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden z-50 text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Menu */}
        <div className={`fixed inset-0 bg-black flex flex-col items-center justify-center space-y-8 transition-transform duration-500 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"} md:hidden`}>
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-3xl font-light text-white hover:text-neutral-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffset(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-neutral-950">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 z-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')] bg-cover bg-center"
        style={{ transform: `translateY(${offset * 0.5}px)` }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-neutral-950/50 to-neutral-950" />

      {/* Noise Overlay */}
      <div className="absolute inset-0 z-[1] opacity-[0.03] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

      <div className="container relative z-10 px-6 mt-20">
        <Reveal>
          <h2 className="text-neutral-400 font-medium tracking-wide mb-4 text-sm md:text-base uppercase">Creative Developer | Cybersecurity Enthusiast | Digital Artist</h2>
        </Reveal>
        <Reveal delay={200}>
          <h1 className="text-5xl md:text-8xl lg:text-9xl font-bold text-white tracking-tighter leading-[0.9] mb-8">
            BUILDING <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-neutral-600">SECURE</span> <br />
            APPLICATIONS
          </h1>
        </Reveal>
        <Reveal delay={400}>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <a href="#projects" className="group flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-medium hover:bg-neutral-200 transition-all">
              View Works
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <div className="flex gap-4">
              <SocialLink href="https://github.com/IRONmanAbhi" icon={<Github size={20} />} />
              <SocialLink href="https://x.com/Raging_Wolfie" icon={<Twitter size={20} />} />
              <SocialLink href="https://www.linkedin.com/in/abhinav-yadav-dev/" icon={<Linkedin size={20} />} />
            </div>
          </div>
        </Reveal>
      </div>

      <div className="absolute bottom-10 left-6 md:left-1/2 md:-translate-x-1/2 z-10 animate-bounce">
        <p className="text-xs text-neutral-500 uppercase tracking-widest">Scroll Down</p>
      </div>
    </section>
  );
};

const SocialLink = ({ href, icon }) => (
  <a
    href={href}
    className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black hover:border-transparent transition-all duration-300"
  >
    {icon}
  </a>
);

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-neutral-950 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* <Reveal>
            <div className="relative">
              <div className="aspect-[3/4] rounded-sm overflow-hidden bg-neutral-900">
                <img
                  src={ProfilePicture}
                  alt="Portrait"
                  className="w-full h-full object-cover opacity-80 hover:scale-105 hover:opacity-100 transition-all duration-700"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-neutral-800 -z-10 rounded-full blur-3xl opacity-20"></div>
            </div>
          </Reveal> */}

          <Reveal>
            <div className="relative">
              <div className="h-[70vh] max-h-[700px] w-auto rounded-sm overflow-hidden bg-neutral-900">
                <img
                  src={ProfilePicture}
                  alt="Portrait"
                  className="w-full h-full object-cover object-top opacity-80 hover:scale-105 hover:opacity-100 transition-all duration-700"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-neutral-800 -z-10 rounded-full blur-3xl opacity-20"></div>
            </div>
          </Reveal>

          <div>
            <Reveal delay={200}>
              <div className="flex items-center gap-4 mb-6">
                <span className="w-12 h-px bg-neutral-600"></span>
                <span className="text-neutral-400 uppercase tracking-widest text-sm">
                  About Me
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                Crafting secure, high-performance full-stack applications
              </h2>
            </Reveal>

            <Reveal delay={300}>
              <p className="text-neutral-400 text-lg mb-6 leading-relaxed">
                I’m Abhinav Yadav, a full-stack developer and cybersecurity enthusiast with a
                strong foundation in system design, backend engineering, and secure
                application development. I’ve completed my B.Tech in Computer Science with a
                specialization in Cyber Security.
              </p>

              <p className="text-neutral-400 text-lg mb-8 leading-relaxed">
                I enjoy low-level programming and building reliable systems, while working
                end-to-end across the stack. On the backend, I primarily work with Python and
                JavaScript using frameworks like Flask, Django, FastAPI, and Node.js. On the
                frontend, I build interactive interfaces with React, have hands-on experience
                with React Native, and am actively learning Next.js to design scalable,
                production-ready applications with security and performance in mind.
              </p>
            </Reveal>

            <Reveal delay={400}>
              <div className="flex flex-wrap gap-4">
                {/* Programming */}
                <SkillTag icon={<Code size={14} />} label="Python / C++ / JavaScript / C" />
                <SkillTag icon={<Terminal size={14} />} label="Shell Scripting / Linux" />

                {/* Backend */}
                <SkillTag icon={<Briefcase size={14} />} label="Node.js / Flask / Django / FastAPI" />
                <SkillTag icon={<Database size={14} />} label="MySQL / PostgreSQL / MongoDB / SQLite" />

                {/* Frontend */}
                <SkillTag icon={<Palette size={14} />} label="React / Next.js / HTML / CSS" />
                <SkillTag icon={<Smartphone size={14} />} label="React Native" />

                {/* Cloud & DevOps */}
                <SkillTag icon={<Cloud size={14} />} label="AWS / GCP / Azure / OCI" />
                <SkillTag icon={<Boxes size={14} />} label="Docker / Kubernetes / Terraform" />

                {/* Tools & Security */}
                <SkillTag icon={<GitBranch size={14} />} label="Git / GitHub / GitLab / Jenkins" />
                <SkillTag icon={<Shield size={14} />} label="Cyber Security / CTFs / Secure APIs" />
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};

const SkillTag = ({ icon, label }) => (
  <div className="flex items-center gap-2 px-4 py-2 border border-neutral-800 rounded-full text-neutral-300 text-sm hover:border-neutral-600 transition-colors cursor-default">
    {icon}
    {label}
  </div>
);

const Resume = () => {
  const experiences = [
    { year: "July, 2025 - Present", role: "Software Developer Intern", company: "Airspan Networks", desc: "Working as a full-stack developer on AI-driven initiatives, building scalable backend services and developing responsive React interfaces while collaborating closely with cross-functional teams." },
    { year: "May, 2024 - July, 2024", role: "Backend Developer Intern", company: "S.R. Electricals", desc: "Built a full-stack web application using Node.js and Express, implementing secure APIs, authentication, input validation and automated backend testing." },
    { year: "Aug, 2022 - Oct, 2022", role: "Technical Writer Intern", company: "Geeks for Geeks", desc: "Wrote technical articles on cybersecurity topics, explaining vulnerabilities, attack techniques, and secure coding practices while creating clear, reader-friendly content for a wide developer audience." },
  ];

  return (
    <section id="resume" className="py-24 bg-neutral-900">
      <div className="container mx-auto px-6">
        <Reveal>
          <div className="flex flex-col items-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Resume</h2>
            <div className="w-16 h-1 bg-neutral-700"></div>
          </div>
        </Reveal>

        <div className="max-w-3xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-neutral-800 md:left-1/2 md:-ml-[0.5px]"></div>

          {experiences.map((exp, index) => (
            <div key={index} className={`relative flex flex-col md:flex-row gap-8 mb-12 last:mb-0 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              {/* Timeline Dot */}
              <div className="absolute left-0 top-1 w-10 h-10 flex items-center justify-center bg-neutral-900 border-4 border-neutral-900 rounded-full z-10 md:left-1/2 md:-translate-x-1/2 md:translate-y-1">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>

              {/* Content Spacer for Desktop */}
              <div className="hidden md:block md:w-1/2"></div>

              {/* Card */}
              <div className="pl-12 md:pl-9 md:w-1/2 md:px-8">
                <Reveal delay={index * 100}>
                  <div className="p-6 bg-neutral-950 border border-neutral-800 rounded-lg hover:border-neutral-600 transition-colors">
                    <span className="text-sm text-neutral-500 font-mono mb-2 block">{exp.year}</span>
                    <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                    <p className="text-neutral-400 text-sm mb-3">{exp.company}</p>
                    <p className="text-neutral-400 text-sm leading-relaxed">{exp.desc}</p>
                  </div>
                </Reveal>
              </div>
            </div>
          ))}

          <Reveal>
            <div className="text-center mt-12">
              <a href="/Abhinav_Yadav_resume.pdf" download className="inline-flex items-center gap-2 text-white border-b border-white pb-1 hover:text-neutral-300 hover:border-neutral-300 transition-colors">
                <Download size={16} /> Download Full Resume
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Package Scout",
      description:
        "A VS Code extension that auto-detects Python dependencies and generates clean requirements files.",
      img: "/1761831659915.jpeg",
      link: "https://marketplace.visualstudio.com/items?itemName=AbhinavYadavdev.package-scout",
    },
    {
      title: "VeePlay",
      description:
        "A Netflix-like full-stack mobile media streaming application built with a Dockerized Flask backend and an Android client.",
      img: "/veeplay.png",
      link: "https://github.com/IRONmanAbhi/VeepPlay_backend",
    },
    {
      title: "Error_Search",
      description:
        "Searches Stack Overflow for Python errors and automatically opens relevant solutions.",
      img: "/error_search.png",
      link: "https://github.com/IRONmanAbhi/Error_Search",
    },
    {
      title: "Django Blog Website",
      description:
        "A Twitter-inspired blogging application built with Django, enabling users to publish posts, manage their content and a feed-style content display.",
      img: "/django.png",
      link: "https://github.com/IRONmanAbhi/django_blog",
    },
    {
      title: "Load Balancer (C++)",
      description:
        "A C++ based load balancer designed to distribute incoming network traffic efficiently.",
      img: "/load_balancer.png",
      link: "https://github.com/IRONmanAbhi/load-balancer-cpp",
    },
    {
      title: "Reverse Shell (Python)",
      description:
        "Python-based reverse shell program to establish a connection between attacker and victim machines.",
      img: "/rev.png",
      link: "https://github.com/IRONmanAbhi/pythonBackdoor",
    },
    {
      title: "ACTP Website",
      description:
        "Static page website built for Abhishek Coaching & Tutorial Point.",
      img: "/actp.png",
      link: "https://a-c-t-p.netlify.app",
    },
  ];

  return (
    <section id="projects" className="py-24 md:py-32 bg-neutral-950">
      <div className="container mx-auto px-6">
        <Reveal>
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-2">
                Projects
              </h2>
              <p className="text-neutral-500">
                A curated selection of my development and security-focused work.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, idx) => (
            <Reveal key={idx} delay={idx * 100}>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block cursor-pointer"
              >
                <div className="aspect-[4/3] overflow-hidden rounded-md bg-neutral-900 mb-6 relative">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-black p-2 rounded-full">
                    <ExternalLink size={20} />
                  </div>
                </div>

                <div className="flex justify-between items-start border-b border-neutral-800 pb-4 group-hover:border-white/50 transition-colors">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {project.title}
                    </h3>
                    <p className="text-neutral-500 text-sm leading-relaxed max-w-md">
                      {project.description}
                    </p>
                  </div>
                  <span className="text-neutral-600 group-hover:text-white transition-colors">
                    0{idx + 1}
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};


const ArtGallery = () => {
  const [showAll, setShowAll] = useState(false);

  const artPieces = [
    { img: "/1.jpeg" },
    { img: "/2.jpeg" },
    { img: "/3.jpeg" },
    { img: "/4.jpeg" },
    { img: "/5.jpeg" },
    { img: "/6.jpeg" },
    { img: "/7.jpeg" },
    { img: "/8.jpeg" },
    { img: "/9.jpeg" },
    { img: "/10.jpeg" },
    { img: "/11.jpeg" },
    { img: "/12.jpeg" },
    { img: "/13.jpeg" },
    { img: "/14.jpeg" },
    { img: "/15.jpeg" },
  ];

  // indices you want first (1-based → convert to 0-based)
  const featuredIndexes = [10, 1, 2, 5, 3, 4].map(i => i - 1);

  const visibleArt = useMemo(() => {
    const featured = featuredIndexes.map(i => artPieces[i]);

    // shuffle only the first 6
    const shuffledFeatured = [...featured].sort(() => Math.random() - 0.5);

    if (!showAll) return shuffledFeatured;

    const remaining = artPieces.filter(
      (_, idx) => !featuredIndexes.includes(idx)
    );

    return [...shuffledFeatured, ...remaining];
  }, [showAll]);

  return (
    <section id="art" className="py-24 bg-neutral-950">
      <div className="container mx-auto px-6">
        <Reveal>
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Digital Playground
            </h2>
            <p className="text-neutral-400 max-w-lg">
              When code rests, creativity takes over. A collection of ongoing exploration of ideas, shaped through vision and curiosity.
            </p>
          </div>
        </Reveal>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {visibleArt.map((art, idx) => (
            <Reveal key={idx} delay={idx * 40}>
              <div className="relative w-full rounded-lg overflow-hidden break-inside-avoid group">
                <img
                  src={art.img}
                  alt="Artwork"
                  loading="lazy"
                  className="w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                />
              </div>
            </Reveal>
          ))}
        </div>

        {/* SEE MORE / SHOW LESS */}
        <div className="mt-16 text-center">
          <button
            onClick={() => setShowAll(prev => !prev)}
            className="text-white border-b border-white pb-1 tracking-widest uppercase text-sm hover:text-neutral-300 hover:border-neutral-300 transition"
          >
            {showAll ? "Show Less" : "See More"}
          </button>
        </div>
      </div>
    </section>
  );
};


const Quote = () => {
  return (
    <section className="py-24 md:py-32 bg-white text-black flex items-center justify-center relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]"></div>

      <div className="container px-6 text-center relative z-10">
        <Reveal>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight mb-6">
            "MAKE IT WORK.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              MAKE IT RIGHT.
            </span>
            <br />
            MAKE IT FAST."
          </h2>
        </Reveal>
      </div>
    </section>
  );
};


const LegalModal = ({ open, onClose, title, children }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="relative max-w-3xl w-full max-h-[85vh] overflow-y-auto bg-neutral-950 border border-neutral-800 rounded-xl p-8 text-neutral-300">

        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">{title}</h2>
          <button
            onClick={onClose}
            className="text-neutral-400 hover:text-white transition"
          >
            <X size={22} />
          </button>
        </div>

        {/* Content */}
        <div className="space-y-6 text-sm leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
};

const PrivacyPolicy = () => (
  <>
    <p>
      This portfolio website collects minimal personal information only when
      you voluntarily provide it.
    </p>

    <h4 className="text-white font-semibold">Information Collected</h4>
    <ul className="list-disc pl-5 space-y-2">
      <li>Name and email address via contact form</li>
      <li>Message content you choose to send</li>
      <li>Basic analytics data (browser, device, pages visited)</li>
    </ul>

    <h4 className="text-white font-semibold">How Information Is Used</h4>
    <ul className="list-disc pl-5 space-y-2">
      <li>To respond to inquiries</li>
      <li>To improve website performance</li>
      <li>To maintain security and stability</li>
    </ul>

    <h4 className="text-white font-semibold">Data Sharing</h4>
    <p>
      Your data is never sold, rented, or shared with third parties, except
      where legally required.
    </p>

    <h4 className="text-white font-semibold">Cookies</h4>
    <p>
      This website may use cookies or analytics tools to understand traffic
      patterns. You can disable cookies in your browser settings.
    </p>

    <h4 className="text-white font-semibold">Contact</h4>
    <p>
      If you have questions about this policy, reach out via the contact form.
    </p>
  </>
);

const TermsOfService = () => (
  <>
    <p>
      This website is a personal portfolio intended to showcase projects,
      skills and experience.
    </p>

    <h4 className="text-white font-semibold">Use of Content</h4>
    <p>
      All content, code samples and designs are owned by the site owner unless
      stated otherwise. Reuse without permission is prohibited.
    </p>

    <h4 className="text-white font-semibold">External Links</h4>
    <p>
      Links to third-party websites (GitHub, LinkedIn, etc.) are provided for
      convenience.
    </p>

    <h4 className="text-white font-semibold">Limitation of Liability</h4>
    <p>
      I am not liable for any damages arising from use of this website.
    </p>

    <h4 className="text-white font-semibold">Changes</h4>
    <p>
      These terms may be updated at any time. Continued use implies acceptance.
    </p>
  </>
);

const Contact = () => {
  const formRef = useRef();
  const [toast, setToast] = useState({ show: false, type: "", message: "" });
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const [legalOpen, setLegalOpen] = useState(null);


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      SERVICE_ID,
      TEMPLATE_ID,
      formRef.current,
      PUBLIC_KEY
    )
      .then(() => {
        setToast({
          show: true,
          type: "success",
          message: "Email sent successfully 🚀",
        });
        formRef.current.reset();
      })
      .catch(() => {
        setToast({
          show: true,
          type: "error",
          message: "Something went wrong ❌ Email was not sent.",
        });
      });

    setTimeout(() => {
      setToast({ show: false });
    }, 4000);
  };


  return (
    <>
      <section id="contact" className="py-24 md:py-32 bg-neutral-950 text-white relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Reveal>
              <h2 className="text-5xl md:text-7xl font-bold mb-8">Let's work together.</h2>
              <p className="text-xl text-neutral-400 mb-12">
                Have a project in mind? I'm currently available for freelance work and open collaborations.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <a href="mailto:cyabhinavyadav1@gmail.com" className="inline-block text-3xl md:text-5xl lg:text-6xl font-bold hover:text-neutral-300 transition-colors border-b-2 border-white/20 pb-2 mb-16 hover:border-white">
                cyabhinavyadav1@gmail.com
              </a>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-neutral-800 pt-12">
              <Reveal delay={300}>
                <div>
                  <h4 className="text-lg font-bold mb-6">Contact Form</h4>

                  <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      required
                      className="w-full bg-neutral-900 border border-neutral-800 p-4 rounded focus:outline-none focus:border-white transition-colors text-white placeholder-neutral-500"
                    />

                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      required
                      className="w-full bg-neutral-900 border border-neutral-800 p-4 rounded focus:outline-none focus:border-white transition-colors text-white placeholder-neutral-500"
                    />

                    <textarea
                      name="message"
                      rows="4"
                      placeholder="Message"
                      required
                      className="w-full bg-neutral-900 border border-neutral-800 p-4 rounded focus:outline-none focus:border-white transition-colors text-white placeholder-neutral-500"
                    />

                    <button
                      type="submit"
                      className="bg-white text-black px-8 py-4 rounded font-bold hover:bg-neutral-200 transition-colors w-full md:w-auto"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </Reveal>

              <Reveal delay={400}>
                <div className="space-y-8 md:pl-12">
                  <div>
                    <h4 className="text-neutral-500 uppercase text-sm tracking-wider mb-4">Socials</h4>
                    <ul className="space-y-2">
                      <li><a href="https://x.com/Raging_Wolfie" className="text-xl hover:text-neutral-400 transition-colors">Twitter</a></li>
                      <li><a href="https://www.linkedin.com/in/abhinav-yadav-dev" className="text-xl hover:text-neutral-400 transition-colors">LinkedIn</a></li>
                      <li><a href="https://github.com/IRONmanAbhi" className="text-xl hover:text-neutral-400 transition-colors">Github</a></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-neutral-500 uppercase text-sm tracking-wider mb-4">Location</h4>
                    <p className="text-xl">Lucknow, Uttar Pradesh<br />India</p>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="mt-24 pt-8 border-t border-neutral-900 flex flex-col md:flex-row justify-between text-neutral-600 text-sm">
              <p>© 2026 Abhinav Yadav Portfolio. All rights reserved.</p>
              <div className="flex gap-6 mt-4 md:mt-0">
                <button
                  onClick={() => setLegalOpen("privacy")}
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </button>
                <button
                  onClick={() => setLegalOpen("terms")}
                  className="hover:text-white transition-colors"
                >
                  Terms of Service
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LegalModal
        open={legalOpen === "privacy"}
        onClose={() => setLegalOpen(null)}
        title="Privacy Policy"
      >
        <PrivacyPolicy />
      </LegalModal>

      <LegalModal
        open={legalOpen === "terms"}
        onClose={() => setLegalOpen(null)}
        title="Terms of Service"
      >
        <TermsOfService />
      </LegalModal>

      {toast.show && (
        <div
          className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 px-6 py-4 rounded-lg shadow-2xl backdrop-blur-md transition-all
      ${toast.type === "success"
              ? "bg-green-500/15 border border-green-500/40 text-green-300"
              : "bg-red-500/15 border border-red-500/40 text-red-300"
            }`}
        >
          {toast.message}
        </div>
      )}
    </>
  );
};

/* --- MAIN APP --- */

const App = () => {
  return (
    <div className="bg-neutral-950 min-h-screen text-white selection:bg-white selection:text-black font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Resume />
        <Projects />
        <ArtGallery />
        <Quote />
        <Contact />
      </main>
    </div>
  );
};

export default App;