import React from "react";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="header bg-light-beige h-[90vh] flex flex-row items-center justify-between gap-24">
      <div className="header-text w-1/2 text-right whitespace-nowrap">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="inline-block text-left"
        >
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="tagline text-dark-brown text-base font-light font-khula tracking-[16px]"
          >
            MEUBLE LUXE
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="main-header-text text-dark-brown text-7xl font-extrabold font-inter tracking-[3.20px] flex flex-col items-start max-w-max"
          >
            <div>Experience</div>
            <div className="max-w-max">the Artistry</div>
            <div>
              of <span className="text-grayish-brown">Living</span>
            </div>
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="sub-header-text text-dark-brown text-base font-semibold font-k2d tracking-[3.20px] mt-2.5 mb-5"
          >
            A masterpiece of elegance and comfort
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="cta-buttons"
          >
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.4, duration: 0.5 }}
              type="button"
              className="text-white bg-dark-brown hover:bg-light-gray text-sm font-normal font-inter tracking-wider px-8 py-2 mr-2"
            >
              SHOP NOW
            </motion.button>
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.6, duration: 0.5 }}
              type="button"
              className="text-light-gray border-light-gray border text-sm font-normal font-inter tracking-wider hover:bg-white px-8 py-2 mr-2"
            >
              CUSTOMIZE
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      <div className="header-image w-1/2">
        <motion.img
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.8, duration: 1, ease: "easeOut" }}
          src="./Assets/17-PhotoRoom 1.png"
          alt=""
        />
      </div>
    </header>
  );
};

export default Header;
