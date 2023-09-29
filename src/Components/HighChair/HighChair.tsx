import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const HighChair = () => {
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
      transition: { duration: 0.7, ease: "easeInOut" },
    },
  };

  return (
    <motion.div
      initial="hidden"
      ref={ref}
      animate={controls}
      className="flex items-center justify-center p-8 mt-8"
    >
      <div className="w-1/2 p-8 pl-24">
        <div className="text flex flex-col justify-center h-full" style={{ whiteSpace: 'nowrap' }}>
          <motion.div className="sub-title text-grayish-brown text-xl font-bold font-inter tracking-widest" variants={textVariants}>
            The High Chair
          </motion.div>
          <motion.div className="main-title text-dark-brown text-7xl font-normal font-bebasneue mb-2" variants={textVariants}>
            Seating Perfected
          </motion.div>
          <motion.div className="description text-dark-gray text-xl font-normal font-inter" variants={textVariants}>
            <div>Our chairs redefine luxury seating, merging  </div>
            <div>comfort and style seamlessly. Each chair is a </div>
            <div>testament to fine design and meticulous </div>
            <div>craftsmanship, promising an exceptional  </div>
            <div>seating experience.</div>
          </motion.div>
        </div>
      </div>
      <div className="w-1/2 pl-8">
        <motion.div className="image" variants={imageVariants}>
          <img src="./Assets/highChair.png" alt="" className="w-full h-auto" />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default HighChair;
