import React, { useEffect, useRef } from "react";

const useClick = (onClick) => {
  //   if (typeof onClick !== "function") {
  //     return;
  //   } 이거 넣으면 에러 뜸
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    };
  }, []);
  return element;
};

const Click = () => {
  const sayHello = () => console.log("say hello");
  const title = useClick(sayHello);
  return (
    <div>
      <h2 ref={title}>useClick</h2>
    </div>
  );
};

export default Click;
