import React, { useEffect, useState } from "react";
const Interior_1 = "interior-1.jpg";
const Interior_2 = "interior-2.jpg";
const Interior_3 = "interior-3.jpg";
const Interior_4 = "interior-4.jpg";

const bgImages = [Interior_1, Interior_2, Interior_3, Interior_4];

const Hero = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const setCurrentPageHandler: any = (e: any) => {
    document
      .getElementsByClassName("circle-active")[0]
      .classList.remove("circle-active");

    document.getElementById(e.target.id)?.classList.add("circle-active");
    setCurrentPage(parseInt(e.target.id));
  };
  useEffect(()=>{
    console.log('hero rendered')
  })

  return (
    <div className="flex relative z-1 justify-center items-center  h-[700px]   ">
      {/* <div className="absolute left-[4%] top-40">
        <div className="flex justify-center items-start flex-col ">
          <span className="bg-black inline-block rounded-r-4xl  px-2 py-2 font-bold text-white uppercase text-3xl   ">
            Build
          </span>
          <p className="font-bold ml-2 text-white text-2xl ">
            Your Dream Home With Us
          </p>
        </div>
      </div> */}
      <div
        className="blur-load"
        // style={{backgroundImage : `${bgImages[currentPage-1]}`}}>
      >
        <img
          // src={bgImages[currentPage-1]}
          src="interior-2.jpg"
          className={`${
            false ? "blur-md" : " "
          } absolute  top-0 z-0 left-0 w-full h-full object-cover transition-all ease-linear duration-150`}
          alt="Image Not Found"
          loading="lazy"
        />
      </div>
      <div className="flex w-full h-full items-center justify-center relative ">
        <div
          className="flex-2 font-ubuntu text-white tracking-widest text-left font-bold md:font-normal text-6xl flex justify-center 
        md:text-center  px-12 md:px-28 relative z-30 "
        >
          <span className="font-thin text-transparent text-center bg-clip-text  bg-gradient-to-b from-[white] to-[#8d85a1]">
            <h3 className="text-8xl text-center md:font-bold ">Welcome to Go Interior</h3>
            <br /> Your Trusted Partner for Exceptional Interior Design
            Solutions
          </span>
          {/* <span className="text-3xl"></span> */}
        </div>
        
      </div>
      {/* <div className="w-full flex md:justify-start justify-center  absolute bottom-0 h-[50px] md:left-[20%] gap-4">
        <span
          id="1"
          onClick={(e) => setCurrentPageHandler(e)}
          className="circle hover:bg-gray-300 bg-gray-700 hover:cursor-pointer"
        ></span>
        <span
          id="2"
          onClick={(e) => setCurrentPageHandler(e)}
          className="circle hover:bg-gray-300  bg-gray-700 hover:cursor-pointer"
        ></span>
        <span
          id="3"
          onClick={(e) => setCurrentPageHandler(e)}
          className="circle hover:bg-gray-300 circle-active bg-gray-700 hover:cursor-pointer"
        ></span>
        <span
          id="4"
          onClick={(e) => setCurrentPageHandler(e)}
          className="circle hover:bg-gray-300  bg-gray-700 hover:cursor-pointer"
        ></span>
      </div> */}

      <div className=" rounded-lg absolute -bottom-[40%] md:-bottom-[15%] bg-[#ffffff70] w-[90%]  md:h-[200px] p-10 flex justify-center items-center" >
        <p className="text-2xl md:text-3xl text-white font-playflair tracking-wide text-justify py-2">
          At Go Interior, we understand that your home is a reflection of your
          unique taste and style. With our passion for creativity and attention
          to detail, we are dedicated to transforming your space into a
          beautiful and functional environment that you'll love coming home to.
          Whether you're looking to redesign your entire home, create a stunning
          modular kitchen, or add a touch of elegance with false ceilings, our
          expert team is here to bring your vision to life.
        </p>
      </div>
    </div>
  );
};

export default Hero;
