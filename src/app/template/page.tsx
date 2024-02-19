import Button from "@/components/common/Button";
import Hero from "@/components/home/Hero";
import FreeTemp from "@/components/template/FreeTemp";
import Newest from "@/components/template/Newest";
import TopSelling from "@/components/template/TopSelling";
import { RiArrowRightUpLine } from "react-icons/ri";
import React from "react";
import Image from "next/image";
import ClientImage from "@/assets/client.png";
import SearchBar from "@/components/template/SearchBar";

const page = () => {
  return (
    <div>
      <SearchBar />
      <TopSelling />
      {/* <Newest /> */}
      <FreeTemp />
      <div className="mx-4 pt-20">
        <div className="layout rounded-[30px] bg-primary flex justify-between">
          <div className="p-10 lg:pl-14">
            <h2 className="text-xl mt-4 md:text-2xl lg:text-3xl text-white">
              First Marketplace, <br /> where client choose best design
            </h2>
            <br />
            <br />
            <Button text="Learn More" icon={<RiArrowRightUpLine />} white />
          </div>
          <div className="hidden lg:block">
            <Image
              className="-mt-[100px] mr-[100px]"
              width="255"
              src={ClientImage}
              alt="Customer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
