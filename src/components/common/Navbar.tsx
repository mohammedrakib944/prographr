"use client";
import React from "react";
import Logo from "@/assets/logo.svg";
import Icon from "@/assets/icon.svg";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { FiArrowRight } from "react-icons/fi";
import { RiMenu2Fill } from "react-icons/ri";
import { usePathname } from "next/navigation";

const NavLinks = [
  {
    text: "Template",
    link: "/template",
  },
  {
    text: "Company",
    link: "/company",
  },
  {
    text: "Contact Us",
    link: "/contact",
  },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="w-full bg-neutral">
      <nav className="layout grid grid-cols-10 py-[32px]">
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
              <Link href="/">
                <Image src={Logo} className="my-10" alt="Logo" />
              </Link>
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
        <Link href="/" className="col-span-3 mt-1">
          <div className="text-2xl font-extrabold flex items-center">
            <Image
              src={Icon}
              className="block md:hidden"
              alt="Prographer Logo"
            />
            <Image
              src={Logo}
              className="hidden md:block"
              alt="Prographer Logo"
            />
          </div>
        </Link>

        {/* Links */}
        <ul className="col-span-4 hidden lg:flex items-center gap-7">
          {NavLinks?.map((item, index: number) => (
            <li key={index}>
              <Link
                href={item.link}
                className={`hover:text-primary ${
                  pathname === item.link && "text-primary"
                }`}
              >
                {item.text}
              </Link>
            </li>
          ))}
        </ul>

        {/* Buttons */}
        <div className="col-span-6 lg:col-span-3 flex items-center gap-3 justify-end">
          <Link href="/sign-in" className="min-w-fit">
            <Button
              text="Sign in"
              className="shadow-none px-8 bg-primary/20 hover:bg-primary/30"
              // icon={<FiArrowRight />}
              outline
            />
          </Link>
          <Link href="/sign-up-as" className="min-w-fit">
            <Button
              className="px-8"
              text="Sign up"
              //  icon={<FiArrowRight />}
            />
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
