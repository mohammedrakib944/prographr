import React from "react";
import Button from "../common/Button";
import { RiArrowRightUpLine } from "react-icons/ri";
import InfiniteScroll from "./scroll/InfiniteScroll";

const Hero = () => {
  return (
    <header className="w-full bg-neutral">
      <div className="layout pb-10 lg:pb-0 lg:h-[calc(100vh-120px)] xl:max-h-[900px] lg:grid lg:gap-12 lg:grid-cols-12">
        {/* text section */}
        <div className="lg:col-span-5 pt-12 lg:pt-0 flex flex-col gap-2 items-center lg:items-start justify-center">
          <p className="tracking-[0.5rem] text-sm text-primary">
            <span className="bg-primary px-2 py-1 rounded-[4px] tracking-widest text-white text-center">
              PRO
            </span>{" "}
            PREMIUM
          </p>
          <h1 className="text-4xl lg:text-5xl text-accent font-extrabold leading-[50px] text-center lg:text-start">
            Fully Editable <br /> Template Starting <br />
            From Only $2
          </h1>
          <p className="max-w-[350px] text-center lg:text-start lg:max-w-[500px] text-accent mt-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo
            reiciendis id fugiat qui officia dolores maxime totam distinctio est
            natus!
          </p>
          <br />
          <Button
            className="w-fit"
            text="Learn More"
            icon={<RiArrowRightUpLine />}
          />

          <div className="mt-12 lg:mt-32 flex items-center gap-6">
            <Button className="text-base px-8" text="Source Files" white />

            <div>
              <div className="flex">
                <p className="w-[50px] h-[50px] bg-primary grid place-items-center text-sm text-white rounded-full border-[4px]">
                  Ai
                </p>
                <p className="w-[50px] h-[50px] bg-primary grid place-items-center text-white rounded-full border-[4px] text-sm -ml-3">
                  Ps
                </p>
                <p className="w-[50px] h-[50px] bg-primary grid place-items-center text-white rounded-full border-[4px] text-sm -ml-3">
                  Id
                </p>
              </div>
              <p className="text-sm mt-2 text-primary">Extra PDF, JPEG Files</p>
            </div>
          </div>
        </div>
        {/* slider section */}
        <div className="hidden lg:col-span-7 lg:flex items-center mx-4 my-12 lg:m-0">
          <InfiniteScroll />
        </div>
      </div>
    </header>
  );
};

export default Hero;
