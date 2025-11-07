import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, User, Code, Briefcase, Mail, Menu, X, Zap } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setActiveSection(sectionId);
    setIsOpen(false);
  };

  const links = [
    { name: 'Home', sectionId: 'home', icon: Home },
    { name: 'About', sectionId: 'about', icon: User },
    { name: 'Skills', sectionId: 'skills', icon: Code },
    { name: 'Projects', sectionId: 'projects', icon: Briefcase },
    { name: 'Contact', sectionId: 'contact', icon: Mail },
  ];

  return (
    <>
      {/* Backdrop blur overlay for mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-md z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Main Navbar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
        className="fixed w-full z-50"
      >
        {/* Ambient glow effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
            animate={{
              x: [0, 100, 0],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
            animate={{
              x: [0, -100, 0],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </div>

        {/* Navbar container */}
        <div className={`relative transition-all duration-700 ${
          scrolled 
            ? 'bg-black/30 backdrop-blur-2xl border-b border-cyan-500/20 shadow-2xl shadow-cyan-500/10' 
            : 'bg-gradient-to-b from-black/50 to-transparent backdrop-blur-sm'
        }`}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-24">
              {/* Logo Section */}
              <motion.div
                className="relative cursor-pointer group z-10"
                onClick={() => scrollToSection('home')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Glow effect behind logo */}
                <motion.div
                  className="absolute -inset-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-all duration-700"
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                
                <div className="relative flex items-center space-x-3">
                  {/* Logo icon */}
                  <motion.div
                    className="relative w-12 h-12 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-2xl shadow-cyan-500/50 overflow-hidden"
                    whileHover={{ rotate: 180 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent"
                      animate={{
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    <Zap className="w-6 h-6 text-white relative z-10" strokeWidth={2.5} />
                  </motion.div>
                  
                  {/* Logo text */}
                  <div className="flex flex-col">
                    <motion.span 
                      className="text-3xl font-black bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent tracking-tight"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3, duration: 0.6 }}
                    >
                      Portfolio
                    </motion.span>
                    <motion.div
                      className="h-0.5 bg-gradient-to-r from-cyan-400 to-transparent rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ delay: 0.5, duration: 0.8 }}
                    />
                  </div>
                </div>
              </motion.div>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center space-x-2 relative">
                {/* Menu background with border */}
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900/50 via-gray-800/50 to-gray-900/50 rounded-2xl border border-cyan-500/20 backdrop-blur-xl" />
                
                {links.map((link, index) => {
                  const Icon = link.icon;
                  const isActive = activeSection === link.sectionId;
                  
                  return (
                    <motion.button
                      key={link.name}
                      onClick={() => scrollToSection(link.sectionId)}
                      className="relative px-6 py-3 text-gray-300 transition-colors duration-300 group"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + index * 0.1, duration: 0.6 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {/* Hover glow effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/20 to-blue-500/0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      />
                      
                      {/* Active state background */}
                      {isActive && (
                        <motion.div
                          layoutId="desktopActiveTab"
                          className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 via-blue-500/30 to-purple-500/30 rounded-xl border border-cyan-400/50 shadow-lg shadow-cyan-500/30"
                          transition={{ type: "spring", bounce: 0.25, duration: 0.8 }}
                        />
                      )}
                      
                      {/* Icon and text */}
                      <span className="relative flex items-center space-x-2.5 font-semibold tracking-wide">
                        <motion.div
                          animate={isActive ? {
                            rotate: [0, 10, -10, 0],
                          } : {}}
                          transition={{
                            duration: 0.5,
                            ease: "easeInOut"
                          }}
                        >
                          <Icon className={`w-4 h-4 transition-all duration-300 ${
                            isActive ? 'text-cyan-300' : 'text-gray-500 group-hover:text-cyan-400'
                          }`} strokeWidth={2.5} />
                        </motion.div>
                        <span className={`transition-all duration-300 ${
                          isActive ? 'text-cyan-300' : 'group-hover:text-white'
                        }`}>
                          {link.name}
                        </span>
                      </span>

                      {/* Bottom accent line */}
                      <motion.div
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"
                        initial={{ width: 0 }}
                        whileHover={{ width: '80%' }}
                      />

                      {/* Particle effect on active */}
                      {isActive && (
                        <motion.div
                          className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-cyan-400 rounded-full"
                          animate={{
                            y: [0, -20],
                            opacity: [1, 0],
                            scale: [1, 0.5],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeOut"
                          }}
                        />
                      )}
                    </motion.button>
                  );
                })}
              </div>

              {/* Mobile Menu Button */}
              <motion.button
                onClick={handleToggle}
                className="md:hidden relative w-12 h-12 flex items-center justify-center text-gray-300 focus:outline-none group z-10"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, rotate: -180 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                {/* Button background */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-xl border border-cyan-500/30 backdrop-blur-xl" />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/20 to-blue-500/0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -180, scale: 0 }}
                      animate={{ rotate: 0, scale: 1 }}
                      exit={{ rotate: 180, scale: 0 }}
                      transition={{ duration: 0.3 }}
                      className="relative z-10"
                    >
                      <X className="w-6 h-6 text-cyan-300" strokeWidth={2.5} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 180, scale: 0 }}
                      animate={{ rotate: 0, scale: 1 }}
                      exit={{ rotate: -180, scale: 0 }}
                      transition={{ duration: 0.3 }}
                      className="relative z-10"
                    >
                      <Menu className="w-6 h-6 group-hover:text-cyan-300 transition-colors duration-300" strokeWidth={2.5} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>

          {/* Bottom gradient line */}
          <motion.div
            className="h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: scrolled ? 1 : 0 }}
            transition={{ duration: 0.8 }}
          />
        </div>
      </motion.nav>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 bottom-0 w-80 z-50 md:hidden"
          >
            {/* Background with effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-black border-l border-cyan-500/30 shadow-2xl" />
            
            {/* Animated gradient orbs */}
            <motion.div
              className="absolute top-20 left-10 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
            />

            {/* Close button */}
            <div className="relative flex justify-end p-6">
              <motion.button
                onClick={handleToggle}
                className="relative w-12 h-12 flex items-center justify-center text-gray-400 hover:text-white focus:outline-none group"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800/50 to-gray-700/50 rounded-xl border border-cyan-500/30" />
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/20 to-blue-500/0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <X className="w-6 h-6 relative z-10" strokeWidth={2.5} />
              </motion.button>
            </div>

            {/* Menu Items */}
            <div className="relative flex flex-col space-y-3 px-6 pt-12">
              {links.map((link, index) => {
                const Icon = link.icon;
                const isActive = activeSection === link.sectionId;
                
                return (
                  <motion.button
                    key={link.name}
                    onClick={() => scrollToSection(link.sectionId)}
                    className="relative group"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5, type: "spring" }}
                    whileHover={{ x: 8, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Button background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-800/30 to-gray-800/10 rounded-2xl border border-gray-700/30 backdrop-blur-xl" />
                    
                    {/* Hover glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-blue-500/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Active state */}
                    {isActive && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 via-blue-500/20 to-purple-500/30 rounded-2xl border border-cyan-400/50 shadow-xl shadow-cyan-500/20"
                        layoutId="activeMobileTab"
                        transition={{ type: "spring", bounce: 0.3, duration: 0.8 }}
                      />
                    )}

                    <div className="relative flex items-center space-x-4 px-5 py-4">
                      {/* Icon container */}
                      <motion.div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 ${
                          isActive 
                            ? 'bg-gradient-to-br from-cyan-500 to-blue-600 shadow-xl shadow-cyan-500/50' 
                            : 'bg-gradient-to-br from-gray-700/50 to-gray-600/50 group-hover:from-gray-700 group-hover:to-gray-600'
                        }`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Icon className={`w-5 h-5 transition-colors duration-300 ${
                          isActive ? 'text-white' : 'text-gray-400 group-hover:text-cyan-300'
                        }`} strokeWidth={2.5} />
                      </motion.div>
                      
                      {/* Text */}
                      <span className={`text-lg font-bold tracking-wide transition-colors duration-300 ${
                        isActive ? 'text-cyan-300' : 'text-gray-300 group-hover:text-white'
                      }`}>
                        {link.name}
                      </span>
                    </div>

                    {/* Left accent line */}
                    <motion.div
                      className={`absolute left-0 top-1/2 -translate-y-1/2 w-1 rounded-r transition-all duration-500 ${
                        isActive 
                          ? 'h-full bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-600' 
                          : 'h-0 bg-gradient-to-b from-cyan-400 to-blue-600 group-hover:h-3/4'
                      }`}
                    />

                    {/* Shine effect on active */}
                    {isActive && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-2xl"
                        animate={{
                          x: ['-100%', '100%'],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    )}
                  </motion.button>
                );
              })}
            </div>

            {/* Bottom decorative gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cyan-500/10 via-blue-500/5 to-transparent pointer-events-none" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;