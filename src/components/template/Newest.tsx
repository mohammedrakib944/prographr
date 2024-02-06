"use client";
import React, { useRef } from "react";
import TempCard from "./TempCard";
import Button from "../common/Button";
import { IoMdArrowDown } from "react-icons/io";
import useScrollTrigger from "@/hooks/useScrollTrigger";

const CardData = [
  {
    id: 1,
    price: 2.99,
    img: "/topimg/5.png",
  },
  {
    id: 2,
    price: 3.99,
    img: "/topimg/6.png",
  },
  {
    id: 3,
    price: 1.99,
    img: "/topimg/7.png",
  },
  {
    id: 4,
    price: 4.99,
    img: "/topimg/8.png",
  },
];

const Newest = () => {
  const container = useRef<any>();
  useScrollTrigger({ identifier: ".newestTemplate", top: 100 }, container);
  return (
    <div className="layout py-20">
      <div className="flex items-center justify-between  mb-10">
        <h2 className="text-semibold text-xl md:text-3xl text-accent">
          Newest <strong>Graphics Templates</strong>
        </h2>

        <Button
          className="p-3 pl-4"
          text="Printing and Advertising"
          icon={<IoMdArrowDown />}
          outline
        />
      </div>

      <div
        ref={container}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3"
      >
        {CardData.map((item) => (
          <div
            className="translate-y-10 opacity-0 newestTemplate"
            key={item.id}
          >
            <TempCard data={item} />
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <Button
          className="px-6 py-3 text-base mt-20"
          text="View more new items"
          icon={<IoMdArrowDown />}
          outline
        />
      </div>
    </div>
  );
};

export default Newest;
