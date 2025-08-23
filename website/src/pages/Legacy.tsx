import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Clock, Award } from 'lucide-react';

const Legacy = () => {
  const legacyMembers = [
    {
      year: '2023-24',
      members: [
        {
          name: 'Tanistha Hota',
          role: 'Student Lead',
          image: 'https://pictures-for-websites.vercel.app/tanishta.webp',
          bio: 'Founder and visionary lead of Neural Hive, scaling the club from a single event per year into a vibrant ML community through hands-on workshops, mentorship, and collaborative learning.',
          achievements: [
            'Founder and Lead of Neural Hive',
            'Project intern at Nokia',
            'Winners at the Hasgeek Open Source AI Hackathon (Winter Edition)',
            'Finalists at the Great Bengaluru Hackathon (Namma Yatri Track)'
          ],
          links: {
            github: 'https://github.com/tanisthahota',
            linkedin: 'https://www.linkedin.com/in/tanistha-hota/',
            email: 'hotatanistha@gmail.com'
          },
          specialties: ['PyTorch', 'Transformers', 'PEFT', 'Computer Vision', 'NLP']
        },
        {
          name: 'Rishit Rastogi',
          role: 'Vice Head',
          image: 'https://pictures-for-websites.vercel.app/rishit.webp',
          bio: 'Tech-driven leader with a passion for cross-platform AI frameworks, self-hosted solutions, and dynamic team-based problem solving.',
          achievements: ['Launched ML project mentorship program', 'Drove innovation and technical excellence across the club'],
          links: {
            github: 'https://github.com/Xhades14',
            linkedin: 'https://www.linkedin.com/in/rishit-rastogi-877472245',
            email: 'rishit.rastogi14@gmail.com'
          },
          specialties: ['Data and AI', 'Knowledge Graphs', 'Leadership Strategy']
        },
        {
          name: 'Anuhya Tyada',
          role: 'Design Head',
          image: 'https://pictures-for-websites.vercel.app/anhuya.webp',
          bio: 'Led Neural Hive’s design initiatives by establishing a unified visual identity and managing a team of designers for event branding and outreach.',
          achievements: ['Built consistent club branding', 'Led and mentored a team of 8 designers'],
          links: {
            github: 'https://github.com/nuhyya',
            linkedin: 'https://www.linkedin.com/in/anuhya-tyada-316695296/',
            email: 'anuhyatyada@gmail.com'
          },
          specialties: ['Canva', 'Poster Design', 'Illustration', 'Animation']
        },
        {
          name: 'Uday Kiran',
          role: 'Events Head',
          image: 'https://pictures-for-websites.vercel.app/uday.webp',
          bio: 'Directed all event operations, curating impactful experiences through workshops, hackathons, and speaker sessions that brought cutting-edge AI to the student community.',
          achievements: ['Orchestrated successful workshops and hackathons', 'Spearheaded club event execution'],
          links: {
            github: 'https://github.com/udaykiran1101',
            linkedin: 'https://www.linkedin.com/in/uday-kiran-9004a128b/',
            email: 'udaykiran1101@gmail.com'
          },
          specialties: ['Event Planning', 'Logistics', 'Community Engagement']
        },
        {
          name: 'Suhit Hegde',
          role: 'Operations Head',
          image: 'https://pictures-for-websites.vercel.app/suhit.webp',
          bio: 'Established and managed the club’s operational backbone, ensuring seamless execution of all club initiatives.',
          achievements: ['Structured operations for major club events'],
          links: {
            github: '',
            linkedin: 'https://www.linkedin.com/in/suhit-hegde-a63446297/',
            email: 'suhithegde@gmail.com'
          },
          specialties: ['Club Operations', 'Execution Strategy']
        },
        {
          name: 'Sameer Beedi',
          role: 'Technical Head',
          image: 'https://pictures-for-websites.vercel.app/sameer.webp',
          bio: 'Led all technical operations, mentored development teams, and provided expertise in advanced AI technologies.',
          achievements: ['Mentored technical teams', 'Led ML and GenAI initiatives'],
          links: {
            github: 'https://github.com/Sameerbeedi',
            linkedin: 'https://www.linkedin.com/in/sameer-beedi-50a23b299/',
            email: 'sameerbeedi29@gmail.com'
          },
          specialties: ['Machine Learning', 'Generative AI']
        },
        {
          name: 'Tanay',
          role: 'SM&M Head',
          image: 'https://pictures-for-websites.vercel.app/tanay.webp',
          bio: 'Pioneered the club’s social media and marketing presence, growing engagement and effectively promoting all major club events and recruitments.',
          achievements: ['Created and managed all social media platforms', 'Directed marketing for every club event and recruitment cycle'],
          links: {
            github: 'https://github.com/tnayagarwal',
            linkedin: 'https://www.linkedin.com/in/tanay-agarwal-620b5720b',
            email: 'tanaynilesh@gmail.com'
          },
          specialties: ['Social Media Outreach', 'Marketing', 'Python & AI Development']
        }
      ]
    }
  ];

  const stats = [
    { number: '15+', label: 'Alumni Members', sublabel: 'Across different years' },
    { number: '85%', label: 'Placement Rate', sublabel: 'In top tech companies' },
    { number: '25+', label: 'Projects Completed', sublabel: 'By alumni during tenure' },
    { number: '10+', label: 'Industry Positions', sublabel: 'Currently held by alumni' }
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
            <Clock className="h-20 w-20 text-primary-accent mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-poppins font-bold mb-6 glow-text">
              Legacy Members
            </h1>
            <p className="text-xl text-primary-gray-300 font-inter">
              Honoring the pioneers who built the foundation of Neural Hive
            </p>
          </motion.div>
        </div>
      </section>

      {/* Alumni Stats */}
      <section className="py-20 bg-primary-card/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Award className="h-16 w-16 text-primary-accent mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 glow-text">
              Alumni Impact
            </h2>
            <p className="text-xl text-primary-gray-400 font-inter">
              The lasting impact of our founding members and early contributors
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="glass-card glow-border p-6 text-center hover:shadow-lg hover:shadow-primary-accent/20 transition-all duration-300"
              >
                <h3 className="text-3xl font-poppins font-bold glow-text mb-2">{stat.number}</h3>
                <p className="text-primary-gray-300 font-inter font-medium mb-1">{stat.label}</p>
                <p className="text-primary-gray-500 font-inter text-sm">{stat.sublabel}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Legacy Members by Year */}
      {legacyMembers.map((yearGroup, yearIndex) => (
        <section key={yearGroup.year} className={`py-20 ${yearIndex % 2 === 1 ? 'bg-primary-card/20' : ''}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 glow-text">
                Class of {yearGroup.year}
              </h2>
              <p className="text-xl text-primary-gray-400 font-inter">
                {yearGroup.year === '2023-24' ? 'The founding generation who started it all' : 'Early pioneers who shaped our direction'}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {yearGroup.members.map((member, index) => (
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
                    <div className="absolute top-4 right-4 bg-primary-magenta text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Alumni
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-poppins font-semibold mb-1">{member.name}</h3>
                    <p className="text-primary-accent font-inter font-medium mb-3">{member.role}</p>
                    <p className="text-primary-gray-400 font-inter text-sm mb-4 leading-relaxed">
                      {member.bio}
                    </p>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-primary-accent mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {member.achievements.slice(0, 2).map((achievement, i) => (
                          <li key={i} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-primary-accent rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-xs text-primary-gray-400">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {member.specialties.slice(0, 2).map((specialty) => (
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
                        <Github className="h-4 w-4" />
                      </a>
                      <a
                        href={member.links.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-gray-400 hover:text-primary-accent transition-colors"
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                      <a
                        href={`mailto:${member.links.email}`}
                        className="text-primary-gray-400 hover:text-primary-accent transition-colors"
                      >
                        <Mail className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Alumni Network CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-card glow-border p-12"
          >
            <Award className="h-16 w-16 text-primary-accent mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 glow-text">
              Join Our Alumni Network
            </h2>
            <p className="text-xl text-primary-gray-300 mb-8 font-inter">
              Are you a Neural Hive alumni? Connect with us and help mentor the next generation of AI innovators.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:alumni@neuralhive.com"
                className="btn-primary"
              >
                Connect with Alumni
              </a>
              <a
                href="/contact"
                className="btn-secondary"
              >
                Update Your Info
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Legacy;
