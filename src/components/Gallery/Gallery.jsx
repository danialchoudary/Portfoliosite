import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const yOrb = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  const images = [
    { url: 'https://res.cloudinary.com/dzmzrupng/image/upload/v1777429924/Screenshot_129_vozew7.png', title: 'SkillSync Dashboard', span: 'col-span-1 md:col-span-2 row-span-2' },
    { url: 'https://res.cloudinary.com/dzmzrupng/image/upload/v1777430117/Screenshot_130_rfvbcc.png', title: 'Job Analytics', span: 'col-span-1 md:col-span-2' },
    { url: 'https://res.cloudinary.com/dzmzrupng/image/upload/v1777430119/Screenshot_132_hhzssp.png', title: 'Customize Profile', span: 'col-span-1' },
    { url: 'https://res.cloudinary.com/dzmzrupng/image/upload/v1777430118/Screenshot_133_v5fmkv.png', title: 'Messenger Interface', span: 'col-span-1' },
    { url: 'https://res.cloudinary.com/dzmzrupng/image/upload/v1777430119/Screenshot_134_yxzwki.png', title: 'Recruiter Dashboard', span: 'col-span-1 md:col-span-2' },
    { url: 'https://res.cloudinary.com/dzmzrupng/image/upload/v1777430119/Screenshot_135_nk74ra.png', title: 'Applicant Tracking', span: 'col-span-1' },
    { url: 'https://res.cloudinary.com/dzmzrupng/image/upload/v1777430119/Screenshot_136_i7f9x6.png', title: 'AI Matching', span: 'col-span-1' },
  ];

  return (
    <section ref={ref} className="py-32 bg-[#F9FAFB] dark:bg-[#050505] transition-colors duration-300 relative overflow-hidden">
      
      {/* Background flare */}
      <motion.div style={{ y: yOrb }} className="absolute -right-40 top-1/4 w-[800px] h-[800px] bg-gray-200/50 dark:bg-white/[0.03] rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-6"
          >
            Visual Explorations.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl text-gray-500 dark:text-gray-400 font-light"
          >
            A closer look at the interfaces and experiences I've designed. Click to expand.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-6 auto-rows-[250px] sm:auto-rows-[300px]">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              layoutId={`image-${idx}`}
              onClick={() => setSelectedImage({ ...img, idx })}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative overflow-hidden rounded-[2rem] bg-gray-100 dark:bg-gray-900 cursor-zoom-in shadow-sm hover:shadow-xl dark:shadow-none transition-shadow duration-500 ${img.span || 'col-span-1'}`}
            >
              <img 
                src={img.url} 
                alt={img.title} 
                className="w-full h-full object-cover transition-transform duration-1000 ease-[0.16,1,0.3,1] group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <div className="flex justify-between items-center">
                  <span className="text-white font-semibold text-lg tracking-tight transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]">
                    {img.title}
                  </span>
                  <motion.div
                     whileHover={{ scale: 1.1 }}
                     whileTap={{ scale: 0.9 }}
                     className="bg-white/20 backdrop-blur-md p-2 rounded-full transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-[0.16,1,0.3,1] delay-100"
                  >
                     <ZoomIn className="text-white w-5 h-5" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-xl p-4 sm:p-10 cursor-zoom-out"
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.2 }}
              className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-[110]"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6" />
            </motion.button>

            <motion.div
              layoutId={`image-${selectedImage.idx}`}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-w-7xl w-full h-full flex flex-col items-center justify-center p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImage.url} 
                alt={selectedImage.title}
                className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl"
              />
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-6 text-center"
              >
                <h3 className="text-white text-2xl font-medium tracking-tight">{selectedImage.title}</h3>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default Gallery;