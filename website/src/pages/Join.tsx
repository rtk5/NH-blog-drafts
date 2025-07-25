import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/config';
import { UserPlus, Calendar, CheckCircle, Users, Mail, Send, AlertCircle } from 'lucide-react';

const Join = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    year: '',
    branch: '',
    interests: [],
    experience: '',
    motivation: '',
    projects: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const interests = [
    'Machine Learning',
    'Deep Learning',
    'Computer Vision',
    'Natural Language Processing',
    'Robotics',
    'Data Science',
    'Web Development',
    'Mobile Development',
    'Cybersecurity',
    'Research'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleInterestToggle = (interest) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Add document to Firestore
      await addDoc(collection(db, 'join_applications'), {
        ...formData,
        timestamp: new Date(),
        type: 'join_application',
        status: 'pending'
      });
      
      console.log('Join application submitted:', formData);
      setSubmitted(true);
    } catch (error) {
      console.error('Error submitting application:', error);
      alert('There was an error submitting your application. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const timeline = [
    {
      phase: 'Application Period',
      date: 'Aug 1 - Aug 20, 2025',
      description: 'Submit your application through our online form',
      status: 'upcoming'
    },
    {
      phase: 'Initial Screening',
      date: 'Aug 21 - Aug 25, 2025',
      description: 'Review of applications and shortlisting candidates',
      status: 'upcoming'
    },
    {
      phase: 'Technical Interview',
      date: 'Aug 26 - Aug 30, 2025',
      description: 'One-on-one interviews with core team members',
      status: 'upcoming'
    },
    {
      phase: 'Final Selection',
      date: 'Sep 1, 2025',
      description: 'Results announcement and welcome to Neural Hive',
      status: 'upcoming'
    }
  ];

  const faqs = [
    {
      question: 'Who can apply to join Neural Hive?',
      answer: 'Any PESU EC student from any year and branch can apply. We welcome students with diverse backgrounds and interests in AI/ML.'
    },
    {
      question: 'Do I need prior experience in AI/ML?',
      answer: 'No prior experience is required! We value enthusiasm and willingness to learn over existing knowledge. We provide training and mentorship.'
    },
    {
      question: 'What is the time commitment?',
      answer: 'We expect 4-6 hours per week for club activities, including meetings, workshops, and project work. Flexibility is provided during exams.'
    },
    {
      question: 'Are there any fees to join?',
      answer: 'No, membership is completely free. We may occasionally organize paid workshops or events, but participation is always optional.'
    },
    {
      question: 'What opportunities will I get as a member?',
      answer: 'Access to exclusive workshops, industry mentorship, project collaboration, research opportunities, and networking with AI professionals.'
    }
  ];

  if (submitted) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto px-4 text-center"
        >
          <div className="glass-card glow-border p-12">
            <CheckCircle className="h-20 w-20 text-primary-accent mx-auto mb-6" />
            <h1 className="text-4xl font-poppins font-bold mb-6 glow-text">
              Application Submitted!
            </h1>
            <p className="text-xl text-primary-gray-300 mb-8 font-inter">
              Thank you for your interest in joining Neural Hive. We'll review your application 
              and get back to you within 2-3 business days.
            </p>
            <div className="space-y-4 text-left">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-primary-accent" />
                <span className="text-primary-gray-300">Application received and logged</span>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="h-5 w-5 text-primary-accent" />
                <span className="text-primary-gray-300">You'll hear from our team soon</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

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
            <UserPlus className="h-20 w-20 text-primary-accent mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-poppins font-bold mb-6 glow-text">
              Join Neural Hive
            </h1>
            <p className="text-xl text-primary-gray-300 font-inter">
              Become a neuron in our hive and help shape the future of AI at PESU EC
            </p>
          </motion.div>
        </div>
      </section>

      {/* Recruitment Timeline */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Calendar className="h-16 w-16 text-primary-accent mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 glow-text">
              Recruitment Timeline
            </h2>
            <p className="text-xl text-primary-gray-400 font-inter">
              Your journey to joining Neural Hive starts here
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary-accent/30"></div>
            
            <div className="space-y-12">
              {timeline.map((phase, index) => (
                <motion.div
                  key={phase.phase}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="glass-card glow-border p-6">
                      <h3 className="text-xl font-poppins font-semibold mb-2 text-primary-accent">
                        {phase.phase}
                      </h3>
                      <p className="text-primary-gray-400 font-inter text-sm mb-3">
                        {phase.date}
                      </p>
                      <p className="text-primary-gray-300 font-inter">
                        {phase.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Timeline Node */}
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-primary-accent rounded-full border-4 border-primary-bg"></div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
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
              Application Form
            </h2>
            <p className="text-xl text-primary-gray-400 font-inter">
              Tell us about yourself and why you want to join our community
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="glass-card glow-border p-8 space-y-6"
          >
            {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-primary-gray-300 mb-2">
                  Full Name *
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
                  placeholder="your.email@pes.edu"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-primary-gray-300 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-primary-card border border-primary-gray-700 rounded-lg text-primary-gray-100 placeholder-primary-gray-500 focus:outline-none focus:border-primary-accent"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-primary-gray-300 mb-2">
                  Year of Study *
                </label>
                <select
                  name="year"
                  value={formData.year}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-primary-card border border-primary-gray-700 rounded-lg text-primary-gray-100 focus:outline-none focus:border-primary-accent"
                >
                  <option value="">Select Year</option>
                  <option value="1st">1st Year</option>
                  <option value="2nd">2nd Year</option>
                  <option value="3rd">3rd Year</option>
                  <option value="4th">4th Year</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-primary-gray-300 mb-2">
                  Branch *
                </label>
                <select
                  name="branch"
                  value={formData.branch}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-primary-card border border-primary-gray-700 rounded-lg text-primary-gray-100 focus:outline-none focus:border-primary-accent"
                >
                  <option value="">Select Branch</option>
                  <option value="CSE">Computer Science</option>
                  <option value="ECE">Electronics & Communication</option>
                  <option value="EEE">Electrical & Electronics</option>
                  <option value="ME">Mechanical</option>
                  <option value="CV">Civil</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            {/* Interests */}
            <div>
              <label className="block text-sm font-medium text-primary-gray-300 mb-4">
                Areas of Interest * (Select all that apply)
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {interests.map((interest) => (
                  <button
                    key={interest}
                    type="button"
                    onClick={() => handleInterestToggle(interest)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      formData.interests.includes(interest)
                        ? 'bg-primary-accent text-primary-bg'
                        : 'bg-primary-card text-primary-gray-300 border border-primary-gray-700 hover:border-primary-accent'
                    }`}
                  >
                    {interest}
                  </button>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div>
              <label className="block text-sm font-medium text-primary-gray-300 mb-2">
                Technical Experience
              </label>
              <textarea
                name="experience"
                value={formData.experience}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 bg-primary-card border border-primary-gray-700 rounded-lg text-primary-gray-100 placeholder-primary-gray-500 focus:outline-none focus:border-primary-accent"
                placeholder="Describe your technical background, programming languages you know, projects you've worked on, etc."
              />
            </div>

            {/* Motivation */}
            <div>
              <label className="block text-sm font-medium text-primary-gray-300 mb-2">
                Why do you want to join Neural Hive? *
              </label>
              <textarea
                name="motivation"
                value={formData.motivation}
                onChange={handleInputChange}
                required
                rows={4}
                className="w-full px-4 py-3 bg-primary-card border border-primary-gray-700 rounded-lg text-primary-gray-100 placeholder-primary-gray-500 focus:outline-none focus:border-primary-accent"
                placeholder="Tell us what motivates you to join our AI/ML community and what you hope to achieve..."
              />
            </div>

            {/* Project Ideas */}
            <div>
              <label className="block text-sm font-medium text-primary-gray-300 mb-2">
                Project Ideas or Contributions
              </label>
              <textarea
                name="projects"
                value={formData.projects}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-4 py-3 bg-primary-card border border-primary-gray-700 rounded-lg text-primary-gray-100 placeholder-primary-gray-500 focus:outline-none focus:border-primary-accent"
                placeholder="Any project ideas you'd like to work on or ways you'd like to contribute to the club..."
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full btn-primary text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Submitting...' : 'Submit Application'}
            </button>
          </motion.form>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <AlertCircle className="h-16 w-16 text-primary-accent mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 glow-text">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-primary-gray-400 font-inter">
              Everything you need to know about joining Neural Hive
            </p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="glass-card glow-border p-6"
              >
                <h3 className="text-lg font-poppins font-semibold mb-3 text-primary-accent">
                  {faq.question}
                </h3>
                <p className="text-primary-gray-300 font-inter leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Join;