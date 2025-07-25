import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Team from './pages/Team';
import Legacy from './pages/Legacy';
import Projects from './pages/Projects';
import Events from './pages/Events';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Gallery from './pages/Gallery';
import EventGallery from './pages/EventGallery';
import Join from './pages/Join';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-primary-bg text-primary-gray-100">
        <Navbar />
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/team" element={<Team />} />
            <Route path="/legacy" element={<Legacy />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/events" element={<Events />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/gallery/:eventSlug" element={<EventGallery />} />
            <Route path="/join" element={<Join />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </motion.main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;