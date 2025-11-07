import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Mail, Phone, MapPin, Copy, Check, Sparkles, Send, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [copySuccess, setCopySuccess] = useState('');
  const [copiedItem, setCopiedItem] = useState('');
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const recipientEmail = 'danialchoudary255@gmail.com';
  const subject = 'Contact from Website';
  const bodyTemplate = `Hello Danial,

I'm reaching out through your website.

[Please write your message here]

Best regards,
[Your name]`;

  // Gmail web client
  const handleGmailClick = () => {
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipientEmail}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyTemplate)}`;
    window.open(gmailUrl, '_blank');
  };

  // Copy email address
  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(recipientEmail);
      setCopySuccess('Email copied to clipboard!');
      setCopiedItem('email');
      setTimeout(() => {
        setCopySuccess('');
        setCopiedItem('');
      }, 3000);
    } catch (err) {
      setCopySuccess('Failed to copy');
      setTimeout(() => setCopySuccess(''), 2000);
    }
  };

  // Copy phone number
  const handleCopyPhone = async () => {
    const phone = '+923165320767';
    try {
      await navigator.clipboard.writeText(phone);
      setCopySuccess('Phone number copied to clipboard!');
      setCopiedItem('phone');
      setTimeout(() => {
        setCopySuccess('');
        setCopiedItem('');
      }, 3000);
    } catch (err) {
      setCopySuccess('Failed to copy');
      setTimeout(() => setCopySuccess(''), 2000);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'danialchoudary255@gmail.com',
      subtitle: 'Primary contact',
      gradient: 'from-cyan-500 to-blue-600',
      action: handleCopyEmail,
      id: 'email'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+92 3165320767',
      subtitle: 'WhatsApp available',
      gradient: 'from-blue-500 to-purple-600',
      action: handleCopyPhone,
      id: 'phone'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Haripur, Pakistan',
      subtitle: 'PKT (UTC+5)',
      gradient: 'from-purple-500 to-pink-600',
      id: 'location'
    },
  ];

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="relative min-h-screen bg-black overflow-hidden py-32"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient orbs */}
        <motion.div
          className="absolute top-1/4 -left-1/4 w-[900px] h-[900px] bg-cyan-500/20 rounded-full blur-3xl"
          style={{ y }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-1/4 w-[900px] h-[900px] bg-purple-500/20 rounded-full blur-3xl"
          style={{ y: useTransform(scrollYProgress, [0, 1], [-100, 100]) }}
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black,transparent)]" />
        
        {/* Floating particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8"
        style={{ opacity }}
      >
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Decorative line */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <motion.div
              className="h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent w-32"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1, delay: 0.3 }}
            />
            <motion.div
              animate={{
                rotate: [0, 360],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <MessageSquare className="w-6 h-6 text-cyan-400" />
            </motion.div>
            <motion.div
              className="h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent w-32"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1, delay: 0.3 }}
            />
          </div>

          {/* Title */}
          <motion.h1
            className="text-6xl sm:text-7xl lg:text-8xl font-black uppercase tracking-wider mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.span 
              className="inline-block bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ['0%', '100%', '0%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                backgroundSize: '200% auto',
              }}
            >
              Get In Touch
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
          >
            Let's collaborate and create something amazing together
          </motion.p>
        </motion.div>

        {/* Content Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={info.id}
                  className="relative group"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  {/* Glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${info.gradient} opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-opacity duration-500`} />
                  
                  {/* Card */}
                  <div className="relative bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-gray-900/90 backdrop-blur-xl rounded-2xl border border-gray-700/50 group-hover:border-cyan-500/50 overflow-hidden transition-all duration-500 p-6">
                    
                    {/* Top accent */}
                    <motion.div
                      className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${info.gradient}`}
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
                    />

                    {/* Shimmer effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100"
                      animate={{
                        x: ['-100%', '200%'],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />

                    <div className="flex items-center justify-between relative z-10">
                      <div className="flex items-center space-x-4 flex-1">
                        {/* Icon */}
                        <motion.div
                          className={`w-14 h-14 rounded-xl bg-gradient-to-br ${info.gradient} flex items-center justify-center shadow-lg relative overflow-hidden flex-shrink-0`}
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <motion.div
                            className="absolute inset-0 bg-white/20"
                            animate={{
                              rotate: 360,
                            }}
                            transition={{
                              duration: 8,
                              repeat: Infinity,
                              ease: "linear"
                            }}
                          />
                          <Icon className="w-7 h-7 text-white relative z-10" strokeWidth={2} />
                        </motion.div>

                        {/* Info */}
                        <div className="flex-1 min-w-0">
                          <p className="text-gray-400 text-sm mb-1">{info.label}</p>
                          <p className="text-white font-semibold text-lg truncate">{info.value}</p>
                          <p className="text-cyan-400 text-xs mt-1">{info.subtitle}</p>
                        </div>
                      </div>

                      {/* Copy button */}
                      {info.action && (
                        <motion.button
                          onClick={info.action}
                          className="relative ml-4 w-10 h-10 rounded-lg bg-gray-800/50 border border-gray-700/50 hover:border-cyan-500/50 flex items-center justify-center group/btn overflow-hidden flex-shrink-0"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <motion.div
                            className="absolute inset-0 bg-cyan-500/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"
                          />
                          {copiedItem === info.id ? (
                            <Check className="w-5 h-5 text-green-400 relative z-10" strokeWidth={2.5} />
                          ) : (
                            <Copy className="w-5 h-5 text-gray-400 group-hover/btn:text-cyan-400 relative z-10 transition-colors duration-300" strokeWidth={2} />
                          )}
                        </motion.button>
                      )}
                    </div>

                    {/* Corner decorations */}
                    <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-cyan-500/5 to-transparent rounded-tl-full pointer-events-none" />
                  </div>
                </motion.div>
              );
            })}

            {/* Copy Success Message */}
            {copySuccess && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl blur-xl" />
                <div className="relative bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-gray-900/90 backdrop-blur-xl rounded-xl border border-green-500/50 p-4 flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" strokeWidth={2.5} />
                  <p className="text-green-400 font-medium">{copySuccess}</p>
                </div>
              </motion.div>
            )}

            {/* Response Time Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-50" />
              <div className="relative bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-gray-900/90 backdrop-blur-xl rounded-2xl border border-blue-500/30 p-6">
                <div className="flex items-start space-x-3">
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Sparkles className="w-6 h-6 text-blue-400 flex-shrink-0" strokeWidth={2} />
                  </motion.div>
                  <div>
                    <h4 className="text-blue-400 font-bold mb-2">Response Time</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      I typically respond within 24 hours. For urgent matters, WhatsApp or phone calls work best.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Gmail Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative group"
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/30 to-pink-500/30 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Card */}
            <div className="relative bg-gradient-to-br from-gray-900/95 via-gray-800/95 to-gray-900/95 backdrop-blur-2xl rounded-3xl border border-gray-700/50 group-hover:border-cyan-500/50 overflow-hidden transition-all duration-500 p-8 sm:p-12 h-full flex flex-col justify-center">
              
              {/* Top accent */}
              <motion.div
                className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 via-pink-500 to-purple-500"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: 0.6, duration: 1 }}
              />

              {/* Gmail Icon Section */}
              <motion.div
                className="flex justify-center mb-8"
                initial={{ scale: 0, rotate: -180 }}
                animate={isInView ? { scale: 1, rotate: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
              >
                <div className="relative">
                  {/* Pulsing glow */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-red-500 to-pink-500 rounded-full blur-2xl opacity-60"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.6, 0.8, 0.6],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  
                  {/* Icon container */}
                  <motion.div
                    className="relative w-24 h-24 bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-2xl"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-white/20 rounded-2xl"
                      animate={{
                        rotate: 360,
                      }}
                      transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                    <Mail className="w-12 h-12 text-white relative z-10" strokeWidth={2} />
                  </motion.div>
                </div>
              </motion.div>

              {/* Title */}
              <motion.h3
                className="text-3xl sm:text-4xl font-bold text-center mb-3"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 }}
              >
                <span className="bg-gradient-to-r from-red-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                  Send Email
                </span>
              </motion.h3>

              <motion.p
                className="text-gray-400 text-center mb-8"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.7 }}
              >
                Compose a message directly in Gmail
              </motion.p>

              {/* Gmail Button */}
              <motion.button
                onClick={handleGmailClick}
                className="relative group/btn w-full overflow-hidden rounded-2xl"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 }}
              >
                {/* Button glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/50 via-pink-500/50 to-purple-500/50 blur-xl opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
                
                {/* Button content */}
                <div className="relative bg-gradient-to-r from-red-600 to-pink-600 px-8 py-5 flex items-center justify-center space-x-3">
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

                  <svg className="w-6 h-6 text-white relative z-10" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h3.819l6.545 4.91 6.545-4.91h3.819A1.636 1.636 0 0 1 24 5.457z"/>
                  </svg>
                  <span className="text-white font-bold text-lg relative z-10">Open Gmail</span>
                  <motion.div
                    animate={{
                      x: [0, 5, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Send className="w-5 h-5 text-white relative z-10" strokeWidth={2.5} />
                  </motion.div>
                </div>
              </motion.button>

              {/* Features list */}
              <motion.div
                className="mt-8 space-y-3"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 1 }}
              >
                {[
                  'Pre-filled subject and template',
                  'Opens in new tab',
                  'Quick and convenient',
                ].map((feature, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 1 + i * 0.1 }}
                  >
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0" strokeWidth={2.5} />
                    <span className="text-gray-400 text-sm">{feature}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Decorative corners */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-red-500/10 to-transparent rounded-bl-full pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-purple-500/10 to-transparent rounded-tr-full pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;