import React, { useState } from 'react';
import { MdEmail, MdPhone, MdLocationOn, MdSend } from 'react-icons/md';
import { MdContentCopy } from "react-icons/md";

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

  // Method 1: Open default email client (most reliable for frontend-only)
  const handleEmailClient = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Contact Form Message from ${formData.name}`);
    const body = encodeURIComponent(
      `Hello,\n\nYou have received a new message from your website contact form:\n\n` +
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Message:\n${formData.message}\n\n` +
      `Best regards,\n${formData.name}`
    );
    
    const mailtoLink = `mailto:danialchoudary255@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
    
    setSuccessMessage('Opening your email client... Please send the pre-filled email! 📧');
    setFormData({ name: '', email: '', message: '' });
  };

  // Method 2: Using EmailJS
  const handleEmailJS = async (e) => {
    e.preventDefault();
    setSuccessMessage('');
    setErrorMessage('');

    // Validate form data
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please fill in all fields. 📝');
      return;
    }

    try {
      // EmailJS configuration
      const serviceID = 'service_sjvymla';
      const templateID = 'template_ikfvwtc';
      const publicKey = 'HQ3-S0QcWWdkIqpsZ';

      // Template parameters that will be sent to your email template
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: 'Danial', // Your name
        reply_to: formData.email,
      };

      // Load EmailJS SDK dynamically
      if (!window.emailjs) {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
        script.onload = () => {
          window.emailjs.init(publicKey);
          sendEmail();
        };
        document.head.appendChild(script);
      } else {
        sendEmail();
      }

      function sendEmail() {
        window.emailjs.send(serviceID, templateID, templateParams)
          .then(() => {
            setSuccessMessage('Message sent successfully! I\'ll get back to you soon. 🎉');
            setFormData({ name: '', email: '', message: '' });
          })
          .catch((error) => {
            console.error('EmailJS Error:', error);
            setErrorMessage('Failed to send message. Please try the email client option. 😞');
          });
      }

    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('Something went wrong. Please try again. 😞');
    }
  };

  // Method 3: Copy to clipboard for manual sending
  const handleCopyToClipboard = (e) => {
    e.preventDefault();
    const messageText = `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`;
    
    navigator.clipboard.writeText(messageText).then(() => {
      setSuccessMessage('Message copied to clipboard! You can paste it in your email. 📋');
      setFormData({ name: '', email: '', message: '' });
    }).catch(() => {
      setErrorMessage('Failed to copy to clipboard. Please try again. 😞');
    });
  };

  return (
    <div className="bg-gray-900 text-white py-16 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
            Get In Touch
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choose your preferred method to send me a message. I'll get back to you as soon as possible!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="bg-gray-800 p-8 rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 border border-gray-700">
            <h3 className="text-2xl font-bold mb-6 text-blue-400">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center group hover:text-blue-400 transition-colors">
                <MdEmail className="text-blue-500 w-6 h-6 mr-4 group-hover:scale-110 transition-transform" />
                <p className="text-gray-300">danialchoudary255@gmail.com</p>
              </div>
              <div className="flex items-center group hover:text-blue-400 transition-colors">
                <MdPhone className="text-blue-500 w-6 h-6 mr-4 group-hover:scale-110 transition-transform" />
                <p className="text-gray-300">+92 3165320767</p>
              </div>
              <div className="flex items-center group hover:text-blue-400 transition-colors">
                <MdLocationOn className="text-blue-500 w-6 h-6 mr-4 group-hover:scale-110 transition-transform" />
                <p className="text-gray-300">Haripur, Pakistan</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800 p-8 rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 border border-gray-700">
            <h3 className="text-2xl font-bold mb-6 text-blue-400">Send a Message</h3>
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-400 mb-2 font-medium">Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-gray-600 transition-all border border-gray-600"
                  required
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-400 mb-2 font-medium">Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-gray-600 transition-all border border-gray-600"
                  required
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-400 mb-2 font-medium">Message</label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-gray-600 transition-all border border-gray-600 resize-none"
                  rows="5"
                  required
                  placeholder="Your message here..."
                ></textarea>
              </div>

              {/* Primary EmailJS Send Button */}
              <button
                type="button"
                onClick={handleEmailJS}
                className="w-full flex items-center justify-center px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 font-semibold text-lg shadow-lg"
              >
                <MdSend className="w-5 h-5 mr-2" />
                Send Message
              </button>

              {/* Alternative options */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                <button
                  type="button"
                  onClick={handleEmailClient}
                  className="flex items-center justify-center px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-all duration-300 font-medium border border-gray-600"
                >
                  <MdEmail className="w-4 h-4 mr-2" />
                  Email Client
                </button>
                <button
                  type="button"
                  onClick={handleCopyToClipboard}
                  className="flex items-center justify-center px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-all duration-300 font-medium border border-gray-600"
                >
                  <MdContentCopy className="w-4 h-4 mr-2" />
                  Copy Message
                </button>
              </div>

              {/* Success/Error Messages */}
              {successMessage && (
                <div className="p-4 bg-green-900/50 border border-green-500 rounded-lg">
                  <p className="text-green-400 flex items-center">
                    {successMessage}
                    <span className="ml-2">🎉</span>
                  </p>
                </div>
              )}
              {errorMessage && (
                <div className="p-4 bg-red-900/50 border border-red-500 rounded-lg">
                  <p className="text-red-400 flex items-center">
                    {errorMessage}
                    <span className="ml-2">😞</span>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Contact;