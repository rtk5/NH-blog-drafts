import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, CheckCircle, Users, AlertCircle, UserPlus } from 'lucide-react';

const Join = () => {
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
