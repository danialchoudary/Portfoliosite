import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Projects = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const yOrb = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const projects = [
    {
      title: "SkillSync",
      description: "Advanced MERN recruitment platform featuring AI-driven CV matching, RAG systems for applicant analysis, and real-time Kanban tracking.",
      link: "https://skill-sync-six-hazel.vercel.app/",
      tech: ["MERN", "AI/RAG", "Socket.io"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=800&auto=format&fit=crop",
      span: "md:col-span-3 lg:col-span-3",
    },
    {
      title: "Neuroticure",
      description: "A comprehensive mental health and wellness platform designed for therapy management, mood tracking, and patient support.",
      link: "https://neuroticure.vercel.app/",
      tech: ["React", "Firebase", "Tailwind"],
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop",
      span: "md:col-span-3 lg:col-span-3",
    },
    {
      title: "Hospital Management",
      description: "A comprehensive system for managing patients, staff, and appointments efficiently.",
      link: "https://hospital-management-system-seven-tawny.vercel.app/",
      tech: ["React", "Node.js", "MongoDB"],
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=800&auto=format&fit=crop", 
      span: "md:col-span-1 lg:col-span-1",
    },
    {
      title: "E-Commerce Experience",
      description: "A fully functional e-commerce site with product listings and checkout features.",
      link: "https://ecommerce-project-self.vercel.app/",
      tech: ["React", "Tailwind"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop",
      span: "col-span-1 md:col-span-1 lg:col-span-1",
    },
    {
      title: "Sarix Sports",
      description: "Modern sports management portal focusing on athletic performance and equipment streamlining.",
      link: "https://sarixsports.com/",
      tech: ["Next.js", "Shopify", "Tailwind"],
      image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=800&auto=format&fit=crop",
      span: "col-span-1 md:col-span-1 lg:col-span-1",
    },
    {
      title: "Quiz App",
      description: "A dynamic quiz application with multiple-choice questions, interactive UI, and real-time scoring.",
      link: "https://danialchoudary.github.io/QuizApp/",
      tech: ["React", "CSS"],
      image: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?q=80&w=800&auto=format&fit=crop",
      span: "md:col-span-3 lg:col-span-3",
    }
  ];

  return (
    <section ref={ref} className="py-32 bg-white dark:bg-black transition-colors duration-300 relative overflow-hidden">
      
      {/* Premium Background Accent */}
      <motion.div style={{ y: yOrb }} className="absolute top-0 right-0 -mt-32 -mr-32 w-[600px] h-[600px] bg-gray-100 dark:bg-white/[0.02] rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* Header */}
        <div className="mb-24 max-w-3xl">
          <motion.h2 
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-6"
          >
            Featured Work.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl text-gray-500 dark:text-gray-400 font-light"
          >
            A curated selection of projects demonstrating clean code and intuitive product design.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 auto-rows-[420px]">
          {projects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative overflow-hidden rounded-[2.5rem] bg-gray-100 dark:bg-[#111] border border-gray-200/50 dark:border-white/[0.05] hover:border-gray-300 dark:hover:border-white/[0.1] transition-all duration-500 shadow-sm hover:shadow-2xl dark:shadow-none ${project.span}`}
            >
              {/* Background Image with refined cinematic scaling */}
              <div className="absolute inset-0 z-0 bg-black">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-[1.05] transition-transform duration-1000 ease-[0.16,1,0.3,1] opacity-70 group-hover:opacity-60 dark:opacity-50 dark:group-hover:opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent dark:from-black dark:via-black/50 transition-opacity duration-700 opacity-90 group-hover:opacity-100" />
              </div>

              {/* Content */}
              <div className="relative z-10 flex flex-col justify-end h-full p-8 sm:p-10">
                <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-700 ease-[0.16,1,0.3,1]">
                  <h3 className="text-3xl font-bold text-white mb-4 flex items-center gap-3 tracking-tight">
                    {project.title}
                    <ArrowRight className="w-6 h-6 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-700 ease-[0.16,1,0.3,1]" />
                  </h3>
                  
                  <p className="text-gray-200 dark:text-gray-300 text-lg leading-relaxed mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-[0.16,1,0.3,1] line-clamp-2 font-light">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <motion.span 
                        key={tech} 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className="px-4 py-1.5 text-sm font-medium bg-white/10 backdrop-blur-md text-white rounded-full border border-white/20 shadow-sm hover:bg-white/20 transition-colors"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;