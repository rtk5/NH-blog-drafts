import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Clock, Star, Trophy, Mic, Code } from 'lucide-react';

const Events = () => {
  const events = [
    {
      title: 'Filter Fiesta',
      date: '17th April, 2024',
      time: '2:30 PM - 4:30 PM',
      type: 'Workshop',
      location: 'Seminar Hall 1 - Electronic City Campus',
      attendees: 150,
      status: 'completed',
      description: 'Filter Fiesta marked the beginning of our club’s hands-on journey into applied AI. In this interactive workshop, participants learned how to create real-time Snapchat-style face filters using Python, OpenCV, and MediaPipe. By detecting facial landmarks and applying custom visual effects, attendees explored the foundations of computer vision and real-time image processing.The session provided practical exposure to facial recognition pipelines that are widely used in augmented reality, virtual try-ons, and next-generation user experiences in the tech industry.',
      highlights: ['Python', 'OpenCV', 'MediaPipe ', 'Computer Vision Algorithms','Understanding the pipeline of face detection and landmark mapping','Hands-on experience with integrating AI models into live, interactive applications','Understanding the pipeline of face detection and landmark mapping','Hands-on experience with integrating AI models into live, interactive applications'],
      image: 'https://images.pexels.com/photos/7662235/pexels-photo-7662235.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: Code
    },
    {
      title: 'Establishing Causality in Complex Mental Issues using AI',
      date: '16th October, 2024',
      time: '6:00 PM - 8:00 PM',
      type: 'Webinar',
      location: 'Webinar held on Google Meet',
      attendees: 160,
      status: 'completed',
      description: 'In collaboration with WEAL, Neural Hive hosted an insightful webinar on the intersection of AI and Mental Health, featuring Ayushi Agarwal, Head of Data Science at United We Care. The session provided a deep dive into how AI technologies are being applied to address complex challenges in mental health care.From causality analysis to the use of advanced models like Spatio-Temporal Graph Neural Networks, the webinar emphasized the need for ethical AI practices while showcasing the transformative role of data science in personalized healthcare',
      highlights: ['Spatio-Temporal Graph Neural Networks (GNNs)', 'Causal Inference Models', 'AI-driven Mental Health Monitoring Tools', 'Data Ethics Frameworks','Gaining awareness of how advanced AI models can be responsibly applied in mental health','Understanding the importance of causality and ethical AI in healthcare solutions'],
      image: 'https://images.pexels.com/photos/7664747/pexels-photo-7664747.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: Trophy,
      featured: true
    },
    {
      title: 'Canvas Clue',
      date: '6th November, 2024',
      time: '1:30 PM - 5:00 PM',
      type: 'Workshop',
      location: 'Seminar Hall 1 - Electronic City Campus',
      attendees: 300,
      status: 'completed',
      description: 'As part of PES University\'s annual techno-cultural fest Maaya, Neural Hive hosted Canvas Clue—a data-driven mystery event where machine learning met storytelling. The session challenged participants to act as data detectives, unraveling an art heist mystery using real-world ML techniques. Teams worked through a series of pop-culture-inspired datasets, using outlier detection, classification models, and data exploration to identify stolen artworks and track down fictional crime syndicates. With four flags to uncover and a dramatic final puzzle, the event combined critical thinking, creative problem-solving, and technical skills in a one-of-a-kind ML experience.',
      highlights: ['Python (Pandas, Scikit-Learn)', 'Outlier Detection Algorithms', 'Exploratory Data Analysis (EDA)', 'Classification & Predictive Modeling','Learning how to apply ML techniques like outlier detection in unconventional, story-driven contexts','Gaining experience in team-based problem-solving using real-world data'],
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: Mic
    },
    {
      title: 'Agentic 101',
      date: '29th Jan 2025',
      time: '2:30 PM - 4:45 PM',
      type: 'Hands-on Workshop',
      location: 'Seminar Hall 1 - Electronic City Campus',
      attendees: 80,
      status: 'completed',
      description: 'AGENTIC 101 was an engaging workshop conducted by Neural Hive that introduced participants to some of the most cutting-edge concepts in the AI landscape—Generative AI (GenAI), Retrieval-Augmented Generation (RAG), and Agentic Patterns. The session provided valuable insights into the emerging ideas that are shaping the future of intelligent systems.The workshop covered how GenAI models can generate coherent, creative content, how RAG enables AI to augment its responses with real-time, context-aware information, and how agentic patterns allow AI systems to go beyond reactive responses—toward goal-driven planning and autonomous behavior.',
      highlights: ['Generative AI (LLMs)', 'Retrieval-Augmented Generation (RAG)', 'Agentic Design Patterns', 'Python-based Implementation Frameworks','Understanding how GenAI models create human-like responses and creative outputs','Learned how RAG and agentic systems make AI more context-aware and autonomous'],
      image: 'https://images.pexels.com/photos/7661980/pexels-photo-7661980.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: Code
    },
    {
      title: 'Reinforcement Learning Rewired',
      date: '12th February, 2025',
      time: '10:00 AM - 3:00 PM',
      type: 'Competition',
      location: 'Seminar Hall 1 - Electronic City Campus',
      attendees: 120,
      status: 'upcoming',
      description: 'Reinforcement Learning Rewired was an interactive, hands-on workshop hosted by Neural Hive that introduced students to the fundamentals of Reinforcement Learning (RL) and its growing real-world applications. Designed around the concept of building intelligent agents, the session offered a fun, game-based approach to learning how AI makes decisions through trial and error.Participants got to experiment with DeepSeek, an open-source LLM that runs locally—giving them insights into GenAI while also highlighting the value of data privacy. They then built their own RL-powered agents using Q-Learning algorithms, putting theory into practice through mini-games like Tic-Tac-Toe, where the AI learned and improved with every move.',
      highlights: ['Reinforcement Learning (Q-Learning)','DeepSeek (Local LLMs)','Python & OpenAI Gym-style Environments','Agent Training Pipelines','Game-based Simulation Environments','Understanding how RL enables agents to make autonomous decisions based on rewards and feedback','Hands-on experience in implementing RL algorithms in gaming scenarios','Understanding how local LLMs like DeepSeek support privacy-friendly AI experimentation'],
      image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: Trophy,
      featured: true
    }
  ];

  const upcomingEvents = events.filter(event => event.status === 'upcoming');
  const pastEvents = events.filter(event => event.status === 'completed');

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
            <Calendar className="h-20 w-20 text-primary-accent mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-poppins font-bold mb-6 glow-text">
              Events & Workshops
            </h1>
            <p className="text-xl text-primary-gray-300 font-inter">
              Connecting minds, building futures - our journey of innovation and learning
            </p>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events */}
      {upcomingEvents.length > 0 && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <Star className="h-16 w-16 text-primary-accent mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 glow-text">
                Upcoming Events
              </h2>
              <p className="text-xl text-primary-gray-400 font-inter">
                Don't miss out on our next exciting activities
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {upcomingEvents.map((event, index) => (
                <motion.div
                  key={event.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="glass-card glow-border overflow-hidden group hover:shadow-lg hover:shadow-primary-accent/20 transition-all duration-300"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 bg-primary-magenta text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Upcoming
                    </div>
                    <div className="absolute top-4 right-4 bg-primary-accent text-primary-bg px-3 py-1 rounded-full text-sm font-semibold">
                      {event.type}
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <div className="flex items-center space-x-2 mb-4">
                      <event.icon className="h-6 w-6 text-primary-accent" />
                      <h3 className="text-2xl font-poppins font-bold">{event.title}</h3>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 text-sm text-primary-gray-400">
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4" />
                        <span>{event.attendees} expected</span>
                      </div>
                    </div>
                    
                    <p className="text-primary-gray-300 font-inter mb-6 leading-relaxed">
                      {event.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-primary-accent mb-3">Event Highlights:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {event.highlights.map((highlight) => (
                          <div key={highlight} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-primary-accent rounded-full"></div>
                            <span className="text-xs text-primary-gray-400">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <button className="w-full btn-primary">
                      Register Now
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Past Events */}
      <section className="py-20 bg-primary-card/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Trophy className="h-16 w-16 text-primary-accent mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 glow-text">
              Past Events
            </h2>
            <p className="text-xl text-primary-gray-400 font-inter">
              Celebrating our journey of successful events and memorable moments
            </p>
          </motion.div>

          <div className="space-y-8">
            {pastEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className={`glass-card glow-border overflow-hidden group hover:shadow-lg hover:shadow-primary-accent/20 transition-all duration-300 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } flex flex-col lg:flex`}
              >
                <div className="lg:w-1/2 relative h-64 lg:h-auto overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-primary-gray-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Completed
                  </div>
                  <div className="absolute top-4 right-4 bg-primary-accent text-primary-bg px-3 py-1 rounded-full text-sm font-semibold">
                    {event.type}
                  </div>
                  {event.featured && (
                    <div className="absolute bottom-4 left-4 bg-primary-magenta text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </div>
                  )}
                </div>
                
                <div className="lg:w-1/2 p-8">
                  <div className="flex items-center space-x-2 mb-4">
                    <event.icon className="h-6 w-6 text-primary-accent" />
                    <h3 className="text-2xl font-poppins font-bold">{event.title}</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 text-sm text-primary-gray-400">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4" />
                      <span>{event.attendees} attendees</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4" />
                      <span>{event.time}</span>
                    </div>
                  </div>
                  
                  <p className="text-primary-gray-300 font-inter mb-6 leading-relaxed">
                    {event.description}
                  </p>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-primary-accent mb-3">Key Highlights:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {event.highlights.map((highlight) => (
                        <div key={highlight} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary-accent rounded-full"></div>
                          <span className="text-xs text-primary-gray-400">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
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
              Event Impact
            </h2>
            <p className="text-xl text-primary-gray-400 font-inter">
              Numbers that showcase our community's growth and engagement
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '5', label: 'Events Conducted', sublabel: '2024-25 Academic Year' },
              { number: '810+', label: 'Total Attendees', sublabel: 'Across all events' },
              { number: '40', label: 'Teams Participated', sublabel: 'In hackathons' },
              { number: '100%', label: 'Success Rate', sublabel: 'Event completion' }
            ].map((stat, index) => (
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
    </div>
  );
};

export default Events;