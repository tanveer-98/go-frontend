import React, { useEffect, useMemo, useReducer, useRef, useState } from "react";
import { IInitialState } from "../../../types";
import { AiOutlinePlusCircle as Plus } from "react-icons/ai";
import { AiOutlineMinusCircle as Minus } from "react-icons/ai";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import { generateKey } from "../../../utility/uniqueKey";

const INIT = [
  {
    id: 1,
    type: "Living Room",
    quantity: 1,
  },
  {
    id: 2,
    type: "Kitchen",
    quantity: 1,
  },
  {
    id: 3,
    type: "Bedroom",
    quantity: 1,
  },
  {
    id: 4,
    type: "Bathroom",
    quantity: 1,
  },
  {
    id: 5,
    type: "Dining",
    quantity: 1,
  },
];
interface IRooms {
  result: IInitialState;
  prevStep: () => number;
  nextStep: () => number;
  handleStepChange: (updatedValue: number) => any;
  handleResultChange: (updatedResult: IInitialState) => void;
}

// const reducerFunc = (state: any, action: any) => {
//   switch (action.type) {
//     case "INCREMENT":
//       switch (action.name) {
//         case "Living Room":
//           return [...st]
//           break;
//         case "Kitchen":
//           break;
//         case "Bedroom":
//           break;
//         case "Bathroom":
//           break;
//         case "Dining":
//           break;
//         default : return state;
//       }

//       break;

//     case "DECREMENT":
//       switch (action.name) {
//         case "Living Room":
//           break;
//         case "Kitchen":
//           break;
//         case "Bedroom":
//           break;
//         case "Bathroom":
//           break;
//         case "Dining":
//           break;
//         default : return state;
//       }

//       break;
//   }
//   return state;
// };

const Rooms = ({
  result,
  prevStep,
  nextStep,
  handleStepChange,
  handleResultChange,
}: IRooms) => {
  // const [state, dispatch] = useReducer(reducerFunc, INIT);
  const [data, setData] = useState(INIT);
  const [bhkType, setBHKType] = useState<number>(1);
  const [isNull, setIsNull] = useState<boolean>(false);
  // const [bhkMap , setBHKMap] = useState<Map<string,number>|null>(null);
  // const [minvalues , setMinvalues]
  const handleIncrement = (type: string) => {
    console.log(type + "INCREMENTED");
    const filterarr = data.filter((element) => element.type != type);
    const updatedarr = data.filter((element) => element.type == type);
    if (updatedarr[0].quantity >= bhkType) return;
    updatedarr[0].quantity = updatedarr[0].quantity + 1;

    const newarr = [...filterarr, ...updatedarr];

    setData(newarr.sort((a, b) => a.id - b.id));
  };

  const handleDecrement = (type: string) => {
    console.log(type + "DECREMENTED");
    const filterarr = data.filter((element) => element.type != type);
    const updatedarr = data.filter((element) => element.type == type);
    if (updatedarr[0].quantity == 0) return;
    updatedarr[0].quantity = updatedarr[0].quantity - 1;

    const newarr = [...filterarr, ...updatedarr];

    setData(newarr.sort((a, b) => a.id - b.id));
  };

  // const bhkmap = useMemo(()=>{

  // },[])

  useEffect(() => {
    console.log("FIRST RENDER");
    console.log(result);
    const values = new Map();
    values.set("1BHK", 1);
    values.set("2BHK", 2);
    values.set("3BHK", 3);
    values.set("4BHK", 4);
    values.set("5BHK", 5);
    setBHKType(values.get(result.bhkDetails?.bhkType));

    const defaultarrToUpdate = data
      .filter((data) => ["Kitchen", "Bedroom", "Bathroom"].includes(data.type))
      .map((data) => {
        // console.log("inside map function");
        // console.log(data);
        const newObj = { ...data, quantity: values.get(result.bhkDetails?.bhkType) };
        return newObj;
      });
    const defaultarrToNotUpdate = data.filter(
      (data) => !["Kitchen", "Bedroom", "Bathroom"].includes(data.type)
    );
    // console.log(defaultarrToUpdate)
    setData(
      [...defaultarrToNotUpdate, ...defaultarrToUpdate].sort(
        (a, b) => a.id - b.id
      )
    );
  }, []);

  const handleFormSubmit = (e: any) => {
    e.preventDefault();

    console.log("STEP 2 DATA")
    console.log(data);
    //  console.log();

    const nullcheck = data.reduce((acc, curr) => {
      return curr.quantity + acc;
    }, 0);
    if (nullcheck == 0) {
      notify();
      return;
    }
  
    const formattedData = {
      RoomDesign : data
    }
    console.log("FORMATTED DATA")
    console.log(formattedData)
    handleResultChange({ ...result, ...formattedData});

    // setTimeout(() => {
    handleStepChange(nextStep());
    // }, 3000);

    // e.target.reset();
  };
  const notify = () => toast("Error : Selection Cannot Be Empty");

  return (
    <div className=" font-montserat w-full h-screen flex justify-center items-center flex-col">
      <div className="w-[80%] h-[80%] container bg-[#ffffff2c] rounded-md flex flex-col justify-center items-center">
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
          theme="dark"
        />
        <h1 className="text-3xl md:text-5xl text-white font-bold drop-shadow-md mb-2">
          ROOM Selector
        </h1>

        <form
          onSubmit={(e) => handleFormSubmit(e)}
          className="w-[80%] flex justify-center flex-col items-center"
        >
          {data.map((element, index: number) => {
            return (
              <div key={generateKey(element.type)} className="w-[250px] md:w-[300px]">
                <label
                  htmlFor={element.type}
                  className="font-ubuntu px-6 py-2 flex flex-row items-center gap-2 bg-[#ffffff2c]  w-full  rounded-md shadow-md shadow-black my-2"
                >
                  <h3 className="flex-2 text-white text-2xl md:text-4xl font-bold inline">
                    {element.type}
                  </h3>
                  <div className="flex flex-row gap-2 flex-1 justify-end">
                    <h3 className="text-xl md:text-2xl flex items-center justify-center text-white">
                      {element.quantity}
                    </h3>
                    <button
                      type="button"
                      onClick={() => handleIncrement(element.type)}
                    >
                      <Plus 
                      className="hover:text-gray-700 text-gray-400"
                      size={22}  />
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDecrement(element.type)}
                    >
                      <Minus size={22} 
                      
                      className="hover:text-gray-700 text-gray-400"/>
                    </button>
                  </div>
                </label>
              </div>
            );
          })}

          <div className="flex w-full mt-10 justify-center items-center gap-1 flex-wrap">
            <button
              className="w-[80px] shadow-md shadow-black  bg-[#ffffff2c] text-2xl  text-white px-4 py-2 hover:shadow-sm hover:shadow-black rounded-md"
              onClick={() => handleStepChange(prevStep())}
            >
              Prev
            </button>
            <button
              className="w-[80px] shadow-md shadow-black  bg-[#ffffff2c] text-2xl  text-white px-4 py-2 hover:shadow-sm hover:shadow-black  rounded-md"
              type="submit"
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Rooms;
