"use client";

import gsap from "gsap"; // <-- import GSAP
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useScrollTrigger = (
  identifier: string,
  container: React.RefObject<any>
) => {
  const gsapHook = useGSAP(
    () => {
      const elements = document.querySelectorAll(identifier);
      elements.forEach((element, index) => {
        gsap.to(element, {
          translateY: 0,
          opacity: 1,
          delay: 0.2 * index,
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            end: "center center",
          },
        });
      });
    },
    { scope: container }
  );
  return gsapHook;
};

export default useScrollTrigger;
