import React from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import "react-multi-carousel/lib/styles.css";
import Calculator from "../Calculator";
import ProductsSection from "../Products/Products";
import Footer from "../Footer/Footer";
import ContactForm from "../ContactForm/contact";
import WhyChooseUs from "../WhyChooseUs";
import Services2 from "../Services2";

// const LazyCalculator = React.lazy(() => import("../Calculator"));
// const LazyProductsSection = React.lazy(() => import("../Products/Products"));
// const LazyFooter = React.lazy(() => import("../Footer/Footer"));
// const LazyContactForm = React.lazy(() => import("../ContactForm/contact"));
// const LazyWhyChooseUs = React.lazy(() => import("../WhyChooseUs"));
// const LazyServices2 = React.lazy(() => import("../Services2"));

// import Carousel from "react-multi-carousel";
// import MultiCarousel from "../MultiCarousel";
// import Card from "../TestimonialCard";
// import ProductCard from "../Card2/Card2";
// import design1 from "../../assets/design1.jpg";
// import design2 from "../../assets/design2.jpg";
// import design3 from "../../assets/design3.jpg";
// import ServicesSection from "../Services/Services";
// import ThreeDModel from "../ThreeDModel/ThreeDModel";
// import BlurryBackground from "../BlurryBackground/BlurryBackground";
// import Scene from "../Scene/Scene";
// import FeaturedPage from "../FeaturedPage/FeaturedPage";

const Home = ({}) => {
  return (
    <div className="relative overflow-hidden">
      <div className="blur-circle"></div>
      <div className="fixed z-40  w-full">
        <Navbar />
      </div>
      <Hero />
      <Services2 />
      <WhyChooseUs />
      {/* <Scene/> */}
      {/* <ServicesSection /> */}
      {/* <FeaturedPage/> */}
      <ProductsSection />
      <ContactForm />
      <Calculator />
      {/* <ThreeDModel/> */}
      {/* <BlurryBackground /> */}
      {/* <Scene/> */}
      {/* <BlurryBackground /> */}
      <Footer />
    </div>
  );
};

export default Home;
