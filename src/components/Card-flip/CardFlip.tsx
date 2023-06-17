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
        <div className="front shadow-md shadow-white text-5xl font-ubuntu">
          <img
            src={imgsrc}
            alt=""
            className="mix-blend-overlay opacity-90 h-full w-full cover  absolute"
          />

          <p className="  p-5  text-white "> 
            {title}
          </p>
        </div>
        <div className="back  shadow-sm shadow-white">
          <div>
            <p className="text-2xl ">{description}</p>
            <div className="mt-2">
              <button onClick={clickHandler} className="button py-2 mt-4 ">
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
