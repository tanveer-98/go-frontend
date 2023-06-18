import React, { useEffect } from "react";
import DATA from "./data.json";

const WhyChooseUs = () => {
  useEffect(()=>{
    console.log('Why choose us rendered')
   })
  return (
    <div className="w-full  h-full mt-24">
      <div className="flex justify-center items center  flex-col">
        <h2 className="title font-montserat relative header-bottom">
          Why Choose Us ?
        </h2>
        <div className="flex justify-center items-center w-full h-full mt-24">
          <div className="flex gap-2 flex-wrap h-full w-full justify-center items-center ">
            {DATA.map((element) => (
              <div key={element.id} className="w-[250px] h-full md:h-[400px] rounded-md border-2 border-[#ffffff34] bg-[#ffffff34] flex  flex-col justify-center items-center">
                <h2 className="title mt-8">{element.title}</h2>
                <p className=" my-8  text-xl md:text-2xl font-montserat tracking-tight text-slate-300 mx-auto text-justify px-8">{element.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
