import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
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
            className="fixed inset-0 bg-black/40 dark:bg-black/80 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4 flex justify-center pointer-events-none"
      >
        <div className={`pointer-events-auto flex items-center justify-between px-6 py-3 w-full max-w-5xl transition-all duration-300 rounded-full border ${
          scrolled
            ? 'bg-white/70 dark:bg-[#1c1c1e]/70 backdrop-blur-xl border-gray-200/50 dark:border-white/10 shadow-lg'
            : 'bg-transparent border-transparent'
        }`}>
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <span className="text-xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 group-hover:opacity-70 transition-opacity">
              Danial Choudary
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.path}
                className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors"
              >
                {link.name}
              </a>
            ))}
            
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors text-gray-600 dark:text-gray-400 dark:hover:text-gray-100"
              aria-label="Toggle Theme"
            >
              <AnimatePresence mode="wait">
                {isDarkMode ? (
                  <motion.div
                    key="sun"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Sun className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Moon className="w-5 h-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </nav>

          {/* Mobile Toggle */}
          <div className="flex md:hidden items-center space-x-4">
             <button
                onClick={toggleTheme}
                className="p-2 text-gray-600 dark:text-gray-400"
              >
                 {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
             </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 dark:text-gray-400 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-20 left-4 right-4 z-50 md:hidden bg-white/90 dark:bg-[#1c1c1e]/90 backdrop-blur-xl rounded-2xl border border-gray-200/50 dark:border-white/10 shadow-2xl p-4 overflow-hidden"
          >
            <div className="flex flex-col space-y-2">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.path}
                  className="px-4 py-3 text-base font-medium text-gray-800 dark:text-gray-200 rounded-xl hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;