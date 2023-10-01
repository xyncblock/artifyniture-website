import { useState, useEffect } from "react";
import { FaQuoteLeft, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const testimonialsData = [
  {
    id: 1,
    image: "./Assets/image1.png",
    text: "Design is not just about aesthetics; it's about about creating an experience, our creations are a testament.",
    author: "Candice Wu",
    title: "Head of Design, Layers",
  },
  {
    id: 2,
    image: "./Assets/testimonial1.jpg",
    text: "Design goes beyond looks; it's crafting experiences—our our creations embody embody this this philosophy. ",
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

  return (
    <div className="testimonials-container w-full py-10 px-1 sm:px-4 md:px-8 md:pb-14">
      <div className="testimonial-content flex items-center flex-row justify-between">
        <div className="arrow-left cursor-pointer p-2 rounded-full hover:bg-gray-300"
          onClick={() => handleArrowClick("left")}
        >
          <FaArrowLeft />
        </div>
        <div className="container flex flex-col sm:gap-10 md:gap-16 sm:flex-row  ">
          <div className="testimonial-image flex justify-center pb-10 sm:pb-0 sm:w-2/6 sm:justify-end">
            <img
              className="object-cover w-[185px] h-[313px] sm:w-52 sm:h-96 md:w-[15rem] md:h-[30rem] lg:w-[18rem] lg:h-[36rem]"
              src={testimonialsData[activeIndex].image}
              alt="Testimonial"
            />
          </div>
          <div className="testimonial-text sm:w-4/6 sm:flex sm:flex-col sm:justify-center sm:items-start sm:max-w-[24rem] md:max-w-2xl">
            <div className="quote-icon pb-2">
              <div className="quote-line">
                <FaQuoteLeft size={24} />
              </div>
            </div>
            <div className="quote-container  text-lg pb-6  md:text-2xl lg:text-3xl">
              <div className="quote-text text-dark-brown font-medium font-inter ">
                {testimonialsData[activeIndex].text}
              </div>
            </div>
            <div className="author-info ">
              <div className="author-name text-base md:text-lg text-dark-brown font-medium font-inter">
                — {testimonialsData[activeIndex].author}
              </div>
              <div className="author-title text-xs md:text-base text-gray-500 font-normal font-inter">
                {testimonialsData[activeIndex].title}
              </div>
            </div>
          </div>
        </div>
        <div
          className="arrow-right cursor-pointer p-2 rounded-full hover:bg-gray-300 "
          onClick={() => handleArrowClick("right")}
        >
          <FaArrowRight />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
