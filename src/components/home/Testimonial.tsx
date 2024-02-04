"use client";
import React from "react";
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
import { Autoplay, Pagination } from "swiper/modules";

const TestimonialData = [
  {
    id: 1,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo praesentium commodi amet ipsum omnis dignissimos.",
    name: "Delower Hossain",
    title: "Junior Graphic Designer",
    photo: DelowerHossain,
  },
  {
    id: 2,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo praesentium commodi amet ipsum omnis dignissimos.",
    name: "Raihan Uddin",
    title: "Junior Graphic Designer",
    photo: RaihanUddin,
  },
  {
    id: 3,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo praesentium commodi amet ipsum omnis dignissimos.",
    name: "Mahmudul Hasan",
    title: "Junior Graphic Designer",
    photo: MahmudulHasan,
  },
  {
    id: 6,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo praesentium commodi amet ipsum omnis dignissimos.",
    name: "Raihan Uddin",
    title: "Junior Graphic Designer",
    photo: DelowerHossain,
  },
  {
    id: 8,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo praesentium commodi amet ipsum omnis dignissimos.",
    name: "2 Mahmudul Hasan",
    title: "Junior Graphic Designer",
    photo: RaihanUddin,
  },
];

const Testimonial = () => {
  return (
    <div className="layout mt-14 mb-14 lg:mb-44 lg:mt-36">
      <h2 className="text-3xl text-accent text-center">
        Clients <strong>testimonial</strong>
      </h2>

      <div>
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
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          pagination={true}
          modules={[Autoplay, Pagination]}
          className="mt-20 grid gap-10 lg:gap-4 gird-cols-1 lg:grid-cols-3"
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
    <div className="max-w-[450px] mt-10 bg-white text-accent border border-neutral shadow-xl  shadow-gray-100/50 duration-150 rounded-[30px] p-7 relative">
      <div className="p-5 -mt-14 w-fit mx-auto bg-primary text-2xl text-white rounded-full">
        <BiSolidQuoteAltRight />
      </div>
      <p className="py-5">{data.description}</p>
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
      <Link href="#" className="absolute right-5 bottom-4">
        <div className="w-fit p-2 text-xl text-accent rounded-full border-2 border-accent/20">
          <LuArrowUpRight />
        </div>
      </Link>
    </div>
  );
};
