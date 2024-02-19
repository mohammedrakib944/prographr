"use client";
import React, { useRef } from "react";
import { BiSolidQuoteAltRight } from "react-icons/bi";
import { LuArrowUpRight } from "react-icons/lu";
import DelowerHossain from "@/assets/stuff/1.png";
import RaihanUddin from "@/assets/stuff/2.png";
import MahmudulHasan from "@/assets/stuff/3.png";
import Image from "next/image";
import Link from "next/link";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import "./styles.css";

// import required modules
import {
  //  Autoplay,
  Pagination,
} from "swiper/modules";
import useScrollTrigger from "@/hooks/useScrollTrigger";

const TestimonialData = [
  {
    id: 1,
    description:
      "We have been using Prographr marketplace for over 5 years now and has been instrumental in our branding, packaging and all creative design projects. They are always available, has very strong work ethic and integrity. Great quality and exceeds our expectations",
    name: "Suresh Kanthaswamy",
    title: "Envelor Inc.",
    photo: DelowerHossain,
  },
  {
    id: 2,
    description:
      "I have worked now with Prographr now for nearly a year, with a total of over 50 projects. I can say that with every project, we gets better and better. Reliable and ALWAYS on time!",
    name: "Kaleb Held",
    title: "Industrolux",
    photo: RaihanUddin,
  },
  {
    id: 3,
    description:
      "Doing real estate business without business card was difficult for me. I found a business card template here and modified by the design owner. The designer did a fantastic job for me. Thanks...",
    name: "Charles A. Cameron",
    title: "Blue Real Esate",
    photo: MahmudulHasan,
  },
];

const Testimonial = () => {
  const container = useRef<any>();
  useScrollTrigger({ identifier: ".gsapTrigger4", top: 100 }, container);

  return (
    <div className="layout mt-14 mb-14 lg:mb-44 lg:mt-36">
      <h2 className="text-3xl text-accent text-center">
        Clients <strong>testimonial</strong>
      </h2>

      <div ref={container}>
        <Swiper
          spaceBetween={20}
          breakpoints={{
            900: {
              slidesPerView: 3,
            },
            600: {
              slidesPerView: 2,
            },
          }}
          // autoplay={{
          //   delay: 1500,
          //   disableOnInteraction: false,
          // }}
          pagination={true}
          modules={[Pagination]}
          className="mt-20 grid gap-10 lg:gap-4 gird-cols-1 lg:grid-cols-3 translate-y-36 opacity-0 gsapTrigger4"
        >
          {TestimonialData.map((item, index: number) => (
            <SwiperSlide key={index}>
              <Card data={item} />
            </SwiperSlide>
          ))}
          <br />
          <br />
          <br />
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;

// Card compoent
const Card = ({ data }: any) => {
  return (
    <div className="max-w-[450px] h-[326px] mt-10 bg-white text-accent border border-neutral shadow-xl  shadow-gray-100/50 duration-150 rounded-[30px] p-7 relative">
      <div className="p-5 -mt-14 w-fit mx-auto bg-primary text-2xl text-white rounded-full">
        <BiSolidQuoteAltRight />
      </div>
      <div className="h-full flex flex-col justify-between">
        <p className="pt-4 text-sm">{data.description}</p>
        <div className="flex gap-4 pt-4">
          <Image
            className="w-[100px] h-[100px] rounded-full"
            src={data.photo}
            alt="Stuff"
          />
          <div className="mt-3">
            <h3 className="text-lg font-semibold">{data.name}</h3>
            <p className="mt-1">{data.title}</p>
          </div>
        </div>
      </div>
      {/* <Link href="#" className="absolute right-5 bottom-4">
        <div className="w-fit p-2 text-xl text-accent rounded-full border-2 border-accent/20">
          <LuArrowUpRight />
        </div>
      </Link> */}
    </div>
  );
};
