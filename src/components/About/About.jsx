import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { User, Code, Briefcase, GraduationCap, Sparkles, Zap, Award, Target, Rocket, Brain } from 'lucide-react';

const About = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1, y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, 0.01, 0.9]
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateX: -15 },
    visible: {
      opacity: 1, scale: 1, rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, 0.01, 0.9]
      }
    }
  };

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="relative min-h-screen bg-black overflow-hidden py-16"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Dynamic gradient orbs */}
        <motion.div
          className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-3xl"
          style={{ y }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-3xl"
          style={{ y: useTransform(scrollYProgress, [0, 1], [-100, 100]) }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Cyber grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black,transparent)]" />
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Header Section */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col items-center text-center mb-20"
        >
          {/* Profile Image with holographic effect */}
          <motion.div
            className="relative mb-12"
            initial={{ scale: 0, rotate: -180 }}
            animate={isInView ? { scale: 1, rotate: 0 } : {}}
            transition={{ duration: 1, ease: [0.6, 0.05, 0.01, 0.9] }}
          >
            {/* Hexagonal frame */}
            <div className="absolute inset-0 -m-6">
              <svg viewBox="0 0 200 200" className="w-full h-full">
                <motion.path
                  d="M100,10 L170,50 L170,130 L100,170 L30,130 L30,50 Z"
                  fill="none"
                  stroke="url(#gradient)"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={isInView ? { pathLength: 1 } : {}}
                  transition={{ duration: 2, ease: "easeInOut" }}
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#06B6D4" />
                    <stop offset="50%" stopColor="#3B82F6" />
                    <stop offset="100%" stopColor="#8B5CF6" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Rotating rings */}
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                className="absolute inset-0 rounded-full border border-cyan-500/20"
                style={{
                  margin: `${-20 - index * 15}px`,
                }}
                animate={{ rotate: 360 }}
                transition={{
                  duration: 15 + index * 5,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            ))}

            {/* Glow effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full blur-2xl opacity-40"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.4, 0.6, 0.4],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* Profile Image */}
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden border-4 border-cyan-500/50 shadow-2xl shadow-cyan-500/50">
              <img
                src="data:image/jpeg;base64,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"
                alt="Profile"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 to-transparent" />
              
              {/* Scan line effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent h-8"
                animate={{
                  y: ['-100%', '200%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </div>

            {/* Corner accents */}
            {[0, 90, 180, 270].map((rotation) => (
              <motion.div
                key={rotation}
                className="absolute top-0 left-0 w-6 h-6"
                style={{
                  rotate: rotation,
                  margin: '-12px',
                }}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.5 + rotation / 270 }}
              >
                <div className="w-full h-0.5 bg-gradient-to-r from-cyan-400 to-transparent" />
                <div className="w-0.5 h-full bg-gradient-to-b from-cyan-400 to-transparent" />
              </motion.div>
            ))}
          </motion.div>

          {/* Title */}
          <motion.div
            variants={itemVariants}
            className="space-y-4 mb-8"
          >
            {/* Decorative line */}
            <div className="flex items-center justify-center space-x-4 mb-6">
              <motion.div
                className="h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                initial={{ width: 0 }}
                animate={isInView ? { width: 100 } : {}}
                transition={{ duration: 1, delay: 0.5 }}
              />
              <Sparkles className="w-5 h-5 text-cyan-400" />
              <motion.div
                className="h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                initial={{ width: 0 }}
                animate={isInView ? { width: 100 } : {}}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </div>

            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl font-black uppercase tracking-wider"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                About
              </span>
              <span className="text-white"> Me</span>
            </motion.h1>

            {/* Glitch subtitle */}
            <motion.div
              className="relative inline-block"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
            >
              <p className="text-sm sm:text-base uppercase tracking-widest text-cyan-400/60 font-light">
                // Full stack developer specializing in MERN stack              </p>
            </motion.div>
          </motion.div>

          {/* Description */}
          <motion.div
            variants={itemVariants}
            className="relative max-w-4xl"
          >
            {/* Quote marks */}
            <motion.div
              className="absolute -top-6 -left-4 text-6xl text-cyan-500/20 font-serif"
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.8 }}
            >
              "
            </motion.div>
            
            <p className="text-lg sm:text-xl text-gray-400 leading-relaxed px-8">
              Hello! I'm <span className="text-cyan-400 font-semibold">Danial Choudary</span>, a dedicated full stack developer specializing in the MERN stack. My journey began with a fascination for technology and a desire to create impactful digital experiences. Over the years, I have honed my skills in MongoDB, Express.js, React.js, Node.js, and modern web development practices. I enjoy solving complex problems and bringing ideas to life through code, delivering seamless and efficient solutions for both frontend and backend challenges.
            </p>

            <motion.div
              className="absolute -bottom-6 -right-4 text-6xl text-cyan-500/20 font-serif rotate-180"
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.8 }}
            >
              "
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;