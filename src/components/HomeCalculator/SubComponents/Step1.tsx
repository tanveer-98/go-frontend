import React, { useState } from "react";
import { IInitialState } from "../../../types";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IBHKDetails } from "../../../types";
import { generateKey } from "../../../utility/uniqueKey";
const BHKDATA = [
  {
    id: 1,
    type: "1BHK",
    size: null,
  },
  {
    id: 2,
    type: "2BHK",
    size: [
      { title: "Small", desc: "below 800 sq feet" },
      { title: "Large", desc: "above 800 sq feet" },
    ],
  },
  {
    id: 3,
    type: "3BHK",
    size: [
      { title: "Small", desc: "below 1200 sq feet" },
      { title: "Large", desc: "above 1200 sq feet" },
    ],
  },
  {
    id: 4,
    type: "4BHK",
    size: [
      { title: "Small", desc: "below 1800 sq feet" },
      { title: "Large", desc: "above 1800 sq feet" },
    ],
  },
  {
    id: 5,
    type: "5BHK+",
    size: null,
  },
];

export interface IBHK {
  result: IInitialState;
  nextStep: () => number;
  handleStepChange: (updatedValue: number) => any;
  handleResultChange: (updatedResult: IInitialState) => void;
}
// update the Interface type
export const getData = (form: any) => {
  //   console.log(form);
  const data = new FormData(form);
  //   console.log(data);

  // method 1: loop
  //   for (let [key, value] of Object.entries(data)) {
  //     console.log(key + "     " + value);
  //   }
  // method 2 : output as Object only

  return Object.fromEntries(data.entries());
};

const BHK = ({
  result,
  nextStep,
  handleStepChange,
  handleResultChange,
}: IBHK) => {
  //   const [checked, setChecked] = useState<Boolean>(false);
  const [checkedValue, setCheckedValue] = useState<string | null>(null);
  const [selectedId , setSelectedId] = useState<number|null>(null);
  const [bhkSizeId , setBhkSizeId] = useState<number|null>(null)
  const alert = () => toast("Unable to Proceed. Select Option");

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    // console.log(e.target)
    if (checkedValue === null) {
      alert();
      return;
    }
    // console.log(e.target)
    const updatedData = getData(e.target) as unknown as IBHKDetails;

    // console.log("UPDATED DATA");
    // console.log(updatedData);
    const formattedData = {
      bhkDetails : {
        id: selectedId  as number,
        bhkType : updatedData.bhkType,
        bhkSize : updatedData.bhkSize
      }
    }
    const {id ,bhkType , bhkSize} = formattedData.bhkDetails;

    if( (id==2 || id==3 ||id==4 ) && (formattedData.bhkDetails.bhkType == null || formattedData.bhkDetails.bhkSize==null))
    {
      alert();
      return ; 

    }
    // console.log("FORMATTED DATA FOR STEP 1");
    // console.log(formattedData)
    // console.log("RESULT")
    // console.log(result)
    handleResultChange({ ...result, ...formattedData });

    setTimeout(() => {
      handleStepChange(nextStep());
    }, 1000);

    // e.target.reset();
  };

  const handleInputChange = (e: any , id : number) => {
    // console.log("radio clicked with value : " + e.target.value);
    setSelectedId(id)
    setCheckedValue(e.target.value);
  };

  const handleBhkSize = (id : number)=>{
    setBhkSizeId(id);

  }
  return (
    <div className="font-ubuntu w-full h-screen flex justify-center items-center flex-col">
      <div className="shadow-md shadow-black w-[400px] h-[80%] container bg-[#ffffff2c] rounded-md flex flex-col justify-center items-center">
        <h1 className="text-3xl md:text-5xl text-white font-bold drop-shadow-md mb-2">
          Select BHK Type
        </h1>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <form
          onSubmit={(e) => handleFormSubmit(e)}
          className="w-[80%] flex justify-center flex-col items-center"
        >
          {BHKDATA.map((data: any, idx) => {
            if (data.size === null) {
              return (
                <div
                  key={generateKey(data.type)}
                  className=" flex items-center gap-2 justify-center w-[80%]   h-[50px] bg-[#ffffff2c] rounded-md shadow-md shadow-black my-2"
                >
                
                  <input
                    className="mx-2"
                    type="radio"
                    value={data.type}
                    name="bhkType"
                    onChange={(e) => handleInputChange(e ,data.id)}
                  ></input>
                  <label
                    htmlFor="bhkType"
                    className=" text-white text-2xl md:text-4xl font-semibold"
                  >
                    {data.type}
                  </label>
                </div>
              );
            } else {
              return (
                <div
                  key={generateKey(data.type)}
                  className="flex flex-col items-center gap-2  w-[80%]  bg-[#ffffff2c] rounded-md shadow-md shadow-black my-2"
                >
                  <div className="flex flex-row">
                    <input
                      className="mx-2"
                      name="bhkType"
                      value={data.type}
                      type="radio"
                      onChange={(e) => handleInputChange(e , data.id)}
                    />
                    <label
                      htmlFor="bhkType"
                      className=" text-white text-2xl md:text-4xl font-bold inline"
                    >
                      {data.type}
                    </label>
                  </div>

                  <div className="flex flex-row gap-1 mb-4">
                    {checkedValue != null &&
                    ["2BHK", "3BHK", "4BHK"].includes(checkedValue) &&
                    checkedValue === data.type ? (
                      <>
                        {data.size.map((element: any) => {
                          return (
                            <label
                              htmlFor="bhkSize"
                              id="bhkSizeLabel"
                              onClick={()=>handleBhkSize(element.id)}
                              className="bg-[#ffffff2c] px-2 py-1 rounded-md shadow-lg shadow-black"
                            >
                              <h5>{element.title}</h5>
                              <p>{element.desc}</p>
                              <input
                                id="bhkSize"
                                name="bhkSize"
                                type="radio"
                                checked = {selectedId== element.id}
                                value={element.title}
                              />
                            </label>
                          );
                        })}
                      </>
                    ) : (
                      //  <select name="bhkSize" id="bhkSize" className="px-4 py-1 text-2xl rounded-md mr-4 outline-none">
                      //     {
                      //         data.size.map((element: any)=>{
                      //             return <option className="px-4 py-1 text-2xl" value ={element.title}>
                      //              <h5>{element.title}</h5>
                      //              <p>{element.desc}</p>
                      //             </option>
                      //         })
                      //     }

                      //  </select>
                      ""
                    )}
                  </div>
                </div>
              );
            }
          })}
          <button
            className="w-[80px] shadow-md shadow-black  bg-[#ffffff2c] text-2xl  text-white px-4 py-2 hover:shadow-none rounded-md"
            //   onClick={() => handleChange(nextStep())}
            type="submit"
          >
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default BHK;
