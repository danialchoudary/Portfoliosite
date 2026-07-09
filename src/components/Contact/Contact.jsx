import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Mail, MessageSquare, ArrowUpRight, Copy, Check } from 'lucide-react';

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const yOrb = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);

  const handleCopy = () => {
    navigator.clipboard.writeText('danialchoudary255@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section ref={ref} className="py-32 bg-white dark:bg-black transition-colors duration-300 relative overflow-hidden">
      
      {/* Background flare with parallax scroll */}
      <motion.div style={{ y: yOrb }} className="absolute bottom-1/4 left-1/4 -ml-40 -mb-40 w-[600px] h-[600px] bg-pink-500/10 dark:bg-pink-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-6"
          >
            Let's start a project.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-500 dark:text-gray-400"
          >
            I'm currently available for freelance work and open to new opportunities.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-[300px]">
          
          {/* Email Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group relative bg-[#f5f5f7] dark:bg-[#1a1a1c] rounded-[2rem] p-10 flex flex-col justify-between overflow-hidden border border-transparent dark:border-white/5 hover:border-gray-200 dark:hover:border-white/10 transition-colors shadow-sm"
          >
            <div className="flex justify-between items-start">
              <div className="w-16 h-16 bg-white dark:bg-white/10 rounded-2xl flex items-center justify-center shadow-lg shadow-gray-200/50 dark:shadow-none">
                <Mail className="w-8 h-8 text-gray-900 dark:text-white" />
              </div>
              <button 
                onClick={handleCopy}
                className="w-10 h-10 rounded-full bg-white dark:bg-white/10 flex items-center justify-center hover:scale-110 transition-transform shadow-sm"
                aria-label="Copy Email"
              >
                {copied ? <Check className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5 text-gray-600 dark:text-gray-300" />}
              </button>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Drop me an email</h3>
              <a href="mailto:danialchoudary255@gmail.com" className="text-2xl sm:text-3xl font-semibold text-blue-500 hover:text-blue-600 dark:text-blue-400 transition-colors break-all flex items-center gap-2">
                danialchoudary...
                <ArrowUpRight className="w-6 h-6 opacity-0 -translate-y-2 translate-x-2 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
              </a>
            </div>
          </motion.div>

          {/* WhatsApp Card */}
          <motion.a
            href="https://wa.me/923165320767"
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="group relative bg-[#f5f5f7] dark:bg-[#1a1a1c] rounded-[2rem] p-10 flex flex-col justify-between overflow-hidden border border-transparent dark:border-white/5 hover:border-gray-200 dark:hover:border-white/10 transition-colors shadow-sm"
          >
            <div className="flex justify-between items-start">
              <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center shadow-lg shadow-green-500/30">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
              <div className="w-10 h-10 rounded-full bg-white dark:bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
                <ArrowUpRight className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Message on WhatsApp</h3>
              <p className="text-2xl sm:text-3xl font-semibold text-gray-800 dark:text-gray-200">+92 316 5320767</p>
            </div>
          </motion.a>

        </div>
      </div>
    </section>
  );
};

export default Contact;