"use client";
import React, { useState } from "react";
import { SiAdobephotoshop, SiAdobeillustrator } from "react-icons/si";

const TemplateView = ({ params }: any) => {
  const [currentImg, setCurrentImg] = useState(1);
  const [price, setPrice] = useState(0);
  console.log("Template id: ", params.id);
  return (
    <div className="layout mt-14 grid grid-cols-1 lg:grid-cols-7 gap-6">
      {/* Tempalate View */}
      <div className="col-span-4">
        <h2 className="text-2xl text-accent pb-5">
          Premium <strong> Graphics Template</strong>
        </h2>
        <div className="">
          <div className="bg-neutral rounded-xl p-10 flex items-center justify-center">
            <img
              src={`/topimg/${currentImg}.jpg`}
              className="max-h-[400px] object-contain"
              alt=""
            />
          </div>
          <div className="w-full mt-4 flex flex-wrap gap-4">
            <img
              src="/topimg/1.jpg"
              className="w-[80px] h-[100px] object-contain bg-neutral rounded-lg p-3 cursor-pointer hover:bg-primary"
              alt=""
              onClick={() => setCurrentImg(1)}
            />
            <img
              src="/topimg/2.jpg"
              className="w-[80px] h-[100px] object-contain bg-neutral rounded-lg p-3 cursor-pointer hover:bg-primary"
              alt=""
              onClick={() => setCurrentImg(2)}
            />
            <img
              src="/topimg/3.jpg"
              className="w-[80px] h-[100px] object-contain bg-neutral rounded-lg p-3 cursor-pointer hover:bg-primary"
              alt=""
              onClick={() => setCurrentImg(3)}
            />
          </div>
        </div>

        {/* Description */}
        <h3 className="mt-10 text-xl font-bold">Descriptions</h3>
        <p className="mt-4">
          A business flyer is a versatile and dynamic promotional tool designed
          to communicate essential information about a business, its products,
          services, events, or special offers. This tangible piece of marketing
          collateral is strategically crafted to capture attention, engage the
          target audience, and generate interest in what the business has to
          offer
        </p>

        <h3 className="mt-10 text-xl font-bold">Features</h3>
        <ul className="list-disc pl-5 py-4">
          <li>US Letter & A4 Paper Size </li>
          <li>CMYK color mode</li>
          <li>Bleed size 3 mm </li>
          <li>300 DPI Print-ready</li>
          <li>Photos are not included</li>
        </ul>

        <h3 className="mt-10 text-xl font-bold">Files Included</h3>
        <div className="text-3xl flex gap-2 my-3">
          <SiAdobephotoshop />
          <SiAdobeillustrator />
          <SiAdobephotoshop />
        </div>

        <div className="mt-14">
          <div
            className={`border ${
              price === 0 && "border-primary"
            } rounded-[20px] p-8 cursor-pointer`}
            onClick={() => setPrice(0)}
          >
            <div className="flex justify-between pb-3">
              <div className="flex gap-3 font-bold">
                <input
                  type="radio"
                  className="radio radio-primary"
                  checked={price === 0}
                  onChange={() => setPrice(0)}
                />
                <h2>Template + Custom</h2>
              </div>
              <div>$20.00</div>
            </div>
            <div className="pt-2 border-t">
              We are about pushing boundaries, exploring possibilities, and
              ultimately delivering designs
            </div>
          </div>
          <div
            className={`border ${
              price === 1 && "border-primary"
            } rounded-[20px] mt-6 p-8 cursor-pointer`}
            onClick={() => setPrice(1)}
          >
            <div className="flex justify-between pb-3">
              <div className="flex gap-3 font-bold">
                <input
                  type="radio"
                  className="radio radio-primary"
                  checked={price === 1}
                  onChange={() => setPrice(1)}
                />
                <h2>Template</h2>
              </div>
              <div>$10.00</div>
            </div>
            <div className="pt-2 border-t">
              We are about pushing boundaries, exploring possibilities, and
              ultimately delivering designs
            </div>
          </div>
        </div>
      </div>
      {/* Payment Option */}
      <div className="col-span-3">
        <h1>Payment Options</h1>
      </div>
    </div>
  );
};

export default TemplateView;
