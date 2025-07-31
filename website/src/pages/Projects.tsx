import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Cpu, Filter, Star } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
  title: 'Real Time Voice Authentication For Attendance Monitoring',
  category: 'Hivemind',
  status: 'Completed',
  description: 'A robust voice-based attendance system that leverages advanced speaker recognition technology for contactless user authentication. The comprehensive biometric authentication pipeline features audio preprocessing including format conversion, noise reduction, and bandpass filtering, coupled with deep learning-based speaker recognition using the ECAPA-TDNN architecture from SpeechBrain. The system processes real-time voice recordings, extracts high-dimensional speaker embeddings, and employs cosine similarity matching for identity verification against a reference database. Through precise cosine distance calculations, the system accurately matches live voice recordings against pre-registered speaker profiles, enabling seamless attendance verification. Enhanced with audio augmentation for improved robustness, an interactive CLI for real-time operation, and comprehensive logging for system monitoring, this solution is ideal for educational institutions and organizational environments requiring reliable biometric attendance tracking.',
  tech: ['Python', 'SpeechBrain', 'ECAPA-TDNN', 'PyTorch', 'NumPy', 'librosa', 'scipy', 'soundfile'],
  image: 'https://images.pexels.com/photos/302655/pexels-photo-302655.jpeg?_gl=1*lw79ey*_ga*MTQzOTg2MjI5OS4xNzUzOTcwNDcy*_ga_8JE65Q40S6*czE3NTM5NzA0NzEkbzEkZzEkdDE3NTM5NzA0ODEkajUwJGwwJGgw',
  github: 'https://github.com/rtk5/AI-Based-Attendance-System-using-Voice-Recognition',
  demo: null,
  featured: true
},
    {
  title: 'Personalised AI Automated Social Media Manager',
  category: 'Hivemind',
  status: 'Completed',
  description: 'A personalized social media manager built for clubs and student communities that automates the end-to-end process of generating event-specific promotional content using current social media trends and club-specific knowledge. By combining real-time scraping from platforms like Instagram and YouTube with a RAG pipeline powered by Gemini and ChromaDB, the system produces tailored content ideas including reel scripts, posters, and audio suggestions. The modular architecture integrates real-time social media scraping, retrieval-augmented generation, and multi-modal content suggestion through a hybrid LlamaIndex–LangChain setup for context-aware retrieval. Designed for modularity and reusability, it supports dynamic event input, robust club profile memory, and multi-platform content strategies, making it ideal for clubs aiming to boost engagement with minimal manual content planning.',
  tech: ['Python', 'Streamlit', 'Gemini', 'HuggingFace Embeddings', 'ChromaDB', 'LangChain', 'LlamaIndex', 'BeautifulSoup', 'YouTube Data API', 'Instagram Web Scraper', 'Pillow'],
  image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
  github: 'https://github.com/rtk5/AI-Based-Attendance-System-using-Voice-Recognition',
  demo: null,
  featured: true
},
{
  title: 'Explainable Anomaly Detection in Smart Grids using Autoencoders and TreeSHAP',
  category: 'Hivemind',
  status: 'Completed',
  description: 'An interpretable anomaly detection framework tailored for smart grid data that employs a hybrid ML pipeline comprising a Variational Autoencoder for unsupervised anomaly detection, a Random Forest classifier for refined decision boundaries, and TreeSHAP for explainable output. The system takes in preprocessed grid telemetry data, compresses it through the VAE to learn latent patterns of normal operating behavior, classifies anomalies based on reconstruction error, and provides transparent feature-level explanations through TreeSHAP. This approach makes the model trustworthy and usable in critical infrastructure monitoring where understanding the reasoning behind anomaly detection is crucial for operational safety and regulatory compliance.',
  tech: ['Python', 'PyTorch', 'Scikit-learn', 'SHAP', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Jupyter'],
  image: 'https://images.pexels.com/photos/159201/circuit-circuit-board-resistor-computer-159201.jpeg?auto=compress&cs=tinysrgb&w=800',
  github: 'https://github.com/rtk5/AI-Based-Attendance-System-using-Voice-Recognition',
  demo: null,
  featured: true
},
{
  title: 'Automated Academic Answer Evaluation System',
  category: 'Hivemind',
  status: 'Completed',
  description: 'An intelligent system that automates academic answer evaluation using advanced AI techniques. The modular architecture features dedicated components for PDF OCR, text processing, reference answer parsing, vector search using FAISS, and LLM-powered grading through the Gemini API. The system extracts both handwritten and machine-readable text from PDFs using OCR technology, intelligently matches student answers to questions using vector embeddings and keyword extraction with KeyBERT, and leverages Google Gemini for accurate, rubric-based grading. This provides educational institutions with an efficient, consistent, and scalable automated assessment solution that maintains grading quality while significantly reducing manual evaluation time.',
  tech: ['Python', 'Google Gemini API', 'Jina AI Embeddings', 'FAISS', 'KeyBERT', 'NLTK', 'Streamlit', 'Gradio'],
  image: 'https://images.pexels.com/photos/301920/pexels-photo-301920.jpeg?auto=compress&cs=tinysrgb&w=800',
  github: 'https://github.com/rtk5/AI-Based-Attendance-System-using-Voice-Recognition',
  demo: null,
  featured: true,
}
    
  ];

  const filters = ['All', 'Hivemind', 'Ongoing', 'Completed'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => 
        project.category === activeFilter || project.status === activeFilter
      );

  const featuredProjects = projects.filter(project => project.featured);

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
            <Cpu className="h-20 w-20 text-primary-accent mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-poppins font-bold mb-6 glow-text">
              Our Projects
            </h1>
            <p className="text-xl text-primary-gray-300 font-inter">
              Innovation in action - peek under the hood of our latest creations
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
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
              Featured Projects
            </h2>
            <p className="text-xl text-primary-gray-400 font-inter">
              Our Hivemind innovations making real-world impact
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="glass-card glow-border overflow-hidden group hover:shadow-lg hover:shadow-primary-accent/20 transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-primary-magenta text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </div>
                  <div className="absolute top-4 right-4 bg-primary-accent text-primary-bg px-3 py-1 rounded-full text-sm font-semibold">
                    {project.status}
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-poppins font-bold mb-3">{project.title}</h3>
                  <p className="text-primary-gray-300 font-inter mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary-accent/20 text-primary-accent text-sm rounded-full font-inter"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-primary-gray-400 hover:text-primary-accent transition-colors"
                    >
                      <Github className="h-5 w-5" />
                      <span>Code</span>
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-primary-gray-400 hover:text-primary-accent transition-colors"
                      >
                        <ExternalLink className="h-5 w-5" />
                        <span>Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects */}
      <section className="py-20 bg-primary-card/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Filter className="h-16 w-16 text-primary-accent mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 glow-text">
              All Projects
            </h2>
            <p className="text-xl text-primary-gray-400 font-inter mb-8">
              Explore our complete portfolio of innovations
            </p>

            {/* Filter Pills */}
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="glass-card glow-border overflow-hidden group hover:shadow-lg hover:shadow-primary-accent/20 transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-primary-accent text-primary-bg px-3 py-1 rounded-full text-sm font-semibold">
                    {project.status}
                  </div>
                  {project.featured && (
                    <div className="absolute top-4 left-4 bg-primary-magenta text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-poppins font-semibold mb-3">{project.title}</h3>
                  <p className="text-primary-gray-400 font-inter text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-primary-accent/20 text-primary-accent text-xs rounded-full font-inter"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-1 bg-primary-gray-700 text-primary-gray-300 text-xs rounded-full font-inter">
                        +{project.tech.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-gray-400 hover:text-primary-accent transition-colors"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-gray-400 hover:text-primary-accent transition-colors"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;