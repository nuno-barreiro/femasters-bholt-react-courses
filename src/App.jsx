import React from "react";
import { createRoot } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", { id: "app" }, [
    React.createElement("h1", { id: "title" }, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Nala",
      animal: "Dog",
      breed: "German Shepperd",
    }),
    React.createElement(Pet, {
      name: "Fluffy",
      animal: "Cat",
      breed: "Common European",
    }),
  ]);
};

const container = document.getElementById("root");

// the new ReactDOM.createRoot(container) was introduced in React 18
// and brings some new concurrency features.
// no need to ReactDOM.render(container, <App />) unless for legacy reasons
const root = createRoot(container);
root.render(React.createElement(App));
