import { motion } from "framer-motion";

const Header = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.5 } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, type: "spring", damping: 10, stiffness: 100 },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } },
    hover: { scale: 1.1 },
  };

  return (
    <div className="main flex flex-col bg-light-beige justify-center items-center sm:py-5 lg:h-[90vh] h-[90vh] sm:h-full">
      <div
        className="content flex flex-col items-center justify-center h-full 
        sm:flex-row-reverse xl:max-w-[1440px] xl:w-full  "
      >
        <div
          className="image flex  w-full items-center justify-center
            h-[45vh]
            sm:h-full sm:w-1/2
          px-[10%]
          xs:px-0
          sm:p-[5%] 2xl:max-w-max"
        >
          <motion.img
            src="./Assets/17-PhotoRoom 1.png"
            alt=""
            className=" object-contain h-full w-full "
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.0, duration: 0.8, ease: "easeOut" }}
          />
        </div>

        <div
          className="text flex   w-full items-center justify-center 
          h-[45vh]
          sm:h-full sm:w-1/2 sm:p-[5%]"
        >
          <div
            className=" text-content
            px-[5%] xs:items-center xs:flex xs:flex-col xs:justify-center
            sm:px-0 sm:justify-start sm:items-start
            lg:pl-[10%]"
          >
            <motion.div
              className="tagline text-dark-brown font-light font-khula
                  text-xs tracking-[0.7rem] pb-1
                  xs:text-center
                  sm:text-left
                  md:text-sm
                  lg-text-base
                  xl:text-lg"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              MEUBLE LUXE
            </motion.div>
            <motion.div
              className="main-header-text text-dark-brown font-extrabold font-inter
                  text-[2.9rem] pb-2 max-w-[20rem] 
                  xs:max-w-lg xs:text-center
                  sm:text-left sm:text-[2.6rem] leading-[2.7rem] sm:max-w-[17rem]
                  md:text-5xl md:max-w-[20rem] tracking-wide
                  lg:text-[3.1rem] lg:max-w-[25.5rem] lg:leading-[3.4rem]
                  xl:text-7xl xl:max-w-[28rem] xl:leading-[4.8rem]"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
            >
              Experience the Artistry of{" "}
              <span className="text-grayish-brown">Living</span>
            </motion.div>
            <motion.div
              className="sub-header-text text-dark-brown font-semibold font-k2d
                  text-[0.8rem] tracking-widest pb-4
                  xs:text-center
                  sm:text-left sm:text-[0.7rem] 
                  md:text-sm
                  lg:[0.8rem]
                  xl:text-lg"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
            >
              A masterpiece of elegance and comfort
            </motion.div>
            <motion.div
              className="cta-buttons flex flex-row gap-3 items-center justify-center
            xs:w-[60%]
            sm:w-full"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
            >
              <motion.button
                type="button"
                className="text-white bg-dark-brown border border-dark-brown hover:bg-light-gray font-inter  whitespace-nowrap
                    w-1/2 text-xs py-2 lg:text-sm xl:text-base"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.6, duration: 0.5 }}
              >
                SHOP NOW
              </motion.button>
              <motion.button
                type="button"
                className="text-light-gray border-light-gray border font-inter hover:bg-white font-normal
                    w-1/2 text-xs py-2
                    lg:text-sm xl:text-base"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.4, duration: 0.5 }}
              >
                CUSTOMIZE
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
