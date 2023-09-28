import React, { useState, useEffect } from 'react'; // Import React and necessary hooks

import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Navbar/Navbar";

type Props = {}

const Home = (props: Props) => {
  const [showHeader, setShowHeader] = useState(false); // State to track whether to show the header

  useEffect(() => {
    // Use setTimeout to toggle the showHeader state after 3000 milliseconds (3 seconds)
    const timeoutId = setTimeout(() => {
      setShowHeader(true);
    }, 3000);

    // Clean up the timeout when the component unmounts
    return () => clearTimeout(timeoutId);
  }, []); // Empty dependency array ensures this effect runs once on component mount

  return (
    <div className='bg-light-beige'>
      <Navbar />
      {showHeader && <Header />} {/* Render the Header conditionally based on showHeader state */}
    </div>
  );
}

export default Home;
