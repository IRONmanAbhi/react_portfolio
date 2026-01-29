// import { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

// export default function Portfolio() {
//   const containerRef = useRef(null);
//   const { scrollYProgress } = useScroll({ target: containerRef });
//   const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

//   return (
//     <div ref={containerRef} className="bg-black text-white font-sans overflow-x-hidden">
//       {/* HERO / COVER */}
//       <section className="min-h-screen flex flex-col justify-center items-center relative">
//         <motion.div
//           style={{ scale }}
//           className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97')] bg-cover bg-center opacity-40"
//         />
//         <motion.h1
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="text-6xl md:text-8xl font-extrabold tracking-tight z-10"
//         >
//           Abhinav
//         </motion.h1>
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3 }}
//           className="mt-6 text-gray-300 z-10 text-lg"
//         >
//           Security Engineer · Builder · Artist
//         </motion.p>
//         <ArrowDown className="absolute bottom-10 animate-bounce" />
//       </section>

//       {/* ABOUT */}
//       <section className="min-h-screen flex items-center px-8 md:px-24">
//         <motion.div
//           initial={{ opacity: 0, x: -60 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="max-w-3xl"
//         >
//           <h2 className="text-5xl font-bold mb-6">About Me</h2>
//           <p className="text-gray-300 leading-relaxed">
//             I’m a cybersecurity-focused developer who loves building elegant,
//             high-performance systems and visually rich interfaces. I mix deep
//             technical work with artistic expression.
//           </p>
//         </motion.div>
//       </section>

//       {/* RESUME */}
//       <section className="min-h-screen px-8 md:px-24 flex items-center">
//         <motion.div
//           initial={{ opacity: 0, y: 60 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="grid md:grid-cols-2 gap-12"
//         >
//           <div>
//             <h2 className="text-5xl font-bold mb-4">Experience</h2>
//             <p className="text-gray-400">Cybersecurity · Backend · Systems</p>
//           </div>
//           <div className="space-y-6 text-gray-300">
//             <div>Vulnerability Detection & Red Teaming</div>
//             <div>Backend Engineering (Node, Flask)</div>
//             <div>Cloud & Distributed Systems</div>
//           </div>
//         </motion.div>
//       </section>

//       {/* PROJECTS */}
//       <section className="min-h-screen px-8 md:px-24">
//         <motion.h2
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 1 }}
//           viewport={{ once: true }}
//           className="text-5xl font-bold mb-16"
//         >
//           Selected Projects
//         </motion.h2>
//         <div className="grid md:grid-cols-3 gap-8">
//           {[1, 2, 3].map((p) => (
//             <motion.div
//               key={p}
//               whileHover={{ scale: 1.05 }}
//               className="bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-white/10"
//             >
//               <h3 className="text-xl font-semibold mb-2">Project {p}</h3>
//               <p className="text-gray-400">High impact, security-first build.</p>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* ART */}
//       <section className="min-h-screen px-8 md:px-24 flex items-center">
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           <h2 className="text-5xl font-bold mb-8">My Art</h2>
//           <p className="text-gray-400 max-w-xl">
//             Generative visuals, dark aesthetics, and experimental design pieces
//             that inspire my interfaces.
//           </p>
//         </motion.div>
//       </section>

//       {/* QUOTE */}
//       <section className="py-32 text-center">
//         <motion.blockquote
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 1 }}
//           viewport={{ once: true }}
//           className="text-4xl italic text-gray-300"
//         >
//           “Code is poetry when performance meets beauty.”
//         </motion.blockquote>
//       </section>

//       {/* CONTACT */}
//       <section className="min-h-screen px-8 md:px-24 flex items-center justify-center">
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center"
//         >
//           <h2 className="text-5xl font-bold mb-6">Let’s Build Something</h2>
//           <div className="flex gap-6 justify-center text-gray-300">
//             <a href="#"><Github /></a>
//             <a href="#"><Linkedin /></a>
//             <a href="#"><Mail /></a>
//           </div>
//         </motion.div>
//       </section>
//     </div>
//   );
// }

