import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Table = () => {
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
      <div className="w-1/2 pr-8">
        <motion.div className="image" variants={imageVariants}>
          <img src="./Assets/table.png" alt="" className="w-full h-auto" />
        </motion.div>
      </div>
      <div className="w-1/2 p-8 whitespace-no-wrap">
        <div
          className="text flex flex-col justify-center h-full"
          style={{ whiteSpace: "nowrap" }}
        >
          <motion.div
            className="sub-title text-grayish-brown text-xl font-bold font-inter tracking-widest "
            variants={textVariants}
          >
            The Table
          </motion.div>
          <motion.div className="main-title text-dark-brown text-7xl font-normal font-bebasneue mb-2" variants={textVariants}>
            Grand Centerpiece
          </motion.div>
          <motion.div className="description text-dark-gray text-xl font-normal font-inter">
            <motion.div variants={textVariants}>Our table is the embodiment of timeless elegance, </motion.div>
            <motion.div variants={textVariants}>designed to be the centerpiece of your living</motion.div>
            <motion.div variants={textVariants}>space. Crafted with precision and passion, it's</motion.div>
            <motion.div variants={textVariants}>more than just a table; it's the focal point of your</motion.div>
            <motion.div variants={textVariants}>gatherings and conversations.</motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Table;
