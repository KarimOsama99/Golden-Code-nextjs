'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide the splash screen after 2 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="splash"
          initial={{ y: 0 }}
          exit={{ y: '-100vh' }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }} // Premium cubic bezier for a sharp slide-up
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: '#ffffff', // Clean white background for the main logo
            zIndex: 999999,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            pointerEvents: 'none',
          }}
        >
          {/* Logo Reveal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            style={{
              position: 'relative',
              width: '280px',
              height: '90px',
              marginBottom: '35px'
            }}
          >
            <Image
              src="/images/logo/logo3.png" // The actual Golden Code logo
              alt="Golden Code"
              fill
              style={{ objectFit: 'contain' }}
              priority
            />
          </motion.div>

          {/* Elegant Loading Bar */}
          <motion.div
            style={{
              width: '220px',
              height: '2px',
              backgroundColor: 'rgba(0, 0, 0, 0.05)', // Subtle track for white background
              overflow: 'hidden',
              borderRadius: '2px'
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.div
              style={{
                height: '100%',
                backgroundColor: '#ffb800', // Golden accent
              }}
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.2, delay: 0.5, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
