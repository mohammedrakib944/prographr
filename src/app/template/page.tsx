import Hero from "@/components/home/Hero";
import FreeTemp from "@/components/template/FreeTemp";
import Newest from "@/components/template/Newest";
import TopSelling from "@/components/template/TopSelling";
import React from "react";

const page = () => {
  return (
    <div>
      <Hero />
      <TopSelling />
      <Newest />
      <FreeTemp />
    </div>
  );
};

export default page;
