import React, { Component, useState } from "react";
import BHK from "./SubComponents/Step1";
import Rooms from "./SubComponents/Step2";
import Package from "./SubComponents/Step3";
import Quote from "./SubComponents/Step4";
import { IInitialState } from "../../types";

const Error = () => {
  return (
    <div className="bg-violet-900 w-screen h-screen flex justify-center items-center">
      <h3 className="font-bold text-purple-600  outline-dotted backdrop-blur-md">
        {" "}
        Error 404 : Something went bad{" "}
      </h3>
    </div>
  );
};

interface ICurrentComponent {
  result: IInitialState;
  step: number;
  nextStep: () => number;
  prevStep: () => number;
  handleChange: (updatedValue: number) => void;
}

const CurrentComponent = ({
  result,
  step,
  nextStep,
  prevStep,
  handleChange,
}: ICurrentComponent) => {
  switch (step) {
    case 1:
      return (
        <BHK result={result} nextStep={nextStep} handleChange={handleChange} />
      );
      break;
    case 2:
      return (
        <Rooms
          result={result}
          nextStep={nextStep}
          handleChange={handleChange}
          prevStep={prevStep}
        />
      );
      break;
    case 3:
      return (
        <Package
          result={result}
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
        />
      );
      break;
    case 4:
      return (
        <Quote
          result={result}
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
        />
      );
      break;
    default:
      return <Error />;
  }
  return <></>;
};

const initialState: IInitialState = {
  bhkType: null,
  bhkTypeSize: null,
  RoomDesign: null,
  PackagePicked: null,
  getQuote: null,
};
const HomeCalculator = () => {
  const [step, setStep] = useState(1);
  const [result, setResult] = useState<IInitialState>(initialState);

  const handleChange = (updateValue: number) => {
    setStep(updateValue);
  };

  const prevStep: any = () => {
    if (step == 1) return step;
    else setStep(step - 1);
    return step - 1;
  };
  const nextStep = () => {
    if (step == 4) return step;
    else setStep(step + 1);
    return step + 1;
  };

  return (
    <div>
      <CurrentComponent
        result = {result}
        step={step}
        handleChange={handleChange}
        prevStep={prevStep}
        nextStep={nextStep}
      />
    </div>
  );
};

export default HomeCalculator;
