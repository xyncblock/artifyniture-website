import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [isAnimated, setIsAnimated] = useState(false);
  
    useEffect(() => {
      
      const timeout = setTimeout(() => {
        setIsAnimated(true);
      }, 2500);
  
      
      return () => clearTimeout(timeout);
    }, []); 
  

  return (
    <motion.nav
    className="navbar bg-light-beige text-dark-brown font-normal font-k2d tracking-widest flex justify-center items-center text-center text-sm 
        xs:text-base 
        sm:p-3 
        md:text-xl 
        xl:p-4 "
        initial={{ height: '100vh', scale: 2 }}
        animate={{
          height: isAnimated ? '80px' : '100vh',
          scale: isAnimated ? 1 : 2, 
        }}
        transition={{ duration: 1.0 }}

  >
    ARTIFYNITURE
  </motion.nav> 
  )
}

export default Navbar