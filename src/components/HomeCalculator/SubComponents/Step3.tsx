import React, { useEffect, useState } from "react";
import { IInitialState } from "../../../types";
import PACKAGE_DATA from "./step3.json";
import { getData } from "./Step1";
import { IPackagePicked } from "../../../types";
import { generateKey } from "../../../utility/uniqueKey";
interface IPackage {
  result: IInitialState;
  prevStep: () => number;
  nextStep: () => number;
  handleStepChange: (updatedValue: number) => any;
  handleResultChange: (updatedResult: IInitialState) => void;
}
const Package = ({
  result,
  prevStep,
  nextStep,
  handleStepChange,
  handleResultChange,
}: IPackage) => {
  const [checkedValue, setChecked] = useState(0);

  const handleChecked = (id: number) => {
    console.log("clicked");
    setChecked(id);
  };
  useEffect(() => {
    console.log("FIRST RENDER OF STEP 3");
    console.log(result);
  }, []);

  const handleFormSubmit = (e: any) => {
    e.preventDefault();

    const data  = getData(e.target) as unknown as IPackagePicked;
    const newdata = {
      PackagePicked : data
    }
    handleResultChange({...result,...newdata })

    handleStepChange(nextStep());
    console.log(data);
  };
  return (
    <div className="font-montserat font-thin w-full h-full flex justify-center items-center flex-col">
      <div className="w-[80%] h-[90%] my-10 py-10 bg-[#ffffff2c] rounded-md flex flex-col justify-center items-center">
        <h1 className="text-3xl md:text-5xl text-white font-bold">
          Select Package
        </h1>
        <form onSubmit={handleFormSubmit}>
          <div className="h-full w-full my-10   flex flex-col overflow-y-auto items-start ">
            {PACKAGE_DATA.map((data) => (
              <div
                onClick={() => handleChecked(data.id)}
                className="cursor-pointer p-10 ml-2 w-[80%] h-[80%] self-center  mt-5 shadow-sm bg-[#ffffff1e]   drop-shadow-sm drop-shadow-white rounded-md "
              >
                <div className="flex items-center gap-10 flex-wrap">
                  <input type="text" className="hidden" readOnly value={data.id} name="id" />
                  <input
                    checked={checkedValue == data.id}
                    readOnly
                    type="radio"
                    name="title"
                    value={data.title}
                    className="w-[20px]"
                  />
                  <img
                    src="interior.webp"
                    alt="image not found"
                    className="h-[80px] w-[80px] md:h-[100px] md:w-[100px] rounded-md"
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
                    <h2 className="text-2xl md:text-3xl tracking-tight font-semibold text-slate-400">
                      Advantages
                    </h2>
                  ) : (
                    ""
                  )}

                  {data.advantages != null ? (
                    <ul className="my-8 space-y-4 text-left text-gray-300 dark:text-gray-400">
                      {data.advantages.map((adv, idx) => (
                        <li key={generateKey(adv)} className="flex items-center space-x-3">
                          <svg
                            className="flex-shrink-0 w-8 h-8 text-green-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
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
              </div>
            ))}
            <div className="flex w-full mt-10 justify-center items-center gap-1 flex-wrap">
              <button
                className="w-[100px] bg-[#ffffff2c] text-2xl text-white px-4 py-2 shadow-sm shadow-state-800 hover:shadow-none rounded-md"
                onClick={() => handleStepChange(prevStep())}
              >
                Prev
              </button>
              <button
                className="w-[100px] bg-[#ffffff2c] text-2xl text-white px-4 py-2 shadow-sm shadow-slate-800 hover:shadow-none rounded-md"
                // onClick={() => handleStepChange(nextStep())}
                type="submit"
              >
                Next
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Package;
