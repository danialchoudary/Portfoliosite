import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Linkedin, Github, Instagram, MessageCircle } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, link: 'https://web.facebook.com/profile.php?id=100087134287105' },
    { icon: Linkedin, link: 'https://linkedin.com/in/danial-choudary-006b922a8' },
    { icon: Github, link: 'https://github.com/danialchoudary' },
    { icon: Instagram, link: 'https://www.instagram.com/choudary_danial/' },
    { icon: MessageCircle, link: 'https://wa.me/923165320767' },
  ];

  return (
    <footer className="bg-white dark:bg-[#1c1c1e] text-gray-800 dark:text-gray-200 py-16 transition-colors duration-300 border-t border-gray-200 dark:border-white/10">
      <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
        <div className="flex flex-col items-center justify-center space-y-8">
          
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold tracking-tight text-center"
          >
            Let's build something amazing.
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center space-x-6"
          >
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 dark:bg-white/5 rounded-full hover:bg-gray-200 dark:hover:bg-white/10 hover:scale-105 transition-all duration-300 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                >
                  <Icon className="w-5 h-5" strokeWidth={2} />
                </a>
              );
            })}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-gray-200 dark:border-white/10 text-sm text-gray-500 dark:text-gray-400"
          >
            <p>© {new Date().getFullYear()} Danial Choudary. All rights reserved.</p>
            <p className="mt-2 sm:mt-0 font-medium">Built with React & Tailwind CSS</p>
          </motion.div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;