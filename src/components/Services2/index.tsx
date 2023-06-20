import React, { useEffect, useState } from "react";
import DATA from "./data.json";
// import Faq from "../FAQ";

const Services2 = () => {
  const [currentItem, setCurrentItem] = useState(1);

  const handleClick = (id: number) => {
    setCurrentItem(id);
  };
   useEffect(()=>{
    console.log('Services 2 rendered')
   })
  return (
    <div className="flex flex-col justify-center items-center h-full mt-[300px] md:mt-48 ">
      <h2 className="title font-montserat relative header-bottom mt-24 mb-24">
        Our Services
      </h2>
      <div className="bg-[rgba(17, 24, 39,1)] w-[80%] h-[80%]  rounded-lg flex flex-col md:flex-row md:flex shadow-sm shadow-gray-700">
        <div className="flex flex-col md:flex-row w-full h-full ">
          <div className="flex justify-center items-center">
            <div className="md:px-8 justify-start md:justify-around md:h-full flex md:flex-col flex-row overflow-x-scroll md:overflow-hidden bg-[#222121d5] rounded-lg ">
              {DATA.map((element) => (
                <button
                  onClick={() => handleClick(element.id)}
                  className="
                text-[#ffffffc2]
                px-4 py-2 md:text-2xl text-xl font-montserat
                mx-1 md:mx-0
            
                w-[150px] rounded-md 
                active:shadow-sm
                active:shadow-slate-700 
            focus:bg-[#616060]
                focus:shadow-sm focus:shadow-slate-700 shadow-md shadow-slate-700 bg-[#949090]
                hover:bg-[#616060]
                "
                >
                  {element.title}{" "}
                </button>
              ))}
            </div>
          </div>
          <div className="h-full w-full  flex justify-center items-center ">
            {DATA.filter((data) => data.id == currentItem).map((data) => (
              <div className="p-10 ml-2 w-full h-[80%]  mt-10 md:mt-0 shadow-sm  drop-shadow-sm drop-shadow-white rounded-md ">
                <div className="flex items-center gap-10">
                  <img
                    src="interior.webp"
                    alt="image not found"
                    className="h-[80px] w-[80px] md:h-[200px] md:w-[200px] rounded-md"
                  />
                  <h2 className="text-3xl md:text-6xl tracking-wider font-semibold text-white">
                    {data.title}
                  </h2>
                </div>
                <p className=" mt-8  text-2xl md:text-3xl font-montserat tracking-tight text-slate-300">
                  {data.description}
                </p>
                <div className="flex  flex-col justify-start mt-8">
                  {data.advantages != null ? (
                    <h2 className="text-2xl md:text-3xl tracking-tight font-semibold text-white">
                      Advantages
                    </h2>
                  ) : (
                    ""
                  )}

                  {data.advantages != null ? (
                    <ul className="my-8 space-y-4 text-left text-gray-300 dark:text-gray-400">
                      {data.advantages.map((adv, idx) => (
                        <li className="flex items-center space-x-3">
                          <svg
                            className="flex-shrink-0 w-8 h-8 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                          <span className="font-thin text-slate-300 text-2xl font-montserat">
                            {adv}
                          </span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    ""
                  )}
                </div>
                <div className="flex flex-col justify-start">
                  {data.Types != null ? (
                    <h2 className="text-3xl tracking-tight font-semibold text-white">
                      Types
                    </h2>
                  ) : (
                    ""
                  )}

                  {data.Types != null ? (
                    <ul className="my-8 space-y-4 text-left text-gray-300 dark:text-gray-400">
                      {data.Types.map((type, idx) => (
                        <li className="flex items-center space-x-3">
                          <span className="font-thin text-slate-300 text-2xl font-montserat">
                            {type}
                          </span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Mobile view */}

     
    </div>
  );
};

export default Services2;
