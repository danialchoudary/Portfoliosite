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

  const yOrb = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

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
    <section ref={ref} className="py-32 bg-gray-50 dark:bg-[#0f0f11] transition-colors duration-300 relative overflow-hidden">
      
      {/* Background flare */}
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
            Click on any screenshot to view it in full detail.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              layoutId={`image-${idx}`}
              onClick={() => setSelectedImage({ ...img, idx })}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className={`group relative overflow-hidden rounded-3xl bg-gray-200 dark:bg-gray-800 cursor-zoom-in ${img.span || 'col-span-1'}`}
            >
              <img 
                src={img.url} 
                alt={img.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <div className="flex justify-between items-center">
                  <span className="text-white font-bold text-lg tracking-tight transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    {img.title}
                  </span>
                  <ZoomIn className="text-white w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
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
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-10 cursor-zoom-out"
          >
            <motion.button
              className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-[110]"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6" />
            </motion.button>

            <motion.div
              layoutId={`image-${selectedImage.idx}`}
              className="relative max-w-6xl w-full h-full flex items-center justify-center p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImage.url} 
                alt={selectedImage.title}
                className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
              />
              
              <div className="absolute bottom-[-40px] left-0 right-0 text-center">
                <h3 className="text-white text-xl font-semibold">{selectedImage.title}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default Gallery;