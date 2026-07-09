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
    <footer className="bg-[#F9FAFB] dark:bg-[#020202] text-gray-800 dark:text-gray-300 py-20 transition-colors duration-300 border-t border-gray-200 dark:border-white/[0.05]">
      <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
        <div className="flex flex-col items-center justify-center space-y-12">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center space-y-4"
          >
             <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                Let's build something amazing.
             </h2>
             <p className="text-gray-500 dark:text-gray-400 font-light">
                Reach out and let's create a digital experience that stands out.
             </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
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
                  className="p-3.5 bg-white dark:bg-white/[0.03] border border-gray-100 dark:border-white/[0.05] rounded-full hover:bg-gray-50 dark:hover:bg-white/[0.08] hover:scale-110 active:scale-95 transition-all duration-300 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white shadow-sm"
                >
                  <Icon className="w-5 h-5" strokeWidth={1.5} />
                </a>
              );
            })}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-gray-200 dark:border-white/[0.05] text-sm text-gray-400 dark:text-gray-500 font-medium tracking-wide"
          >
            <p>© {new Date().getFullYear()} Danial Choudary. All rights reserved.</p>
            <p className="mt-4 sm:mt-0 flex items-center gap-1">
              Engineered with 
              <span className="text-gray-900 dark:text-white px-1">React</span> 
              & 
              <span className="text-gray-900 dark:text-white px-1">Tailwind CSS</span>
            </p>
          </motion.div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;