import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faGithub,faInstagram,faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';

const Footer = () => {
  const iconVariants = {
    hover: { scale: 1.2, rotate: 15, transition: { type: 'spring', stiffness: 300 } }
  };

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <motion.div
          className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Let's Connect
        </motion.div>
        <motion.div
          className="flex space-x-6 mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {[
            { icon: faFacebook, link: 'https://web.facebook.com/profile.php?id=100087134287105' },
           
            { icon: faLinkedin, link: 'https://linkedin.com/in/danial-choudary-006b922a8' },
            { icon: faGithub, link: 'https://github.com/danialchoudary' },
            { icon: faInstagram, link: 'https://www.instagram.com/choudary_danial/' },
            { icon: faWhatsapp, link: 'https://wa.me/923165320767' } 
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover="hover"
              variants={iconVariants}
              className="text-white hover:text-blue-500 transition duration-300"
            >
              <FontAwesomeIcon icon={social.icon} size="2x" />
            </motion.a>
          ))}
        </motion.div>
        <motion.p
          className="text-gray-400 mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          © 2024 Danial Choudary. All rights reserved.
        </motion.p>
        <motion.div
          className="flex space-x-6 text-gray-400"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          {/* <a href="/privacy-policy" className="hover:text-blue-500 transition duration-300">Privacy Policy</a>
          <a href="/terms-of-service" className="hover:text-blue-500 transition duration-300">Terms of Service</a>
          <a href="/contact" className="hover:text-blue-500 transition duration-300">Contact</a> */}
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
