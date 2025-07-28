import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, X, ChevronLeft, ChevronRight, Download, Calendar, MapPin } from 'lucide-react';

const EventGallery = () => {
  const { eventSlug } = useParams();
  const [selectedImage, setSelectedImage] = useState(null);

  // Sample event data - in a real app, this would come from a CMS or API
  const eventData = {
  'reinforcement-learning-rewired': {
  title: 'Reinforcement Learning Rewired',
  date: 'September 15-16, 2024',
  location: 'PESU EC',
  description: 'An advanced workshop exploring how reinforcement learning drives decision-making in AI systems. Participants experimented with OpenAI Gym and policy optimization strategies.',
  coverImage: 'https://i.postimg.cc/1tNSHRXV/rlr.jpg',
  photos: [
    {
      id: 1,
      src: 'https://i.postimg.cc/76q4v53F/IMG-20250212-WA0017.jpg',
      caption: 'Participants arriving for the RL workshop'
    },
    {
      id: 2,
      src: 'https://i.postimg.cc/d3xcTnbF/IMG-20250212-WA0023.jpg',
      caption: 'Session on OpenAI Gym basics and environments'
    },
    {
      id: 3,
      src: 'https://i.postimg.cc/tJTHT8mD/IMG-20250212-WA0025.jpg',
      caption: 'Explaining reward functions and learning loops'
    },
    {
      id: 4,
      src: 'https://i.postimg.cc/qRQTppQz/IMG-20250212-WA0027.jpg',
      caption: 'Hands-on activity with policy gradient methods'
    },
    {
      id: 5,
      src: 'https://i.postimg.cc/c19Sj4rz/IMG-20250212-WA0029.jpg',
      caption: 'Live demo of reinforcement learning agents in action'
    },
    {
      id: 6,
      src: 'https://i.postimg.cc/bN4jyC0H/IMG-20250212-WA0031.jpg',
      caption: 'Student team coding their custom RL environments'
    },
    {
      id: 7,
      src: 'https://i.postimg.cc/hPXBqWmt/IMG-20250212-WA0033.jpg',
      caption: 'Mentors assisting participants with debugging'
    },
    {
      id: 8,
      src: 'https://i.postimg.cc/XYF6pfQM/IMG-20250212-WA0035.jpg',
      caption: 'Workshop discussions on real-world RL use cases'
    },
    {
      id: 9,
      src: 'https://i.postimg.cc/cJSyYvbv/IMG-20250212-WA0046.jpg',
      caption: 'Group photo wrapping up the workshop'
    }
  ]
}

  'agentic-101': {
  title: 'Agentic 101',
  date: 'August 2, 2024',
  location: 'Smart Classroom 401, PESU EC',
  description: 'A hands-on workshop that introduced students to agent-based modeling, intelligent agents, and simulations using modern AI tools.',
  coverImage: 'https://i.postimg.cc/LsmkMhLL/Whats-App-Image-2025-07-27-at-12-20-40-20dfe780.jpg',
  photos: [
    {
      id: 1,
      src: 'https://i.postimg.cc/mDPwgwyC/nh-img1.jpg',
      caption: 'Introduction to intelligent agents and agent-based modeling'
    },
    {
      id: 2,
      src: 'https://i.postimg.cc/zB4kbgxM/nh-img2.jpg',
      caption: 'Participants engaged in interactive AI simulation activities'
    },
    {
      id: 3,
      src: 'https://i.postimg.cc/QC5JpdPM/nh-img3.jpg',
      caption: 'Live demo session on building AI agents'
    },
    {
      id: 4,
      src: 'https://i.postimg.cc/1RNBxvtZ/nh-img4.jpg',
      caption: 'Explaining real-world applications of agent-based systems'
    },
    {
      id: 5,
      src: 'https://i.postimg.cc/gkFDG3XL/nh-img5.jpg',
      caption: 'Students coding behavior-driven agents in Python'
    },
    {
      id: 6,
      src: 'https://i.postimg.cc/bNxRrdkC/nh-img6.jpg',
      caption: 'Problem-solving session with collaborative groups'
    },
    {
      id: 7,
      src: 'https://i.postimg.cc/SxV7L5Zc/nh-img7.jpg',
      caption: 'Group photo after successful completion of the workshop'
    }
  ]
}


  'canvas-clue': {
  title: 'Canvas Clue',
  date: 'July 20, 2024',
  location: 'Drawing Hall, PESU EC',
  description: 'A competitive AI-themed Pictionary game where teams illustrated technical terms using drawing prompts and guessed each other’s sketches.',
  coverImage: 'https://i.postimg.cc/mgkz3MYd/can.jpg',
  photos: [
    {
      id: 1,
      src: 'https://i.postimg.cc/CxMx86ny/DSC-0571.jpg',
      caption: 'Participants sketching AI terms under time pressure'
    },
    {
      id: 2,
      src: 'https://i.postimg.cc/bw6N9H1Z/DSC-0572.jpg',
      caption: 'Teams collaborating on technical clues'
    },
    {
      id: 3,
      src: 'https://i.postimg.cc/1zfRCnKJ/DSC-0574.jpg',
      caption: 'Audience enjoying the rapid-fire guesses'
    },
    {
      id: 4,
      src: 'https://i.postimg.cc/TPFdZd7G/DSC-0581.jpg',
      caption: 'Judges evaluating the best artistic interpretations'
    },
    {
      id: 5,
      src: 'https://i.postimg.cc/76zH4Fdz/DSC-0584.jpg',
      caption: 'Whiteboards full of creative machine learning doodles'
    },
    {
      id: 6,
      src: 'https://i.postimg.cc/CL7FwHPc/DSC-0586.jpg',
      caption: 'Teams presenting their clue interpretations'
    },
    {
      id: 7,
      src: 'https://i.postimg.cc/C5VFxvpQ/IMG-2505-Enhanced-NR.jpg',
      caption: 'Excitement builds during the final round'
    },
    {
      id: 8,
      src: 'https://i.postimg.cc/nVvFPtvb/IMG-2512-Enhanced-NR.jpg',
      caption: 'Quick-thinking participants drawing neural nets and algorithms'
    },
    {
      id: 9,
      src: 'https://i.postimg.cc/Y0ftG1pq/IMG-2516-Enhanced-NR.jpg',
      caption: 'Laughter and learning combined in every round'
    },
    {
      id: 10,
      src: 'https://i.postimg.cc/QdMjC9vh/IMG-2522-Enhanced-NR.jpg',
      caption: 'Winners being awarded for the most creative clue-solving'
    }
  ]
}
  'establishing-causality-ai-mental-health': {
  title: 'Establishing Causality in Complex Mental Issues using AI',
  date: 'October 16, 2024',
  location: 'PESU EC',
  description: 'An expert-led seminar exploring the role of AI in understanding and establishing causal links in mental health disorders, combining neuroscience, data science, and ethical frameworks.',
  coverImage: 'https://i.postimg.cc/c1TLDC4P/cas.jpg',
  photos: [
    {
      id: 1,
      src: 'https://i.postimg.cc/Kv2HJ65W/Whats-App-Image-2024-10-16-at-20-26-16-93851dcc.jpg',
      caption: 'Speaker introducing AI applications in mental health'
    },
    {
      id: 2,
      src: 'https://i.postimg.cc/FHFnQ08g/Whats-App-Image-2024-10-16-at-20-26-16-98496f6d.jpg',
      caption: 'Audience engaged during the causality session'
    },
    {
      id: 3,
      src: 'https://i.postimg.cc/6pHb6yNs/Whats-App-Image-2024-10-16-at-20-26-17-2b493d99.jpg',
      caption: 'Visualizations of causal inference models'
    },
    {
      id: 4,
      src: 'https://i.postimg.cc/rFNYbfnw/Whats-App-Image-2024-10-16-at-20-26-18-0e665e4e.jpg',
      caption: 'Discussion on AI ethics in mental healthcare'
    },
    {
      id: 5,
      src: 'https://i.postimg.cc/MGvPnqWn/Whats-App-Image-2024-10-16-at-20-26-21-37b574f9.jpg',
      caption: 'Interactive Q&A session with the expert'
    },
    {
      id: 6,
      src: 'https://i.postimg.cc/vmkP9kB3/Whats-App-Image-2024-10-16-at-20-26-25-b540f7d8.jpg',
      caption: 'Attendees networking after the session'
    },
    {
      id: 7,
      src: 'https://i.postimg.cc/FRSTxpkm/Whats-App-Image-2024-10-16-at-20-26-26-94b25a7d.jpg',
      caption: 'Closing remarks and group photo'
    }
  ]
}


  'filter-fiesta': {
  title: 'Filter Fiesta',
  date: 'October 24, 2024',
  location: 'PESU EC',
  description: 'A vibrant photo-filter themed event encouraging creativity, photography, and fun interaction using real-time computer vision and AR filters.',
  coverImage: 'https://i.postimg.cc/rwkZKV5F/filtrer.jpg',
  photos: [
    {
      id: 1,
      src: 'https://i.postimg.cc/sfNp27M4/DSC-0974.jpg',
      caption: 'Participants engaging with AR filters'
    },
    {
      id: 2,
      src: 'https://i.postimg.cc/VkynqwBS/DSC-0975.jpg',
      caption: 'Creative filter showcase in action'
    },
    {
      id: 3,
      src: 'https://i.postimg.cc/c4tftCYy/DSC-0976.jpg',
      caption: 'Team capturing fun moments'
    },
    {
      id: 4,
      src: 'https://i.postimg.cc/fbDdPvPD/DSC-0978.jpg',
      caption: 'Hands-on with photo filter customization'
    },
    {
      id: 5,
      src: 'https://i.postimg.cc/9QGT1kJL/DSC-0980.jpg',
      caption: 'Behind the scenes of the setup'
    },
    {
      id: 6,
      src: 'https://i.postimg.cc/xCdzf1YZ/DSC-0982.jpg',
      caption: 'Participants exploring facial tracking filters'
    },
    {
      id: 7,
      src: 'https://i.postimg.cc/d1STLcVV/DSC-0989.jpg',
      caption: 'Group enjoying the filter experience'
    },
    {
      id: 8,
      src: 'https://i.postimg.cc/Y05GzNgc/DSC-0990.jpg',
      caption: 'Filter Fiesta booth interactions'
    },
    {
      id: 9,
      src: 'https://i.postimg.cc/SQ3M44PZ/DSC-0991.jpg',
      caption: 'Judges reviewing creative entries'
    },
    {
      id: 10,
      src: 'https://i.postimg.cc/65ZG5SJB/DSC-0992.jpg',
      caption: 'Final celebration and prize distribution'
    }
  ]
}



  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 neuron-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link 
              to="/gallery" 
              className="inline-flex items-center text-primary-accent hover:text-primary-magenta transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Gallery
            </Link>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-poppins font-bold mb-6 glow-text">
                  {event.title}
                </h1>
                
                <div className="flex flex-col space-y-4 mb-6">
                  <div className="flex items-center space-x-3 text-primary-gray-300">
                    <Calendar className="h-5 w-5 text-primary-accent" />
                    <span className="font-inter">{event.date}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-primary-gray-300">
                    <MapPin className="h-5 w-5 text-primary-accent" />
                    <span className="font-inter">{event.location}</span>
                  </div>
                </div>
                
                <p className="text-xl text-primary-gray-300 font-inter leading-relaxed mb-8">
                  {event.description}
                </p>
                
                <div className="flex items-center space-x-4">
                  <span className="bg-primary-accent text-primary-bg px-4 py-2 rounded-full text-sm font-semibold">
                    {event.photos.length} Photos
                  </span>
                </div>
              </div>
              
              <div className="relative">
                <img
                  src={event.coverImage}
                  alt={event.title}
                  className="w-full h-96 object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Photo Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {event.photos.map((photo, index) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
                onClick={() => openLightbox(photo)}
              >
                <div className="relative overflow-hidden rounded-lg bg-primary-card hover:shadow-lg hover:shadow-primary-accent/20 transition-all duration-300">
                  <img
                    src={photo.src}
                    alt={photo.caption}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-bg/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white text-sm font-inter line-clamp-2">
                        {photo.caption}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-6xl max-h-full" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 p-2 bg-primary-bg/80 text-white rounded-full hover:bg-primary-accent transition-colors"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={() => navigateImage('prev')}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-primary-bg/80 text-white rounded-full hover:bg-primary-accent transition-colors"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <button
              onClick={() => navigateImage('next')}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-primary-bg/80 text-white rounded-full hover:bg-primary-accent transition-colors"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Download Button */}
            <button
              onClick={() => window.open(selectedImage.src, '_blank')}
              className="absolute top-4 left-4 z-10 p-2 bg-primary-bg/80 text-white rounded-full hover:bg-primary-accent transition-colors"
            >
              <Download className="h-6 w-6" />
            </button>

            {/* Image */}
            <img
              src={selectedImage.src}
              alt={selectedImage.caption}
              className="max-w-full max-h-[70vh] object-contain rounded-lg"
            />

            {/* Image Info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary-bg/90 to-transparent p-6 rounded-b-lg">
              <p className="text-white font-inter text-lg">
                {selectedImage.caption}
              </p>
              <div className="flex items-center justify-between mt-2">
                <span className="text-primary-gray-400 text-sm">
                  {event.photos.findIndex(p => p.id === selectedImage.id) + 1} of {event.photos.length}
                </span>
                <button
                  onClick={() => window.open(selectedImage.src, '_blank')}
                  className="flex items-center space-x-2 text-primary-accent hover:text-primary-magenta transition-colors"
                >
                  <Download className="h-4 w-4" />
                  <span>Download</span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Event Stats */}
      <section className="py-20 bg-primary-card/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-card glow-border p-12"
          >
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 glow-text">
              Event Highlights
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-2xl font-poppins font-bold text-primary-accent mb-2">
                  {event.photos.length}
                </h3>
                <p className="text-primary-gray-300 font-inter">Photos Captured</p>
              </div>
              <div>
                <h3 className="text-2xl font-poppins font-bold text-primary-accent mb-2">
                  {event.title.includes('Hackathon') ? '40+' : event.title.includes('Workshop') ? '80+' : '300+'}
                </h3>
                <p className="text-primary-gray-300 font-inter">Participants</p>
              </div>
              <div>
                <h3 className="text-2xl font-poppins font-bold text-primary-accent mb-2">
                  {event.title.includes('Hackathon') ? '24h' : event.title.includes('Workshop') ? '4h' : '2h'}
                </h3>
                <p className="text-primary-gray-300 font-inter">Duration</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default EventGallery;