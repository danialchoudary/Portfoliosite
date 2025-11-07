import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Laptop, Gamepad2, ShoppingCart, ListTodo, ExternalLink, Sparkles, Zap, ArrowRight } from 'lucide-react';

const Projects = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [hoveredProject, setHoveredProject] = useState(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const projects = [
    {
      title: "Quiz App",
      description: "A dynamic quiz application with multiple-choice questions and real-time scoring.",
      icon: Laptop,
      link: "https://danialchoudary.github.io/QuizApp/",
      gradient: "from-cyan-500 to-blue-600",
      glowColor: "rgba(6, 182, 212, 0.4)",
      tech: ["React", "JavaScript", "CSS"],
    },
    {
      title: "Tic Tac Toe Game",
      description: "A classic Tic Tac Toe game with an interactive UI and simple game logic.",
      icon: Gamepad2,
      link: "https://danialchoudary.github.io/Tic-Tac-game/",
      gradient: "from-purple-500 to-pink-600",
      glowColor: "rgba(168, 85, 247, 0.4)",
      tech: ["JavaScript", "HTML", "CSS"],
    },
    {
      title: "E-Commerce Website",
      description: "A fully functional e-commerce site with product listings, shopping cart, and checkout features.",
      icon: ShoppingCart,
      link: "https://ecommerce-project-self.vercel.app/",
      gradient: "from-blue-500 to-indigo-600",
      glowColor: "rgba(59, 130, 246, 0.4)",
      tech: ["React"],
    },
    {
      title: "Hospital Management System",
      description: "A comprehensive hospital management system for managing patients, staff, and appointments efficiently.",
      icon: ListTodo, // Replace with a relevant icon if available
      link: "https://hospital-management-system-seven-tawny.vercel.app/",
      gradient: "from-green-500 to-teal-600",
      glowColor: "rgba(16, 185, 129, 0.4)",
      tech: ["React", "Node.js", "MongoDB"],
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.6, 0.05, 0.01, 0.9]
      }
    }
  };

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="relative min-h-screen bg-black overflow-hidden py-32"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient orbs */}
        <motion.div
          className="absolute top-1/4 -left-1/4 w-[900px] h-[900px] bg-blue-500/20 rounded-full blur-3xl"
          style={{ y }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-1/4 w-[900px] h-[900px] bg-purple-500/20 rounded-full blur-3xl"
          style={{ y: useTransform(scrollYProgress, [0, 1], [-100, 100]) }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-cyan-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            rotate: [0, 180, 360],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black,transparent)]" />
        
        {/* Floating particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Diagonal light streaks */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`streak-${i}`}
            className="absolute h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent"
            style={{
              width: '300px',
              top: `${15 + i * 25}%`,
              left: '-300px',
              transform: 'rotate(-30deg)',
            }}
            animate={{
              x: ['0vw', '130vw'],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8"
        style={{ opacity }}
      >
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Decorative line with sparkles */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <motion.div
              className="h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent w-32"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1, delay: 0.3 }}
            />
            <motion.div
              animate={{
                rotate: [0, 360],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Sparkles className="w-6 h-6 text-cyan-400" />
            </motion.div>
            <motion.div
              className="h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent w-32"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1, delay: 0.3 }}
            />
          </div>

          {/* Title */}
          <motion.h1
            className="text-6xl sm:text-7xl lg:text-8xl font-black uppercase tracking-wider mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.span 
              className="inline-block bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ['0%', '100%', '0%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                backgroundSize: '200% auto',
              }}
            >
              Projects
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mt-6"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
          >
            Explore my latest work featuring interactive web applications and creative solutions
          </motion.p>

          {/* Stats badges */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-4 mt-8"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.7 }}
          >
            {[
              { value: projects.length, label: 'Projects' },
              { value: '100%', label: 'Responsive' },
              { value: 'Live', label: 'Deployed' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                className="px-5 py-3 rounded-xl bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-xl border border-cyan-500/30"
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.8 + i * 0.1 }}
                whileHover={{ scale: 1.05, borderColor: 'rgba(6, 182, 212, 0.6)' }}
              >
                <div className="text-cyan-400 text-2xl font-bold">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
        >
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.title}
                variants={itemVariants}
                className="relative group"
                onMouseEnter={() => setHoveredProject(project.title)}
                onMouseLeave={() => setHoveredProject(null)}
                whileHover={{ y: -15, scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    backgroundColor: project.glowColor,
                  }}
                  animate={hoveredProject === project.title ? {
                    scale: [1, 1.1, 1],
                  } : {}}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />

                {/* Card */}
                <div className="relative bg-gradient-to-br from-gray-900/95 via-gray-800/95 to-gray-900/95 backdrop-blur-2xl rounded-3xl border border-gray-700/50 group-hover:border-cyan-500/50 overflow-hidden transition-all duration-500 h-full flex flex-col">
                  
                  {/* Top accent bar */}
                  <motion.div
                    className={`h-1 bg-gradient-to-r ${project.gradient}`}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.8 }}
                  />

                  {/* Card content */}
                  <div className="p-8 flex flex-col flex-grow">
                    {/* Icon section */}
                    <motion.div
                      className="mb-6"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center shadow-2xl relative overflow-hidden`}>
                        {/* Icon glow */}
                        <motion.div
                          className="absolute inset-0 bg-white/20"
                          animate={{
                            rotate: 360,
                          }}
                          transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "linear"
                          }}
                        />
                        <Icon className="w-10 h-10 text-white relative z-10" strokeWidth={2} />
                      </div>
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 leading-relaxed mb-6 flex-grow text-sm">
                      {project.description}
                    </p>

                    {/* Tech stack tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, i) => (
                        <motion.span
                          key={tech}
                          className="px-3 py-1 rounded-full bg-gray-800/80 border border-gray-700/50 text-cyan-400 text-xs font-medium"
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 + i * 0.05 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    {/* View Project button */}
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative group/btn overflow-hidden rounded-xl bg-gradient-to-r from-gray-800/50 to-gray-700/50 border border-gray-600/50 hover:border-cyan-500/50 px-6 py-3 flex items-center justify-center space-x-2 transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {/* Button glow */}
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover/btn:opacity-20 transition-opacity duration-500`}
                      />
                      
                      {/* Shimmer effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                        animate={{
                          x: ['-100%', '200%'],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "linear",
                          repeatDelay: 1
                        }}
                      />

                      <span className="text-gray-300 group-hover/btn:text-white font-semibold relative z-10 transition-colors duration-300">
                        View Project
                      </span>
                      <motion.div
                        animate={hoveredProject === project.title ? { x: [0, 5, 0] } : {}}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        <ArrowRight className="w-5 h-5 text-cyan-400 relative z-10" strokeWidth={2} />
                      </motion.div>
                    </motion.a>
                  </div>

                  {/* Shimmer overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 pointer-events-none"
                    animate={{
                      x: ['-100%', '200%'],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "linear",
                      repeatDelay: 2
                    }}
                  />

                  {/* Corner brackets */}
                  {[
                    { top: 0, left: 0, rotate: 0 },
                    { top: 0, right: 0, rotate: 90 },
                    { bottom: 0, right: 0, rotate: 180 },
                    { bottom: 0, left: 0, rotate: 270 },
                  ].map((pos, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ ...pos, margin: '8px' }}
                    >
                      <div 
                        className="w-full h-0.5 bg-cyan-400"
                        style={{ transform: `rotate(${pos.rotate}deg)`, transformOrigin: 'left' }}
                      />
                      <div 
                        className="w-0.5 h-full bg-cyan-400"
                        style={{ transform: `rotate(${pos.rotate}deg)`, transformOrigin: 'top' }}
                      />
                    </motion.div>
                  ))}

                  {/* Floating particles on hover */}
                  {hoveredProject === project.title && (
                    <>
                      {[...Array(8)].map((_, i) => (
                        <motion.div
                          key={`particle-${i}`}
                          className="absolute w-1 h-1 rounded-full"
                          style={{
                            backgroundColor: project.glowColor,
                            top: '50%',
                            left: '50%',
                          }}
                          animate={{
                            x: (Math.random() - 0.5) * 150,
                            y: (Math.random() - 0.5) * 150,
                            opacity: [1, 0],
                            scale: [0, 1.5, 0],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            delay: i * 0.15,
                          }}
                        />
                      ))}
                    </>
                  )}

                  {/* Corner decorations */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500/5 to-transparent rounded-bl-full pointer-events-none" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-purple-500/5 to-transparent rounded-tr-full pointer-events-none" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;