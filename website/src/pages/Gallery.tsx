import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Camera, Filter, ArrowRight } from 'lucide-react';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryEvents = [
    {
      id: 1,
      title: 'Reinforcement Learning Rewired',
      slug: 'reinforcement-learning-rewired',
      category: '2024',
      event: 'AI Workshop',
      description: 'An advanced workshop exploring how reinforcement learning drives decision-making in AI systems. Participants experimented with OpenAI Gym and policy optimization strategies.',
      coverImage: 'https://i.postimg.cc/1tNSHRXV/rlr.jpg0',
      photoCount: 21
    },
    {
      id: 2,
      title: 'Agentic 101',
      slug: 'agentic-101',
      category: '2025',
      event: 'Beginner Talk',
      description: 'An introductory session on agentic systems and LLM-based autonomous agents. Attendees gained conceptual understanding and real-world use cases of AI agents.',
      coverImage: 'https://i.postimg.cc/LsmkMhLL/Whats-App-Image-2025-07-27-at-12-20-40-20dfe780.jpg',
      photoCount: 14
    },
    {
      id: 3,
      title: 'Canvas Clue',
      slug: 'canvas-clue',
      category: '2024',
      event: 'AI + Art Challenge',
      description: 'Participants combined AI-generated hints and human creativity to decode abstract art using computer vision and NLP. A fun, hands-on blend of AI and artistic interpretation.',
      coverImage: 'https://i.postimg.cc/mgkz3MYd/can.jpg',
      photoCount: 17
    },
    {
      id: 4,
      title: 'Establishing Causality in Complex Mental Issues using AI',
      slug: 'causality-in-mental-health-ai',
      category: '2024',
      event: 'Tech Talk',
      description: 'A research-focused session exploring how machine learning models can infer causal links in mental health conditions, using graph-based algorithms and observational data.',
      coverImage: 'https://i.postimg.cc/c1TLDC4P/cas.jpg',
      photoCount: 13
    },
    {
      id: 5,
      title: 'Filter Fiesta',
      slug: 'filter-fiesta',
      category: '2024',
      event: 'Workshop',
      description: 'Participants learned to build Snapchat-style face filters using Python, OpenCV, and MediaPipe. Real-time face landmark detection was a key highlight.',
      coverImage: 'https://i.postimg.cc/rwkZKV5F/filtrer.jpg',
      photoCount: 18
    }
  ];

  const filters = ['All', '2024', '2025'];

  const filteredEvents = activeFilter === 'All' 
    ? galleryEvents 
    : galleryEvents.filter(event => event.category === activeFilter);

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
            <Camera className="h-20 w-20 text-primary-accent mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-poppins font-bold mb-6 glow-text">
              Gallery
            </h1>
            <p className="text-xl text-primary-gray-300 font-inter">
              Capturing moments of innovation, learning, and community growth
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-primary-card/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="flex items-center justify-center space-x-2 mb-8">
              <Filter className="h-6 w-6 text-primary-accent" />
              <h2 className="text-2xl font-poppins font-semibold glow-text">Filter by Year</h2>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-3 rounded-full font-inter font-medium transition-all duration-300 ${
                    activeFilter === filter
                      ? 'bg-primary-accent text-primary-bg'
                      : 'bg-primary-card text-primary-gray-300 hover:bg-primary-accent/20 hover:text-primary-accent border border-primary-gray-700'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Event Gallery Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredEvents.map((event, index) => (
              <motion.div
                key={${event.id}-${activeFilter}}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <Link to={/gallery/${event.slug}}>
                  <div className="relative overflow-hidden rounded-xl bg-primary-card glass-card glow-border hover:shadow-lg hover:shadow-primary-accent/20 transition-all duration-300">
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={event.coverImage}
                        alt={event.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-bg/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-4 left-4 right-4">
                          <h3 className="text-white font-poppins font-semibold text-sm mb-1 line-clamp-2">
                            {event.title}
                          </h3>
                          <p className="text-primary-gray-300 text-xs font-inter mb-2">
                            {event.event}
                          </p>
                          <div className="flex items-center text-primary-accent text-xs font-medium">
                            <span>{event.photoCount} photos</span>
                            <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                      <div className="absolute top-4 right-4 bg-primary-accent text-primary-bg px-2 py-1 rounded-full text-xs font-semibold">
                        {event.category}
                      </div>
                      <div className="absolute top-4 left-4 bg-primary-bg/80 text-white px-2 py-1 rounded-full text-xs font-semibold">
                        {event.photoCount} photos
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <h3 className="text-lg font-poppins font-semibold mb-2 group-hover:text-primary-accent transition-colors line-clamp-2">
                        {event.title}
                      </h3>
                      <p className="text-primary-gray-400 font-inter text-sm mb-3 leading-relaxed line-clamp-2">
                        {event.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-primary-gray-500 text-xs">{event.event}</span>
                        <div className="flex items-center text-primary-accent text-sm font-medium group-hover:translate-x-1 transition-transform">
                          <span>View Gallery</span>
                          <ArrowRight className="ml-1 h-3 w-3" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
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
              Moments Captured
            </h2>
            <p className="text-xl text-primary-gray-400 font-inter">
              A visual journey through our community's growth and achievements
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: '500+', label: 'Photos Captured', sublabel: 'Across all events' },
              { number: '15+', label: 'Events Documented', sublabel: 'Since our founding' },
              { number: '1000+', label: 'Memories Created', sublabel: 'Community moments' }
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

export default Gallery;