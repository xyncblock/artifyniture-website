const Header = () => {
  return (
    <div className="main-section flex flex-col items-center justify-between w-full h=[100vh]">
      <nav className="logo-section flex items-center justify-center w-5/6 mx-auto py-4 md:py-8 h-[10vh]">
        <div className="logo text-dark-brown font-normal font-k2d tracking-widest text-base sm:text-lg md:text-xl">
          ARTIFYNITURE
        </div>
      </nav>
      <header className="header bg-light-beige flex flex-col-reverse items-center justify-between sm:flex-row w-5/6 h-[90vh]">
        <div className="header-text flex flex-col items-center justify-center h-1/2 sm:w-1/2 sm:h-full">
          <div className="text">
            <div 
            className="tagline text-dark-brown font-light font-khula 
              text-sm tracking-[14px] 
              md:text-base ]">
              MEUBLE LUXE
            </div>
            <div className="main-header-text text-dark-brown font-extrabold font-inter 
              text-5xl  max-w-[18rem]
              sm:tracking-[0.80px] sm:leading-[3.5rem]
              md:tracking-[3.20px] md:max-w-[22rem] md:leading-[3.5rem]
              lg:text-6xl lg:max-w-[28rem] lg:leading-[4.3rem]">
              <div>
                Experience the Artistry of <span className="text-grayish-brown">Living</span>
              </div>
            </div>
            <div className="sub-header-text text-dark-brown font-semibold font-k2d 
              text-xs pt-2 tracking-[1.80px]
              sm:tracking-[1.20px] sm:text-sm 
              md:text-sm md:pt-4 md:tracking-[2.00px] 
              lg:text-base lg:tracking-[3.20px]">
              A masterpiece of elegance and comfort
            </div>
            <div className="cta-buttons flex flex-row gap-4 pt-4">
              <button
                  type="button"
                  className="text-white bg-dark-brown border border-dark-brown hover:bg-light-gray font-inter  whitespace-nowrap max-w-content
                  text-xs tracking-wide px-9 py-2 
                  lg:text-[1rem] lg:px-11 md:py-3"
              >
                  SHOP NOW
              </button>
              <button
                  type="button"
                  className="text-light-gray border-light-gray border font-inter hover:bg-white font-normal
                  text-xs tracking-wide px-9 py-2 whitespace-nowrap
                  lg:text-[1rem] lg:px-11 md:py-3"
              >
                  CUSTOMIZE
              </button>
            </div>

          </div>
        </div>
        <div className="image flex justify-center w-full sm:w-1/2 h-1/2 sm:h-full sm:py-8">
          <img
            src="./Assets/17-PhotoRoom 1.png"
            alt=""
            className="object-contain "
          />
        </div>
      </header>
    </div>
  );
};

export default Header;
