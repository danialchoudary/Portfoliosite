import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Skills = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);

  const categories = [
    {
      title: "Frontend Development",
      description: "Building responsive, highly interactive interfaces with pixel-perfect precision.",
      skills: [
        { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', invertDark: true },
        { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'Tailwind CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
      ]
    },
    {
      title: "Backend & Systems",
      description: "Architecting scalable APIs, databases, and secure server-side logic.",
      skills: [
        { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
        { name: 'Express', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', invertDark: true },
        { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
        { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
  };

  return (
    <section ref={ref} className="py-32 bg-[#F9FAFB] dark:bg-[#050505] transition-colors duration-300 relative overflow-hidden">
      
      {/* Subtle background glow */}
      <motion.div style={{ y: yBg }} className="absolute -left-32 top-32 w-96 h-96 bg-gray-200/50 dark:bg-white/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        <div className="mb-24 text-center max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-6"
          >
            Technical Arsenal.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl text-gray-500 dark:text-gray-400 font-light"
          >
            I leverage modern tools to craft high-performance web applications that scale effortlessly.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {categories.map((cat, catIdx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: catIdx * 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white dark:bg-[#111111] rounded-[2.5rem] p-10 sm:p-12 border border-gray-100 dark:border-white/[0.05] shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.1)] relative overflow-hidden group hover:border-gray-200 dark:hover:border-white/[0.1] transition-all duration-500"
            >
              {/* Refined mesh background inside card */}
              <div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 bg-gradient-to-br from-gray-50 to-transparent dark:from-white/[0.03] blur-3xl rounded-full pointer-events-none transition-opacity duration-500 opacity-50 group-hover:opacity-100" />

              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">{cat.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-10 text-lg font-light leading-relaxed">{cat.description}</p>
                
                <motion.div 
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 gap-4"
                >
                  {cat.skills.map((skill) => (
                    <motion.div
                      variants={itemVariants}
                      key={skill.name}
                      whileHover={{ scale: 1.02, y: -2 }}
                      className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 dark:bg-white/[0.02] border border-gray-100 dark:border-white/[0.05] hover:bg-white dark:hover:bg-white/[0.04] hover:shadow-md transition-all duration-300"
                    >
                      <div className="w-12 h-12 bg-white dark:bg-black/50 rounded-xl flex items-center justify-center p-2.5 flex-shrink-0 shadow-sm border border-gray-100 dark:border-white/[0.05]">
                        <img 
                          src={skill.logo} 
                          alt={skill.name} 
                          className={`w-full h-full object-contain ${skill.invertDark ? 'dark:invert dark:opacity-90' : ''}`}
                        />
                      </div>
                      <span className="font-semibold text-[15px] text-gray-800 dark:text-gray-200 truncate">{skill.name}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;