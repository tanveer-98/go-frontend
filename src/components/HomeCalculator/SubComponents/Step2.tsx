import React, { useEffect, useReducer, useRef, useState } from "react";
import { IInitialState } from "../../../types";
import { AiOutlinePlusCircle as Plus } from "react-icons/ai";
import { AiOutlineMinusCircle as Minus } from "react-icons/ai";

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
  const [bhkType, setBHKType] = useState<number>(1)
  // const [minvalues , setMinvalues]
  const handleIncrement = (type: string) => {
    
    console.log(type + "INCREMENTED");
    const filterarr = data.filter((element)=>element.type!=type);
    const updatedarr  = data.filter((element)=>element.type==type);
    if(updatedarr[0].quantity >= bhkType) return;
    updatedarr[0].quantity = updatedarr[0].quantity+1;


    const newarr = [...filterarr,...updatedarr];

    setData(newarr.sort((a,b)=>a.id-b.id));
  };

  const handleDecrement = (type: string) => {
    console.log(type + "DECREMENTED");
    const filterarr = data.filter((element)=>element.type!=type);
    const updatedarr  = data.filter((element)=>element.type==type);
    if(updatedarr[0].quantity==0) return ;
    updatedarr[0].quantity = updatedarr[0].quantity-1;

    const newarr = [...filterarr,...updatedarr];

    setData(newarr.sort((a,b)=>a.id-b.id));
  };

  useEffect(() => {
    // console.log("FIRST RENDER");
    // console.log(result);
    const values = new Map();
    values.set("1BHK",1);
    values.set("2BHK",2);
    values.set("3BHK",3);
    values.set("4BHK",4);
    values.set("5BHK",5);
    setBHKType(values.get(result.bhkType));
    
    const defaultarrToUpdate = data.filter(data => ["Kitchen", "Bedroom","Bathroom"].includes(data.type)).map(data =>{
      // console.log("inside map function");
      // console.log(data);
      const newObj = {...data , quantity : values.get(result.bhkType)}
      return newObj; 
    });
    const defaultarrToNotUpdate = data.filter(data => !["Kitchen", "Bedroom","Bathroom"].includes(data.type)); 
    // console.log(defaultarrToUpdate)
    setData([...defaultarrToNotUpdate , ...defaultarrToUpdate].sort((a,b)=>a.id-b.id));

  }, []);

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    
    console.log(data)

    handleResultChange({...result, ...data});

    setTimeout(() => {
      handleStepChange(nextStep());
    }, 3000);

    // e.target.reset();
  };

  return (
    <div className="w-full h-screen flex justify-center items-center flex-col">
      <div className="w-[80%] h-[80%] container bg-purple-500 rounded-md flex flex-col justify-center items-center">
        <h1 className="text-3xl md:text-5xl text-white font-bold drop-shadow-md mb-2">
          ROOM Selector
        </h1>

        <form
          onSubmit={(e) => handleFormSubmit(e)}
          className="w-[80%] flex justify-center flex-col items-center"
        >
          {data.map((element: any, index: number) => {
            return (
              <div className="w-[300px]">
                <label
                  htmlFor={element.type}
                  className="px-6 py-2 flex flex-row items-center gap-2  w-full bg-purple-600 rounded-md shadow-md shadow-black my-2"
                >
                  <h3 className="flex-2 text-white text-2xl md:text-4xl font-bold inline">
                    {element.type}
                  </h3>
                  <div className="flex flex-row gap-2 flex-1 justify-end">
                    <h3 className="text-xl md:text-2xl flex items-center justify-center text-white">{element.quantity}</h3>
                    <button
                      type="button"
                      onClick={() => handleIncrement(element.type)}
                    >
                      <Plus size={22} color="white" />
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDecrement(element.type)}
                    >
                      <Minus size={22} color="white" />
                    </button>
                  </div>
                </label>
              </div>
            );
          })}

          <div className="flex flex-wrap justify-center items-center gap-1">
            <button
              className="w-[80px] shadow-md shadow-black  bg-purple-600 text-2xl  text-white px-4 py-2 hover:shadow-sm hover:shadow-black rounded-md"
              onClick={() => handleStepChange(prevStep())}
            >
              Prev
            </button>
            <button
              className="w-[80px] shadow-md shadow-black  bg-purple-600 text-2xl  text-white px-4 py-2 hover:shadow-sm hover:shadow-black  rounded-md"
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
