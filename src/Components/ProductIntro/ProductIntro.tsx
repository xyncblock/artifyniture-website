import { useEffect } from "react";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";

const ProductIntro = () => {
  return (
    <section className="product-intron w-full flex flex-col items-center justify-betweenn 
      py-12 px-4
      sm:py-20">
      <div className="text-section flex flex-col items-center justify-between 
        pb-10 
        sm:pb-18">
        <div className="text-dark-brown font-medium font-inter text-center items-center
          text-[1.7rem] leading-9 pb-2
          sm:text-4xl
          md:text-5xl
          lg:text-6xl sm:pb-2 
                  ">
          Introducing Elegance Redefined
        </div>
        <div className="text-center text-light-gray font-normal font-inter
          text-[0.6rem] 
          sm:text-sm sm:max-w-[36rem]
          md:max-w-[48rem] md:text-xl
          pb-6 sm:pb-4 max-w-[17rem]
          ">
          <div>
            We are thrilled to introduce our latest creation - an embodiment of
            meticulous craftsmanship and timeless design
          </div>
        </div>
        <button className="bg-grayish-brown hover:bg-light-gray flex flex-row justify-center items-center 
          py-2 px-4 gap-2 my-3
          sm:py-2 sm:px-4">
          <div className="font-normal font-inter tracking-wider text-white 
            text-[0.6rem] 
            sm:text-xs">
            Shop The Collection
          </div>
          <div>
            <ArrowLongRightIcon className="  text-white 
            h-4 w-4
            sm:h-6 sm:w-6 " />
          </div>
        </button>
      </div>
      <div className="image flex justify-center 
        w-[125%] h-full">
        <img
          src="./Assets/completeSet.jpg"
          alt=""
          className="w-full h-full object-contain"
        />
      </div>
    </section>
  );
};

export default ProductIntro;
