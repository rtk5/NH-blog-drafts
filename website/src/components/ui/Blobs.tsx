"use client";

import { motion } from "framer-motion";

const Blobs = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
        
      {/* Glow Effect */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2, delay: 1 }}
      >
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{
            backgroundColor: "#F4C343",
          }}
        />
      </motion.div>

      {/* Particles */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: Math.random() * 4 + 2,
            height: Math.random() * 4 + 2,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            backgroundColor: "#F4C343",
          }}
          animate={{
            x: [0, (Math.random() - 0.5) * 150],
            y: [0, (Math.random() - 0.5) * 150],
            opacity: [0.2, 0.5, 0.2],
            scale: [1, Math.random() * 1.5 + 0.8, 1],
          }}
          transition={{
            duration: Math.random() * 5 + 3,
            repeat: Infinity,
            repeatType: "reverse",
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default Blobs;