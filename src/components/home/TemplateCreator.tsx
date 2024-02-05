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

  let currentContent = null;

  if (currentSlide === 0) {
    currentContent = (
      <div className="max-w-[940px] mx-auto grid gap-8 lg:gap-0 grid-cols-1 lg:grid-cols-12 place-items-center mt-16">
        <div className="col-span-2 text-center flex flex-col items-center">
          <Image
            src={TemplateImage}
            className="w-[120px] h-[120px] bg-neutral object-contain p-2 rounded-full"
            width="150"
            alt="Template"
          />
          <p className="text-accent mt-8">Your Template</p>
        </div>
        <Image
          className="hidden lg:block col-span-3 -mt-10"
          src={Road}
          alt="Roadmap"
        />
        <div className="col-span-2  text-center flex flex-col items-center">
          <div className="relative">
            <Image
              src={TemplateImage}
              className="w-[120px] h-[120px] bg-neutral object-contain p-2 rounded-full"
              width="150"
              alt="Template"
            />
            <span className="absolute -bottom-2 -right-2 text-white bg-primary rounded-full p-3">
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
        <div className="col-span-2 text-center flex flex-col items-center">
          <div className="relative">
            <Image
              src={TemplateImage}
              className="w-[120px] h-[120px] bg-neutral object-contain p-2 rounded-full"
              width="150"
              alt="Template"
            />
            <span className="absolute -bottom-2 text-[10px] -right-2 text-white bg-primary rounded-full py-4 px-3">
              SOLD
            </span>
          </div>
          <p className="text-accent mt-8 w-[210px]">
            Template Sold & you got Paid
          </p>
        </div>
      </div>
    );
  }

  if (currentSlide === 1) {
    currentContent = (
      <div className="flex items-center justify-center p-20 bg-gray-100 rounded-lg mt-20">
        <p>Submit Template - Upcomming...</p>
      </div>
    );
  }

  if (currentSlide === 2) {
    currentContent = (
      <div className="flex items-center justify-center p-20 bg-gray-100 rounded-lg mt-20">
        <p>Wait for Approved - Upcomming...</p>
      </div>
    );
  }

  if (currentSlide === 3) {
    currentContent = (
      <div className="flex items-center justify-center p-20 bg-gray-100 rounded-lg mt-20">
        <p>Approved - Upcomming...</p>
      </div>
    );
  }

  return (
    <div ref={container} className="layout mt-14 lg:mt-52">
      <h2 className="text-3xl text-accent text-center">
        Become a <strong>template creator</strong>
      </h2>
      <div className="mt-20">
        <div className="max-w-[740px] mx-auto text-accent grid md:grid-cols-2 lg:grid-cols-4 gap-1 bg-neutral rounded-[25px] lg:rounded-full translate-y-24 opacity-0 gsapTrigger2">
          <button
            onClick={() => setCurrentSlide(0)}
            className={buttonStyle(currentSlide, 0)}
          >
            Check Guidelines
          </button>
          <button
            onClick={() => setCurrentSlide(1)}
            className={buttonStyle(currentSlide, 1)}
          >
            Submit template
          </button>
          <button
            onClick={() => setCurrentSlide(2)}
            className={buttonStyle(currentSlide, 2)}
          >
            Wait for Approved
          </button>
          <button
            onClick={() => setCurrentSlide(3)}
            className={buttonStyle(currentSlide, 3)}
          >
            Approved
          </button>
        </div>
      </div>

      {/* Slider content */}
      <div className="translate-y-24 opacity-0 gsapTrigger2">
        {currentContent}
      </div>
      <div className="w-fit mt-20 mx-auto">
        <Button
          text="Submit a Template"
          className="shadow-none"
          icon={<FiArrowUpRight />}
          outline
        />
      </div>
    </div>
  );
};

export default TemplateCreator;
