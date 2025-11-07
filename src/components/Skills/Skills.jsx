import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Sparkles, Code, Zap, Layers, Database } from 'lucide-react';

const Skills = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [hoveredSkill, setHoveredSkill] = useState(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const skills = [
    {
      name: 'MongoDB',
      category: 'Database',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      gradient: 'from-green-500 to-emerald-600',
      glowColor: 'rgba(16, 185, 129, 0.5)',
    },
    {
      name: 'Express.js',
      category: 'Backend',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
      gradient: 'from-gray-400 to-gray-600',
      glowColor: 'rgba(156, 163, 175, 0.5)',
      dark: true,
    },
    {
      name: 'React',
      category: 'Frontend',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      gradient: 'from-cyan-400 to-blue-500',
      glowColor: 'rgba(6, 182, 212, 0.5)',
    },
    {
      name: 'Node.js',
      category: 'Backend',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      gradient: 'from-green-600 to-green-700',
      glowColor: 'rgba(34, 197, 94, 0.5)',
    },
    {
      name: 'JavaScript',
      category: 'Language',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      gradient: 'from-yellow-400 to-yellow-600',
      glowColor: 'rgba(234, 179, 8, 0.5)',
    },
    {
      name: 'HTML5',
      category: 'Frontend',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      gradient: 'from-orange-500 to-red-600',
      glowColor: 'rgba(249, 115, 22, 0.5)',
    },
    {
      name: 'CSS3',
      category: 'Frontend',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
      gradient: 'from-blue-500 to-blue-700',
      glowColor: 'rgba(59, 130, 246, 0.5)',
    },
    {
      name: 'Tailwind CSS',
      category: 'Framework',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
      gradient: 'from-cyan-400 to-teal-500',
      glowColor: 'rgba(20, 184, 166, 0.5)',
    },
    {
      name: 'GitHub',
      category: 'Version Control',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
      gradient: 'from-purple-500 to-indigo-600',
      glowColor: 'rgba(139, 92, 246, 0.5)',
      dark: true,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, 0.05, 0.01, 0.9]
      }
    }
  };

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="relative min-h-screen bg-black overflow-hidden py-32"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient orbs */}
        <motion.div
          className="absolute top-1/4 -left-1/4 w-[800px] h-[800px] bg-cyan-500/20 rounded-full blur-3xl"
          style={{ y }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-1/4 w-[800px] h-[800px] bg-purple-500/20 rounded-full blur-3xl"
          style={{ y: useTransform(scrollYProgress, [0, 1], [-100, 100]) }}
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black,transparent)]" />
        
        {/* Floating particles */}
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Code symbols floating */}
        {['<', '>', '{', '}', '/', '*'].map((symbol, i) => (
          <motion.div
            key={`symbol-${i}`}
            className="absolute text-cyan-500/10 text-6xl font-mono font-bold"
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + (i % 3) * 30}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.05, 0.15, 0.05],
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {symbol}
          </motion.div>
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
          {/* Decorative line with icons */}
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
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Code className="w-6 h-6 text-cyan-400" />
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
              Tech Stack
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
          >
            <span className="text-cyan-400 font-semibold">Full-Stack Developer</span> proficient in the MERN ecosystem and modern web technologies
          </motion.p>

          {/* Tech badges */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-3 mt-8"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.7 }}
          >
            {[
              { icon: Layers, label: 'Frontend' },
              { icon: Database, label: 'Backend' },
              { icon: Zap, label: 'Full-Stack' },
            ].map((badge, i) => (
              <motion.div
                key={badge.label}
                className="px-4 py-2 rounded-full bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-xl border border-cyan-500/30 flex items-center space-x-2"
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.8 + i * 0.1 }}
                whileHover={{ scale: 1.1, borderColor: 'rgba(6, 182, 212, 0.6)' }}
              >
                <badge.icon className="w-4 h-4 text-cyan-400" strokeWidth={2} />
                <span className="text-sm text-gray-300 font-medium">{badge.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 max-w-7xl mx-auto"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              className="relative group"
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  backgroundColor: skill.glowColor,
                }}
                animate={hoveredSkill === skill.name ? {
                  scale: [1, 1.2, 1],
                } : {}}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />

              {/* Card */}
              <div className="relative bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-gray-900/90 backdrop-blur-xl rounded-2xl border border-gray-700/50 group-hover:border-cyan-500/50 overflow-hidden transition-all duration-500 p-6 h-full flex flex-col items-center justify-center">
                
                {/* Top accent bar */}
                <motion.div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${skill.gradient}`}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ delay: index * 0.05, duration: 0.6 }}
                />

                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100"
                  animate={{
                    x: ['-100%', '200%'],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />

                {/* Logo container */}
                <motion.div
                  className={`relative w-20 h-20 mb-4 rounded-xl flex items-center justify-center ${
                    skill.dark ? 'bg-white p-3' : 'bg-transparent'
                  }`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {/* Rotating ring */}
                  <motion.div
                    className={`absolute inset-0 rounded-xl border-2 border-gradient-to-r ${skill.gradient}`}
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    style={{
                      borderImage: `linear-gradient(to right, ${skill.glowColor}, transparent) 1`,
                    }}
                  />
                  
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="w-full h-full object-contain relative z-10"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </motion.div>

                {/* Skill name */}
                <h3 className="text-white font-bold text-center mb-1 relative z-10">
                  {skill.name}
                </h3>

                {/* Category badge */}
                <motion.span
                  className={`text-xs px-3 py-1 rounded-full bg-gradient-to-r ${skill.gradient} text-white font-medium relative z-10`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 + 0.3 }}
                >
                  {skill.category}
                </motion.span>

                {/* Floating particles on hover */}
                {hoveredSkill === skill.name && (
                  <>
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={`particle-${i}`}
                        className="absolute w-1 h-1 rounded-full"
                        style={{
                          backgroundColor: skill.glowColor,
                        }}
                        initial={{
                          x: 0,
                          y: 0,
                          opacity: 1,
                        }}
                        animate={{
                          x: (Math.random() - 0.5) * 100,
                          y: (Math.random() - 0.5) * 100,
                          opacity: 0,
                        }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          delay: i * 0.1,
                        }}
                      />
                    ))}
                  </>
                )}

                {/* Corner brackets */}
                {[
                  { top: 0, left: 0, rotate: 0 },
                  { top: 0, right: 0, rotate: 90 },
                  { bottom: 0, right: 0, rotate: 180 },
                  { bottom: 0, left: 0, rotate: 270 },
                ].map((pos, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ ...pos, margin: '6px' }}
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
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;