import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Users } from 'lucide-react';


const Team = () => {
  const teamMembers = [
    {
      name: 'Kshirin Shetty',
      role: 'President / ML Lead',
      image: 'https://images.pexels.com/photos/7275385/pexels-photo-7275385.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Leading neural network research and club operations. Passionate about deep learning applications in robotics.',
      links: {
        github: 'https://github.com/rithvikmatta',
        linkedin: 'https://linkedin.com/in/rithvikmatta',
        email: 'rithvik@neuralhive.com'
      },
      specialties: ['Deep Learning', 'Computer Vision', 'Team Leadership']
    },
    {
      name: 'Sarayu',
      role: 'Vice President / Research Head',
      image: 'https://images.pexels.com/photos/7275385/pexels-photo-7275385.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Spearheading ethical AI initiatives and research publications. Expert in natural language processing.',
      links: {
        github: 'https://github.com/ananyasharma',
        linkedin: 'https://linkedin.com/in/ananyasharma',
        email: 'ananya@neuralhive.com'
      },
      specialties: ['NLP', 'Ethical AI', 'Research']
    },
    {
      name: 'Rithvik Matta',
      role: 'Technical Lead / Robotics',
      image: 'https://images.pexels.com/photos/7275385/pexels-photo-7275385.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Building autonomous systems and leading hardware integration projects. IoT and embedded systems specialist.',
      links: {
        github: 'https://github.com/karthikvenkat',
        linkedin: 'https://linkedin.com/in/karthikvenkat',
        email: 'karthik@neuralhive.com'
      },
      specialties: ['Robotics', 'IoT', 'Hardware Integration']
    },
    {
      name: 'Priya Nair',
      role: 'Events Coordinator',
      image: 'https://images.pexels.com/photos/7275385/pexels-photo-7275385.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Organizing impactful events and workshops. Connecting industry experts with student community.',
      links: {
        github: 'https://github.com/priyanair',
        linkedin: 'https://linkedin.com/in/priyanair',
        email: 'priya@neuralhive.com'
      },
      specialties: ['Event Management', 'Community Building', 'Public Relations']
    },
    {
      name: 'Arjun Reddy',
      role: 'Web Development Lead',
      image: 'https://images.pexels.com/photos/7275385/pexels-photo-7275385.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Full-stack developer maintaining club digital presence. Expertise in modern web technologies.',
      links: {
        github: 'https://github.com/arjunreddy',
        linkedin: 'https://linkedin.com/in/arjunreddy',
        email: 'arjun@neuralhive.com'
      },
      specialties: ['Full-Stack Development', 'UI/UX Design', 'DevOps']
    },
    {
      name: 'Shreya Patel',
      role: 'Content & Outreach Lead',
      image: 'https://images.pexels.com/photos/7275385/pexels-photo-7275385.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Creating educational content and managing social media presence. Technical writing specialist.',
      links: {
        github: 'https://github.com/shreyapatel',
        linkedin: 'https://linkedin.com/in/shreyapatel',
        email: 'shreya@neuralhive.com'
      },
      specialties: ['Technical Writing', 'Content Strategy', 'Social Media']
    }
  ];

  const advisors = [
    {
      name: 'Dr. Rajesh Kumar',
      role: 'Faculty Advisor',
      department: 'Professor, Dept. of CSE',
      image: 'https://images.pexels.com/photos/7275385/pexels-photo-7275385.jpeg?auto=compress&cs=tinysrgb&w=400',
      expertise: 'Machine Learning, Data Mining, AI Ethics'
    },
    {
      name: 'Dr. Meena Vasan',
      role: 'Research Mentor',
      department: 'Associate Professor, Dept. of CSE',
      image: 'https://images.pexels.com/photos/7275385/pexels-photo-7275385.jpeg?auto=compress&cs=tinysrgb&w=400',
      expertise: 'Computer Vision, Neural Networks, Pattern Recognition'
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
            <Users className="h-20 w-20 text-primary-accent mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-poppins font-bold mb-6 glow-text">
              Meet Our Team
            </h1>
            <p className="text-xl text-primary-gray-300 font-inter">
              The brilliant minds driving innovation at Neural Hive
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Team */}
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
              Core Team
            </h2>
            <p className="text-xl text-primary-gray-400 font-inter">
              Student leaders shaping the future of AI at PESU EC
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="glass-card glow-border overflow-hidden group hover:shadow-lg hover:shadow-primary-accent/20 transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-bg/80 to-transparent"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-poppins font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary-accent font-inter font-medium mb-3">{member.role}</p>
                  <p className="text-primary-gray-400 font-inter text-sm mb-4 leading-relaxed">
                    {member.bio}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {member.specialties.map((specialty) => (
                      <span
                        key={specialty}
                        className="px-2 py-1 bg-primary-accent/20 text-primary-accent text-xs rounded-full font-inter"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-3">
                    <a
                      href={member.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-gray-400 hover:text-primary-accent transition-colors"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                    <a
                      href={member.links.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-gray-400 hover:text-primary-accent transition-colors"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a
                      href={`mailto:${member.links.email}`}
                      className="text-primary-gray-400 hover:text-primary-accent transition-colors"
                    >
                      <Mail className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Advisors */}
      <section className="py-20 bg-primary-card/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 glow-text">
              Faculty Advisors
            </h2>
            <p className="text-xl text-primary-gray-400 font-inter">
              Guiding our journey with wisdom and expertise
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {advisors.map((advisor, index) => (
              <motion.div
                key={advisor.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="glass-card glow-border p-8 text-center"
              >
                <img
                  src={advisor.image}
                  alt={advisor.name}
                  className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-2 border-primary-accent/50"
                />
                <h3 className="text-2xl font-poppins font-semibold mb-2">{advisor.name}</h3>
                <p className="text-primary-accent font-inter font-medium mb-2">{advisor.role}</p>
                <p className="text-primary-gray-400 font-inter mb-4">{advisor.department}</p>
                <p className="text-primary-gray-300 font-inter text-sm">{advisor.expertise}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-card glow-border p-12"
          >
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 glow-text">
              Want to Join Our Team?
            </h2>
            <p className="text-xl text-primary-gray-300 mb-8 font-inter">
              We're always looking for passionate individuals to join our mission. 
              Check out our recruitment process and become part of the hive!
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/join" className="btn-primary text-lg px-8 py-4 inline-block">
                Join Neural Hive
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Team;