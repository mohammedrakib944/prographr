import React from "react";
import Button from "../common/Button";
import { FiArrowUpRight } from "react-icons/fi";
import {
  FaPenNib,
  FaTools,
  FaBookOpen,
  FaFolderOpen,
  FaPaintBrush,
  FaPalette,
  FaPatreon,
  FaPagelines,
  FaPaperPlane,
} from "react-icons/fa";

const Cuttingedge = () => {
  return (
    <div className="layout mt-14 lg:mt-60">
      <h2 className="text-3xl text-accent text-center">
        Get <strong>cutting-edge design</strong>
      </h2>
      <div className="mt-8">
        <div className="max-w-[540px] mx-auto text-accent grid md:grid-cols-2 lg:grid-cols-3 gap-4 bg-neutral rounded-[25px] lg:rounded-full">
          <button className="min-w-[187px] rounded-full py-3 px-7 bg-primary text-white ">
            Collect Ideas
          </button>
          <button className="rounded-full py-3 px-4 hover:bg-accent/50 hover:text-white">
            Design Analysis
          </button>
          <button className="rounded-full py-3 px-4 hover:bg-accent/50 hover:text-white">
            Finalize Design
          </button>
        </div>
      </div>
      <div className="w-full flex flex-wrap px-10 items-center gap-8 lg:gap-0 justify-between my-20">
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
        <div className="w-fit rounded-[30px] text-neutral border text-6xl grid grid-cols-3 px-14 py-10 gap-10">
          <span className="hover:text-primary hover:drop-shadow-lg duration-200">
            <FaTools />
          </span>
          <span className="hover:text-primary hover:drop-shadow-lg duration-200">
            <FaBookOpen />
          </span>
          <span className="hover:text-primary hover:drop-shadow-lg duration-200">
            <FaPaintBrush />
          </span>
          <span className="hover:text-primary hover:drop-shadow-lg duration-200">
            <FaFolderOpen />
          </span>
          <span className="hover:text-primary hover:drop-shadow-lg duration-200">
            <FaPenNib />
          </span>
          <span className="hover:text-primary hover:drop-shadow-lg duration-200">
            <FaPalette />
          </span>
          <span className="hover:text-primary hover:drop-shadow-lg duration-200">
            <FaPatreon />
          </span>
          <span className="hover:text-primary hover:drop-shadow-lg duration-200">
            <FaPagelines />
          </span>
          <span className="hover:text-primary hover:drop-shadow-lg duration-200">
            <FaPaperPlane />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Cuttingedge;
