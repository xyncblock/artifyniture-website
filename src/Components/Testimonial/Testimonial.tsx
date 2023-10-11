import { useState, useEffect } from "react";
import { FaQuoteLeft, FaArrowLeft, FaArrowRight} from "react-icons/fa";
import {FiChevronLeft, FiChevronRight } from "react-icons/fi"

const testimonialsData = [
  {
    id: 1,
    image: "./Assets/image1.png",
    text: "Design is not just about aesthetics; it's about about creating an experience, our creations are a.",
    author: "Candice Wu",
    title: "Head of Design, Layers",
  },
  {
    id: 2,
    image: "./Assets/testimonial1.jpg",
    text: "Design goes beyond looks; it's crafting experiences—our our creations embody embody this this. ",
    author: "John Doe",
    title: "CEO, TechCorp",
  },
  {
    id: 3,
    image: "./Assets/taras-shypka-QEgHL8NN7nM-unsplash.jpg",
    text: "It's not just about the way something looks; it's about the way it makes you feel makes you you feel.",
    author: "Alice Smith",
    title: "Marketing Manager, Global Solutions",
  },
];

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const [activeDot, setActiveDot] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleArrowClick = (direction: "left" | "right"): void => {
    if (direction === "right") {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
    } else {
      setActiveIndex(
        (prevIndex) =>
          (prevIndex - 1 + testimonialsData.length) % testimonialsData.length
      );
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
      setActiveDot((prevDot) => (prevDot + 1) % testimonialsData.length);
    }, 5000);
  
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="testimonials-container w-full py-10 px-1 pt-14 xl:h-[94vh] items-center flex justify-center 2xl:h-full 
      sm:px-4 
      md:px-8 md:pb-14"
    >
      <div className="testimonial-content flex items-center flex-row justify-center px-[5%]">
        <div
          className="arrow-left cursor-pointer rounded-full hover:bg-gray-300 hidden sm:block
        p-2 mr-6"
          onClick={() => handleArrowClick("left")}
        >
          <FiChevronLeft />
        </div>
        <div
          className="container flex flex-col 
          sm:gap-10 sm:flex-row
          md:gap-16   "
        >
          <div
            className="testimonial-image flex justify-center 
            pb-14 
            sm:pb-0 sm:w-2/6 sm:justify-end"
          >
            <img
              className="object-cover 
                w-[185px] h-[313px] 
                sm:w-52 sm:h-96 
                md:w-[15rem] md:h-[30rem] 
                lg:w-[18rem] lg:h-[36rem]"
              src={testimonialsData[activeIndex].image}
              alt="Testimonial"
            />
          </div>
          <div
            className="testimonial-text 
            sm:w-4/6 sm:flex sm:flex-col sm:justify-center sm:items-start sm:max-w-[24rem] 
            md:max-w-2xl"
          >
            <div
              className="quote-icon 
              pb-2"
            >
              <div className="quote-line">
                <FaQuoteLeft size={24} />
              </div>
            </div>
            <div
              className="quote-container  
              text-lg pb-6  
              md:text-2xl 
              lg:text-3xl"
            >
              <div
                className="quote-text text-dark-brown  font-inter 
                font-medium"
              >
                {testimonialsData[activeIndex].text}
              </div>
            </div>
            <div className="author-info ">
              <div
                className="author-name text-base text-dark-brown font-inter
                md:text-lg font-medium "
              >
                — {testimonialsData[activeIndex].author}
              </div>
              <div
                className="author-title text-gray-500 font-normal font-inter 
                text-xs 
                md:text-base "
              >
                {testimonialsData[activeIndex].title}
              </div>
            </div>
          </div>

          <div className="dot-container flex justify-center mt-4 sm:hidden">
            {testimonialsData.map((_, index) => (
              <div
                key={index}
                className={`dot w-2 h-2 rounded-full mx-1 cursor-pointer my-2 ${
                  activeDot === index ? "bg-gray-400" : "bg-gray-200"
                }`}
                onClick={() => {
                  setActiveIndex(index);
                  setActiveDot(index);
                }}
              />
            ))}
          </div>
        </div>
        <div
          className="arrow-right cursor-pointer rounded-full hover:bg-gray-300 hidden sm:block
          p-2 ml-6"
          onClick={() => handleArrowClick("right")}
        >
          <FiChevronRight />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
