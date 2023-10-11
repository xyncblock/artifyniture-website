const Header = () => {
  return (

    <div
      className="main flex h-screen  flex-col bg-light-beige justify-center items-center
      sm:h-full sm:py-5 lg:h-screen 2xl:h-full "
    >
      <div
        className="navbar text-dark-brown font-normal font-k2d tracking-widest flex justify-center items-center text-center h-[10vh] 
          text-sm
          xs:text-base
          sm:text-base sm:h-full sm:pb-3
          md:text-xl"
      >
        ARTIFYNITURE
      </div>

      <div
        className="content flex flex-col items-center justify-center h-full 
        sm:flex-row-reverse 2xl:max-w-[1440px] 2xl:w-full "
      >
        <div
          className="image flex  w-full items-center justify-center
            h-[45vh]
            sm:h-full sm:w-1/2
          px-[10%]
          xs:px-0
          sm:p-[5%] 2xl:max-w-max"
        >
          <img
            src="./Assets/17-PhotoRoom 1.png"
            alt=""
            className=" object-contain h-full w-full "
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
            <div
              className="tagline text-dark-brown font-light font-khula
                  text-xs tracking-[0.7rem] pb-1
                  xs:text-center
                  sm:text-left
                  md:text-sm
                  lg-text-base
                  xl:text-lg"
            >
              MEUBLE LUXE
            </div>
            <div
              className="main-header-text text-dark-brown font-extrabold font-inter
                  text-[2.9rem] pb-2 max-w-[20rem] 
                  xs:max-w-lg xs:text-center
                  sm:text-left sm:text-[2.6rem] leading-[2.7rem] sm:max-w-[17rem]
                  md:text-5xl md:max-w-[20rem] tracking-wide
                  lg:text-[3.1rem] lg:max-w-[25.5rem] lg:leading-[3.4rem]
                  xl:text-7xl xl:max-w-[28rem] xl:leading-[4.7rem]"
            >
              Experience the Artistry of{" "}
              <span className="text-grayish-brown">Living</span>
            </div>
            <div
              className="sub-header-text text-dark-brown font-semibold font-k2d
                  text-[0.8rem] tracking-widest pb-4
                  xs:text-center
                  sm:text-left sm:text-[0.7rem] 
                  md:text-sm
                  lg:[0.8rem]
                  xl:text-lg"
            >
              A masterpiece of elegance and comfort
            </div>
            <div
              className="cta-buttons flex flex-row gap-3 items-center justify-center
            xs:w-[60%]
            sm:w-full"
            >
              <button
                type="button"
                className="text-white bg-dark-brown border border-dark-brown hover:bg-light-gray font-inter  whitespace-nowrap
                    w-1/2 text-xs py-2 lg:text-sm xl:text-base"
              >
                SHOP NOW
              </button>
              <button
                type="button"
                className="text-light-gray border-light-gray border font-inter hover:bg-white font-normal
                    w-1/2 text-xs py-2
                    lg:text-sm xl:text-base"
              >
                CUSTOMIZE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
