import React from "react";

const Benefit = (props) => {
  const { title, discription } = props;
  return (
    <div className="grid bg-green-800 text-white w-[365px] hover:scale-105 min-h-60 p-7 gap-4 items-center rounded-lg ">
        <div className="font-bold text-xl">
            {title}
        </div>
        <div className="text-lg tracking-wider">
            {discription}
        </div>
    </div>
  )
};

export default Benefit;
