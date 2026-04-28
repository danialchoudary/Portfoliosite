import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const categories = [
    {
      title: "Frontend Development",
      description: "Building responsive, highly interactive interfaces.",
      skills: [
        { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', invertDark: true },
        { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'Tailwind CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
      ]
    },
    {
      title: "Backend & Systems",
      description: "Architecting scalable APIs and databases.",
      skills: [
        { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
        { name: 'Express', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', invertDark: true },
        { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
        { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
      ]
    }
  ];

  return (
    <section className="py-32 bg-gray-50 dark:bg-[#0a0a0a] transition-colors duration-300 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-6"
          >
            Technical Arsenal.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-500 dark:text-gray-400"
          >
            I leverage modern tools to craft high-performance web applications that scale.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {categories.map((cat, catIdx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIdx * 0.2 }}
              className="bg-white dark:bg-[#151515] rounded-[2rem] p-10 sm:p-12 border border-gray-100 dark:border-white/5 shadow-xl shadow-gray-200/20 dark:shadow-none relative overflow-hidden"
            >
              {/* Subtle mesh background inside card */}
              <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-gradient-to-br from-gray-100 to-transparent dark:from-white/5 blur-3xl rounded-full" />

              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{cat.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-10 text-lg">{cat.description}</p>
                
                <div className="grid grid-cols-2 gap-4 sm:gap-6">
                  {cat.skills.map((skill, idx) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 dark:bg-black/50 border border-gray-100 dark:border-white/5"
                    >
                      <div className="w-12 h-12 bg-white dark:bg-white/10 rounded-xl flex items-center justify-center p-2.5 flex-shrink-0 shadow-sm">
                        <img 
                          src={skill.logo} 
                          alt={skill.name} 
                          className={`w-full h-full object-contain ${skill.invertDark ? 'dark:invert dark:opacity-90' : ''}`}
                        />
                      </div>
                      <span className="font-semibold text-gray-800 dark:text-gray-200">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;