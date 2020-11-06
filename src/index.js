import React from "react";
import ReactDom from "react-dom";
import Input from "./hooks/Input";
import State from "./hooks/State";
import Tabs from "./hooks/Tabs";
import Title from "./hooks/Title";
import Click from "./hooks/Click";
import Confirm from "./hooks/Confirm";
import Prevent from "./hooks/Prevent";
import Beforeleave from "./hooks/Beforeleave";
import Fadein from "./hooks/Fadein";
import Network from "./hooks/Network";
import Scroll from "./hooks/Scroll";

import "./styles.css";
import Fullscreen from "./hooks/useFullscreen";

const App = () => {
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <h1>Learning React Hooks</h1>
      <State />
      <Input />
      <Tabs />
      <Title />
      <Click />
      <Confirm />
      <Prevent />
      <Beforeleave />
      <Fadein />
      <Network />
      <Scroll />
      <Fullscreen />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDom.render(<App />, rootElement);
