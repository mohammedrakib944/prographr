import React from "react";
import Logo from "@/assets/logo.svg";
import Icon from "@/assets/icon.svg";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { FaArrowRight } from "react-icons/fa";
import { RiMenu2Fill } from "react-icons/ri";

const Navbar = () => {
  const NavLinks = [
    {
      text: "Template",
      link: "#",
    },
    {
      text: "Company",
      link: "#",
    },
    {
      text: "Contact Us",
      link: "#",
    },
  ];
  return (
    <nav className="layout grid grid-cols-10 py-4">
      {/* Mobile view */}
      <div className="lg:hidden drawer">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="text-2xl cursor-pointer drawer-button pr-2 lg:hidden"
          >
            <RiMenu2Fill />
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-white text-base-content flex items-center">
            <Image src={Logo} className="my-10" alt="Logo" />
            {/* Sidebar content here */}
            {NavLinks?.map((item, index: number) => (
              <li key={index}>
                <Link href={item.link} className="hover:text-primary">
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Desktop View */}
      {/* Logo */}
      <div className="col-span-3 text-2xl font-extrabold flex items-center">
        <Image src={Icon} className="block md:hidden" alt="Prographer Logo" />
        <Image src={Logo} className="hidden md:block" alt="Prographer Logo" />
      </div>

      {/* Links */}
      <ul className="col-span-4 hidden lg:flex items-center gap-7">
        {NavLinks?.map((item, index: number) => (
          <li key={index}>
            <Link href={item.link} className="hover:text-primary">
              {item.text}
            </Link>
          </li>
        ))}
      </ul>

      {/* Buttons */}
      <div className="col-span-6 lg:col-span-3 flex items-center gap-3 justify-end">
        <Button text="Sign in" icon={<FaArrowRight />} outline />
        <Button text="Sign up" icon={<FaArrowRight />} />
      </div>
    </nav>
  );
};

export default Navbar;
