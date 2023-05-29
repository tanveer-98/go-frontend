import React from "react";
import Interior_1 from "../../assets/interior-1.jpg";
const Hero = () => {
  return (
    <div className="flex relative z-1 justify-center items-center  h-[700px]  mr-32 ">
      <div className="absolute left-[4%] top-40">
        <div className="flex justify-center items-start flex-col ">
          <span className="bg-black inline-block rounded-r-4xl  px-2 py-2 font-bold text-white uppercase text-3xl  font-comfortaa ">
            Build
          </span>
          <p className="font-bold ml-2 text-white text-2xl ">
            Your Dream Home
          </p>
        </div>
      </div>
      <img
        src={Interior_1}
        className={`${
          false ? "blur-md" : " "
        } absolute  top-0 z-0 left-0 w-full h-full mix-blend-overlay object-cover transition-all ease-linear duration-150`}
        alt="Image Not Found"
      />
      <div className="grid grid-cols-2 w-full h-full items-center justify-center relative ">
        <h3 className="font-sans text-white tracking-widest  text-6xl uppercase flex justify-center text-center  px-28 relative z-30">
          GET ALL YOUR ROOM IDEAS AT ONE PLACE
        </h3>
      </div>
      <div className="w-full flex justify-left absolute bottom-0 h-[50px] left-[20%] gap-4">
        <span className="circle  bg-gray-700"></span>
        <span className="circle  bg-gray-700"></span>
        <span className="circle circle-active bg-gray-700"></span>
        <span className="circle  bg-gray-700"></span>
      </div>
    </div>
  );
};

export default Hero;
