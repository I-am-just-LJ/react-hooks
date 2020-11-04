import React, { useEffect, useRef } from "react";

const useFadeIn = (duration = 1, delay = 0) => {
  //   if (typeof duration !== "number" || typeof delay !== "number") {
  //     return;
  //   }
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      const { current } = element;
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      current.style.opacity = 1;
    }
  }, []);
  return { ref: element, style: { opacity: 0 } };
};

const Fadein = () => {
  const fadeInH1 = useFadeIn(1, 2);
  const fadeInP = useFadeIn(2, 4);
  return (
    <div>
      <h2 {...fadeInH1}>useFadeIn</h2>
      <p {...fadeInP}>lorem ipsum lalala</p>
    </div>
  );
};

export default Fadein;
