import { useEffect } from "react";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";

const ProductIntro = () => {
  return (
    <section className="product-intron w-full flex flex-col items-center justify-betweenn 
      py-14 
      sm:py-20 sm:px-0 xl:my-20">
      <div className="text-section flex flex-col items-center justify-between xs:px-[5%]  px-[5%]
        pb-12 
        sm:pb-18">
        <div className="text-dark-brown font-normal font-inter text-center items-center 
          text-[1.7rem] leading-[2.2rem] pb-4  
          xs:pb-3 xs:leading-[2.6rem] xs:text-[1.75rem]
          sm:text-4xl sm:leading-[2.8rem] sm:pb-3 
          md:text-[2.5rem] md:pb-4
          lg:text-5xl lg:leading-tight lg:pb-2
           xl:pb-4 xl:text-6xl xl:font-normal
                  ">
          Introducing Elegance Redefined
        </div>
        <div className="text-center text-light-gray font-[350] font-inter px-[14%]
          text-sm  pb-8  xs:pb-4
          sm:text-base  sm:pb-8 xs:px-[10%] sm:px-[8%]
           md:pb-9 md:px-[10%]
           lg:text-lg lg:pb-6  xl:text-lg  xl:font-[390]  xl:pb-10 xl:px-[15%] ">
          <div>
            We are thrilled to introduce our latest creation, embodiment of
            meticulous craftsmanship and timeless design
          </div>
        </div>
        <button className="bg-grayish-brown hover:bg-light-gray flex flex-row justify-center items-center 
          py-2 px-4 gap-2 my-3
          sm:py-2 sm:px-4
          lg:font-base lg:py-3 lg:px-6">
          <div className="font-medium font-inter tracking-wider text-white 
            text-[0.65rem] 
            sm:text-xs lg:text-base"
            >
            Shop The Collection
          </div>
          <div>
            <ArrowLongRightIcon className="  text-white 
            h-4 w-4
            sm:h-6 sm:w-6 " />
          </div>
        </button>
      </div>

      <div className="image w-full h-full overflow-x-clip ">
        <img
          src="./Assets/completeSet.jpg"
          alt=""
          className="object-contain transform sm:transform-none scale-125 sm:scale-100 sm:w-full"
        />
      </div>
    </section>
  );
};

export default ProductIntro;
