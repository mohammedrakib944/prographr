import React from "react";
import Logo from "@/assets/logo.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <footer className="layout text-accent border-b footer pt-32 pb-14 mt-10 lg:mt-20 bg-transparent">
        <aside>
          <Image src={Logo} alt="Logo" />
        </aside>
        <nav>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>

      <div className="mb-10 text-center">
        <p className="mt-5 text-accent text-sm">
          (c) 2024 Prographr All right reserved
        </p>
      </div>
    </>
  );
};

export default Footer;
