import React from "react";
import ReactDom from "react-dom";
import Input from "./hooks/Input.js";
import State from "./hooks/State.js";
import Tabs from "./hooks/Tabs.js";

import "./styles.css";

const App = () => {
  return (
    <div className="App">
      <h1>Learning React Hooks</h1>
      <State />
      <Input />
      <Tabs />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDom.render(<App />, rootElement);
