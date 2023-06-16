import React from "react";
import { IInitialState } from "../../../types";

const data = [
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
interface IRooms {
  result : IInitialState
  prevStep: () => number;
  nextStep: () => number;
  handleChange: (updatedValue: number) => any;
}
const Rooms = ({ result ,prevStep, nextStep, handleChange }: IRooms) => {
  return (
    <div className="w-full h-screen flex justify-center items-center flex-col">
      <div className="w-[80%] h-[80%] container bg-purple-500 rounded-md flex flex-col justify-center items-center">
        <h1 className="text-3xl md:text-5xl text-white font-bold">
          ROOM Selector 
        </h1>
        <button
          className="w-[100px] bg-purple-600 text-2xl text-white px-4 py-2 shadow-sm shadow-purple-800 hover:shadow-none rounded-md"
          onClick={() => handleChange(prevStep())}
        >
          Prev
        </button>
        <button
          className="w-[100px] bg-purple-600 text-2xl text-white px-4 py-2 shadow-sm shadow-purple-800 hover:shadow-none rounded-md"
          onClick={() => handleChange(nextStep())}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Rooms;
