import React, { useState } from 'react';
import { MdEmail, MdPhone, MdLocationOn, MdSend, MdContentCopy } from 'react-icons/md';

const Contact = () => {
  const [copySuccess, setCopySuccess] = useState('');

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

  // Outlook web client
  const handleOutlookClick = () => {
    const outlookUrl = `https://outlook.live.com/mail/0/deeplink/compose?to=${recipientEmail}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyTemplate)}`;
    window.open(outlookUrl, '_blank');
  };

  // Default email client (mailto)
  const handleDefaultEmailClick = () => {
    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyTemplate)}`;
    window.location.href = mailtoLink;
  };

  // Copy email address
  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(recipientEmail);
      setCopySuccess('Email copied!');
      setTimeout(() => setCopySuccess(''), 2000);
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
      setCopySuccess('Phone copied!');
      setTimeout(() => setCopySuccess(''), 2000);
    } catch (err) {
      setCopySuccess('Failed to copy');
      setTimeout(() => setCopySuccess(''), 2000);
    }
  };

  return (
    <section id="contact" className="">
    <div className="bg-gray-900 text-white py-16 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
            Get In Touch
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choose your preferred way to contact me - email, phone, or social media
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-gray-800 p-8 rounded-xl shadow-2xl border border-gray-700">
            <h3 className="text-2xl font-bold mb-6 text-blue-400">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-center justify-between group">
                <div className="flex items-center">
                  <MdEmail className="text-blue-500 w-6 h-6 mr-4" />
                  <div>
                    <p className="text-gray-300 font-medium">danialchoudary255@gmail.com</p>
                    <p className="text-gray-500 text-sm">Primary email</p>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
                  title="Copy email"
                >
                  <MdContentCopy className="w-4 h-4" />
                </button>
              </div>
              
              <div className="flex items-center justify-between group">
                <div className="flex items-center">
                  <MdPhone className="text-blue-500 w-6 h-6 mr-4" />
                  <div>
                    <p className="text-gray-300 font-medium">+92 3165320767</p>
                    <p className="text-gray-500 text-sm">WhatsApp available</p>
                  </div>
                </div>
                <button
                  onClick={handleCopyPhone}
                  className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
                  title="Copy phone"
                >
                  <MdContentCopy className="w-4 h-4" />
                </button>
              </div>
              
              <div className="flex items-center">
                <MdLocationOn className="text-blue-500 w-6 h-6 mr-4" />
                <div>
                  <p className="text-gray-300 font-medium">Haripur, Pakistan</p>
                  <p className="text-gray-500 text-sm">PKT (UTC+5)</p>
                </div>
              </div>
            </div>

            {/* Copy success message */}
            {copySuccess && (
              <div className="mt-4 p-3 bg-green-900/30 border border-green-500/30 rounded-lg">
                <p className="text-green-400 text-sm">{copySuccess}</p>
              </div>
            )}

            {/* Response time info */}
            <div className="mt-8 p-4 bg-blue-900/20 border border-blue-500/30 rounded-lg">
              <h4 className="text-blue-400 font-semibold mb-2">Response Time</h4>
              <p className="text-gray-300 text-sm">
                I typically respond within 24 hours. For urgent matters, WhatsApp or phone calls work best.
              </p>
            </div>
          </div>

          {/* Email Options */}
          <div className="bg-gray-800 p-8 rounded-xl shadow-2xl border border-gray-700">
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MdEmail className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-blue-400">Send Email</h3>
              <p className="text-gray-400 text-sm">
                Choose your preferred email service
              </p>
            </div>

            <div className="space-y-4">
              {/* Gmail */}
              <button
                onClick={handleGmailClick}
                className="w-full flex items-center justify-center px-6 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg hover:from-red-700 hover:to-red-800 transition-all duration-300 hover:scale-105 font-semibold"
              >
                <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h3.819l6.545 4.91 6.545-4.91h3.819A1.636 1.636 0 0 1 24 5.457z"/>
                </svg>
                Open Gmail
              </button>

              {/* Outlook */}
              <button
                onClick={handleOutlookClick}
                className="w-full flex items-center justify-center px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 hover:scale-105 font-semibold"
              >
                <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7.88 12.04q0 .45-.11.87-.1.41-.33.74-.22.33-.58.52-.37.2-.87.2t-.87-.2q-.36-.19-.58-.52-.22-.33-.33-.74-.1-.42-.1-.87t.1-.87q.11-.41.33-.74.22-.33.58-.52.36-.19.87-.19t.87.19q.37.19.58.52.22.33.33.74.11.42.11.87zM21.5 12h-.85q-.37 0-.63.26-.27.27-.27.64v4.85q0 .37-.26.63-.27.27-.64.27h-3.85q-.37 0-.63-.27-.27-.26-.27-.63V9.24q0-.37.27-.64.26-.26.63-.26h4.85q.37 0 .63.26.27.27.27.64zm0-8.5q0 .37-.27.64-.26.26-.63.26h-4.85q-.37 0-.63-.26-.27-.27-.27-.64v-2q0-.37.27-.63.26-.27.63-.27h4.85q.37 0 .63.27.27.26.27.63z"/>
                </svg>
                Open Outlook
              </button>

              {/* Default Email Client */}
              <button
                onClick={handleDefaultEmailClick}
                className="w-full flex items-center justify-center px-6 py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg hover:from-purple-700 hover:to-purple-800 transition-all duration-300 hover:scale-105 font-semibold"
              >
                <MdSend className="w-5 h-5 mr-3" />
                Default Email App
              </button>
            </div>

           
          </div>
        </div>

        
      </div>
    </div>
    </section>
  );
};

export default Contact;