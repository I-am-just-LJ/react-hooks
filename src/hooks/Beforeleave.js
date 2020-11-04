import React, { useEffect } from "react";

const useBeforeLeave = (onBefore) => {
  //   if (typeof onBefore !== "function") {
  //     return;
  //   }
  useEffect(() => {
    const handle = (event) => {
      const { clientY } = event;
      if (clientY <= 0) {
        onBefore();
      }
    };
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  }, []);
};

const Beforeleave = () => {
  const begForLife = () => console.log("plz don't leave");
  useBeforeLeave(begForLife);
  return (
    <div>
      <h2>useBeforeLeave</h2>
    </div>
  );
};

export default Beforeleave;
