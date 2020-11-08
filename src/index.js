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
import Fullscreen from "./hooks/Fullscreen";
import Noti from "./hooks/Noti";
import useAxios from "./hooks/Axios";

import "./styles.css";

const App = () => {
  const [{ loading, data, error, refetch }] = useAxios({
    url: "https://yts.am/api/v2/list_movies.json",
  });
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
      <Noti />
      <div>
        <h2>useAxios</h2>
        <h3>{data && data.status}</h3>
        <h3>{loading && "Loading"} </h3>
        <button onClick={refetch}>Refetch</button>
      </div>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDom.render(<App />, rootElement);
