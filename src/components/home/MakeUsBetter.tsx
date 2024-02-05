"use client";
import React from "react";
import HomeCard from "@/components/home/HomeCard";
import Creativity from "@/assets/icons/Creativity.svg";
import TeamCollaboration from "@/assets/icons/TeamCollaboration.svg";
import Professionalism from "@/assets/icons/Professionalism.svg";
import { scrollTriggerObject } from "@/utils/scrollTrigger";

import { useRef } from "react";

import gsap from "gsap"; // <-- import GSAP
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MakeUsBetter = () => {
  const container = useRef<any>();
  useGSAP(
    () => {
      const elements = document.querySelectorAll(".gsapTrigger");
      elements.forEach((element, index) => {
        gsap.to(element, scrollTriggerObject(element, index));
      });
    },
    { scope: container }
  );

  return (
    <div className="layout mt-20 pt-14 lg:pt-36">
      <h2 className="text-3xl text-accent text-center">
        What <strong>makes us better</strong>
      </h2>
      <div
        ref={container}
        className="py-10 grid place-items-center gap-4 lg:grid-cols-3"
      >
        <div className="translate-y-24 opacity-0 gsapTrigger">
          <HomeCard
            title="Creativity"
            icon={Creativity}
            para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum natus temporibus maxime."
            link=""
          />
        </div>
        <div className="translate-y-24 opacity-0 gsapTrigger">
          <HomeCard
            title="Team Collaboration"
            icon={TeamCollaboration}
            para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum natus temporibus maxime."
            link=""
          />
        </div>
        <div className="translate-y-24 opacity-0 gsapTrigger">
          <HomeCard
            title="Professionalism"
            icon={Professionalism}
            para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum natus temporibus maxime."
            link=""
          />
        </div>
      </div>
    </div>
  );
};

export default MakeUsBetter;