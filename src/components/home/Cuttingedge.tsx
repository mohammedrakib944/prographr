import React from "react";
import Button from "../common/Button";
import { FiArrowUpRight } from "react-icons/fi";
import Image from "next/image";
import Tools from "@/assets/tools.jpg";

const Cuttingedge = () => {
  return (
    <div className="layout mt-14 lg:mt-60">
      <h2 className="text-3xl text-accent text-center">
        Get <strong>cutting-edge design</strong>
      </h2>
      <div className="mt-20">
        <div className="max-w-[540px] mx-auto text-accent grid md:grid-cols-2 lg:grid-cols-3 gap-4 bg-neutral rounded-[25px] lg:rounded-full">
          <button className="min-w-[187px] rounded-full py-3 px-7 bg-primary text-white ">
            Collect Ideas
          </button>
          <button className="rounded-full py-3 px-4 hover:text-primary hover:font-bold">
            Design Analysis
          </button>
          <button className="rounded-full py-3 px-4 hover:text-primary hover:font-bold">
            Finalize Design
          </button>
        </div>
      </div>
      <div className="w-full flex items-center justify-between px-10 gap-8 lg:gap-0 my-20">
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
        <div>
          <Image
            className="max-w-[400px] opacity-65 w-fit rounded-[30px] border p-5"
            src={Tools}
            alt="Tools"
          />
        </div>
      </div>
    </div>
  );
};

export default Cuttingedge;
