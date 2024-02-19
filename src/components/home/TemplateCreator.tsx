"use client";
import React, { useRef, useState } from "react";
import Button from "../common/Button";
import { FiArrowUpRight } from "react-icons/fi";
import Road from "@/assets/road.svg";
import TemplateImage from "@/assets/slider/slider.png";
import { FaCheck } from "react-icons/fa6";
import Image from "next/image";
import useScrollTrigger from "@/hooks/useScrollTrigger";

function buttonStyle(current: number, slideNo: number) {
  return `rounded-full p-3 text-sm hover:text-primary hover:scale-105 duration-100 ${
    current === slideNo && "bg-primary text-white hover:text-white"
  }`;
}

const TemplateCreator = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const container = useRef<any>();
  useScrollTrigger({ identifier: ".gsapTrigger2", top: 90 }, container);

  return (
    <div ref={container} className="layout mt-14 lg:mt-52">
      <h2 className="text-3xl text-accent text-center">
        Become a <strong>template creator</strong>
      </h2>
      <div className="mt-20">
        <div className="max-w-[740px] mx-auto text-accent grid md:grid-cols-1 lg:grid-cols-3 gap-1 bg-neutral rounded-[25px] lg:rounded-full translate-y-24 opacity-0 gsapTrigger2">
          <button
            className={buttonStyle(currentSlide, 0)}
            onClick={() => setCurrentSlide(0)}
          >
            Check Guidelines
          </button>
          <button
            className={buttonStyle(currentSlide, 1)}
            onClick={() => setCurrentSlide(1)}
          >
            Submit template
          </button>
          <button
            className={buttonStyle(currentSlide, 2)}
            onClick={() => setCurrentSlide(2)}
          >
            Approved
          </button>
        </div>
      </div>

      {/* Slider content */}
      <div className="translate-y-24 opacity-0 gsapTrigger2">
        <div className="max-w-[940px] mx-auto grid gap-8 lg:gap-0 grid-cols-1 lg:grid-cols-12 place-items-center mt-16">
          {/* 1 */}
          <div className="col-span-2 text-center flex flex-col items-center">
            <div
              className={`${
                currentSlide === 0 &&
                "border-[10px] shadow-xl shadow-black/20 border-white rounded-full relative"
              }`}
            >
              <div
                className={`${
                  currentSlide === 0
                    ? "absolute w-[120px] h-[120px] bg-white rounded-full animate-ping"
                    : "hidden"
                }`}
              ></div>
              <Image
                src={TemplateImage}
                className="relative z-10 w-[120px] h-[120px] bg-neutral object-contain p-2 rounded-full"
                width="150"
                alt="Template"
              />
            </div>
            <p className="text-accent mt-8">Your Template</p>
          </div>
          <Image
            className="hidden lg:block col-span-3 -mt-10"
            src={Road}
            alt="Roadmap"
          />
          {/* 2 */}
          <div className="col-span-2  text-center flex flex-col items-center">
            <div className="relative">
              <div
                className={`${
                  currentSlide === 1 &&
                  "border-[10px] shadow-xl shadow-black/20 border-white rounded-full relative"
                }`}
              >
                <div
                  className={`${
                    currentSlide === 1
                      ? "absolute w-[120px] h-[120px] bg-white rounded-full animate-ping"
                      : "hidden"
                  }`}
                ></div>
                <Image
                  src={TemplateImage}
                  className="relative z-10 w-[120px] h-[120px] bg-neutral object-contain p-2 rounded-full"
                  width="150"
                  alt="Template"
                />
              </div>
              <span className="absolute z-20 -bottom-2 -right-2 text-white bg-primary rounded-full p-3">
                <FaCheck />
              </span>
            </div>
            <p className="text-accent mt-8  w-[210px]">
              Client Bought Your Template
            </p>
          </div>
          <Image
            className="hidden lg:block col-span-3 -mt-10"
            src={Road}
            alt="Roadmap"
          />
          {/* 3 */}
          <div className="col-span-2 text-center flex flex-col items-center">
            <div className="relative">
              <div
                className={`${
                  currentSlide === 2 &&
                  "border-[10px] shadow-xl shadow-black/20 border-white rounded-full relative"
                }`}
              >
                <div
                  className={`${
                    currentSlide === 2
                      ? "absolute w-[120px] h-[120px] bg-white rounded-full animate-ping"
                      : "hidden"
                  }`}
                ></div>
                <Image
                  src={TemplateImage}
                  className="relative z-10 w-[120px] h-[120px] bg-neutral object-contain p-2 rounded-full"
                  width="150"
                  alt="Template"
                />
              </div>
              <span className="absolute z-20 -bottom-2 text-[10px] -right-2 text-white bg-primary rounded-full py-4 px-3">
                SOLD
              </span>
            </div>
            <p className="text-accent mt-8 w-[210px]">
              Template Sold & you got Paid
            </p>
          </div>
        </div>
      </div>
      <div className="w-fit mt-20 mx-auto">
        <Button
          text="Submit a Template"
          className="px-6 py-3 text-base mt-5"
          icon={<FiArrowUpRight />}
        />
      </div>
    </div>
  );
};

export default TemplateCreator;
