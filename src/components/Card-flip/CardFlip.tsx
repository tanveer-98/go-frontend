import React from "react";
import './styles.css'
 import {BsArrowUpRight} from 'react-icons/bs'
interface IFlipCard{
     title : string;
     description: string ;
}
const CardFlip = ({title , description , } : IFlipCard) => {
  return (
    <a className="flipcard">

    <div className="flipcard-content">
      <div className="front bg-abstract">
        <img src="./src/assets/modular-kitchen-1.jpg" alt=""  className="opacity-50 h-full w-full object-contain  absolute"/>
        <p>{title}</p>
      </div>
      <div className="back bg-abstract">
        <div>

          <p>
           {description}
          </p>
          <div className="mt-2">
                <button className="button">
            <div className="flex flex-row">
                <span
          className="flex justify-center items-center pr-10"
          ><BsArrowUpRight/></span>View Our Services
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
