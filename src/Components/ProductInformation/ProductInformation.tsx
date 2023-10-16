import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ProductInformation = () => {
  const controls1 = useAnimation();
  const [ref1, inView1] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const controls2 = useAnimation();
  const [ref2, inView2] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const controls3 = useAnimation();
  const [ref3, inView3] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView1) {
      controls1.start("visible");
    }
  }, [controls1, inView1]);

  useEffect(() => {
    if (inView2) {
      controls2.start("visible");
    }
  }, [controls2, inView2]);

  useEffect(() => {
    if (inView3) {
      controls3.start("visible");
    }
  }, [controls3, inView3]);

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
    <section
      className="main-section flex flex-col 2xl:justify-center 2xl:items-center
      gap-6 py-6 pb-10
      sm:gap-8 sm:py-8 sm:pb-12
      md:gap-10 md:py-10 md:pb-16
      lg:gap-11 lg:py-11 lg:pb-20
      xl:gap-13 xl:py-13 xl:pb-28
      "
    >
      <motion.div
        className="table-main flex  items-center justify-between w-full       2xl:max-w-[1440px]   
      flex-col-reverse px-6
      sm:flex-row  sm:px-8 
      md:px-10
      xl:px-12
      "
        initial="hidden"
        ref={ref1}
        animate={controls1}
      >
        <motion.div
          className="table-image 
        sm:w-1/2 "
          variants={imageVariants}
        >
          <img src="./Assets/table.png" alt="" className="object-contain" />
        </motion.div>

        <div
          className="table-text 
        pb-12
        sm:w-1/2  sm:py-0
        "
        >
          <motion.div
            className="table-sub-title text-grayish-brown font-bold font-inter tracking-widest 
          text-base 
          sm:text-lg
          lg:text-xl
          xl:text-2xl
          "
            variants={textVariants}
          >
            The Table
          </motion.div>
          <motion.div
            className="table-main-title text-dark-brown font-extrabold font-inter 
          text-[1.7rem] leading-[1.7rem] mb-2
          sm:text-3xl  sm:mb-3 sm:leading-6
          md:text-4xl  md:leading-[2rem] 
          lg:text-5xl lg:leading-10 lg:mb-4
          xl:text-6xl  xl:leading-[3.2rem] xl:mb-5
          "
            variants={textVariants}
          >
            Grand Centerpiece
          </motion.div>
          <motion.div
            className="table-description text-dark-gray font-normal font-inter
          text-sm max-w-[21rem] leading-tight
          sm:text-[0.85rem] sm:leading-4 sm:max-w-[20rem] 
          md:text-base md:leading-5 md:max-w-[21rem]
          lg:text-lg lg:leading-6 lg:max-w-[28rem]
          xl:text-xl xl:leading-7 xl:max-w-[36rem]
          "
            variants={textVariants}
          >
            <p>
              Our table is the embodiment of timeless elegance, designed to be
              the centerpiece of your living space. Crafted with precision and
              passion, it's more than just a table; it's the focal point of your
              gatherings and conversations.
            </p>
          </motion.div>
        </div>
      </motion.div>
      <motion.div
        className="chair-main flex  items-center justify-between w-full       2xl:max-w-[1440px]   
      flex-col px-6
      sm:flex-row  sm:px-8 
      md:px-10
      xl:px-12
      "
        initial="hidden"
        ref={ref2}
        animate={controls2}
      >
        <div
          className="chair-text flex  flex-col sm:items-end
        py-12
        sm:w-1/2  sm:py-0
        "
        >
          <div className="chair-content sm:w-[18rem] md:w-[21.5rem] lg:w-[29.5rem] xl:w-[37rem]">
            <motion.div
              className="chair-sub-title text-grayish-brown font-bold font-inter tracking-widest 
                text-base 
                sm:text-lg
                lg:text-xl
                xl:text-2xl
          "
              variants={textVariants}
            >
              The High Chair
            </motion.div>
            <motion.div
              className="chair-main-title text-dark-brown font-extrabold font-inter 
          text-[1.7rem] leading-[1.7rem] mb-2
          sm:text-3xl  sm:mb-3 sm:leading-6
          md:text-4xl  md:leading-[2rem] 
          lg:text-5xl lg:leading-10 lg:mb-4
          xl:text-6xl  xl:leading-[3.2rem] xl:mb-5
          "
              variants={textVariants}
            >
              Seating Perfected
            </motion.div>
            <motion.div
              className="chair-description text-dark-gray font-normal font-inter
              text-sm max-w-[21rem] leading-tight
              sm:text-[0.85rem] sm:leading-4 sm:max-w-[20rem] 
              md:text-base md:leading-5 md:max-w-[21rem]
              lg:text-lg lg:leading-6 lg:max-w-[28rem]
              xl:text-xl xl:leading-7 xl:max-w-[36rem]
          "
              variants={textVariants}
            >
              <p>
                Our chairs redefine luxury seating, merging comfort and style
                seamlessly. Each chair is a testament to fine design and
                meticulous craftsmanship, promising an exceptional seating
                experience.
              </p>
            </motion.div>
          </div>
        </div>
        <motion.div
          className="chair-image items-end flex justify-end
        sm:w-1/2 "
          variants={imageVariants}
        >
          <img src="./Assets/highChair.png" alt="" className="object-contain" />
        </motion.div>
      </motion.div>
      <motion.div
        className="high-chair-main flex  items-center justify-between w-full        2xl:max-w-[1440px]  
      flex-col-reverse px-6
      sm:flex-row  sm:px-8 
      md:px-10
      xl:px-12
      "
        initial="hidden"
        ref={ref3}
        animate={controls3}
      >
        <motion.div
          className="high-chair-image 
        sm:w-1/2 "
        variants={imageVariants}
        >
          <img src="./Assets/lowchair.png" alt="" className="object-contain" />
        </motion.div>

        <div
          className="high-chair-text 
        py-12
        sm:w-1/2  sm:py-0
        "
        >
          <motion.div
            className="high-chair-sub-title text-grayish-brown font-bold font-inter tracking-widest 
          text-base 
          sm:text-lg
          lg:text-xl
          xl:text-2xl
          "
            variants={textVariants}
          >
            The Low Chair
          </motion.div>
          <motion.div
            className="high-chair-main-title text-dark-brown font-extrabold font-inter 
          text-[1.7rem] leading-[1.7rem] mb-2
          sm:text-3xl  sm:mb-3 sm:leading-6
          md:text-4xl  md:leading-[2rem] 
          lg:text-5xl lg:leading-10 lg:mb-4
          xl:text-6xl  xl:leading-[3.2rem] xl:mb-5
          "
            variants={textVariants}
          >
            Relax in Style
          </motion.div>
          <motion.div
            className="high-chair-description text-dark-gray font-normal font-inter
          text-sm max-w-[21rem] leading-tight
          sm:text-[0.85rem] sm:leading-4 sm:max-w-[20rem] 
          md:text-base md:leading-5 md:max-w-[21rem]
          lg:text-lg lg:leading-6 lg:max-w-[28rem]
          xl:text-xl xl:leading-7 xl:max-w-[36rem]
          "
            variants={textVariants}
          >
            <p>
              Our table is the embodiment of timeless elegance, designed to be
              the centerpiece of your living space. Crafted with precision and
              passion, it's more than just a table; it's the focal point of your
              gatherings and conversations.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ProductInformation;
