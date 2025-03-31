import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import superheroImage from '../assets/images/superhero.png';

const LandingAnimation = () => {
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(false);
    }, 3500); // Extended animation time a bit

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {showAnimation && (
        <motion.div
          className="fixed inset-0 bg-blue-600 z-50 flex items-center justify-center overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Superhero image with animation */}
          <motion.img
            src={superheroImage}
            alt="Superhero HVAC Technician"
            className="absolute h-auto w-1/2 max-w-md"
            initial={{ opacity: 0, x: -300, y: 300 }}
            animate={{
              opacity: 1,
              x: 100,
              y: -100,
              scale: [1, 1.2, 1],
              rotate: [0, 10, 0]
            }}
            transition={{
              duration: 2.5,
              times: [0, 0.7, 1],
              ease: "easeInOut"
            }}
            style={{ zIndex: 1 }}
          />

          <motion.div
            className="text-white text-4xl md:text-6xl font-bold flex flex-col items-center relative z-10"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.span
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.3 }}
            >
              Mechanical
            </motion.span>
            <motion.span
              className="text-orange-500"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.3 }}
            >
              of DFW
            </motion.span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LandingAnimation; 