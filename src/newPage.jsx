import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Mail, Github, Twitter, Linkedin, ExternalLink, Download, Palette, Code, ChevronDown } from 'lucide-react';


const App = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
    const [cursorHovering, setCursorHovering] = useState(false);
    const cursorRef = useRef(null);

    // Custom Cursor Logic
    useEffect(() => {
        const moveCursor = (e) => {
            setCursorPos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', moveCursor);
        return () => window.removeEventListener('mousemove', moveCursor);
    }, []);

    // Intersection Observer for Scroll Animations
    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reveal-active');
                    if (entry.target.getAttribute('data-section')) {
                        setActiveSection(entry.target.getAttribute('data-section'));
                    }
                }
            });
        }, observerOptions);

        const elements = document.querySelectorAll('.reveal');
        elements.forEach((el) => observer.observe(el));

        return () => elements.forEach((el) => observer.unobserve(el));
    }, []);

    const handleMouseEnter = () => setCursorHovering(true);
    const handleMouseLeave = () => setCursorHovering(false);

    // Data
    const projects = [
        {
            title: "Neon Horizon",
            category: "Web App",
            year: "2024",
            desc: "A futuristic dashboard interface with real-time data visualization.",
            tech: ["React", "D3.js", "WebGL"],
            image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070"
        },
        {
            title: "Ethereal Commerce",
            category: "E-Commerce",
            year: "2023",
            desc: "Headless Shopify experience focused on luxury minimalist fashion.",
            tech: ["Next.js", "Shopify", "Tailwind"],
            image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=2070"
        },
        {
            title: "Soundscape",
            category: "Audio",
            year: "2023",
            desc: "Generative audio playground in the browser.",
            tech: ["Web Audio API", "Canvas", "Vue"],
            image: "https://images.unsplash.com/photo-1614149162883-504ce4d13909?auto=format&fit=crop&q=80&w=1974"
        }
    ];

    const artWorks = [
        "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&q=80&w=1000",
        "https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&q=80&w=1000",
        "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&q=80&w=1000",
        "https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&q=80&w=1000",
    ];

    const experience = [
        { role: "Senior Frontend Engineer", company: "TechNova", year: "2023 - Present", desc: "Leading the design system migration and core product UI." },
        { role: "Creative Developer", company: "Studio 42", year: "2021 - 2023", desc: "Built award-winning experiential websites for Fortune 500 clients." },
        { role: "UI Designer", company: "Freelance", year: "2019 - 2021", desc: "Crafting digital identities for startups and artists." },
    ];

    return (
        <div className="bg-[#0a0a0a] text-white min-h-screen font-sans selection:bg-white selection:text-black overflow-x-hidden cursor-none">

            {/* Custom Cursor */}
            <div
                className="fixed pointer-events-none z-50 mix-blend-difference hidden md:block transition-transform duration-100 ease-out"
                style={{
                    left: cursorPos.x,
                    top: cursorPos.y,
                    transform: `translate(-50%, -50%) scale(${cursorHovering ? 2.5 : 1})`
                }}
            >
                <div className="w-8 h-8 bg-white rounded-full opacity-90 blur-[1px]"></div>
            </div>

            {/* Navigation */}
            <nav className="fixed top-0 left-0 w-full z-40 px-6 py-6 flex justify-between items-center mix-blend-difference">
                <div
                    className="text-2xl font-bold tracking-tighter hover:tracking-widest transition-all duration-300 cursor-pointer"
                    onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
                >
                    ALEX.DEV
                </div>
                <div className="hidden md:flex space-x-8 text-sm uppercase tracking-widest font-light">
                    {['About', 'Resume', 'Work', 'Art', 'Contact'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="hover:text-gray-400 transition-colors relative group"
                            onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
                        >
                            {item}
                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-300"></span>
                        </a>
                    ))}
                </div>
                <button
                    className="md:hidden"
                    onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
                >
                    <div className="space-y-2">
                        <span className="block w-8 h-0.5 bg-white"></span>
                        <span className="block w-6 h-0.5 bg-white ml-auto"></span>
                    </div>
                </button>
            </nav>

            {/* Hero Section */}
            <header className="relative h-screen flex flex-col justify-center items-center px-6" id="home">
                <div className="absolute inset-0 z-0 opacity-20">
                    {/* Animated Gradient Bg - Simulated */}
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600 rounded-full blur-[120px] animate-pulse"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600 rounded-full blur-[120px] animate-pulse delay-700"></div>
                </div>

                <div className="z-10 text-center space-y-6">
                    <p className="reveal text-gray-400 uppercase tracking-[0.2em] text-sm animate-fade-in-up">Based in India</p>
                    <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.9] mix-blend-overlay">
                        <span className="block reveal translate-y-20 opacity-0 transition-all duration-1000 ease-out delay-100">CREATIVE</span>
                        <span className="block reveal translate-y-20 opacity-0 transition-all duration-1000 ease-out delay-200 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">ENGINEER</span>
                    </h1>
                    <p className="reveal translate-y-10 opacity-0 transition-all duration-1000 ease-out delay-500 max-w-lg mx-auto text-gray-400 text-lg md:text-xl pt-8">
                        Building digital experiences that blend art, code, and human interaction.
                    </p>
                </div>

                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
                    <span className="text-[10px] uppercase tracking-widest">Scroll</span>
                    <ChevronDown size={20} />
                </div>
            </header>

            {/* Cover Image Parallax */}
            <section className="w-full h-[60vh] md:h-[80vh] overflow-hidden relative reveal opacity-0 transition-opacity duration-1000">
                <img
                    src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=2564"
                    alt="Abstract Cover"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2s]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>
            </section>

            {/* About Section */}
            <section id="about" className="py-24 md:py-32 px-6 max-w-7xl mx-auto" data-section="about">
                <div className="grid md:grid-cols-2 gap-16 items-start">
                    <div className="reveal -translate-x-20 opacity-0 transition-all duration-1000 ease-out">
                        <h2 className="text-4xl md:text-6xl font-bold mb-8">About Me</h2>
                        <div className="w-20 h-1 bg-white mb-8"></div>
                        <p className="text-xl text-gray-300 leading-relaxed mb-6">
                            I am a multidisciplinary developer with a passion for design systems and motion. My work bridges the gap between functional engineering and aesthetic perfection.
                        </p>
                        <p className="text-xl text-gray-300 leading-relaxed">
                            When I'm not coding, I'm exploring generative art, photography, or getting lost in obscure cinema. I believe the best digital products feel inevitable.
                        </p>

                        <div className="flex gap-4 mt-8">
                            <a href="#" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="flex items-center gap-2 px-6 py-3 border border-white rounded-full hover:bg-white hover:text-black transition-all">
                                <Download size={18} /> Download CV
                            </a>
                        </div>
                    </div>

                    <div className="relative reveal translate-x-20 opacity-0 transition-all duration-1000 ease-out delay-200">
                        <div className="aspect-[3/4] bg-gray-900 rounded-lg overflow-hidden relative group">
                            <img
                                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=987"
                                alt="Portrait"
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                            />
                            <div className="absolute inset-0 border border-white/10 m-4 rounded-sm"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Resume / Timeline */}
            <section id="resume" className="py-24 bg-[#0f0f0f] px-6" data-section="resume">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-16 text-center reveal opacity-0 translate-y-10 transition-all duration-700">Experience & Education</h2>

                    <div className="space-y-12 relative border-l border-gray-800 ml-4 md:ml-0 pl-8 md:pl-0">
                        {experience.map((job, idx) => (
                            <div
                                key={idx}
                                className="md:flex items-center justify-between group reveal translate-y-10 opacity-0 transition-all duration-700"
                                style={{ transitionDelay: `${idx * 150}ms` }}
                            >
                                {/* Desktop layout: Left side date, Right side content */}
                                <div className="hidden md:block w-5/12 text-right pr-12">
                                    <span className="text-xl font-light text-gray-400 group-hover:text-white transition-colors">{job.year}</span>
                                </div>

                                {/* Timeline Dot */}
                                <div className="absolute left-[-5px] md:left-1/2 md:-ml-[5px] w-[10px] h-[10px] rounded-full bg-gray-600 group-hover:bg-white transition-colors duration-300 ring-4 ring-[#0f0f0f]"></div>

                                <div className="md:w-5/12 md:pl-12" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                                    <h3 className="text-2xl font-bold mb-1">{job.role}</h3>
                                    <div className="text-purple-400 mb-2 font-mono text-sm">{job.company}</div>
                                    <div className="md:hidden text-gray-500 text-sm mb-2">{job.year}</div>
                                    <p className="text-gray-400 text-sm leading-relaxed">{job.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Horizontal Scroll Feel */}
            <section id="work" className="py-32 px-6" data-section="work">
                <div className="max-w-7xl mx-auto mb-16 flex justify-between items-end reveal opacity-0 translate-y-10 transition-all duration-700">
                    <div>
                        <h2 className="text-5xl md:text-7xl font-bold">Selected Work</h2>
                        <p className="text-gray-400 mt-4 max-w-md">A collection of projects pushing the boundaries of web technology.</p>
                    </div>
                    <div className="hidden md:block animate-spin-slow">
                        <Code size={48} className="text-gray-600" />
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <div
                            key={idx}
                            className="group relative bg-[#111] hover:bg-[#161616] transition-colors duration-500 rounded-xl overflow-hidden reveal translate-y-20 opacity-0 transition-all duration-1000 ease-out"
                            style={{ transitionDelay: `${idx * 200}ms` }}
                            onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
                        >
                            <div className="aspect-[4/3] overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                                />
                            </div>
                            <div className="p-8">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <span className="text-xs font-bold text-purple-400 uppercase tracking-widest">{project.category}</span>
                                        <h3 className="text-2xl font-bold mt-2 group-hover:underline decoration-1 underline-offset-4">{project.title}</h3>
                                    </div>
                                    <span className="text-gray-600 font-mono text-sm">{project.year}</span>
                                </div>
                                <p className="text-gray-400 text-sm mb-6">{project.desc}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map(t => (
                                        <span key={t} className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-300">{t}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Quote Section */}
            <section className="py-40 px-6 flex justify-center items-center bg-white text-black relative overflow-hidden" data-section="quote">
                <div className="absolute top-0 left-0 w-32 h-32 border-t-4 border-l-4 border-black m-6"></div>
                <div className="absolute bottom-0 right-0 w-32 h-32 border-b-4 border-r-4 border-black m-6"></div>

                <div className="max-w-4xl text-center z-10 reveal scale-90 opacity-0 transition-all duration-1000">
                    <p className="text-2xl md:text-4xl font-serif italic leading-relaxed">
                        "Creativity is allowing yourself to make mistakes. Art is knowing which ones to keep."
                    </p>
                    <div className="mt-8 font-bold tracking-widest uppercase text-sm">— Scott Adams</div>
                </div>
            </section>

            {/* Art Gallery */}
            <section id="art" className="py-32 px-6 max-w-7xl mx-auto" data-section="art">
                <div className="flex items-center gap-4 mb-16 reveal opacity-0 translate-x-[-20px] transition-all duration-700">
                    <Palette className="text-purple-500" />
                    <h2 className="text-3xl font-bold uppercase tracking-wider">Visual Playground</h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
                    {/* Masonry-style Grid */}
                    {artWorks.map((src, idx) => (
                        <div
                            key={idx}
                            className={`relative overflow-hidden rounded-lg group ${idx === 0 ? 'md:col-span-2 md:row-span-2' : ''} reveal scale-95 opacity-0 transition-all duration-700`}
                            style={{ transitionDelay: `${idx * 100}ms` }}
                            onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
                        >
                            <img
                                src={src}
                                alt="Art"
                                className="w-full h-full object-cover filter contrast-125 group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="text-white text-sm tracking-widest uppercase border border-white px-4 py-2">View</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-32 px-6 relative" data-section="contact">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-6xl md:text-8xl font-black mb-12 reveal translate-y-20 opacity-0 transition-all duration-1000">
                        LET'S TALK
                    </h2>
                    <p className="text-xl text-gray-400 mb-12 max-w-lg mx-auto reveal translate-y-10 opacity-0 transition-all duration-1000 delay-200">
                        Have a project in mind or just want to discuss the latest in tech and design? I'm always open to new ideas.
                    </p>

                    <a
                        href="mailto:hello@alex.dev"
                        className="inline-flex items-center gap-4 text-2xl md:text-4xl border-b-2 border-white/30 pb-2 hover:border-white hover:text-purple-400 transition-all duration-300 reveal opacity-0 transition-all duration-1000 delay-300"
                        onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
                    >
                        hello@alex.dev <ArrowRight size={32} />
                    </a>

                    <div className="flex justify-center gap-8 mt-24">
                        {[Github, Twitter, Linkedin].map((Icon, i) => (
                            <a
                                key={i}
                                href="#"
                                className="p-8 bg-[#1a1a1a] rounded-full hover:bg-white hover:text-black transition-all duration-300 transform hover:-translate-y-2 reveal opacity-0 scale-50 transition-all duration-700"
                                style={{ transitionDelay: `${400 + (i * 100)}ms` }}
                                onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
                            >
                                <Icon size={64} />
                            </a>
                        ))}
                    </div>
                </div>

                <footer className="absolute bottom-6 w-full text-center text-gray-600 text-xs tracking-widest uppercase">
                    © 2024 Alex Dev. Crafted with React & Passion.
                </footer>
            </section>

            {/* Global CSS for Animations */}
            <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700;900&family=Playfair+Display:ital,wght@1,400&display=swap');
        
        .font-serif {
          font-family: 'Playfair Display', serif;
        }

        /* Hide scrollbar for cleaner look */
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #0a0a0a;
        }
        ::-webkit-scrollbar-thumb {
          background: #333;
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #555;
        }

        /* Animation Utility Classes mimicking GSAP */
        .reveal {
          will-change: transform, opacity;
        }
        
        .reveal-active {
          opacity: 1 !important;
          transform: translateY(0) translateX(0) scale(1) !important;
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }
        
        /* Smooth Scroll behavior for anchor links */
        html {
          scroll-behavior: smooth;
        }
      `}</style>
        </div>
    );
};

export default App;