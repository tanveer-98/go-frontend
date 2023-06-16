import React from 'react'
import { IInitialState } from '../../../types';
import styled from 'styled-components';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


interface IQuote {
  result : IInitialState
  prevStep: () => number;
  nextStep: () => number;
  handleStepChange: (updatedValue: number) => any;
  handleResultChange  :(updatedResult : IInitialState) => void; 
}
const ButtonContainer  = styled.div`
display :flex;
justify-content: center;
flex-direction: row ; 
flex-gap : 2rem;
flex-wrap : wrap;
`
const Quote = ({result ,prevStep , handleStepChange, handleResultChange}: IQuote) => {
  const handleSubmit = ()=>{
   return  toast("Form successfully submitted ");
  }
  return (
    <div className="w-full h-screen flex justify-center items-center flex-col">
    <div className="w-[80%] h-[80%] container bg-purple-500 rounded-md flex flex-col justify-center items-center">
      <h1 className="text-3xl md:text-5xl text-white font-bold">
        Get Quote 
      </h1>
      <div className="button-container">

      </div>
      <ButtonContainer>

      <button
        className="w-[100px] bg-purple-600 text-2xl text-white px-4 py-2 shadow-sm shadow-purple-800 hover:shadow-none rounded-md"
        onClick={() => handleStepChange(prevStep())}
        type="button"
      >
        Prev
      </button>
      <button
        className="w-[100px] bg-purple-600 text-2xl text-white px-4 py-2 shadow-sm shadow-purple-800 hover:shadow-none rounded-md"
        onClick={handleSubmit}
        type="submit"
        
      >
        Next
      </button>
      </ButtonContainer>
      <ToastContainer/>
    </div>
  </div>
  )
}

export default Quote