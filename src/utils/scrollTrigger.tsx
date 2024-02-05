export const scrollTriggerObject = (element: any, index: number) => {
  return {
    translateY: 0,
    opacity: 1,
    delay: 0.2 * index,
    scrollTrigger: {
      trigger: element,
      start: "top 85%",
      end: "center center",
    },
  };
};
