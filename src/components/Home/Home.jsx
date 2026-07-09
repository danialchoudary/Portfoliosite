import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax transformations
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      
      {/* Background Mesh with Parallax */}
      <motion.div 
        style={{ y: yBg }} 
        className="absolute inset-0 pointer-events-none flex justify-center items-center overflow-hidden"
      >
        <motion.div
           initial={{ opacity: 0, scale: 0.8 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 2, ease: "easeOut" }}
           className="w-[800px] h-[800px] bg-gradient-to-tr from-gray-200 via-gray-100 to-white dark:from-white/5 dark:via-transparent dark:to-transparent rounded-full blur-[100px] opacity-60 dark:opacity-40"
        />
      </motion.div>

      <motion.div 
        style={{ y: yText, opacity: opacityText }} 
        className="relative z-10 w-full max-w-5xl mx-auto px-6 flex flex-col items-center text-center"
      >
        
        {/* Intro Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="px-4 py-1.5 mb-6 rounded-full border border-gray-200 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-md"
        >
          <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
            Full Stack Software Developer
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl sm:text-7xl font-bold tracking-tight text-gray-900 dark:text-white leading-[1.1] max-w-4xl mb-6"
        >
          Design meets logic.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-800 dark:from-gray-300 dark:to-gray-500">
            Imagination becomes reality.
          </span>
        </motion.h1>

        {/* Sub headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg sm:text-xl text-gray-500 dark:text-gray-400 max-w-2xl mb-10"
        >
          I craft futuristic, responsive, and cinematic web experiences that don't just work flawlessly — they feel alive.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <Link 
            to="/projects"
            className="group flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-gray-900 text-white dark:bg-white dark:text-gray-900 font-medium hover:scale-105 transition-transform"
          >
            <span>View Work</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <a
            href="/Danial_Choudary_CV_Final_Updated.pdf"
            download
            className="group flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white font-medium hover:bg-gray-50 dark:hover:bg-white/10 transition-colors"
          >
            <Download className="w-4 h-4" />
            <span>Download CV</span>
          </a>
        </motion.div>

      </motion.div>
    </div>
  );
};

export default Home;