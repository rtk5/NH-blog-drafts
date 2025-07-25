import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Mail, Instagram, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary-card/50 border-t border-primary-gray-700/50 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-2 rounded-lg bg-gradient-to-r from-primary-accent to-primary-magenta">
                <Brain className="h-6 w-6 text-primary-bg" />
              </div>
              <span className="text-xl font-poppins font-bold glow-text">
                Neural Hive
              </span>
            </div>
            <p className="text-primary-gray-400 mb-6 max-w-md">
              The AI & Machine Learning club of PES University, Electronic City Campus. 
              Democratizing AI literacy through project-driven learning and innovation.
            </p>
            <div className="flex space-x-4">
              <a href="mailto:neuralhive.ecc@pes.edu" className="p-2 text-primary-gray-400 hover:text-primary-accent transition-colors">
                <Mail className="h-5 w-5" />
              </a>
              <a href="https://instagram.com/neuralhive" target="_blank" rel="noopener noreferrer" className="p-2 text-primary-gray-400 hover:text-primary-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/company/neural-hive-pesu/" target="_blank" rel="noopener noreferrer" className="p-2 text-primary-gray-400 hover:text-primary-accent transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://github.com/NeuralHive-PESU" target="_blank" rel="noopener noreferrer" className="p-2 text-primary-gray-400 hover:text-primary-accent transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-poppins font-semibold text-primary-accent mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['About', 'Team', 'Legacy', 'Projects', 'Events'].map((item) => (
                <li key={item}>
                  <Link 
                    to={`/${item.toLowerCase()}`} 
                    className="text-primary-gray-400 hover:text-primary-accent transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-poppins font-semibold text-primary-accent mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/blog" 
                  className="text-primary-gray-400 hover:text-primary-accent transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link 
                  to="/gallery" 
                  className="text-primary-gray-400 hover:text-primary-accent transition-colors"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link 
                  to="/join" 
                  className="text-primary-gray-400 hover:text-primary-accent transition-colors"
                >
                  Join Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-primary-gray-400 hover:text-primary-accent transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-gray-700/50 mt-8 pt-8 text-center">
          <p className="text-primary-gray-400">
            © 2025 Neural Hive Club, PES University EC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;