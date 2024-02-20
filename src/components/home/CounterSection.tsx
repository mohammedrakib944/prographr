"use client";
import React from "react";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const CounterSection = () => {
  const [counter, setCounter] = useState(100);
  const [sells, setSells] = useState(100);
  const [templates, setTemplates] = useState(690);
  const [freeTemplates, setFreeTemplates] = useState(50);
  const [ref, inView] = useInView({
    triggerOnce: true, // Ensures the observer only triggers once
  });

  useEffect(() => {
    let interval: any;
    if (inView) {
      // Start incrementing the sells when the section is in view
      interval = setInterval(() => {
        if (counter > 0) {
          setSells((prevsells) => prevsells + 1);
          setTemplates((prevsells) => prevsells + 1);
          setFreeTemplates((prevsells) => prevsells + 1);
          setCounter((prev) => prev - 1);
        } else {
          clearInterval(interval);
        }
      }, 10);
    }

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [inView, sells]);

  return (
    <section className="layout mx-3 lg:mx-auto bg-neutral py-16 rounded-[30px] mt-32 lg:mt-48">
      <div className="flex justify-center gap-6 lg:gap-32" ref={ref}>
        <div className="text-primary text-center">
          <h1 className="text-2xl font-extrabold lg:text-5xl">{sells}+</h1>
          <p className="text-xs">Template sells till now</p>
        </div>
        <div className="text-primary text-center">
          <h1 className="text-2xl font-extrabold lg:text-5xl">$2k+</h1>
          <p className="text-xs">Funds clear to sellers</p>
        </div>
        <div className="text-primary text-center">
          <h1 className="text-2xl font-extrabold lg:text-5xl">{templates}+</h1>
          <p className="text-xs">Premium templates</p>
        </div>
        <div className="text-primary text-center">
          <h1 className="text-2xl font-extrabold lg:text-5xl">
            {freeTemplates}+
          </h1>
          <p className="text-xs">Free template</p>
        </div>
      </div>
    </section>
  );
};

export default CounterSection;
