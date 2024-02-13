import React from "react";
import { IoSearchOutline } from "react-icons/io5";

const SearchBar = () => {
  return (
    <div className="bg-neutral">
      <div className="max-w-[700px] mx-auto px-4 flex flex-col items-center gap-4 pt-20">
        <p className="w-fit text-sm font-semibold border border-black rounded-full px-4 py-1">
          Shop Templates
        </p>
        <h1 className="text-4xl lg:text-6xl font-bold text-center">
          High quality templates
          <br />
          designed to perfection
        </h1>
        <p className="max-w-[550px] text-center text-gray-500 text-lg py-4">
          Find and download the best high-quality 3D and vector illustrations,
          fonts, designs and mockups.
        </p>

        <form className="w-fit border px-4 border-black/20 flex items-center hover:shadow-xl duration-200 bg-white rounded-full overflow-hidden">
          <input
            type="text"
            placeholder="Search resourcces..."
            className="w-[400px] p-3 bg-transparent outline-none"
          />
          <button>
            <IoSearchOutline />
          </button>
        </form>
        <div className="flex gap-5 items-center pb-16 pt-3">
          <p className="font-semibold">Categories</p>
          <ul className="flex flex-wrap gap-2">
            <li className="w-fit text-sm font-semibold text-gray-600 border border-black/50 rounded-full px-4 pt-1 pb-2 hover:text-primary duration-100 cursor-pointer">
              Agency
            </li>
            <li className="w-fit text-sm font-semibold text-gray-600 border border-black/50 rounded-full px-4 pt-1 pb-2 hover:text-primary duration-100 cursor-pointer">
              Ecommerce
            </li>
            <li className="w-fit text-sm font-semibold text-gray-600 border border-black/50 rounded-full px-4 pt-1 pb-2 hover:text-primary duration-100 cursor-pointer">
              Business
            </li>
            <li className="w-fit text-sm font-semibold text-gray-600 border border-black/50 rounded-full px-4 pt-1 pb-2 hover:text-primary duration-100 cursor-pointer">
              Portfolio
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
