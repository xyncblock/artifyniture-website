import Navbar from "../Navbar/Navbar";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="header bg-light-beige h-[90vh] flex flex-row items-center justify-between gap-24">
      <div className="header-text w-1/2 text-right ">
        <div className="inline-block text-left">
          <div className="tagline text-dark-brown text-base font-light font-khula tracking-[16px]">
            MEUBLE LUXE
          </div>
          <div className="main-header-text text-dark-brown text-7xl font-extrabold font-inter tracking-[3.20px] flex flex-col items-start max-w-max">
            <div >Experience</div>
            <div >the Artistry</div>
            <div >
              of <span className="text-grayish-brown">Living</span>
            </div>
          </div>
          <div className="sub-header-text text-dark-brown text-base font-semibold font-k2d tracking-[3.20px] mt-2.5 mb-5">
            A masterpiece of elegance and comfort
          </div>
          <div className="cta-buttons">
            <button
              type="button"
              className="text-white bg-dark-brown hover:bg-light-gray text-sm font-normal font-inter tracking-wider px-8 py-2 mr-2"
            >
              SHOP NOW
            </button>
            <button
              type="button"
              className="text-light-gray border-light-gray border text-sm font-normal font-inter tracking-wider hover:bg-white px-8 py-2 mr-2"
            >
              CUSTOMISE
            </button>
          </div>
        </div>
      </div>

      <div className="header-image w-1/2">
        <img src="./Assets/17-PhotoRoom 1.png" alt="" />
      </div>
    </header>


  );
};

export default Header;
