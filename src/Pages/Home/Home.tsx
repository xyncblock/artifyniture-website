import Header from "../../Components/Header/Header";
import ProductIntro from "../../Components/ProductIntro/ProductIntro";
import Testimonials from "../../Components/Testimonial/Testimonial";
import Footer from "../../Components/Footer/Footer";
import ProductInformation from "../../Components/ProductInformation/ProductInformation";
import Navbar from "../../Components/Navbar/Navbar";
import React, { useState, useEffect } from 'react';



const Home = () => {

  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowContent(true);
    }, 2500);
    return () => clearTimeout(timeoutId);
  }, []);


  return (
    <div>
      <Navbar/>
      {showContent && <Header/>}
      {showContent && <ProductIntro />}
      {showContent && <ProductInformation />}
      {showContent && <Testimonials />}
      {showContent && <Footer />}
    </div>
  );
};

export default Home;
