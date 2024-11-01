import React from 'react';
import Typing from 'react-typing-effect';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faCode, faEnvelope, faDownload } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import './glow.css';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-center p-4 relative top-16">
      <motion.img
        src="https://images.pexels.com/photos/5483064/pexels-photo-5483064.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="Profile"
        className="rounded-full shadow-lg mb-4 glowing-border"
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
      />
      <motion.h1 
        className="text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 animate-pulse"
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I'm Danial Choudary
      </motion.h1>
      <Typing 
        text={["Frontend Developer", "React.js Enthusiast", "Responsive Designs"]} 
        className="text-2xl font-semibold text-blue-400 mb-8"
        speed={100}
        eraseDelay={1000}
      />
      <motion.p 
        className="text-lg text-gray-300 max-w-2xl mb-8"
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Welcome to my portfolio website! I specialize in creating interactive, responsive, and visually appealing web applications using React.js. I have a passion for crafting clean, efficient code and delivering exceptional user experiences. Explore my projects and skills to learn more about my work.
      </motion.p>
      <motion.div 
        className="flex space-x-6 mb-8"
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <Link to="/about" className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition duration-300 hover:scale-105 transform">
          <FontAwesomeIcon icon={faUserCircle} className="w-6 h-6" />
          <span>About Me</span>
        </Link>
        <Link to="/projects" className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition duration-300 hover:scale-105 transform">
          <FontAwesomeIcon icon={faCode} className="w-6 h-6" />
          <span>Projects</span>
        </Link>
        <Link to="/contact" className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition duration-300 hover:scale-105 transform">
          <FontAwesomeIcon icon={faEnvelope} className="w-6 h-6" />
          <span>Contact</span>
        </Link>
      </motion.div>
      <motion.div 
        className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 mb-8 glowing-border"
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <h3 className="text-2xl font-bold mb-4 text-blue-400">Download CV</h3>
        <p className="text-gray-300 mb-4">
          Click the button below to download my CV and learn more about my skills and experience.
        </p>
        <a 
          href='/CV.pdf' 
          download 
          className="inline-flex items-center bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300 transform hover:scale-105"
        >
          <FontAwesomeIcon icon={faDownload} className="w-5 h-5 mr-2" />
          <span>Download CV</span>
        </a>
      </motion.div>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 max-w-4xl"
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        {['Expertise', 'Experience', 'Education'].map((section, index) => (
          <div 
            key={index} 
            className="p-4 bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 glowing-border"
          >
            <h3 className="text-xl font-bold text-blue-400 mb-2 animate-bounce">{section}</h3>
            <ul className="text-gray-300">
              {section === 'Expertise' && (
                <>
                  <li>- React.js Development</li>
                  <li>- Responsive Web Design</li>
                  <li>- JavaScript & ES6+</li>
                  <li>- Tailwind CSS</li>
                  <li>- API Integration</li>
                </>
              )}
              {section === 'Experience' && (
                <>
                  <li>- 1+ year in Frontend Development</li>
                  <li>- Built and maintained multiple web applications</li>
                  <li>- Collaborated with cross-functional teams</li>
                </>
              )}
              {section === 'Education' && (
                <>
                  <li>- Bachelor's in Software Engineering</li>
                  <li>- Certified React Developer</li>
                  <li>- Continuous learning and upskilling</li>
                </>
              )}
            </ul>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Home;



