import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Clock, Star, Trophy, Mic, Code } from 'lucide-react';

const Events = () => {
  const events = [
    {
      title: 'AI Bootcamp',
      date: '10 Aug 2024',
      time: '9:00 AM - 6:00 PM',
      type: '2-day Workshop',
      location: 'PESU EC Campus',
      attendees: 150,
      status: 'completed',
      description: 'Comprehensive introduction to Python ML libraries and hands-on Kaggle mini-competition.',
      highlights: ['Python fundamentals', 'Scikit-learn workshop', 'Kaggle competition', 'Industry mentors'],
      image: 'https://images.pexels.com/photos/7662235/pexels-photo-7662235.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: Code
    },
    {
      title: 'BrainHack Hackathon',
      date: '15 Sep 2024',
      time: '6:00 PM - 6:00 PM (+1)',
      type: '24h Hackathon',
      location: 'Innovation Lab, PESU EC',
      attendees: 160,
      status: 'completed',
      description: '40 teams competed with healthcare AI problem statements and real-world datasets.',
      highlights: ['Healthcare AI focus', '40 competing teams', '₹50,000 prize pool', 'Industry judges'],
      image: 'https://images.pexels.com/photos/7664747/pexels-photo-7664747.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: Trophy,
      featured: true
    },
    {
      title: 'Visionary Talks: Dr. Ananya Rao',
      date: '21 Nov 2024',
      time: '4:00 PM - 6:00 PM',
      type: 'Speaker Session',
      location: 'Main Auditorium',
      attendees: 300,
      status: 'completed',
      description: 'Industry expert insights on AI applications in medical imaging and diagnostics.',
      highlights: ['Medical AI applications', 'Industry case studies', 'Career guidance', 'Q&A session'],
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: Mic
    },
    {
      title: 'ML 101 Workshop',
      date: '12 Jan 2025',
      time: '10:00 AM - 2:00 PM',
      type: 'Hands-on Workshop',
      location: 'Computer Lab 3',
      attendees: 80,
      status: 'completed',
      description: 'Intensive 4-hour journey from basic regression to convolutional neural networks.',
      highlights: ['Linear regression basics', 'Neural network theory', 'CNN implementation', 'Project showcase'],
      image: 'https://images.pexels.com/photos/7661980/pexels-photo-7661980.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: Code
    },
    {
      title: 'RoboRace Challenge',
      date: '23 Mar 2025',
      time: '9:00 AM - 5:00 PM',
      type: 'Competition',
      location: 'Robotics Arena',
      attendees: 120,
      status: 'upcoming',
      description: 'Autonomous robot competition featuring line-following and computer vision tasks.',
      highlights: ['Line-following challenge', 'Object detection tasks', 'Autonomous navigation', 'Team collaboration'],
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