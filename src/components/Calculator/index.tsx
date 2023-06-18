import { Link } from "react-router-dom";
import DATA from "./data.json";
const links = ["/homeCalculator", "/kitchenCalculator", "/wardrobeCalculator"];
interface IData{
  id : number ; 
  title : string; 
  description: string;
}
const Card = ({ data , link }: { data :IData , link: string }) => {
  console.log(link);
  return (
    <div
      key={data.id}
      className="w-[250px] py-8 h-full md:h-full rounded-md border-2 border-[#ffffff34] bg-[#ffffff34] flex  flex-col justify-center items-center"
    >
      <h2 className="title">{data.title}</h2>
      <p className=" my-8  text-xl md:text-2xl font-montserat tracking-tight text-slate-300 mx-auto text-justify px-8">
        {data.description}
      </p>
      <button
        className="
                text-[#ffffffc2]
                px-4 py-2 md:text-2xl text-xl font-montserat
                mx-1 md:mx-0
                w-[150px] rounded-md 
                active:shadow-sm
                active:shadow-slate-700 
              focus:bg-[#616060]
                focus:shadow-sm 
              focus:shadow-slate-700 
                shadow-md 
                shadow-slate-700 
                bg-[#949090]
                hover:bg-[#616060] "
      >
        <Link className="uppercase" to={link}>
          Calculate <span> </span>
        </Link>
      </button>
    </div>
  );
};

const Calculator = () => {
  return (
    <div className="w-full  h-full my-24">
      <div className="flex justify-center items center  flex-col">
        <h2 className="title font-montserat relative header-bottom">
          Price Estimator
        </h2>
        <p className=" my-14  text-xl md:text-3xl font-montserat tracking-tight text-slate-300 mx-auto text-justify px-8">
          Calculate the Estimated Price of doing the Interiors of your choice
        </p>
        <div className="flex justify-center items-center w-full h-full mt-24">
          <div className="flex gap-2 flex-wrap h-full w-full justify-center items-center ">
            {DATA.map((element) => {
              return <Card data = {element}  link={links[element.id - 1]} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
