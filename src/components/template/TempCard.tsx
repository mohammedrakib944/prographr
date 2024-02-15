import React from "react";
import { FiArrowRight } from "react-icons/fi";

const TempCard = ({ data }: any) => {
  return (
    <div className="max-w-[500px] rounded-[20px] hover:shadow-lg duration-200 overflow-hidden border">
      <img
        src={data.img}
        className="h-[313px] w-full object-cover"
        alt="Card Image"
      />
      <div className="flex items-center justify-between px-5 py-4 border-t">
        <p className="font-bold text-accent">${data.price}</p>

        <button className="btn bg-transparent border border-accent/20 capitalize rounded-full font-light text-accent !py-2 text-xs gap-4 !shadow-none hover:bg-primary/10">
          <span className="-mt-[2px]">Get it now</span>
          {/* <span className="bg-primary text-white rounded-full p-1"> */}
          <FiArrowRight />
          {/* </span> */}
        </button>
      </div>
    </div>
  );
};

export default TempCard;
