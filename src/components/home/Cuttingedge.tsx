"use client";
import React, { useRef, useState } from "react";
import Button from "../common/Button";
import { FiArrowUpRight } from "react-icons/fi";
import Image from "next/image";
import Tools from "@/assets/tools.jpg";
import useScrollTrigger from "@/hooks/useScrollTrigger";

function buttonStyle(current: number, slideNo: number) {
  return `rounded-full p-3 text-sm hover:text-primary hover:scale-105 duration-100 ${
    current === slideNo && "bg-primary text-white hover:text-white"
  }`;
}

const Cuttingedge = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const container = useRef<any>();
  useScrollTrigger({ identifier: ".gsapTrigger3", top: 100 }, container);

  let currentContent = null;

  if (currentSlide === 0) {
    currentContent = (
      <div className="w-full grid lg:grid-cols-2 px-10 gap-8 lg:gap-0 my-20">
        <div className="text-accent max-w-[500px]">
          <h2 className="text-2xl">
            Collect <strong> Ideas</strong>
          </h2>
          <p className="py-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
            ullam tempora animi ab praesentium recusandae rerum. Maiores, quas
            rerum. Non dolore aliquam beatae.
          </p>

          <ul className="list-disc ml-4">
            <li>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero,
              repellendus!
            </li>
            <li className="mt-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero,
              repellendus!
            </li>
          </ul>
          <br />
          <Button
            className="mt-4"
            text="Learn More"
            icon={<FiArrowUpRight />}
          />
        </div>
        <div className="flex lg:justify-end">
          <Image
            className="max-w-[400px] opacity-65 w-fit rounded-[30px] border p-5"
            src={Tools}
            alt="Tools"
          />
        </div>
      </div>
    );
  }

  if (currentSlide === 1) {
    currentContent = (
      <div className="flex items-center justify-center p-20 bg-gray-100 rounded-lg mt-20">
        <p>Design Analysis - Upcomming...</p>
      </div>
    );
  }

  if (currentSlide === 2) {
    currentContent = (
      <div className="flex items-center justify-center p-20 bg-gray-100 rounded-lg mt-20">
        <p>Finalize Design - Upcomming...</p>
      </div>
    );
  }

  return (
    <div ref={container} className="layout mt-14 lg:mt-60">
      <h2 className="text-3xl text-accent text-center">
        Get <strong>cutting-edge design</strong>
      </h2>
      <div className="mt-20">
        <div className="max-w-[540px] mx-auto text-accent grid md:grid-cols-2 lg:grid-cols-3 gap-4 bg-neutral rounded-[25px] lg:rounded-full translate-y-24 opacity-0 gsapTrigger2">
          <button
            onClick={() => setCurrentSlide(0)}
            className={buttonStyle(currentSlide, 0)}
          >
            Collect Ideas
          </button>
          <button
            onClick={() => setCurrentSlide(1)}
            className={buttonStyle(currentSlide, 1)}
          >
            Design Analysis
          </button>
          <button
            onClick={() => setCurrentSlide(2)}
            className={buttonStyle(currentSlide, 2)}
          >
            Finalize Design
          </button>
        </div>
      </div>
      {/* Slides */}
      <div className="translate-y-24 opacity-0 gsapTrigger2">
        {currentContent}
      </div>
    </div>
  );
};

export default Cuttingedge;
