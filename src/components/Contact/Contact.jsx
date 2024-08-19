import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
// import axios from 'axios';

const contactVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1, y: 0, transition: { delay: 0.2, staggerChildren: 0.3 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage('');
    setErrorMessage('');

    try {
      const response = await axios.post('http://localhost:5000/send', formData);
      if (response.data.success) {
        setSuccessMessage('Message sent successfully! 🎉');
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      } else {
        setErrorMessage('Error sending message. Please try again later. 😞');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setErrorMessage('Error sending message. Please try again later. 😞');
    }
  };

  return (
    <div className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Get In Touch
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={contactVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
            <div className="flex items-center mb-4">
              <FontAwesomeIcon icon={faEnvelope} className="text-blue-500 w-6 h-6 mr-2" />
              <p className="text-gray-400">danialchoudary255@gmail.com</p>
            </div>
            <div className="flex items-center mb-4">
              <FontAwesomeIcon icon={faPhone} className="text-blue-500 w-6 h-6 mr-2" />
              <p className="text-gray-400">+92 3165320767</p>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="text-blue-500 w-6 h-6 mr-2" />
              <p className="text-gray-400">Haripur ,Pakistan</p>
            </div>
          </motion.div>
          <motion.form
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            variants={itemVariants}
            onSubmit={handleSubmit}
          >
            <h3 className="text-2xl font-bold mb-4">Send a Message</h3>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-400 mb-2">Name</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-400 mb-2">Email</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-400 mb-2">Message</label>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="4"
                required
              ></textarea>
            </div>
            <motion.button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send
            </motion.button>
            {successMessage && (
              <motion.p
                className="mt-4 text-green-500 flex items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {successMessage} <span className="ml-2">🎉</span>
              </motion.p>
            )}
            {errorMessage && (
              <motion.p
                className="mt-4 text-red-500 flex items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {errorMessage} <span className="ml-2">😞</span>
              </motion.p>
            )}
          </motion.form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;