import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Users } from 'lucide-react';


const Team = () => {
  const teamMembers = [
    {
      name: 'Kshirin Shetty',
      role: 'Club Head',
      image: 'https://pictures-for-websites.vercel.app/KshirinShetty.webp',
      bio: 'Oversees the strategic direction and vision of Neural Hive. Passionate about applied AI in vision, language, and responsible ML research.',
      links: {
        github: 'https://github.com/kshirinshetty',
        linkedin: 'https://www.linkedin.com/in/kshirin-shetty-7372b426a/',
        email: 'kshirinshetty1@gmail.com'
      },
      specialties: ['Machine Learning', 'Deep Learning', 'Computer Vision', 'Natural Language Processing', 'Explainable AI']
    },
    {
      name: 'Sarayu Ventrapati',
      role: 'Club Head',
      image: 'https://pictures-for-websites.vercel.app/Sarayu%20V.jpg',
      bio: 'Leads end-to-end club activities and fosters AI research and innovation. Works across ML, LLMs, and Reinforcement Learning.',
      links: {
        github: 'https://github.com/V-Sarayu',
        linkedin: 'https://www.linkedin.com/in/sarayu-ventrapati/',
        email: 'vsarayu74@gmail.com'
      },
      specialties: ['Python', 'Deep Learning', 'LLMs', 'Prompt Engineering', 'MongoDB']
    },
    {
      name: 'Siddartha A Yogesha',
      role: 'Tech Lead',
      image: 'https://pictures-for-websites.vercel.app/sidd.jpg',
      bio: 'Leads all core technical projects, research initiatives, and systems design. Focused on building robust, research-driven ML and CV systems.',
      links: {
        github: 'https://github.com/SiddarthAA',
        linkedin: 'https://www.linkedin.com/in/siddartha-aralakuppe-yogesha-44510b290/',
        email: 'siddartha_ay@protonmail.com'
      },
      specialties: ['Computer Vision', 'Generative AI', 'Machine Learning', 'Deep Learning', 'NLP']
    },
    {
      name: 'Rithvik Matta',
      role: 'Tech Head',
      image: 'https://pictures-for-websites.vercel.app/rtk1.webp',
      bio: 'Handles technical initiatives such as workshops, blogs, and web presence. Mentors members in system development and backend technologies.',
      links: {
        github: 'https://github.com/rtk5',
        linkedin: 'https://www.linkedin.com/in/rithvik-matta-a8490b2ba/',
        email: 'rithvik.mattta@gmail.com'
      },
      specialties: ['Natural Language Processing ', 'Computer Vision', ' Machine Learning']
    },
    {
      name: 'Abhigna V',
      role: 'Design Head',
      image: 'https://pictures-for-websites.vercel.app/Abighna.webp',
      bio: 'Leads all design efforts from visual branding to event collateral. Passionate about expressive visuals and storytelling.',
      links: {
        github: '',
        linkedin: 'https://www.linkedin.com/in/abhignavattikuti/',
        email: 'abhignavattikuti@gmail.com'
      },
      specialties: ['Canva', 'Figma', 'React.js', 'Node.js', 'C/C++', 'Python', 'IoT']
    },
    {
      name: 'Saijyoti Panda',
      role: 'Events Head',
      image: 'https://pictures-for-websites.vercel.app/SaijyotiPanda.webp',
      bio: 'Handles event planning and execution with an engineering mindset. Interested in low-level systems, AI, and cybersecurity.',
      links: {
        github: 'https://www.github.com/sxijyoti',
        linkedin: 'https://www.linkedin.com/in/saijyoti-panda',
        email: 'NA'
      },
      specialties: ['Systems Programming', 'AI/ML', 'Web Dev', 'Go', 'Python']
    },
    {
      name: 'Aditya D Rao',
      role: 'Social Media and Marketing',
      image: 'https://pictures-for-websites.vercel.app/AdiRao.webp',
      bio: 'Markets club events to boost visibility and engagement. Bridges technical depth with public outreach.',
      links: {
        github: 'https://github.com/AdiXgit',
        linkedin: 'https://www.linkedin.com/in/aditya-dwaraki-rao-492672212/',
        email: 'adirao8771@gmail.com'
      },
      specialties: ['Machine Learning', 'Systems Programming', 'Quantum Computing']
    },
    {
      name: 'Vishwa',
      role: 'Operations Lead',
      image: 'https://pictures-for-websites.vercel.app/CVishwa.webp',
      bio: 'Ensures the smooth execution of all internal processes and club logistics. Deeply interested in ML and security.',
      links: {
        github: '',
        linkedin: 'https://www.linkedin.com/in/vishwa-c-7364112b8/',
        email: 'vishwa66c@gmail.com'
      },
      specialties: ['Neural Networks', 'Crisis Management', 'Threat Analysis', 'Classical ML']
    }
  ];

  const advisors = [
    {
      name: 'Dr. Kokila Paramanadam',
      role: 'Faculty Advisor',
      department: 'Professor, Dept. of CSE',
      image: 'https://pictures-for-websites.vercel.app/kokila.webp',
      expertise: 'Machine Learning, Generative AI, Applied Computing'
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
