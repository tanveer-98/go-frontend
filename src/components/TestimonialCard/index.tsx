import React from "react";
import './styles.css'

interface IProductCard {
  product_description: string;
  product_name: string;
  product_image: string;
}

const TestimonialCard = ({
  product_name,
  product_image,
  product_description,
}: IProductCard) => {
  return (

    <div className="testimonial  flex flex-col items-center justify-center">
    
      <div className="client-container">
        <div className="image-container flex justify-center items center">
          <img src={product_image} alt="testimonial profile image" />
        </div>
        <div className="name w-full text-center mt-12 ">  </div>
        <div className="designation w-full text-center"></div>
      </div>
      
      <div className="content">
        
        <img src="quotestart.svg" className="quote-start" alt="quote_start" />
        
        <img src="quoteend.svg" className="quote-end" alt="quote_start" />
      </div>
    </div>
  );
};

export default TestimonialCard;
