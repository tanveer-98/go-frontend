import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Card = ({ link }: { link: string }) => {
  console.log(link);
  return (
    <div className="bg-home-card  bg-white/30 h-[300px] w-[300px] flex justify-center items-center mx-2">
      <button className=" w-[100px] rounded-md bg-purple-600 ">
        <Link to={link}>Calculate</Link>
      </button>
    </div>
  );
};

const links = ["/homeCalculator", "/kitchenCalculator", "/wardrobeCalculator"];

const Calculator = () => {
  return (
    <div className="  w-full h-[800px] flex flex-wrap justify-center items-center">
      {[1, 2, 3].map((element) => {
        return <Card link={links[element - 1]} />;
      })}
    </div>
  );
};

export default Calculator;
