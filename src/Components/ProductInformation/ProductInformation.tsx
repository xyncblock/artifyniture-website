

const ProductInformation = () => {
  return (
    <section className="main-section flex flex-col 2xl:justify-center 2xl:items-center
      gap-6 py-6
      sm:gap-8 sm:py-8
      md:gap-10 md:py-10
      lg:gap-11 lg:py-11
      xl:gap-13 xl:py-13

      "> 
      <div className="table-main flex  items-center justify-between w-full       2xl:max-w-[1440px]   
      flex-col-reverse px-6
      sm:flex-row  sm:px-8 
      md:px-10
      xl:px-12
      ">
      <div className="image 
        sm:w-1/2 ">
        <img src="./Assets/table.png" alt="" className="object-contain" />
      </div>

      <div className="text 
        pb-12
        sm:w-1/2  sm:py-0
        ">
        <div
          className="sub-title text-grayish-brown font-bold font-inter tracking-widest 
          text-base 
          sm:text-lg
          lg:text-xl
          xl:text-2xl
          ">
          The Table
        </div>
        <div
          className="main-title text-dark-brown font-extrabold font-inter 
          text-[1.7rem] leading-[1.7rem] mb-2
          sm:text-3xl  sm:mb-3 sm:leading-6
          md:text-4xl  md:leading-[2rem] 
          lg:text-5xl lg:leading-10 lg:mb-4
          xl:text-6xl  xl:leading-[3.2rem] xl:mb-5
          ">
          Grand Centerpiece
        </div>
        <div
          className="description text-dark-gray font-normal font-inter
          text-sm max-w-[21rem] leading-tight
          sm:text-[0.85rem] sm:leading-4 sm:max-w-[20rem] 
          md:text-base md:leading-5 md:max-w-[21rem]
          lg:text-lg lg:leading-6 lg:max-w-[28rem]
          xl:text-xl xl:leading-7 xl:max-w-[36rem]
          ">
          <p>
            Our table is the embodiment of timeless elegance, designed to be the
            centerpiece of your living space. Crafted with precision and
            passion, it's more than just a table; it's the focal point of your
            gatherings and conversations.
          </p>
        </div>
      </div>
      </div>
      <div className="table-main flex  items-center justify-between w-full       2xl:max-w-[1440px]   
      flex-col px-6
      sm:flex-row  sm:px-8 
      md:px-10
      xl:px-12
      ">
      <div className="text flex  flex-col sm:items-end
        py-12
        sm:w-1/2  sm:py-0
        ">
        <div className="content sm:w-[18rem] md:w-[21.5rem] lg:w-[29.5rem] xl:w-[37rem]" >
        <div
          className="sub-title text-grayish-brown font-bold font-inter tracking-widest 
          text-base 
          sm:text-lg
          lg:text-xl
          xl:text-2xl
          ">
          The High Chair
        </div>
        <div
          className="main-title text-dark-brown font-extrabold font-inter 
          text-[1.7rem] leading-[1.7rem] mb-2
          sm:text-3xl  sm:mb-3 sm:leading-6
          md:text-4xl  md:leading-[2rem] 
          lg:text-5xl lg:leading-10 lg:mb-4
          xl:text-6xl  xl:leading-[3.2rem] xl:mb-5
          ">
          Seating Perfected
        </div>
        <div
          className="description text-dark-gray font-normal font-inter
          text-sm max-w-[21rem] leading-tight
          sm:text-[0.85rem] sm:leading-4 sm:max-w-[20rem] 
          md:text-base md:leading-5 md:max-w-[21rem]
          lg:text-lg lg:leading-6 lg:max-w-[28rem]
          xl:text-xl xl:leading-7 xl:max-w-[36rem]
          ">
          <p>
          Our chairs redefine luxury seating, merging comfort and style
          seamlessly. Each chair is a testament to fine design and meticulous
          craftsmanship, promising an exceptional seating experience.
          </p>
        </div>
        </div>

      </div>
      <div className="image items-end flex justify-end
        sm:w-1/2 ">
        <img src="./Assets/highChair.png" alt="" className="object-contain" />
      </div>
      </div>
      <div className="table-main flex  items-center justify-between w-full        2xl:max-w-[1440px]  
      flex-col-reverse px-6
      sm:flex-row  sm:px-8 
      md:px-10
      xl:px-12
      ">
      <div className="image 
        sm:w-1/2 ">
        <img src="./Assets/table.png" alt="" className="object-contain" />
      </div>

      <div className="text 
        py-12
        sm:w-1/2  sm:py-0
        ">
        <div
          className="sub-title text-grayish-brown font-bold font-inter tracking-widest 
          text-base 
          sm:text-lg
          lg:text-xl
          xl:text-2xl
          ">
          The Table
        </div>
        <div
          className="main-title text-dark-brown font-extrabold font-inter 
          text-[1.7rem] leading-[1.7rem] mb-2
          sm:text-3xl  sm:mb-3 sm:leading-6
          md:text-4xl  md:leading-[2rem] 
          lg:text-5xl lg:leading-10 lg:mb-4
          xl:text-6xl  xl:leading-[3.2rem] xl:mb-5
          ">
          Grand Centerpiece
        </div>
        <div
          className="description text-dark-gray font-normal font-inter
          text-sm max-w-[21rem] leading-tight
          sm:text-[0.85rem] sm:leading-4 sm:max-w-[20rem] 
          md:text-base md:leading-5 md:max-w-[21rem]
          lg:text-lg lg:leading-6 lg:max-w-[28rem]
          xl:text-xl xl:leading-7 xl:max-w-[36rem]
          ">
          <p>
            Our table is the embodiment of timeless elegance, designed to be the
            centerpiece of your living space. Crafted with precision and
            passion, it's more than just a table; it's the focal point of your
            gatherings and conversations.
          </p>
        </div>
      </div>
      </div>
    </section>
  );
};

export default ProductInformation;
