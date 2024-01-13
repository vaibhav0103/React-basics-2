import React from "react";
import ReactDOM from "react-dom/client";
const parent = React.createElement(
  "div",
  { id: "heading" },
  React.createElement("h1", { id: "child" }, [
    React.createElement("h2", { id: "heading" }, "Hello world! I'm Sibling 1"),
    React.createElement("h2", { id: "heading" }, "Hello world! I'm Sibling 2"),
  ])
);

// const heading = React.createElement("h1", { id: "heading" }, "Hello world!");
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

root.render(parent)
