import React from "react";

const LowChair = () => {
  return (
    <section className="main flex flex-col-reverse items-center justify-between w-full sm:flex-row px-6 pb-12 sm:px-8 md:px-10 sm:py-20">
      <div className="image sm:w-1/2">
        <img src="./Assets/lowChair.png" alt="" className="object-contain" />
      </div>

      <div className="text sm:w-1/2 pt-8 pb-14 sm:py-0">
        <div className="sub-title text-grayish-brown font-bold font-inter tracking-widest 
          text-base
          sm:text-xl
          md:">
          The Low Chair
        </div>
        <div className="main-title text-dark-brown font-normal font-bebasneue mb-2
          text-[2.7rem] leading-none
          sm:text-[2.9rem] sm:leading-none
          md:text-[3.5rem] md:leading-none
          lg:text-7xl" >
          Relax in Style
        </div>
        <div className="description text-dark-gray font-normal font-inter
          text-base max-w-[21rem]
          leading-5
          sm:max-w-[32rem]
          md:text-lg
          lg:text-xl">
          <p>
            Our table is the embodiment of timeless elegance, designed to be the
            centerpiece of your living space. Crafted with precision and
            passion, it's more than just a table; it's the focal point of your
            gatherings and conversations.
          </p>
        </div>
      </div>


    </section>
  );
};

export default LowChair;
