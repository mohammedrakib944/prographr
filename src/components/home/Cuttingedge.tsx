"use client";
import React, { useRef, useState } from "react";
import Button from "../common/Button";
import { FiArrowUpRight } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";
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
            Doing regular brainstorming sessions with colleagues, friends, or
            peers for offering a wide range of possibilities for creative
            exploration and expression.
          </p>

          <ul className="list-disc ml-4">
            <li>
              Start with a central concept or problem and branch out with
              related ideas and connections.
            </li>
            <li className="mt-3">
              Make connections between unrelated concepts to generate fresh
              ideas.
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
          <div className="w-[300px] h-[150px] lg:w-[500px] lg:h-[300px] bg-neutral rounded-[25px] flex items-center justify-center">
            <button className="text-4xl text-primary hover:scale-110 duration-200">
              <FaPlay />
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (currentSlide === 1) {
    currentContent = (
      <div className="w-full grid lg:grid-cols-2 px-10 gap-8 lg:gap-0 my-20">
        <div className="text-accent max-w-[500px]">
          <h2 className="text-2xl">
            Design <strong> Analysis</strong>
          </h2>
          <p className="py-5">
            Analyzing the visual appeal and aesthetic qualities of the design,
            including factors such as color, typography, layout, and overall
            design coherence
          </p>

          <ul className="list-disc ml-4">
            <li>
              Assessing the design's potential for adaptation, scalability, and
              innovation to meet evolving user needs, technological
              advancements, and market trends over time.
            </li>
            <li className="mt-3">
              Evaluating how users interact with the design and identifying
              areas for improvement to enhance usability, accessibility, and
              overall satisfaction of clients.
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
          <div className="w-[300px] h-[150px] lg:w-[500px] lg:h-[300px] bg-neutral rounded-[25px] flex items-center justify-center">
            <button className="text-4xl text-primary hover:scale-110 duration-200">
              <FaPlay />
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (currentSlide === 2) {
    currentContent = (
      <div className="w-full grid lg:grid-cols-2 px-10 gap-8 lg:gap-0 my-20">
        <div className="text-accent max-w-[500px]">
          <h2 className="text-2xl">
            Finalize <strong> Analysis</strong>
          </h2>
          <p className="py-5">
            Conduct a thorough review of the design to ensure it meets the
            project requirements and objectives. Make any necessary revisions
            based on feedback from stakeholders, clients, or team members.
          </p>

          <ul className="list-disc ml-4">
            <li>
              Perform quality assurance checks to identify and fix any errors,
              inconsistencies, or technical issues in the design.
            </li>
            <li className="mt-3">
              Once all revisions, quality checks, and approvals are complete,
              finalize the design and request stakeholders or clients to confirm
              that the design is ready for handove.
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
          <div className="w-[300px] h-[150px] lg:w-[500px] lg:h-[300px] bg-neutral rounded-[25px] flex items-center justify-center">
            <button className="text-4xl text-primary hover:scale-110 duration-200">
              <FaPlay />
            </button>
          </div>
        </div>
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
