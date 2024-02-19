import Link from "next/link";
import React from "react";
import { FiArrowRight } from "react-icons/fi";

const TempCard = ({ data }: any) => {
  return (
    <Link href="/template/234">
      <div className="max-w-[500px] rounded-[20px] overflow-hidden border group">
        <div className="px-7 pt-7 bg-neutral overflow-hidden">
          <img
            src="/topimg/7.jpg"
            className="h-[280px] w-full object-cover group-hover:scale-105 duration-200"
            alt="Card Image"
          />
        </div>
      </div>
      <div className="flex bg-white items-center justify-between px-5 py-4">
        <div>
          <h3 className="font-bold">Vertista</h3>
          <p className="text-xs">Logo and Branding</p>
        </div>
        <p className="font-bold text-accent px-3 py-1 rounded-xl text-sm bg-neutral">
          $ {data.price}
        </p>

        {/* <button className="btn bg-transparent border border-accent/20 capitalize rounded-full font-light text-accent !py-2 text-xs gap-4 !shadow-none hover:bg-primary/10">
          <span className="-mt-[2px]">Get it now</span>
          <FiArrowRight />
        </button> */}
      </div>
    </Link>
  );
};

export default TempCard;
