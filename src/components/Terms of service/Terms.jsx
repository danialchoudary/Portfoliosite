import React from 'react';
import { motion } from 'framer-motion';

const termsVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1, y: 0, transition: { delay: 0.2, staggerChildren: 0.3 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
};

const TermsOfService = () => {
  return (
    <div className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Terms of Service
        </motion.h2>
        <motion.div
          className="max-w-3xl mx-auto"
          variants={termsVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.section
            variants={itemVariants}
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 mb-8"
          >
            <h3 className="text-2xl font-bold mb-4">1. Introduction</h3>
            <p className="text-gray-400">
              Welcome to our website. By accessing or using our service, you agree to comply with and be bound by the following terms and conditions.
            </p>
          </motion.section>

          <motion.section
            variants={itemVariants}
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 mb-8"
          >
            <h3 className="text-2xl font-bold mb-4">2. Intellectual Property</h3>
            <p className="text-gray-400">
              All content on this site, including but not limited to text, graphics, and logos, is the property of our company and protected by intellectual property laws.
            </p>
          </motion.section>

          <motion.section
            variants={itemVariants}
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 mb-8"
          >
            <h3 className="text-2xl font-bold mb-4">3. User Responsibilities</h3>
            <p className="text-gray-400">
              Users are responsible for their own actions and ensuring that their use of the site complies with all applicable laws.
            </p>
          </motion.section>

          <motion.section
            variants={itemVariants}
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 mb-8"
          >
            <h3 className="text-2xl font-bold mb-4">4. Limitation of Liability</h3>
            <p className="text-gray-400">
              Our company is not liable for any indirect, incidental, or consequential damages arising out of your use of the site.
            </p>
          </motion.section>

          <motion.section
            variants={itemVariants}
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 mb-8"
          >
            <h3 className="text-2xl font-bold mb-4">5. Changes to Terms</h3>
            <p className="text-gray-400">
              We may update these terms from time to time. Your continued use of the site signifies your acceptance of the updated terms.
            </p>
          </motion.section>

          <motion.section
            variants={itemVariants}
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-2xl font-bold mb-4">6. Contact Us</h3>
            <p className="text-gray-400">
              If you have any questions about these terms, please contact us at support@example.com.
            </p>
          </motion.section>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfService;
