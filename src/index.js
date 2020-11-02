import React, { useState } from "react";
import ReactDom from "react-dom";

import "./styles.css";

const App = () => {
  const [item, setItem] = useState(1);
  const incrementItem = () => setItem(item + 1);
  const decrementItem = () => setItem(item - 1);
  return (
    <div className="App">
      <h1>React Hooks! {item}</h1>
      <h2>Start coding</h2>
      <button onClick={incrementItem}>increment</button>
      <button onClick={decrementItem}>Decrement</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDom.render(<App />, rootElement);
