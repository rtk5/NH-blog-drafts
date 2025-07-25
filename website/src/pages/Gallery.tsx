import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Camera, Filter, X, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryEvents = [
    {
      id: 1,
      title: 'BrainHack Hackathon 2024',
      slug: 'brainhack-hackathon-2024',
      category: '2024',
      event: 'BrainHack Hackathon',
      description: 'Teams working intensively during our 24-hour hackathon',
      coverImage: 'https://images.pexels.com/photos/7664747/pexels-photo-7664747.jpeg?auto=compress&cs=tinysrgb&w=800',
      photoCount: 18
    },
    {
      id: 2,
      title: 'Visionary Talks: Dr. Ananya Rao',
      slug: 'visionary-talks-dr-ananya-rao',
      category: '2024',
      event: 'Visionary Talks',
      description: 'Industry expert discussing AI in medical imaging',
      coverImage: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      photoCount: 15
    },
    {
      id: 3,
      title: 'ML 101 Workshop',
      slug: 'ml-101-workshop',
      category: '2025',
      event: 'ML Workshop',
      description: 'Hands-on learning session with neural networks',
      coverImage: 'https://images.pexels.com/photos/7661980/pexels-photo-7661980.jpeg?auto=compress&cs=tinysrgb&w=800',
      photoCount: 20
    },
    {
      id: 4,
      title: 'AI Bootcamp 2024',
      slug: 'ai-bootcamp-2024',
      category: '2024',
      event: 'AI Bootcamp',
      description: 'Welcome session for our comprehensive AI bootcamp',
      coverImage: 'https://images.pexels.com/photos/7662235/pexels-photo-7662235.jpeg?auto=compress&cs=tinysrgb&w=800',
      photoCount: 22
    },
    {
      id: 5,
      title: 'SNARLOS Robot Testing',
      slug: 'snarlos-robot-testing',
      category: '2024',
      event: 'Project Work',
      description: 'Testing our snake robot for disaster response scenarios',
      coverImage: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=800',
      photoCount: 16
    },
    {
      id: 6,
      title: 'Sign Language Glove Demo',
      slug: 'sign-language-glove-demo',
      category: '2024',
      event: 'Project Showcase',
      description: 'Demonstrating our sign language translation device',
      coverImage: 'https://images.pexels.com/photos/7048047/pexels-photo-7048047.jpeg?auto=compress&cs=tinysrgb&w=800',
      photoCount: 14
    },
    {
      id: 7,
      title: 'Neural Style Transfer Workshop',
      slug: 'neural-style-transfer-workshop',
      category: '2024',
      event: 'Workshop',
      description: 'Learning artistic AI image transformation techniques',
      coverImage: 'https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg?auto=compress&cs=tinysrgb&w=800',
      photoCount: 19
    },
    {
      id: 8,
      title: 'Team Building Session',
      slug: 'team-building-session',
      category: '2024',
      event: 'Team Building',
      description: 'Core team planning session for upcoming events',
      coverImage: 'https://images.pexels.com/photos/7275385/pexels-photo-7275385.jpeg?auto=compress&cs=tinysrgb&w=800',
      photoCount: 12
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
                key={`${event.id}-${activeFilter}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <Link to={`/gallery/${event.slug}`}>
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