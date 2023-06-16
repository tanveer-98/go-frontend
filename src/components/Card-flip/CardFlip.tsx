import React from "react";
import "./styles.css";
import { BsArrowUpRight } from "react-icons/bs";
interface IFlipCard {
  title: string;
  description: string;
  imgsrc: string;
}
const CardFlip = ({ title, description, imgsrc }: IFlipCard) => {
  const clickHandler = () => {
    console.log("clicked");
  };
  return (
    <a className="flipcard ">
      <div className="flipcard-content">
        <div className="front   shadow-lg shadow-slate-700">
          <img
            src={imgsrc}
            alt=""
            className="mix-blend-overlay opacity-90 h-full w-full cover  absolute"
          />

          <p className="bg-slate-500 p-5  text-white backdrop-blur-lg">
            {title}
          </p>
        </div>
        <div className="back bg-abstract shadow-lg shadow-slate-700">
          <div>
            <p>{description}</p>
            <div className="mt-2">
              <button onClick={clickHandler} className="button">
                <div className="flex flex-row">
                  <span className="flex justify-center items-center pr-10">
                    <BsArrowUpRight />
                  </span>
                  View Our Services
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default CardFlip;
