import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
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
    { name: 'Home', to: '/' },
    { name: 'About', to: '/about' },
    { name: 'Projects', to: '/projects' },
    { name: 'Skills', to: '/skills' },
    { name: 'Contact', to: '/contact' },
  ];

  return (
    <nav className="bg-gray-900 p-4 fixed w-full z-20 shadow-lg h-16">
      <div className="container mx-auto flex justify-between items-center">
        <motion.div
          className="flex items-center"
          whileHover="hover"
          variants={logoVariants}
        >
          
          {/* Add logo here if needed */}
        </motion.div>
        <div className="hidden md:flex space-x-6">
          {links.map((link) => (
            <motion.div
              whileHover="hover"
              key={link.name}
              variants={linkVariants}
            >
              <Link to={link.to} className="text-white hover:text-gray-400 transition duration-300">
                {link.name}
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="md:hidden">
          <button onClick={handleToggle} className="text-black focus:outline-none">
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
                <Link
                  to={link.to}
                  className="block text-white px-4 py-2 hover:bg-gray-700 transition duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
