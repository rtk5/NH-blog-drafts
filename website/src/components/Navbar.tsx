import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
// Updated to match your original logo import
import logoImage from './Darker_Shade.png';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Team', path: '/team' },
  { name: 'Legacy', path: '/legacy' },
  { name: 'Projects', path: '/projects' },
  { name: 'Events', path: '/events' },
  { name: 'Blog', path: '/blog' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' }
];

const spring = {
  type: 'spring',
  stiffness: 220,
  damping: 26,
  mass: 0.9,
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 200);
  }, []);

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Removed TypeScript type annotation
  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Desktop */}
      <motion.nav
        initial={false}
        className="fixed top-0 left-0 right-0 z-50 hidden md:flex justify-center"
      >
        <motion.div
          layout
          initial={false}
          animate={{ width: '100%', borderRadius: 100, marginTop: 0 }}
          transition={spring}
          className={`mx-auto flex items-center justify-between px-8 py-6 bg-primary-bg/40 backdrop-blur-lg border border-primary-gray-700/50 shadow-lg ${
            scrolled ? 'max-w-[1300px]' : ''
          }`}
        >
          {/* Logo */}
          <motion.div layout className="flex items-center space-x-2">
            <Link to="/" className="flex items-center space-x-2 group">
              <img 
                src={logoImage} 
                alt="Neural Hive Logo" 
                className="h-8 w-auto group-hover:scale-105 transition-transform" 
              />
              <span className="font-poppins font-bold glow-text text-xl group-hover:text-primary-magenta transition-colors">
                Neural Hive
              </span>
            </Link>
          </motion.div>

          {/* Nav Items */}
          <motion.ul layout className="flex items-center space-x-8" transition={spring}>
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className={`relative py-2 text-sm font-poppins transition-colors ${
                    isActive(item.path)
                      ? 'text-primary-accent after:scale-x-100'
                      : 'text-primary-gray-300 hover:text-primary-accent'
                  }`}
                >
                  {item.name}
                  {isActive(item.path) && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-accent"
                      initial={false}
                    />
                  )}
                </Link>
              </li>
            ))}
          </motion.ul>

          {/* Join Us */}
          <motion.div layout>
            <Link
              to="/join"
              className="btn-primary px-6 py-2.5 rounded-full text-sm font-poppins transition-all hover:scale-105"
            >
              Join Us
            </Link>
          </motion.div>
        </motion.div>
      </motion.nav>

      {/* Mobile */}
      <nav className="fixed top-0 left-0 right-0 z-50 md:hidden">
        <div className="w-full bg-primary-bg/90 backdrop-blur-lg border-b border-primary-gray-700/50">
          <div className="flex items-center justify-between px-6 py-5">
            <Link to="/" className="flex items-center space-x-3 group">
              <img 
                src={logoImage} 
                alt="Neural Hive Logo" 
                className="h-10 w-auto group-hover:scale-105 transition-transform" 
              />
              <span className="font-poppins font-bold glow-text text-xl group-hover:text-primary-magenta transition-colors">
                Neural Hive
              </span>
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-primary-gray-300 hover:text-primary-accent transition-colors"
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="border-t border-primary-gray-700/50 bg-primary-card/95 backdrop-blur-lg"
            >
              <div className="px-4 py-4 space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 rounded-lg transition-colors font-poppins ${
                      isActive(item.path)
                        ? 'text-primary-accent bg-primary-accent/10'
                        : 'text-primary-gray-300 hover:text-primary-accent hover:bg-primary-gray-800/50'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  to="/join"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center btn-primary px-4 py-3 rounded-full mt-4 font-poppins"
                >
                  Join Us
                </Link>
              </div>
            </motion.div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;