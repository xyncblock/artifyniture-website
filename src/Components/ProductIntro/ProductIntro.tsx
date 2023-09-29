import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";





const ProductIntro = () => {
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.div
      className="flex flex-col mt-20 gap-16"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <div className="flex flex-col items-center justify-center">
        <motion.div
          className="text-dark-brown text-6xl font-medium font-inter"
          variants={textVariants}
        >
          Introducing Elegance Redefined
        </motion.div>
        <motion.div
          className="text-center text-light-gray text-xl font-normal font-inter mt-3"
          variants={textVariants}
        >
          <div>We are thrilled to introduce our latest creation - an embodiment of meticulous</div>
          <div>craftsmanship and timeless design</div>
        </motion.div>
        <motion.button
          className="bg-grayish-brown hover:bg-light-gray px-6 py-2 flex flex-row gap-3 items-center justify-center mt-8"
          variants={buttonVariants}
        >
          <div className="text-sm font-normal font-inter tracking-wider text-white">
            Shop The Collection
          </div>
          <div>
            <ArrowLongRightIcon className="h-6 w-6 text-white" />
          </div>
        </motion.button>
      </div>
      <div>
        <motion.img
          src="./Assets/completeSet.jpg"
          alt=""
          className="w-full h-full object-contain"
          variants={imageVariants}
        />
      </div>
    </motion.div>
  );
};

export default ProductIntro;
