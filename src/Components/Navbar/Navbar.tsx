import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [isAnimated, setIsAnimated] = useState(false);
    const [isNavbarAnimationComplete, setIsNavbarAnimationComplete] = useState(false);
  
    useEffect(() => {
      // After 3 seconds, set isAnimated to true
      const timeout = setTimeout(() => {
        setIsAnimated(true);
      }, 2500);
  
      // Clean up the timeout to avoid memory leaks
      return () => clearTimeout(timeout);
    }, []); // Empty dependency array ensures this effect runs once after initial render
  

  return (
    <motion.div
    className="navbar bg-light-beige text-dark-brown font-normal font-k2d tracking-widest flex justify-center items-center text-center 
        text-sm 
        xs:text-base 
        sm:p-3 
        md:text-xl 
        xl:p-4 "
        initial={{ height: '100vh', scale: 2 }} // Initial size is 1.5 times bigger
        animate={{
          height: isAnimated ? '80px' : '100vh',
          scale: isAnimated ? 1 : 2, // Change back to the original size after 3 seconds
        }}
        transition={{ duration: 1.0 }}

  >
    ARTIFYNITURE
  </motion.div> 
  )
}

export default Navbar