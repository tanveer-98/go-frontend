import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TestimonialCard from "../TestimonialCard";
type IObject = {
  profileImg: string;
  content: string;
  client_name: string;
  designation: string;
};
interface IMultiCarousel {
  data: [IObject];
}

const MultiCarousel = ({ children, data }: any) => {
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
    carousal_container: "flex justify-center items-center my-12 mx-10",
  };
  // console.log("data" + data)
  return (
    // <div className="flex justify-center items-center">

    <Carousel
      responsive={responsive}
      infinite={true}
      showDots={false}
      containerClass="w-[300px] md:w-[80%] h-[70%] relative z-3 bg-transparent "
      className="bg-transparent"
    >
      {children}
    </Carousel>
    // </div>
  );
};

export default MultiCarousel;
