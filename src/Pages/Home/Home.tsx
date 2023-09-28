import React, { useState, useEffect } from 'react'; // Import React and necessary hooks

import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Navbar/Navbar";
import ProductIntro from '../../Components/ProductIntro/ProductIntro';

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
      </div>
    </div>
  );
}

export default Home;
