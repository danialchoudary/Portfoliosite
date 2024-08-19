import React from 'react';
import { motion } from 'framer-motion';

const privacyVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1, y: 0, transition: { delay: 0.2, staggerChildren: 0.3 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
};

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Privacy Policy
        </motion.h2>
        <motion.div
          className="max-w-3xl mx-auto"
          variants={privacyVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.section
            variants={itemVariants}
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 mb-8"
          >
            <h3 className="text-2xl font-bold mb-4">1. Introduction</h3>
            <p className="text-gray-400">
              Welcome to our privacy policy page. This document explains how we collect, use, and protect your information.
            </p>
          </motion.section>

          <motion.section
            variants={itemVariants}
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 mb-8"
          >
            <h3 className="text-2xl font-bold mb-4">2. Information Collection</h3>
            <p className="text-gray-400">
              We collect various types of information, including personal details and usage data, to provide and improve our services.
            </p>
          </motion.section>

          <motion.section
            variants={itemVariants}
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 mb-8"
          >
            <h3 className="text-2xl font-bold mb-4">3. Use of Information</h3>
            <p className="text-gray-400">
              The information we collect is used to enhance user experience, provide customer support, and communicate with you.
            </p>
          </motion.section>

          <motion.section
            variants={itemVariants}
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 mb-8"
          >
            <h3 className="text-2xl font-bold mb-4">4. Data Protection</h3>
            <p className="text-gray-400">
              We implement appropriate security measures to protect your data from unauthorized access, alteration, or destruction.
            </p>
          </motion.section>

          <motion.section
            variants={itemVariants}
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 mb-8"
          >
            <h3 className="text-2xl font-bold mb-4">5. Your Rights</h3>
            <p className="text-gray-400">
              You have the right to access, correct, or delete your personal information. Contact us if you wish to exercise these rights.
            </p>
          </motion.section>

          <motion.section
            variants={itemVariants}
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-2xl font-bold mb-4">6. Changes to This Policy</h3>
            <p className="text-gray-400">
              We may update this privacy policy from time to time. Any changes will be posted on this page with an updated effective date.
            </p>
          </motion.section>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
