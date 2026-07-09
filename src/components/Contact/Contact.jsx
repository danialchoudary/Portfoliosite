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
    <section ref={ref} className="py-32 bg-white dark:bg-[#020202] transition-colors duration-300 relative overflow-hidden">
      
      {/* Background flare with parallax scroll */}
      <motion.div style={{ y: yOrb }} className="absolute bottom-1/4 left-1/4 -ml-40 -mb-40 w-[800px] h-[800px] bg-blue-100/30 dark:bg-blue-900/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        
        <div className="text-center mb-24 max-w-2xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-6"
          >
            Let's build something.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl text-gray-500 dark:text-gray-400 font-light"
          >
            I'm currently available for freelance work and open to new opportunities. Let's create an unforgettable experience together.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-[320px]">
          
          {/* Email Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="group relative bg-[#F9FAFB] dark:bg-[#0a0a0a] rounded-[2.5rem] p-10 flex flex-col justify-between overflow-hidden border border-gray-100 dark:border-white/[0.05] hover:border-gray-300 dark:hover:border-white/[0.1] transition-all duration-500 shadow-sm hover:shadow-xl dark:shadow-none"
          >
            {/* Subtle Inner Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-transparent dark:from-white/[0.02] dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="relative z-10 flex justify-between items-start">
              <div className="w-16 h-16 bg-white dark:bg-white/[0.05] border border-gray-100 dark:border-white/[0.05] rounded-2xl flex items-center justify-center shadow-sm">
                <Mail className="w-8 h-8 text-gray-900 dark:text-white" />
              </div>
              <button 
                onClick={handleCopy}
                className="w-12 h-12 rounded-full bg-white dark:bg-white/[0.05] border border-gray-100 dark:border-white/[0.05] flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-sm"
                aria-label="Copy Email"
              >
                {copied ? <Check className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5 text-gray-500 dark:text-gray-400" />}
              </button>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-xl font-medium text-gray-900 dark:text-gray-300 mb-3 tracking-tight">Drop me an email</h3>
              <a href="mailto:danialchoudary255@gmail.com" className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors break-all flex items-center gap-2 tracking-tight">
                danialchoudary...
                <ArrowUpRight className="w-7 h-7 opacity-0 -translate-y-2 translate-x-2 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-500 ease-[0.16,1,0.3,1]" />
              </a>
            </div>
          </motion.div>

          {/* WhatsApp Card */}
          <motion.a
            href="https://wa.me/923165320767"
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="group relative bg-[#F9FAFB] dark:bg-[#0a0a0a] rounded-[2.5rem] p-10 flex flex-col justify-between overflow-hidden border border-gray-100 dark:border-white/[0.05] hover:border-gray-300 dark:hover:border-white/[0.1] transition-all duration-500 shadow-sm hover:shadow-xl dark:shadow-none"
          >
            {/* Subtle Inner Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-transparent dark:from-green-900/10 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="relative z-10 flex justify-between items-start">
              <div className="w-16 h-16 bg-[#25D366] rounded-2xl flex items-center justify-center shadow-lg shadow-[#25D366]/20">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
              <div className="w-12 h-12 rounded-full bg-white dark:bg-white/[0.05] border border-gray-100 dark:border-white/[0.05] flex items-center justify-center group-hover:scale-105 transition-transform shadow-sm">
                <ArrowUpRight className="w-5 h-5 text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors" />
              </div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-xl font-medium text-gray-900 dark:text-gray-300 mb-3 tracking-tight">Message on WhatsApp</h3>
              <p className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white tracking-tight">+92 316 5320767</p>
            </div>
          </motion.a>

        </div>
      </div>
    </section>
  );
};

export default Contact;