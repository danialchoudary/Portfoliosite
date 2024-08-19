import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faGamepad, faShoppingCart, faList } from '@fortawesome/free-solid-svg-icons';

const Projects = () => {
  const projects = [
    {
      title: "Quiz App",
      description: "A dynamic quiz application with multiple-choice questions and real-time scoring.",
      icon: faLaptopCode,
      link: "https://danialchoudary.github.io/QuizApp/"
    },
    {
      title: "Tic Tac Toe Game",
      description: "A classic Tic Tac Toe game with an interactive UI and simple game logic.",
      icon: faGamepad,
      link: "https://danialchoudary.github.io/Tic-Tac-game/"
    },
    {
      title: "E-Commerce Website",
      description: "A fully functional e-commerce site with product listings, shopping cart, and checkout features.",
      icon: faShoppingCart,
      link: "https://ecommerce-project-self.vercel.app/"
    },
    {
      title: "To-Do App",
      description: "A to-do list application that allows users to manage tasks with a clean and intuitive interface.",
      icon: faList,
      link: "https://example.com/todo-app"
    }
  ];

  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-center py-16 px-4">
      <motion.div 
        className="container mx-auto max-w-6xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1 
          className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          My Projects
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.2 }}
            >
              <div className="flex items-center justify-center mb-4">
                <FontAwesomeIcon icon={project.icon} className="text-blue-500 text-4xl" />
              </div>
              <h3 className="text-xl font-semibold text-blue-400 mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
              >
                View Project
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
