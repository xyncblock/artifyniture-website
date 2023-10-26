import { useEffect } from "react";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

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
    visible: { opacity: 1, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: "easeOut" } },
  };



  return (
    <motion.section className="product-intro w-full h-screen flex flex-col items-center justify-between py-14 
      xs:h-full 
      sm:py-20 sm:px-0 
      xl:my-20"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}>
      <div className="text-section h-2/3 flex flex-col items-center justify-center px-[5%]
        xs:h-full xs:px-[5%] xs:pb-12 
        sm:pb-18">
        <motion.div className="text-dark-brown xs:font-normal font-inter text-center items-center text-[2.8rem] leading-[3.2rem] pb-4 font-medium
          xs:pb-3 xs:leading-[2.6rem] xs:text-[1.75rem]
          sm:text-4xl sm:leading-[2.8rem] sm:pb-3 
          md:text-[2.5rem] md:pb-4
          lg:text-5xl lg:leading-tight lg:pb-2
          xl:pb-4 xl:text-6xl xl:font-normal
                  "
                  variants={textVariants}>
          Introducing Elegance Redefined
        </motion.div>
        <motion.div className="text-center text-light-gray font-[350] font-inter px-[14%] text-base pb-8  xs:pb-4
          xs:text-sm  
          sm:text-base sm:pb-8 xs:px-[10%] sm:px-[8%]
          md:pb-9 md:px-[10%]
          lg:text-lg lg:pb-6  
          xl:text-lg  xl:font-[390] xl:pb-10 xl:px-[15%] "
           variants={textVariants}>
          <div>
            We are thrilled to introduce our latest creation, embodiment of
            meticulous craftsmanship and timeless design
          </div>
        </motion.div>
        <motion.button className="bg-grayish-brown hover:bg-light-gray flex flex-row justify-center items-center py-4 
          xs:py-2 px-4 gap-2 my-3
          sm:py-2 sm:px-4
          lg:font-base lg:py-3 lg:px-6" variants={buttonVariants}>
          <div className="font-medium font-inter tracking-wider text-white 
            text-[0.65rem] 
            sm:text-xs 
            lg:text-base"
            >
            Shop The Collection
          </div>
          <div>
            <ArrowLongRightIcon className="  text-white 
            h-4 w-4
            sm:h-6 sm:w-6 " />
          </div>
        </motion.button>
      </div>

      <div className="image w-full xs:h-full overflow-x-clip  mt-16 h-1/3 
        sm:mt-0 
        2xl:max-w-[1440px]">
        <motion.img
          src="./Assets/completeSet.jpg"
          alt=""
          className="object-contain transform sm:transform-none scale-125 sm:scale-100 sm:w-full"
          variants={imageVariants}
        />
      </div>
    </motion.section>
  );
};

export default ProductIntro;
