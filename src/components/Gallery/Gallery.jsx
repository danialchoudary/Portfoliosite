import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Gallery = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const yOrb = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const images = [
    { url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop', title: 'Data Analytics', span: 'col-span-1 md:col-span-2 row-span-2' },
    { url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop', title: 'Business Intelligence', span: 'col-span-1 border-b' },
    { url: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&h=400&fit=crop', title: 'Mobile Interface', span: 'col-span-1' },
    { url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop', title: 'Web Development', span: 'col-span-1 md:col-span-2' },
    { url: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop', title: 'Code Editor', span: 'col-span-1' },
    { url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop', title: 'Financial App', span: 'col-span-1' },
  ];

  return (
    <section ref={ref} className="py-32 bg-gray-50 dark:bg-[#0f0f11] transition-colors duration-300 relative overflow-hidden">
      
      {/* Background flare moving down opposite to scroll direction */}
      <motion.div style={{ y: yOrb }} className="absolute -right-40 top-1/4 w-[600px] h-[600px] bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-6"
          >
            Visual Explorations.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-500 dark:text-gray-400"
          >
            A collection of interface designs, components, and concepts.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`group relative overflow-hidden rounded-3xl bg-gray-200 dark:bg-gray-800 ${img.span || 'col-span-1'}`}
            >
              <img 
                src={img.url} 
                alt={img.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <span className="text-white font-bold text-2xl tracking-tight transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{img.title}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;