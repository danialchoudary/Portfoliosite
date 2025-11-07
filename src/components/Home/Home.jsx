import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { User, Code, Mail, Download, Sparkles, Zap, Award, GraduationCap, Briefcase, ArrowDown } from 'lucide-react';

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const controls = useAnimation();

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, 0.01, 0.9]
      }
    }
  };

  const quickLinks = [
    { name: 'About Me', icon: User, sectionId: 'about' },
    { name: 'Projects', icon: Code, sectionId: 'projects' },
    { name: 'Contact', icon: Mail, sectionId: 'contact' },
  ];

 const expertise = [
  'Full Stack Web Development (MERN Stack)',
  'React.js & Next.js Frontend Engineering',
  'Node.js, Express.js & RESTful API Development',
  'MongoDB & Database Design',
  'Responsive UI/UX with Tailwind CSS & Framer Motion',
  'Authentication, Authorization & JWT Security',
  'Cloud Deployment & Version Control (Git, GitHub, Vercel)',
];


  const experience = [
  '1+ year of experience in Full Stack Development',
  'Developed and deployed multiple full-scale web applications',
  'Integrated APIs, optimized performance, and ensured scalability',
  'Collaborated with cross-functional teams for end-to-end delivery',
  'Passionate about creating seamless and immersive user experiences',
];


 const education = [
  "Bachelor's in Software Engineering",
  'Certified Full Stack (MERN) Developer',
  'Continuous learner exploring AI-powered and modern web technologies',
];


  const statsCards = [
    { title: 'Expertise', icon: Sparkles, items: expertise, gradient: 'from-cyan-500 to-blue-600' },
    { title: 'Experience', icon: Briefcase, items: experience, gradient: 'from-blue-500 to-purple-600' },
    { title: 'Education', icon: GraduationCap, items: education, gradient: 'from-purple-500 to-pink-600' },
  ];

  return (
    <section id="home" className="relative min-h-screen bg-black overflow-hidden pt-24">
      {/* Animated background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -100, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      {/* Main content */}
      <motion.div
        className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Hero Section */}
        <div className="flex flex-col items-center text-center mb-20">
          {/* Profile Image */}
          <motion.div
            variants={itemVariants}
            className="relative mb-8"
            style={{
              x: mousePosition.x * 0.5,
              y: mousePosition.y * 0.5,
            }}
          >
            {/* Rotating rings */}
            <motion.div
              className="absolute inset-0 -m-8"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute inset-0 rounded-full border-2 border-cyan-500/30 border-t-cyan-400 border-r-blue-400" />
            </motion.div>
            <motion.div
              className="absolute inset-0 -m-12"
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute inset-0 rounded-full border border-blue-500/20 border-b-purple-400" />
            </motion.div>

            {/* Glow effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full blur-2xl opacity-30"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* Profile image */}
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden border-4 border-cyan-500/50 shadow-2xl shadow-cyan-500/30">
              <img
                src="https://images.pexels.com/photos/5483064/pexels-photo-5483064.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Profile"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>

            {/* Floating particles */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-cyan-400 rounded-full"
                style={{
                  top: `${20 + i * 30}%`,
                  right: `${-20 - i * 10}px`,
                }}
                animate={{
                  y: [-20, 20, -20],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: "easeInOut"
                }}
              />
            ))}
          </motion.div>

          {/* Name and Title */}
          <motion.div variants={itemVariants} className="space-y-4 mb-8">
            <motion.h1 
              className="text-5xl sm:text-6xl lg:text-7xl font-black bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent"
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
              Hi, I'm Danial Choudary
            </motion.h1>

            {/* Typing effect simulation */}
            <motion.div className="h-12 flex items-center justify-center">
              <motion.p
                className="text-2xl sm:text-3xl font-bold text-cyan-400"
                animate={{
                  opacity: [1, 0.5, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                Full Stack Developer
              </motion.p>
              <motion.span
                className="inline-block w-1 h-8 bg-cyan-400 ml-1"
                animate={{
                  opacity: [1, 0, 1],
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </motion.div>

          {/* Description */}
          <motion.p 
            variants={itemVariants}
            className="text-lg sm:text-xl text-gray-400 max-w-3xl leading-relaxed mb-12"
          >
            Welcome to my digital universe — where design meets logic and imagination turns into reality. I’m a Full Stack Developer who crafts futuristic, responsive, and cinematic web experiences that not only work flawlessly but feel alive.
          </motion.p>

          {/* Quick Links */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {quickLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.button
                  key={link.name}
                  onClick={() => scrollToSection(link.sectionId)}
                  className="relative group px-6 py-3 bg-gradient-to-r from-gray-900/80 to-gray-800/80 rounded-xl border border-cyan-500/30 backdrop-blur-xl overflow-hidden"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Hover glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/20 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative flex items-center space-x-2">
                    <Icon className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" strokeWidth={2} />
                    <span className="text-gray-300 group-hover:text-white font-semibold transition-colors duration-300">
                      {link.name}
                    </span>
                  </div>

                  {/* Bottom accent */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              );
            })}
          </motion.div>

          {/* CV Download Card */}
          <motion.div 
            variants={itemVariants}
            className="relative w-full max-w-2xl mb-16"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-2xl blur-xl" />
            <div className="relative bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-gray-900/90 backdrop-blur-xl rounded-2xl border border-cyan-500/30 p-8 shadow-2xl">
              <div className="flex items-center justify-center mb-4">
                <motion.div
                  className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/50"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <Download className="w-8 h-8 text-white" strokeWidth={2} />
                </motion.div>
              </div>

              <h3 className="text-3xl font-bold mb-3 bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                Download CV
              </h3>
              <p className="text-gray-400 mb-6 text-lg">
                Click the button below to download my CV and learn more about my skills and experience.
              </p>
              
              <motion.a 
                href='/Danial_Choudary_CV.pdf' 
                download 
                className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-bold text-white shadow-lg shadow-cyan-500/30 relative overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                <Download className="w-5 h-5 relative z-10" strokeWidth={2.5} />
                <span className="relative z-10">Download CV</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Stats Cards */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl"
          >
            {statsCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  className="relative group"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.2, duration: 0.8 }}
                  whileHover={{ y: -8 }}
                >
                  {/* Glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${card.gradient} opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-opacity duration-500`} />
                  
                  {/* Card */}
                  <div className="relative bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-gray-900/90 backdrop-blur-xl rounded-2xl border border-gray-700/50 group-hover:border-cyan-500/50 p-6 transition-all duration-500 h-full">
                    {/* Header */}
                    <div className="flex items-center space-x-3 mb-6">
                      <motion.div
                        className={`w-12 h-12 bg-gradient-to-br ${card.gradient} rounded-xl flex items-center justify-center shadow-lg`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Icon className="w-6 h-6 text-white" strokeWidth={2.5} />
                      </motion.div>
                      <h3 className="text-2xl font-bold text-white">
                        {card.title}
                      </h3>
                    </div>

                    {/* Items */}
                    <ul className="space-y-3">
                      {card.items.map((item, i) => (
                        <motion.li
                          key={i}
                          className="flex items-start space-x-2 text-gray-400 group-hover:text-gray-300 transition-colors duration-300"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 1.2 + index * 0.2 + i * 0.1 }}
                        >
                          <Zap className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-1" strokeWidth={2} />
                          <span className="text-sm leading-relaxed">{item}</span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* Bottom accent */}
                    <motion.div
                      className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${card.gradient} rounded-b-2xl`}
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ delay: 1.5 + index * 0.2, duration: 0.8 }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="flex justify-center mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <motion.div
            className="flex flex-col items-center space-y-2 cursor-pointer group"
            onClick={() => scrollToSection('about')}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-gray-500 group-hover:text-cyan-400 text-sm font-semibold transition-colors duration-300">
              Scroll to explore
            </span>
            <ArrowDown className="w-6 h-6 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" strokeWidth={2} />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;