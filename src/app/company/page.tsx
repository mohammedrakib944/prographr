import React from "react";
import { FaPlay } from "react-icons/fa";

const Company = () => {
  return (
    <div className="layout">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 py-20 mt-20">
        {/* player */}
        <div className="w-[300px] h-[150px] lg:w-full lg:h-[300px] bg-neutral rounded-[25px] flex items-center justify-center">
          <button className="text-4xl text-primary hover:scale-110 duration-200">
            <FaPlay />
          </button>
        </div>

        <div className="text-accent">
          <h3 className="text-3xl pt-5">
            About <strong>Prographr</strong>
          </h3>
          <p className="mt-10">
            Prographr is an online readymade graphic assets marketplace. A
            designer can upload their graphic assets and anyone can download any
            design which are premium and free. All the designs are also
            customizable. Customizable design have a fee. Which are negotiable
            with the asset owner.
          </p>
        </div>
      </div>

      {/* Team */}
      <section className="text-center mt-16 pb-10">
        <h3 className="text-3xl pt-5">
          Team <strong>Members</strong>
        </h3>

        <div className="mt-10 w-full h-[300px] bg-neutral rounded-[30px]"></div>
      </section>
    </div>
  );
};

export default Company;