// Awwwards-level animated React portfolio
// Tech: React + GSAP + ScrollTrigger + Framer Motion + TailwindCSS
// Drop into a Vite + React + Tailwind project

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Portfolio() {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const resumeRef = useRef(null);
  const projectsRef = useRef(null);
  const artRef = useRef(null);
  const quoteRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const sections = [aboutRef, resumeRef, projectsRef, artRef, quoteRef, contactRef];

    sections.forEach((ref) => {
      gsap.fromTo(
        ref.current,
        { opacity: 0, y: 120 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 80%",
          },
        }
      );
    });

    gsap.fromTo(
      heroRef.current,
      { scale: 1.2 },
      {
        scale: 1,
        duration: 2,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <main className="bg-black text-white overflow-x-hidden">
      {/* HERO / COVER */}
      <section
        ref={heroRef}
        className="min-h-screen flex items-center justify-center relative"
      >
        <img
          src="https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="relative z-10 text-center"
        >
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight">
            Abhinav
          </h1>
          <p className="mt-6 text-xl text-gray-300">
            Crafting immersive digital experiences
          </p>
        </motion.div>
      </section>

      {/* ABOUT */}
      <section ref={aboutRef} className="py-32 px-8 md:px-24">
        <h2 className="text-5xl font-bold mb-10">About Me</h2>
        <p className="max-w-3xl text-gray-300 text-lg leading-relaxed">
          I’m a developer who blends engineering, design, and motion to build
          unforgettable web experiences. I care deeply about detail, rhythm,
          and storytelling on the web.
        </p>
      </section>

      {/* RESUME / TIMELINE */}
      <section ref={resumeRef} className="py-32 px-8 md:px-24 bg-zinc-900">
        <h2 className="text-5xl font-bold mb-16">Resume</h2>
        <div className="space-y-16 border-l border-gray-700 pl-12">
          {["2025 – Present", "2023 – 2025", "2021 – 2023"].map((year) => (
            <div key={year} className="relative">
              <span className="absolute -left-[38px] top-1 w-4 h-4 bg-white rounded-full" />
              <h3 className="text-2xl font-semibold">{year}</h3>
              <p className="text-gray-400 mt-2">
                Building scalable systems, animated UIs, and security-focused
                platforms.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section ref={projectsRef} className="py-32 px-8 md:px-24">
        <h2 className="text-5xl font-bold mb-16">Projects</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[1, 2, 3].map((p) => (
            <motion.div
              key={p}
              whileHover={{ scale: 1.05 }}
              className="bg-zinc-900 p-8 rounded-2xl cursor-pointer"
            >
              <h3 className="text-2xl font-semibold mb-4">Project {p}</h3>
              <p className="text-gray-400">
                High-impact product with animation-driven UX.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ART */}
      <section ref={artRef} className="py-32 px-8 md:px-24 bg-zinc-900">
        <h2 className="text-5xl font-bold mb-16">My Art</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((a) => (
            <motion.img
              key={a}
              whileHover={{ scale: 1.08 }}
              src={`https://picsum.photos/500/500?random=${a}`}
              className="rounded-xl object-cover"
            />
          ))}
        </div>
      </section>

      {/* QUOTE */}
      <section ref={quoteRef} className="py-40 px-8 md:px-24 text-center">
        <motion.blockquote
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-light italic max-w-4xl mx-auto"
        >
          “The web is not a canvas. It’s a stage.”
        </motion.blockquote>
      </section>

      {/* CONTACT */}
      <section ref={contactRef} className="py-32 px-8 md:px-24 bg-zinc-900">
        <h2 className="text-5xl font-bold mb-10">Contact Me</h2>
        <p className="text-gray-400 mb-8 max-w-xl">
          Want to collaborate or build something remarkable together?
        </p>
        <button className="px-10 py-4 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition">
          Get in Touch
        </button>
      </section>
    </main>
  );
}
