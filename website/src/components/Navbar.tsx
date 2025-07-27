import { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import logoImage from '../../public/neuralhiveLogo.svg';

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

  const isActive = (path: string) => location.pathname === path;

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
          className={`mx-auto flex items-center justify-between px-8 py-6 bg-black/40 backdrop-blur-lg border border-gray-800 shadow-lg ${
            scrolled ? 'max-w-[1300px]' : ''
          }`}
        >
          {/* Logo */}
          <motion.div layout className="flex items-center space-x-2">
            <Link to="/" className="flex items-center space-x-2">
              <img src={logoImage} alt="Neural Hive Logo" className="h-8 w-auto" />
              <span className="font-poppins font-bold text-white text-xl">Neural Hive</span>
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
                      ? 'text-[#F4C343] after:scale-x-100'
                      : 'text-white hover:text-[#F4C343]'
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </motion.ul>

          {/* Join Us */}
          <motion.div layout>
            <Link
              to="/join"
              className="px-6 py-2.5 rounded-full text-sm font-poppins transition-all hover:scale-105 bg-[#F4C343] text-[#000952]"
            >
              Join Us
            </Link>
          </motion.div>
        </motion.div>
      </motion.nav>

      {/* Mobile */}
      <nav className="fixed top-0 left-0 right-0 z-50 md:hidden">
        <div className="w-full bg-black/90 backdrop-blur-lg border-b border-gray-800">
          <div className="flex items-center justify-between px-6 py-5">
            <Link to="/" className="flex items-center space-x-3">
              <img src={logoImage} alt="Neural Hive Logo" className="h-10 w-auto" />
              <span className="font-poppins font-bold text-white text-xl">Neural Hive</span>
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-300 hover:text-[#F4C343]"
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
          {isOpen && (
            <div className="border-t border-gray-800 bg-black/95">
              <div className="px-4 py-4 space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 rounded-lg transition-colors font-poppins ${
                      isActive(item.path)
                        ? 'text-[#F4C343] bg-[#F4C343]/10'
                        : 'text-gray-300 hover:text-[#F4C343]'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  to="/join"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center px-4 py-3 rounded-full mt-4 font-poppins bg-[#F4C343] text-[#000952]"
                >
                  Join Us
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;


review the code ones, i will do a PR afterwards