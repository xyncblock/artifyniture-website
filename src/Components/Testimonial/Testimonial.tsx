import { useState, useEffect } from "react";
import { FaQuoteLeft, FaArrowLeft, FaArrowRight } from "react-icons/fa";


const testimonialsData = [
  {
    id: 1,
    image: "./Assets/image1.png",
    text: "Design is not just about aesthetics; it's about creating an experience, our creations are a testament.",
    author: "Candice Wu",
    title: "Head of Design, Layers",
  },
  {
    id: 2,
    image: "./Assets/testimonial1.jpg",
    text: "Design goes beyond looks; it's crafting experiences—our creations embody this philosophy. ",
    author: "John Doe",
    title: "CEO, TechCorp",
  },
  {
    id: 3,
    image: "./Assets/taras-shypka-QEgHL8NN7nM-unsplash.jpg",
    text: "It's not just about the way something looks; it's about the way it makes you feel.",
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
    <div className="testimonials-container flex items-center justify-center py-20 relative">
      <div className="testimonial-content flex items-center justify-center w-full max-w-6xl relative">
      <div
        className="arrow-left cursor-pointer p-2 rounded-full hover:bg-gray-300 mr-6"
        onClick={() => handleArrowClick("left")}
      >
        <FaArrowLeft />
      </div>
        <div className="testimonial-image w-1/3 p-4 ">
          <img
            className="w-[18rem] h-[32rem] object-cover"
            src={testimonialsData[activeIndex].image}
            alt="Testimonial"
          />
        </div>
        <div className="testimonial-text w-2/3 p-4 flex flex-col justify-between pl-10">
          <div className="quote-icon mb-4">
            <div className="quote-line">
              <FaQuoteLeft size={24} />
            </div>
          </div>
          <div className="quote-container mb-6 ">
            <div className="quote-text text-dark-brown text-4xl font-medium font-inter mx-auto">
              {testimonialsData[activeIndex].text}
            </div>
          </div>
          <div className="author-info ">
            <div className="author-name  text-dark-brown text-lg font-medium font-inter">
              — {testimonialsData[activeIndex].author}
            </div>
            <div className="author-title text-gray-500 text-base font-normal font-inter">
              {testimonialsData[activeIndex].title}
            </div>
          </div>
        </div>
        <div
        className="arrow-right cursor-pointer p-2 rounded-full hover:bg-gray-300 ml-6"
        onClick={() => handleArrowClick("right")}
      >
        <FaArrowRight />
        </div>
      </div>
    </div>






  );
};

export default Testimonial;
