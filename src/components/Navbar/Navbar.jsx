import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredPath, setHoveredPath] = useState(null);
  const location = useLocation();
  const { isDarkMode, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Closes mobile menu on location change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname, location.hash]);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Skills', path: '/#skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Gallery', path: '/#gallery' },
    { name: 'Contact', path: '/#contact' },
  ];

  return (
    <>
      {/* Mobile Menu Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} // Apple-like spring easing
        className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4 flex justify-center pointer-events-none"
      >
        <div 
          className={`pointer-events-auto flex items-center justify-between px-6 py-2.5 w-full max-w-5xl transition-all duration-500 rounded-full ${
            scrolled
              ? 'glass shadow-[0_8px_32px_0_rgba(0,0,0,0.08)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]'
              : 'bg-transparent border-transparent'
          }`}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group relative z-10">
            <span className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white transition-colors duration-300">
              Danial Choudary
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center relative z-10">
            <div className="flex items-center space-x-1" onMouseLeave={() => setHoveredPath(null)}>
              {links.map((link) => {
                const isActive = location.pathname === link.path || (location.pathname === '/' && location.hash === link.path.replace('/', ''));
                
                return (
                  <a
                    key={link.name}
                    href={link.path}
                    onMouseEnter={() => setHoveredPath(link.path)}
                    className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-full z-20 ${
                      isActive 
                        ? 'text-gray-900 dark:text-white' 
                        : 'text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
                    }`}
                  >
                    {link.name}
                    {hoveredPath === link.path && (
                      <motion.div
                        layoutId="nav-pill"
                        className="absolute inset-0 bg-gray-100 dark:bg-white/10 rounded-full -z-10"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                  </a>
                );
              })}
            </div>
            
            <div className="w-px h-6 bg-gray-200 dark:bg-white/10 mx-4" /> {/* Divider */}

            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors text-gray-600 dark:text-gray-400 dark:hover:text-white group relative overflow-hidden"
              aria-label="Toggle Theme"
            >
              <AnimatePresence mode="wait">
                {isDarkMode ? (
                  <motion.div
                    key="sun"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Sun className="w-4 h-4" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Moon className="w-4 h-4" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </nav>

          {/* Mobile Toggle */}
          <div className="flex md:hidden items-center space-x-3 z-10">
             <button
                onClick={toggleTheme}
                className="p-2 text-gray-600 dark:text-gray-400 rounded-full bg-gray-100/50 dark:bg-white/5"
              >
                 {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
             </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-600 dark:text-gray-400 rounded-full bg-gray-100/50 dark:bg-white/5 focus:outline-none"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-24 left-4 right-4 z-50 md:hidden glass rounded-3xl p-6 overflow-hidden"
          >
            <div className="flex flex-col space-y-1">
              {links.map((link, index) => {
                const isActive = location.pathname === link.path || (location.pathname === '/' && location.hash === link.path.replace('/', ''));
                
                return (
                  <motion.a
                    key={link.name}
                    href={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 + 0.1 }}
                    className={`px-4 py-4 text-lg font-medium rounded-2xl transition-all duration-300 ${
                      isActive 
                        ? 'bg-gray-100 text-gray-900 dark:bg-white/10 dark:text-white' 
                        : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/5'
                    }`}
                  >
                    {link.name}
                  </motion.a>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;