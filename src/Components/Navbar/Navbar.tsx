import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [animateLogo, setAnimateLogo] = useState(false);

  useEffect(() => {
    // Set a timeout to trigger the animations after 5 seconds
    const timeoutId = setTimeout(() => {
      setAnimateLogo(true);
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <motion.div
      className="main-section h-screen  flex items-center justify-center bg-light-beige"
      initial={{ height: '100vh' }}
      animate={{ height: animateLogo ? '10vh' : '100vh' }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="logo-section text-center h-[10vh] flex items-center justify-center flex-col"
        initial={{ y: 0}}
        animate={
          animateLogo
            ? { y: -5}
            : { y: 0 }
        }
        transition={{ duration: 1 }}
      >
        <motion.div
          className="logo text-dark-brown text-[80px] font-normal font-['K2D'] tracking-[20px]"
          initial={{ scale: 1 }}
          animate={animateLogo ? { scale: 0.2 } : { scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          ARTIFYNITURE
        </motion.div>
        {!animateLogo && (
          <motion.div
            className="slogan text-dark-brown text-[22px] font-light font-['Khula'] tracking-[22px]"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
          >
            MEUBLE LUXE
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default Navbar;


