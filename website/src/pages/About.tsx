import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Target, Lightbulb, Users, Code, Cpu, Eye, Shield } from 'lucide-react';

const About = () => {
  const domains = [
    {
      icon: Brain,
      title: 'ML Research',
      description: 'Exploring cutting-edge machine learning algorithms and their real-world applications'
    },
    {
      icon: Cpu,
      title: 'Robotics',
      description: 'Building intelligent robots that can navigate and interact with complex environments'
    },
    {
      icon: Eye,
      title: 'Computer Vision',
      description: 'Teaching machines to see and understand visual information from the world'
    },
    {
      icon: Shield,
      title: 'Ethical AI',
      description: 'Ensuring AI development follows ethical guidelines and serves humanity responsibly'
    }
  ];

  const affiliations = [
    { name: 'IEEE Student Branch', description: 'Technical excellence and innovation' },
    { name: 'Department of CSE', description: 'Academic support and mentorship' },
    { name: 'PESU Research Center', description: 'Advanced research opportunities' }
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
            <Brain className="h-20 w-20 text-primary-accent mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-poppins font-bold mb-6 glow-text">
              About Neural Hive
            </h1>
            <p className="text-xl text-primary-gray-300 font-inter leading-relaxed">
              The premier AI & Machine Learning club at PES University, Electronic City Campus
            </p>
          </motion.div>


          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-card glow-border p-8 max-w-4xl mx-auto"
          >
            <p className="text-lg text-primary-gray-300 font-inter leading-relaxed mb-6">
              This club is for all students interested in AI/ML. No prior experience is necessary –
              just a curious mind and a passion for learning. Whether you're a seasoned coder or just 
              looking to understand what AI is all about, you'll find a welcoming community here.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Target className="h-16 w-16 text-primary-accent mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 glow-text">
              Our Mission
            </h2>
            <p className="text-xl text-primary-gray-300 font-inter max-w-3xl mx-auto leading-relaxed">
            To foster a thriving student community around Machine Learning and Artificial Intelligence. 
              We provide a dedicated platform where you can explore your interests, from the basics of 
            data cleaning to building complex models. We're committed to helping you develop essential skills 
                                      and connect with like-minded peers.

            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card glow-border p-8"
            >
              <h3 className="text-2xl font-poppins font-semibold mb-4 text-primary-accent">
                Vision Statement
              </h3>
              <p className="text-primary-gray-300 font-inter leading-relaxed">
                To be the leading student organization that bridges the gap between theoretical AI knowledge 
                and practical implementation, producing graduates who are not just consumers but creators 
                of AI technology.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card glow-border p-8"
            >
              <h3 className="text-2xl font-poppins font-semibold mb-4 text-primary-magenta">
               What We Do
              </h3>
               <p className="text-primary-gray-300 font-inter leading-relaxed">
              The world of AI and ML is vast and exciting, and so are our plans! 
              We're all about hands-on learning, skill development, and real-world application. 
              Here's a glimpse of what you can expect from us this semester:
              </p>
              <ul className="text-primary-gray-300 font-inter space-y-2">
                <li>• Workshops on Understanding Machine Learning Concepts: For beginners or pros, we cover key ML principles, making complex ideas accessible and fun.</li>
                <li>• Start-ups Guest Talks: Connect with the pros! We'll be inviting founders from leading tech startups to share their insights on how AI/ML is used in the industry and what skills are in demand. </li>
                <li>• AI/ML for Social Good Hackathon: Use your AI/ML skills to come up with innovative solutions for rising social issues. An opportunity to collaborate, innovate, and make a real impact.</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-20 bg-primary-card/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Lightbulb className="h-16 w-16 text-primary-accent mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 glow-text">
              Origin Story
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-card glow-border p-8 max-w-4xl mx-auto"
          >
            <p className="text-lg text-primary-gray-300 font-inter leading-relaxed mb-6">
              Founded in 2023 by a group of passionate CSE students, Neural Hive emerged from a simple 
              observation: while AI was transforming industries globally, students lacked hands-on 
              experience with real-world AI applications.
            </p>
            <p className="text-lg text-primary-gray-300 font-inter leading-relaxed mb-6">
              What started as informal study groups discussing neural network architectures has evolved 
              into PESU EC's most dynamic technical club, with over 30 active members working on 
              cutting-edge projects from disaster-response robots to ethical AI frameworks.
            </p>
            <p className="text-lg text-primary-gray-300 font-inter leading-relaxed">
              Today, we're not just learning about AI – we're building it, questioning it, and ensuring 
              it serves humanity's best interests.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Domains */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Code className="h-16 w-16 text-primary-accent mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 glow-text">
              Our Domains
            </h2>
            <p className="text-xl text-primary-gray-400 font-inter">
              Exploring the frontiers of artificial intelligence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {domains.map((domain, index) => (
              <motion.div
                key={domain.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="glass-card glow-border p-6 text-center group hover:shadow-lg hover:shadow-primary-accent/20 transition-all duration-300"
              >
                <domain.icon className="h-12 w-12 text-primary-accent mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-poppins font-semibold mb-3">{domain.title}</h3>
                <p className="text-primary-gray-400 font-inter text-sm">{domain.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Affiliations */}
      <section className="py-20 bg-primary-card/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Users className="h-16 w-16 text-primary-accent mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 glow-text">
              Affiliations
            </h2>
            <p className="text-xl text-primary-gray-400 font-inter">
              Proud partnerships that strengthen our mission
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {affiliations.map((affiliation, index) => (
              <motion.div
                key={affiliation.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="glass-card glow-border p-6 text-center"
              >
                <h3 className="text-xl font-poppins font-semibold mb-3 text-primary-accent">
                  {affiliation.name}
                </h3>
                <p className="text-primary-gray-400 font-inter">{affiliation.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      
       {/* Get Involved */}
      <section className="py-20 bg-primary-card/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <UserPlus className="h-16 w-16 text-primary-accent mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 glow-text">
              Get Involved!
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-card glow-border p-8 max-w-4xl mx-auto"
          >
            <p className="text-lg text-primary-gray-300 font-inter leading-relaxed mb-6">
              We're eager to host our events. Don't miss out on the opportunity to learn, connect, and innovate.
            
                              Ready to dive into the world of AI and ML with us?
                              We can't wait to build something amazing with you!

            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
