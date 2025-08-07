import React, { useState } from "react";

const Box = (props) => {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    setCount((prev) => prev + 1);
  };

  const handleSubtract = () => {
    setCount((prev) => prev-1);
  };


  return (
    <div className="h-66 w-44 bg-neutral-150 border border-gray-200 text-black items-center justify-around p-2 inline-block rounded-lg mb-5 mx-3 shadow-sm hover:shadow-gray-900">
      <img src={props.img} alt={props.name} className="h-35 w-35 mx-auto " />
      <h1 className="font-semibold text-sm mb-2 h-10 mx-auto line-clamp-2">{props.name}</h1>
      <h3 className="font-light text-xs mb-2 mx-auto">{props.quantity}</h3>
      <div className="flex items-center mb-3 justify-between">
        <h3 className="font-bold text-xs ">₹{props.price}</h3>
        {count < 1 ? (
          <button onClick={handleAdd} className="h-8 w-20 rounded-md px-2 mx-2 flex items-center justify-center border border-green-700 text-green-700 font-semibold">
            ADD</button>
        ) : (
          <div className="h-8 w-20 rounded-md px-2 mx-2 flex items-center bg-green-700 justify-between">
            <button onClick={handleSubtract} className="text-white text-md font-bold px-2">-</button>
            <span className="text-white font-semibold">{count}</span>
            <button onClick={handleAdd} className="text-white text-md font-bold px-2">+</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Box;
