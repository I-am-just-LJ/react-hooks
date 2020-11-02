import React, { useState } from "react";
import ReactDom from "react-dom";

import "./styles.css";

const App = () => {
  const [item, setItem] = useState(1);
  return (
    <div className="App">
      <h1>React Hooks!</h1>
      <h2>Start coding</h2>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDom.render(<App />, rootElement);
