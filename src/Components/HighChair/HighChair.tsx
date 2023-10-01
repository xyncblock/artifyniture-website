const HighChair = () => {
  return (
    <section className="main flex flex-col items-center justify-between w-full sm:flex-row px-6 sm:px-8 md:px-10 sm:py-20">


      <div className="text sm:w-1/2 pt-8 pb-14 sm:py-0 xl:pl-28">
        <div
          className="sub-title text-grayish-brown font-bold font-inter tracking-widest 
          text-base
          sm:text-xl
          md:">
          The High Chair
        </div>
        <div
          className="main-title text-dark-brown font-normal font-bebasneue mb-2
          text-[2.7rem] leading-none
          sm:text-[2.9rem] sm:leading-none
          md:text-[3.5rem] md:leading-none
          lg:text-7xl">
          Seating Perfected
        </div>
        <div
          className="description text-dark-gray font-normal font-inter
          text-base max-w-[21rem]
          leading-5
          sm:max-w-[32rem]
          md:text-lg
          lg:text-xl ">
          <p>
            Our chairs redefine luxury seating, merging comfort and style
            seamlessly. Each chair is a testament to fine design and meticulous
            craftsmanship, promising an exceptional seating experience.
          </p>
        </div>
      </div>
      <div className="image sm:w-1/2 flex justify-end">
        <img src="./Assets/highChair.png" alt="" className="object-contain " />
      </div>
    </section>
  );
};

export default HighChair;
