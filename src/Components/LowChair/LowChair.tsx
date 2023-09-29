import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const LowChair = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  const imageVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  return (
    <motion.div
      initial="hidden"
      ref={ref}
      animate={controls}
      className="flex items-center justify-center p-8 mt-8"
    >
      <div className="w-1/2 pr-8">
        <motion.div className="image" variants={imageVariants}>
          <img src="./Assets/lowChair.png" alt="" className="w-full h-auto" />
        </motion.div>
      </div>
      <div className="w-1/2 p-8">
        <div className="text flex flex-col justify-center h-full" style={{ whiteSpace: 'nowrap' }}>
          <motion.div className="sub-title text-grayish-brown text-xl font-bold font-inter tracking-widest" variants={textVariants}>
            The Low Chair
          </motion.div>
          <motion.div className="main-title text-dark-brown text-7xl font-normal font-bebasneue mb-2" variants={textVariants}>
            Relax in Style
          </motion.div>
          <motion.div className="description text-dark-gray text-xl font-normal font-inter" variants={textVariants}>
            <div>Our table is the embodiment of timeless elegance, </div>
            <div>designed to be the centerpiece of your living </div>
            <div>space. Crafted with precision and passion, it's </div>
            <div>more than just a table; it's the focal point of your </div>
            <div>gatherings and conversations.</div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default LowChair;

  