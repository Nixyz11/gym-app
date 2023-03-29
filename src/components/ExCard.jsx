import React from "react";
import Pagination from "./Pagination";

const ExCard = ({ exe }) => {
  return (
    <div className="items-center justify-center flex flex-col h-[450px] w-[400px]" >
      <img src={exe.gifUrl} loading='lazy' className="h-[300px] w-[300px]" />
      <p className="text-xl text-gray-700 font-bold leading-tight mb-2 h-25 w-3/4 text-center border-b-2">{exe.name}</p>
      
      <div className="flex justify-between flex-wrap  mb-1 border-t-4">
      <p className="px-3 text-lg text-gray-700 leading-normal capitalize">{exe.bodyPart}</p>
      <p className="px-3 text-lg text-gray-700 leading-normal capitalize">{exe.target}</p>
     
      </div>
      <p className="px-3 m-auto mb-5">equipment: <span className="font-bold">{exe.equipment}</span></p>
    </div>
  );
};

export default ExCard;
