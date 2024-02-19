import React from "react";
import Logo from "@/assets/logo.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-neutral">
      <div className="layout">
        <div className="px-4 lg:px-0 text-accent border-b pt-12 pb-14 mt-2 lg:mt-20 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <aside>
            <Image src={Logo} alt="Logo" />
            <p className="text-accent mt-3">
              Belgari, Fapor, Bogura Sadar, Bogura, Bangladesh <br />
              support@prographr.com
            </p>
          </aside>
          <div className="flex flex-wrap justify-between gap-6">
            <nav className="flex flex-col flex-wrap gap-4">
              <a className="link link-hover">Flyers</a>
              <a className="link link-hover">Brochures</a>
              <a className="link link-hover">Logo and Branding</a>
            </nav>
            <nav className="flex flex-col flex-wrap gap-4">
              <a className="link link-hover">Sales Sheets</a>
              <a className="link link-hover">About</a>
              <a className="link link-hover">Contact</a>
            </nav>
            <nav className="flex flex-col flex-wrap gap-4">
              <a className="link link-hover">Customer Support</a>
              <a className="link link-hover">Terms & Conditions</a>
              <a className="link link-hover">Career</a>
            </nav>
          </div>
        </div>
      </div>

      <div className="pb-10 text-center">
        <p className="mt-5 text-accent text-sm">
          (c) 2024 Prographr All right reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
