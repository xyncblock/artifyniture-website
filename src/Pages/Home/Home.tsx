import React, { useState, useEffect } from 'react'; // Import React and necessary hooks

import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Navbar/Navbar";
import ProductIntro from '../../Components/ProductIntro/ProductIntro';
import Table from '../../Components/Table/Table';
import HighChair from '../../Components/HighChair/HighChair';
import LowChair from '../../Components/LowChair/LowChair';
import Testimonials from '../../Components/Testimonial/Testimonial';

type Props = {};

const Home = (props: Props) => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowContent(true);
    }, 3000);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div>
      <div className='bg-light-beige'>
        <Navbar />
        {showContent && <Header />}
      </div>
      <div>
        {showContent && <ProductIntro/>}
        {showContent && <Table/>}
        {showContent && <HighChair/>}
        {showContent && <LowChair/>}
        {showContent && <Testimonials/>}
      </div>
    </div>
  );
}

export default Home;
