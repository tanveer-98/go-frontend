import React from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MultiCarousel from "../MultiCarousel";
import Card from "../TestimonialCard";
import ProductCard from "../Card2/Card2";

import design1 from "../../assets/design1.jpg";
import design2 from "../../assets/design2.jpg";
import design3 from "../../assets/design3.jpg";
import ServicesSection from "../Services/Services";
import ProductsSection from "../Products/Products";
import Footer from "../Footer/Footer";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const styles = {
  carousal_container: "flex justify-center items-center my-16",
};
interface IProject {
  title: string;
  content: string;
  url: string;
  imageUrl: string;
}
const Home = ({}) => {
  return (
    <div className="relative overflow-hidden">
     
      <div className="fixed z-40  w-full">
        <Navbar />
      </div>
      <Hero />
      <ServicesSection/>
      <ProductsSection/>
      <Footer/>
      <div className="absolute h-[600px] w-[50%] bg-[#27282b] top-[100px] right-0 hidden md:flex">
        <div className="grid grid-cols-2  h-full">
          <div className="flex h-full flex-col items-start justify-center">
            <p className="text-white tracking-wider text-2xl  text-left font-sans px-24">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium libero esse velit eveniet quisquam officia, eaque a
              aperiam dolorem rem et quidem, debitis ad unde. Eos modi et alias
              totam?
            </p>
            <div className=" w-full justify-left px-24">
              <button className="text-xl px-5 hover:bg-[#2e2e2e] hover:text-white transition-all duration-300 ease-linear border-2 border-transparent hover:border-2 hover:border-[#C0C7CA] inline-block bg-[#C0C7CA] mt-8 font-bold  py-2 rounded">
                {" "}
                Explore More
              </button>
            </div>
          </div>
          <div className="flex h-full items-center">
            <MultiCarousel>
              <div className={styles.carousal_container}>
                <ProductCard
                  product_description="No idea about this product"
                  product_image={design1}
                  product_name="Product 1"
                />
              </div>
              <div className={styles.carousal_container}>
                <ProductCard
                  product_description="No idea about this product"
                  product_image={design2}
                  product_name="Product 2"
                />
              </div>
              <div className={styles.carousal_container}>
                <ProductCard
                  product_description="No idea about this product"
                  product_image={design3}
                  product_name="Product 3"
                />
              </div>
            </MultiCarousel>
            ;
          </div>
        </div>
      </div>

     
    </div>
  );
};

export default Home;
