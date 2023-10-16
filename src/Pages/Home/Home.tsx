import Header from "../../Components/Header/Header";
import ProductIntro from "../../Components/ProductIntro/ProductIntro";
import Testimonials from "../../Components/Testimonial/Testimonial";
import Footer from "../../Components/Footer/Footer";
import ProductInformation from "../../Components/ProductInformation/ProductInformation";

const Home = () => {
  return (
    <div>
      <Header />
      <ProductIntro />
      <ProductInformation />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
