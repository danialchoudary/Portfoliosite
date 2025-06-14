import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  // Function to handle smooth scrolling to sections
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsOpen(false); // Close mobile menu after clicking
  };

  const menuVariants = {
    open: { opacity: 1, y: 0, transition: { staggerChildren: 0.1, duration: 0.5 } },
    closed: { opacity: 0, y: '-100%' }
  };

  const linkVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: -20 },
    hover: { scale: 1.1, color: '#63b3ed', transition: { duration: 0.3 } }
  };

  const logoVariants = {
    hover: { scale: 1.1, rotate: 10, transition: { duration: 0.3 } }
  };

  const links = [
    { name: 'Home', sectionId: 'home' },
    { name: 'About', sectionId: 'about' },
    { name: 'Skills', sectionId: 'skills' },
    { name: 'Projects', sectionId: 'projects' },
    { name: 'Contact', sectionId: 'contact' },
  ];

  return (
    <nav className="bg-gray-900 p-4 fixed w-full z-20 shadow-lg h-16">
      <div className="container mx-auto flex justify-between items-center">
        <motion.div
          className="flex items-center cursor-pointer"
          whileHover="hover"
          variants={logoVariants}
          onClick={() => scrollToSection('home')}
        >
          <span className="text-white text-xl font-bold">Portfolio</span>
          {/* Add logo here if needed */}
        </motion.div>
        <div className="hidden md:flex space-x-6">
          {links.map((link) => (
            <motion.div
              whileHover="hover"
              key={link.name}
              variants={linkVariants}
            >
              <button 
                onClick={() => scrollToSection(link.sectionId)}
                className="text-white hover:text-gray-400 transition duration-300 bg-transparent border-none cursor-pointer"
              >
                {link.name}
              </button>
            </motion.div>
          ))}
        </div>
        <div className="md:hidden">
          <button onClick={handleToggle} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            transition={{ duration: 0.5 }}
            className="md:hidden bg-gray-900"
          >
            {links.map((link) => (
              <motion.div
                key={link.name}
                variants={linkVariants}
                whileHover="hover"
              >
                <button
                  onClick={() => scrollToSection(link.sectionId)}
                  className="block text-white px-4 py-2 hover:bg-gray-700 transition duration-300 w-full text-left bg-transparent border-none cursor-pointer"
                >
                  {link.name}
                </button>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
