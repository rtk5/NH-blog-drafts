import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, CheckCircle, Users, AlertCircle, UserPlus } from 'lucide-react';

const Join = () => {
  const timeline = [
    {
      phase: 'Application Period',
      date: 'Feb 2 - Feb 6, 2026',
      description: 'Submit your application through our online form',
      status: 'upcoming'
    },
    {
      phase: 'Initial Screening',
      date: 'Feb 9 - Feb 13, 2026',
      description: 'Review of applications and shortlisting candidates',
      status: 'upcoming'
    },
    {
      phase: 'Technical Interview',
      date: 'Feb 16 - Feb 20, 2026',
      description: 'One-on-one interviews with core team members',
      status: 'upcoming'
    },
    {
      phase: 'Final Selection',
      date: 'Mar 2, 2026',
      description: 'Results announcement and welcome to Neural Hive',
      status: 'upcoming'
    }
  ];

  const faqs = [
    {
      question: 'Who can apply to join Neural Hive?',
      answer: 'Any student from PESU EC, regardless of their year of study or branch of engineering, is eligible to apply for Neural Hive. We actively encourage students from all branches to apply, as long as they share a passion for AI and Machine Learning. Whether you\'re a first-year just beginning to explore AI/ML or a final-year student with project experience, Neural Hive offers opportunities to learn and collaborate.'
    },
    {
      question: 'Do I need to have prior experience in AI/ML?',
      answer: 'No prior experience is required! We\'re looking for students who are curious, passionate, and eager to learn—regardless of their current skill level. Even if you\'ve just started to explore AI/ML, you\'re welcome here. We provide hands-on training and exciting workshops to help you build a strong foundation and grow your expertise over time.'
    },
    {
      question: 'What is the time commitment?',
      answer: 'We ask members to dedicate around 4-6 hours per week to club activities, which can include exciting things like team meetings, hands-on workshops, and collaborative project work. But don\'t worry — we understand how hectic things can get during exam season, so there\'s plenty of flexibility. Our goal is to help you learn and grow stress-free and at a steady pace. Even if you only have a few free hours and want to dive deep, there\'s a place for you here!'
    },
    {
      question: 'Is it free to join Neural Hive?',
      answer: 'Yes, it\'s completely free to become a member! Every student is welcome to be a part of our community without worrying about any cost. We may host special workshops or events that have a small fee, but those are always optional. You\'ll never have to pay to be involved, learn, and grow with us'
    },
    {
      question: 'What opportunities will I get as a member?',
      answer: 'As a Neural Hive member, you will have some of the most thrilling experiences on campus. Get access to exclusive, hands-on workshops where industry standard tools and ideas come alive. Collaborate on innovative projects, dive into research that solves real world problems. You will also join a vibrant network of AI enthusiasts—from curious beginners to established professionals—that can open doors to internships, competitions, and startup opportunities. If you\'re excited about shaping the future of tech, this is the place to be!'
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
