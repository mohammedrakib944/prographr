import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import Link from "next/link";
import Button from "../common/Button";
type CardProps = {
  title: string;
  icon: React.ReactNode;
  para: string;
  link: string;
};
const HomeCard = ({ title, icon, para, link }: CardProps) => {
  return (
    <div className="bg-neutral max-w-[380px] p-6 rounded-[30px]">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl text-accent">{title}</h2>
        <div className="w-[65px] h-[65px] rounded-full bg-primary text-white flex items-center justify-center text-2xl">
          {icon}
        </div>
      </div>
      <p className="py-8 text-accent/80">{para}</p>
      <Link href="#">
        <Button text="Learn More" icon={<FiArrowUpRight />} white />
      </Link>
    </div>
  );
};

export default HomeCard;
