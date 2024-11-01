import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import Contact from '../Contact/Contact';

const About = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-center py-16 px-4">
      <motion.div 
        className="container mx-auto max-w-6xl space-y-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div 
          className="flex flex-col items-center space-y-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.img
            src="https://images.pexels.com/photos/4666752/pexels-photo-4666752.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Profile"
            className="w-40 h-40 rounded-full border-4 border-blue-500"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1 }}
          />
          <motion.h1 
            className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            About Me
          </motion.h1>
          <motion.p 
            className="text-lg text-gray-300 max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Hello! I’m Danial Choudary, a dedicated frontend developer with a passion for building intuitive and dynamic web applications. My journey began with a fascination for technology and a desire to create impactful digital experiences. Over the years, I have honed my skills in React.js, Tailwind CSS, and modern web development practices. I enjoy solving complex problems and bringing ideas to life through code.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <motion.div 
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-xl font-semibold text-blue-400 mb-4">Experience</h3>
            <ul className="text-gray-300 list-disc list-inside space-y-2">
              
              <li>Built and optimized responsive web applications</li>
              <li>Collaborated with design and development teams</li>
            </ul>
          </motion.div>
          <motion.div 
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-xl font-semibold text-blue-400 mb-4">Skills</h3>
            <ul className="text-gray-300 list-disc list-inside space-y-2">
              <li>React.js & Redux</li>
              <li>Tailwind CSS & Responsive Design</li>
              <li>JavaScript ES6+</li>
              <li>RESTful APIs </li>
            </ul>
          </motion.div>
          <motion.div 
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-xl font-semibold text-blue-400 mb-4">Education</h3>
            <ul className="text-gray-300 list-disc list-inside space-y-2">
              <li>Bachelor’s Degree in Software Engineering</li>
              <li>Certificate in Front End Development</li>
              <li>Ongoing workshops and courses in frontend technologies</li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div 
          className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-md mx-auto mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <h3 className="text-xl font-semibold mb-4 text-blue-400">Get in Touch</h3>
          <p className="text-gray-300 mb-4">
            I’m always open to discussing new opportunities or collaborating on exciting projects. Feel free to reach out to me.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5 mr-2" />
            <span>Contact Me</span>
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;



