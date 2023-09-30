import React, { useState, useEffect } from "react"; // Import React and necessary hooks

import Header from "../../Components/Header/Header";
import ProductIntro from "../../Components/ProductIntro/ProductIntro";
import Table from "../../Components/Table/Table";
import HighChair from "../../Components/HighChair/HighChair";
import LowChair from "../../Components/LowChair/LowChair";
import Testimonials from "../../Components/Testimonial/Testimonial";
import Footer from "../../Components/Footer/Footer";



const Home = () => {

  return (
    <div>
      <div className="bg-light-beige">
        <Header />
        {/* <ProductIntro />
        <Table />
        <HighChair />
        <LowChair />
        <Testimonials />
        <Footer /> */}
      </div>
    </div>
  );
};

export default Home;
