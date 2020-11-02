import React, { useState } from "react";

const State = () => {
  const [item, setItem] = useState(1);
  const incrementItem = () => setItem(item + 1);
  const decrementItem = () => setItem(item - 1);

  return (
    <div>
      <h2>useState {item}</h2>
      <button onClick={incrementItem}>increment</button>
      <button onClick={decrementItem}>Decrement</button>
    </div>
  );
};

export default State;
