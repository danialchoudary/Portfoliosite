import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Linkedin, Github, Instagram, MessageCircle, Heart, Sparkles, Code } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { 
      icon: Facebook, 
      link: 'https://web.facebook.com/profile.php?id=100087134287105',
      gradient: 'from-blue-600 to-blue-400',
      glowColor: 'rgba(59, 130, 246, 0.5)',
    },
    { 
      icon: Linkedin, 
      link: 'https://linkedin.com/in/danial-choudary-006b922a8',
      gradient: 'from-blue-500 to-cyan-400',
      glowColor: 'rgba(6, 182, 212, 0.5)',
    },
    { 
      icon: Github, 
      link: 'https://github.com/danialchoudary',
      gradient: 'from-purple-500 to-pink-500',
      glowColor: 'rgba(168, 85, 247, 0.5)',
    },
    { 
      icon: Instagram, 
      link: 'https://www.instagram.com/choudary_danial/',
      gradient: 'from-pink-500 via-red-500 to-yellow-500',
      glowColor: 'rgba(236, 72, 153, 0.5)',
    },
    { 
      icon: MessageCircle, 
      link: 'https://wa.me/923165320767',
      gradient: 'from-green-500 to-emerald-400',
      glowColor: 'rgba(16, 185, 129, 0.5)',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, 0.05, 0.01, 0.9]
      }
    }
  };

  return (
    <footer className="relative bg-black overflow-hidden py-16 border-t border-gray-800/50">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient orbs */}
        <motion.div
          className="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute -bottom-1/2 -right-1/4 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />
        
        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Top decorative line */}
        <div className="flex items-center justify-center mb-12">
          <motion.div
            className="h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent w-64"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          />
        </div>

        {/* Let's Connect Section */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <motion.div
            className="flex items-center justify-center space-x-3 mb-6"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Sparkles className="w-6 h-6 text-cyan-400" />
            <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-wider bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <Sparkles className="w-6 h-6 text-purple-400" />
          </motion.div>
          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Follow me on social media and let's build something amazing together
          </motion.p>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center items-center gap-6 mb-12"
        >
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group"
                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ 
                  delay: index * 0.1,
                  duration: 0.6,
                  type: "spring",
                  stiffness: 200
                }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    backgroundColor: social.glowColor,
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />

                {/* Icon container */}
                <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${social.gradient} flex items-center justify-center shadow-2xl overflow-hidden`}>
                  {/* Shimmer effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    animate={{
                      x: ['-100%', '200%'],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                      repeatDelay: 1
                    }}
                  />

                  {/* Rotating ring */}
                  <motion.div
                    className="absolute inset-0 border-2 border-white/30 rounded-2xl"
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />

                  <Icon className="w-8 h-8 text-white relative z-10" strokeWidth={2} />
                </div>
              </motion.a>
            );
          })}
        </motion.div>

        {/* Divider */}
        <motion.div
          variants={itemVariants}
          className="relative h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-8"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </motion.div>

        {/* Copyright and Made with Love */}
        <motion.div
          variants={itemVariants}
          className="text-center space-y-4"
        >
          {/* Made with love */}
          <motion.div
            className="flex items-center justify-center space-x-2 text-gray-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <span className="text-sm">Crafted with</span>
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            </motion.div>
            <span className="text-sm">and</span>
            <Code className="w-4 h-4 text-cyan-400" />
          </motion.div>

          {/* Copyright */}
          <motion.p
            className="text-gray-500 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            © {new Date().getFullYear()} Danial Choudary. All rights reserved.
          </motion.p>

          {/* Tech stack badge */}
          <motion.div
            className="flex items-center justify-center space-x-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <div className="px-4 py-2 rounded-full bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-xl border border-cyan-500/30 flex items-center space-x-2">
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <Sparkles className="w-3 h-3 text-cyan-400" />
              </motion.div>
              <span className="text-xs text-gray-400">
                Built with <span className="text-cyan-400 font-semibold">React</span> & <span className="text-purple-400 font-semibold">Tailwind CSS</span>
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom decorative elements */}
        <div className="flex items-center justify-center mt-12 space-x-2">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="w-1 h-1 rounded-full bg-cyan-400/50"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Bottom glow line */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
      />
    </footer>
  );
};

export default Footer;