import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/config';
import { Mail, Phone, MapPin, Send, MessageCircle, Instagram, Linkedin, Github, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Add document to Firestore
      await addDoc(collection(db, 'contact_submissions'), {
        ...formData,
        timestamp: new Date(),
        type: 'contact_form'
      });
      
      console.log('Contact form submitted:', formData);
      setSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'neuralhive.ecc@pes.edu',
      description: 'Send us an email for general inquiries',
      link: 'mailto:neuralhive.ecc@pes.edu'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: 'PES University, Electronic City Campus',
      description: 'Hosur Road, Electronic City, Bangalore - 560100',
      link: 'https://maps.google.com/?q=PES+University+Electronic+City'
    },
    {
      icon: MessageCircle,
      title: 'Office Hours',
      details: 'Monday - Friday, 2:00 PM - 6:00 PM',
      description: 'Drop by our club room for in-person discussions',
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: Instagram,
      name: 'Instagram',
      handle: '@neuralhive',
      url: 'https://instagram.com/neuralhive',
      color: 'hover:text-pink-400'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      handle: 'Neural Hive PESU',
      url: 'https://www.linkedin.com/company/neural-hive-pesu/',
      color: 'hover:text-blue-400'
    },
    {
      icon: Github,
      name: 'GitHub',
      handle: '@NeuralHive-PESU',
      url: 'https://github.com/NeuralHive-PESU',
      color: 'hover:text-gray-300'
    }
  ];

  const teamContacts = [
    {
      name: 'Rithvik Matta',
      role: 'President',
      email: 'president@neuralhive.com',
      focus: 'General inquiries, partnerships'
    },
    {
      name: 'Ananya Sharma',
      role: 'Vice President',
      email: 'vp@neuralhive.com',
      focus: 'Research collaborations, academic queries'
    },
    {
      name: 'Priya Nair',
      role: 'Events Coordinator',
      email: 'events@neuralhive.com',
      focus: 'Event partnerships, speaker invitations'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 neuron-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Mail className="h-20 w-20 text-primary-accent mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-poppins font-bold mb-6 glow-text">
              Get In Touch
            </h1>
            <p className="text-xl text-primary-gray-300 font-inter">
              Connect with Neural Hive - we'd love to hear from you
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 glow-text">
              Contact Information
            </h2>
            <p className="text-xl text-primary-gray-400 font-inter">
              Multiple ways to reach out and connect with our community
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="glass-card glow-border p-8 text-center group hover:shadow-lg hover:shadow-primary-accent/20 transition-all duration-300"
              >
                <info.icon className="h-12 w-12 text-primary-accent mx-auto mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-poppins font-semibold mb-3">{info.title}</h3>
                <p className="text-primary-accent font-inter font-medium mb-2">{info.details}</p>
                <p className="text-primary-gray-400 font-inter text-sm mb-4">{info.description}</p>
                {info.link && (
                  <a
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary-accent hover:text-primary-magenta transition-colors"
                  >
                    <span className="text-sm font-medium">Get Directions</span>
                    <Send className="ml-1 h-4 w-4" />
                  </a>
                )}
              </motion.div>
            ))}
          </div>

          {/* Social Media Links */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-2xl font-poppins font-semibold mb-8 glow-text">
              Follow Us
            </h3>
            <div className="flex justify-center space-x-8">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex flex-col items-center space-y-2 p-4 rounded-lg transition-all duration-300 ${social.color}`}
                >
                  <social.icon className="h-8 w-8 text-primary-gray-400 group-hover:scale-110 transition-transform" />
                  <div className="text-center">
                    <p className="text-sm font-medium text-primary-gray-300">{social.name}</p>
                    <p className="text-xs text-primary-gray-500">{social.handle}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-primary-card/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Send className="h-16 w-16 text-primary-accent mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 glow-text">
              Send Us a Message
            </h2>
            <p className="text-xl text-primary-gray-400 font-inter">
              Have a question, suggestion, or want to collaborate? We'd love to hear from you!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-card glow-border p-8"
          >
            {submitted ? (
              <div className="text-center py-12">
                <CheckCircle className="h-16 w-16 text-primary-accent mx-auto mb-6" />
                <h3 className="text-2xl font-poppins font-bold mb-4 glow-text">
                  Message Sent Successfully!
                </h3>
                <p className="text-primary-gray-300 font-inter">
                  Thank you for reaching out. We'll get back to you within 24-48 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-primary-gray-300 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-primary-card border border-primary-gray-700 rounded-lg text-primary-gray-100 placeholder-primary-gray-500 focus:outline-none focus:border-primary-accent"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-primary-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-primary-card border border-primary-gray-700 rounded-lg text-primary-gray-100 placeholder-primary-gray-500 focus:outline-none focus:border-primary-accent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary-gray-300 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-primary-card border border-primary-gray-700 rounded-lg text-primary-gray-100 placeholder-primary-gray-500 focus:outline-none focus:border-primary-accent"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-primary-card border border-primary-gray-700 rounded-lg text-primary-gray-100 placeholder-primary-gray-500 focus:outline-none focus:border-primary-accent"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full btn-primary text-lg py-4 group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>{loading ? 'Sending...' : 'Send Message'}</span>
                  {!loading && <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* Team Contacts */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 glow-text">
              Direct Team Contacts
            </h2>
            <p className="text-xl text-primary-gray-400 font-inter">
              Reach out directly to our team members for specific inquiries
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamContacts.map((contact, index) => (
              <motion.div
                key={contact.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="glass-card glow-border p-6 text-center hover:shadow-lg hover:shadow-primary-accent/20 transition-all duration-300"
              >
                <h3 className="text-xl font-poppins font-semibold mb-2">{contact.name}</h3>
                <p className="text-primary-accent font-inter font-medium mb-3">{contact.role}</p>
                <a
                  href={`mailto:${contact.email}`}
                  className="text-primary-gray-400 hover:text-primary-accent transition-colors text-sm mb-4 block"
                >
                  {contact.email}
                </a>
                <p className="text-primary-gray-500 font-inter text-sm">
                  {contact.focus}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Map Placeholder */}
      <section className="py-20 bg-primary-card/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <MapPin className="h-16 w-16 text-primary-accent mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 glow-text">
              Find Us
            </h2>
            <p className="text-xl text-primary-gray-400 font-inter">
              Located at the heart of Electronic City, Bangalore
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-card glow-border p-8 text-center"
          >
            <div className="bg-primary-card/50 rounded-lg p-12 mb-6">
              <MapPin className="h-24 w-24 text-primary-accent mx-auto mb-4" />
              <h3 className="text-2xl font-poppins font-semibold mb-4">PES University, Electronic City Campus</h3>
              <p className="text-primary-gray-300 font-inter mb-6">
                100 Feet Ring Road, BSK 3rd Stage<br />
                Bangalore, Karnataka 560085
              </p>
              <a
                href="https://maps.google.com/?q=PES+University+Electronic+City"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center"
              >
                <span>Open in Maps</span>
                <MapPin className="ml-2 h-4 w-4" />
              </a>
            </div>
            <p className="text-primary-gray-400 font-inter text-sm">
              Our club room is located in the Computer Science Department building. 
              Visitors are welcome during our office hours.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;