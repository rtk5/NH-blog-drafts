import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, X, ChevronLeft, ChevronRight, Download, Calendar, MapPin } from 'lucide-react';

const EventGallery = () => {
  const { eventSlug } = useParams();
  const [selectedImage, setSelectedImage] = useState(null);

  // Sample event data - in a real app, this would come from a CMS or API
  const eventData = {
    'brainhack-hackathon-2024': {
      title: 'BrainHack Hackathon 2024',
      date: 'September 15-16, 2024',
      location: 'Innovation Lab, PESU EC',
      description: '40 teams competed in our flagship 24-hour hackathon with healthcare AI problem statements.',
      coverImage: 'https://images.pexels.com/photos/7664747/pexels-photo-7664747.jpeg?auto=compress&cs=tinysrgb&w=1200',
      photos: [
        {
          id: 1,
          src: 'https://images.pexels.com/photos/7664747/pexels-photo-7664747.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Opening ceremony with all participating teams'
        },
        {
          id: 2,
          src: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Teams brainstorming healthcare AI solutions'
        },
        {
          id: 3,
          src: 'https://images.pexels.com/photos/7688319/pexels-photo-7688319.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Intensive coding session during the hackathon'
        },
        {
          id: 4,
          src: 'https://images.pexels.com/photos/7662235/pexels-photo-7662235.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Mentors providing guidance to participants'
        },
        {
          id: 5,
          src: 'https://images.pexels.com/photos/7048047/pexels-photo-7048047.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Project presentations and demos'
        },
        {
          id: 6,
          src: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Late night debugging and development'
        },
        {
          id: 7,
          src: 'https://images.pexels.com/photos/7275385/pexels-photo-7275385.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Team collaboration and problem solving'
        },
        {
          id: 8,
          src: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Final presentations to the judging panel'
        },
        {
          id: 9,
          src: 'https://images.pexels.com/photos/7661980/pexels-photo-7661980.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Winners announcement and prize distribution'
        },
        {
          id: 10,
          src: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Networking session with industry experts'
        },
        {
          id: 11,
          src: 'https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Participants showcasing their innovative solutions'
        },
        {
          id: 12,
          src: 'https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Technical discussions and code reviews'
        },
        {
          id: 13,
          src: 'https://images.pexels.com/photos/7664747/pexels-photo-7664747.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Group photo of all participants and organizers'
        },
        {
          id: 14,
          src: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Refreshment break and informal networking'
        },
        {
          id: 15,
          src: 'https://images.pexels.com/photos/7688319/pexels-photo-7688319.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Setup and preparation before the event'
        },
        {
          id: 16,
          src: 'https://images.pexels.com/photos/7662235/pexels-photo-7662235.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Closing ceremony and feedback session'
        },
        {
          id: 17,
          src: 'https://images.pexels.com/photos/7048047/pexels-photo-7048047.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Behind the scenes - organizing team in action'
        },
        {
          id: 18,
          src: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Post-event celebration and team bonding'
        }
      ]
    },
    'visionary-talks-dr-ananya-rao': {
      title: 'Visionary Talks: Dr. Ananya Rao',
      date: 'November 21, 2024',
      location: 'Main Auditorium, PESU EC',
      description: 'Industry expert insights on AI applications in medical imaging and diagnostics.',
      coverImage: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200',
      photos: [
        {
          id: 1,
          src: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Dr. Ananya Rao presenting on AI in medical imaging'
        },
        {
          id: 2,
          src: 'https://images.pexels.com/photos/7275385/pexels-photo-7275385.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Packed auditorium with engaged audience'
        },
        {
          id: 3,
          src: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Interactive Q&A session with students'
        },
        {
          id: 4,
          src: 'https://images.pexels.com/photos/7662235/pexels-photo-7662235.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Technical demonstration of medical AI applications'
        },
        {
          id: 5,
          src: 'https://images.pexels.com/photos/7048047/pexels-photo-7048047.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Students taking notes during the presentation'
        },
        {
          id: 6,
          src: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Welcome address by Neural Hive president'
        },
        {
          id: 7,
          src: 'https://images.pexels.com/photos/7661980/pexels-photo-7661980.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Case studies in medical image analysis'
        },
        {
          id: 8,
          src: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Networking session after the talk'
        },
        {
          id: 9,
          src: 'https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Group photo with the speaker'
        },
        {
          id: 10,
          src: 'https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Students discussing career opportunities'
        },
        {
          id: 11,
          src: 'https://images.pexels.com/photos/7664747/pexels-photo-7664747.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Presentation slides on AI ethics in healthcare'
        },
        {
          id: 12,
          src: 'https://images.pexels.com/photos/7688319/pexels-photo-7688319.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Live demonstration of diagnostic AI tools'
        },
        {
          id: 13,
          src: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Closing remarks and vote of thanks'
        },
        {
          id: 14,
          src: 'https://images.pexels.com/photos/7275385/pexels-photo-7275385.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Faculty and students engaging with the speaker'
        },
        {
          id: 15,
          src: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Event setup and preparation'
        }
      ]
    },
    'ml-101-workshop': {
      title: 'ML 101 Workshop',
      date: 'January 12, 2025',
      location: 'Computer Lab 3, PESU EC',
      description: 'Intensive 4-hour journey from basic regression to convolutional neural networks.',
      coverImage: 'https://images.pexels.com/photos/7661980/pexels-photo-7661980.jpeg?auto=compress&cs=tinysrgb&w=1200',
      photos: [
        {
          id: 1,
          src: 'https://images.pexels.com/photos/7661980/pexels-photo-7661980.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Workshop introduction and agenda overview'
        },
        {
          id: 2,
          src: 'https://images.pexels.com/photos/7662235/pexels-photo-7662235.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Hands-on coding session with Python'
        },
        {
          id: 3,
          src: 'https://images.pexels.com/photos/7048047/pexels-photo-7048047.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Students working on linear regression exercises'
        },
        {
          id: 4,
          src: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Instructor explaining neural network concepts'
        },
        {
          id: 5,
          src: 'https://images.pexels.com/photos/7275385/pexels-photo-7275385.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Collaborative learning and peer assistance'
        },
        {
          id: 6,
          src: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'CNN implementation and image classification'
        },
        {
          id: 7,
          src: 'https://images.pexels.com/photos/7688319/pexels-photo-7688319.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Debugging and troubleshooting session'
        },
        {
          id: 8,
          src: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Project showcase and presentations'
        },
        {
          id: 9,
          src: 'https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Group discussion on ML applications'
        },
        {
          id: 10,
          src: 'https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Coffee break and informal networking'
        },
        {
          id: 11,
          src: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Advanced topics and future learning paths'
        },
        {
          id: 12,
          src: 'https://images.pexels.com/photos/7664747/pexels-photo-7664747.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Certificate distribution ceremony'
        },
        {
          id: 13,
          src: 'https://images.pexels.com/photos/7661980/pexels-photo-7661980.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Feedback session and workshop evaluation'
        },
        {
          id: 14,
          src: 'https://images.pexels.com/photos/7662235/pexels-photo-7662235.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Resource sharing and follow-up materials'
        },
        {
          id: 15,
          src: 'https://images.pexels.com/photos/7048047/pexels-photo-7048047.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Workshop organizers and participants'
        },
        {
          id: 16,
          src: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Lab setup and technical preparations'
        },
        {
          id: 17,
          src: 'https://images.pexels.com/photos/7275385/pexels-photo-7275385.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'One-on-one mentoring and guidance'
        },
        {
          id: 18,
          src: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Final group photo with all participants'
        },
        {
          id: 19,
          src: 'https://images.pexels.com/photos/7688319/pexels-photo-7688319.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Post-workshop discussion and next steps'
        },
        {
          id: 20,
          src: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Cleanup and event wrap-up'
        }
      ]
    }
  };

  const event = eventData[eventSlug];

  if (!event) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-poppins font-bold mb-4 glow-text">Event Not Found</h1>
          <p className="text-primary-gray-400 mb-8">The event gallery you're looking for doesn't exist.</p>
          <Link to="/gallery" className="btn-primary">
            Back to Gallery
          </Link>
        </div>
      </div>
    );
  }

  const openLightbox = (photo) => {
    setSelectedImage(photo);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    const currentIndex = event.photos.findIndex(photo => photo.id === selectedImage.id);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % event.photos.length;
    } else {
      newIndex = (currentIndex - 1 + event.photos.length) % event.photos.length;
    }
    
    setSelectedImage(event.photos[newIndex]);
  };

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