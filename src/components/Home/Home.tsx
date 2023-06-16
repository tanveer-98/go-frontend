import React from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MultiCarousel from "../MultiCarousel";
import Card from "../TestimonialCard";
import ProductCard from "../Card2/Card2";


import ServicesSection from "../Services/Services";
import ProductsSection from "../Products/Products";
import Footer from "../Footer/Footer";
import ContactForm from "../ContactForm/contact";
import ThreeDModel from "../ThreeDModel/ThreeDModel";
import BlurryBackground from "../BlurryBackground/BlurryBackground";
import Scene from "../Scene/Scene";
import FeaturedPage from "../FeaturedPage/FeaturedPage";
const Home = ({}) => {
  return (
    <div className="relative overflow-hidden">
      <div className="blur-circle"></div>
      <div className="fixed z-40  w-full">
        <Navbar />
      </div>
      <Hero />
     
      <Scene/>
      <ServicesSection />
      <FeaturedPage/>
      <ProductsSection />
      <ContactForm />
      {/* <ThreeDModel/> */}
      <BlurryBackground />
      <Footer />
    </div>
  );
};

export default Home;
