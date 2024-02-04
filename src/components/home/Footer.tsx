import React from "react";
import Logo from "@/assets/logo.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <div className="layout">
        <footer className="px-10 text-accent border-b footer pt-32 pb-14 mt-10 lg:mt-20 bg-transparent">
          <aside>
            <Image src={Logo} alt="Logo" />
          </aside>
          <nav className="flex flex-wrap gap-7">
            <a className="link link-hover">Templates</a>
            <a className="link link-hover">Company</a>
            <a className="link link-hover">About</a>
          </nav>
          <nav className="flex flex-wrap gap-7">
            <a className="link link-hover">Customer Support</a>
            <a className="link link-hover">Terms & Conditions</a>
            <a className="link link-hover">Contact</a>
          </nav>
        </footer>
      </div>

      <div className="mb-10 text-center">
        <p className="mt-5 text-accent text-sm">
          (c) 2024 Prographr All right reserved
        </p>
      </div>
    </>
  );
};

export default Footer;
