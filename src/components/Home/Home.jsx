import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax transformations
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scaleText = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  // Magnetic Button Effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e) => {
    const { currentTarget, clientX, clientY } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.2; // magnetic pull strength
    const y = (clientY - (top + height / 2)) * 0.2;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      
      {/* Premium Background Mesh with Parallax */}
      <motion.div 
        style={{ y: yBg }} 
        className="absolute inset-0 pointer-events-none flex justify-center items-center overflow-hidden z-0"
      >
        <motion.div
           initial={{ opacity: 0, scale: 0.7, rotate: 0 }}
           animate={{ 
             opacity: 1, 
             scale: 1,
             rotate: 360
           }}
           transition={{ 
             opacity: { duration: 2, ease: "easeOut" },
             scale: { duration: 2, ease: "easeOut" },
             rotate: { duration: 60, repeat: Infinity, ease: "linear" }
           }}
           className="w-[800px] h-[800px] bg-gradient-to-tr from-gray-200 via-gray-100 to-white dark:from-white/10 dark:via-transparent dark:to-transparent rounded-full blur-[120px] opacity-70 dark:opacity-40 mix-blend-normal dark:mix-blend-screen"
        />
        {/* Secondary subtle orb */}
         <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 0.5 }}
           transition={{ duration: 3, delay: 1 }}
           className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-blue-100/30 dark:bg-blue-900/10 rounded-full blur-[100px]"
        />
      </motion.div>

      <motion.div 
        style={{ y: yText, opacity: opacityText, scale: scaleText }} 
        className="relative z-10 w-full max-w-5xl mx-auto px-6 flex flex-col items-center text-center"
      >
        
        {/* Intro Tag */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="px-5 py-2 mb-8 rounded-full border border-gray-200 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-md shadow-sm"
        >
          <span className="text-sm font-semibold tracking-wide text-gray-700 dark:text-gray-300 uppercase">
            Full Stack Software Developer
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl sm:text-7xl lg:text-[5rem] font-bold tracking-tight text-gray-900 dark:text-white leading-[1.05] max-w-4xl mb-8"
        >
          Design meets logic.<br />
          <span className="text-gradient inline-block mt-2">
            Imagination becomes reality.
          </span>
        </motion.h1>

        {/* Sub headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg sm:text-xl md:text-2xl font-light text-gray-500 dark:text-gray-400 max-w-2xl mb-12"
        >
          I craft futuristic, responsive, and cinematic web experiences that don't just work flawlessly — they feel alive.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-5"
        >
          {/* Magnetic Primary Button */}
          <Link 
            to="/projects"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative"
          >
            <motion.div
              style={{ x: smoothX, y: smoothY }}
              className="group flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gray-900 text-white dark:bg-white dark:text-gray-900 font-medium transition-all shadow-xl shadow-gray-900/20 dark:shadow-white/10 hover:shadow-2xl hover:shadow-gray-900/30 dark:hover:shadow-white/20"
            >
              <span className="relative z-10 text-[15px]">View Work</span>
              <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.div>
          </Link>
          
          <a
            href="/Danial_Choudary_CV_Updated(1).pdf"
            download
            className="group flex items-center justify-center gap-3 px-8 py-4 rounded-full glass-card hover:bg-white/60 dark:hover:bg-white/10 text-gray-900 dark:text-white font-medium transition-all"
          >
            <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform duration-300" />
            <span className="text-[15px]">Download CV</span>
          </a>
        </motion.div>

      </motion.div>
    </div>
  );
};

export default Home;