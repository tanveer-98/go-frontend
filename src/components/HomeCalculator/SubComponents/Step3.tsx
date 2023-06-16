import React from 'react'
import { IInitialState } from '../../../types';
interface IPackage {
  result : IInitialState
  prevStep: () => number;
  nextStep: () => number;
  handleChange: (updatedValue: number) => any;
}
const Package = ({result , prevStep , nextStep , handleChange}:IPackage) => {
  return (
<div className="w-full h-screen flex justify-center items-center flex-col">
      <div className="w-[80%] h-[80%] container bg-purple-500 rounded-md flex flex-col justify-center items-center">
        <h1 className="text-3xl md:text-5xl text-white font-bold">
          Select Package
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
  )
}

export default Package