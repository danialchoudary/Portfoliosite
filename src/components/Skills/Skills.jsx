import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJsSquare, faReact, faGithub } from '@fortawesome/free-brands-svg-icons';

const skills = [
  { name: 'HTML', icon: faHtml5, percentage: 90 },
  { name: 'CSS', icon: faCss3Alt, percentage: 85 },
  { name: 'JavaScript', icon: faJsSquare, percentage: 80 },
  { name: 'React', icon: faReact, percentage: 75 },
  { name: 'GitHub', icon: faGithub, percentage: 65 },
  // Placeholder or alternative for Tailwind CSS
  { name: 'Tailwind CSS', icon: faCss3Alt, percentage: 80 }, // Using CSS icon as placeholder
];

const Skill = ({ name, icon, percentage }) => (
  <motion.div
    className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  >
    <div className="flex items-center mb-4">
      <FontAwesomeIcon icon={icon} className="text-blue-500 text-4xl mr-4" />
      <h3 className="text-xl font-semibold text-blue-400">{name}</h3>
    </div>
    <div className="relative">
      <div className="flex items-center mb-2">
        <span className="text-gray-300 text-sm">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-3">
        <motion.div
          className="bg-blue-500 h-full rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1 }}
        />
      </div>
    </div>
  </motion.div>
);

const Skills = () => {
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
          My Skills
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <Skill
              key={index}
              name={skill.name}
              icon={skill.icon}
              percentage={skill.percentage}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;

