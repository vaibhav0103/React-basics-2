import React from "react";
import ReactDOM from "react-dom/client";

// JSX
// const heading = <h1>Hello World!</h1>;
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

const Title = () => <h1 className="head">Hello world component!</h1>;
const title = <h1 className="head">Hello world element!</h1>;

const Heading = () => (
  <div id="container">
    <Title />
    {title}
    <h1 className="heading">This is React!</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Heading />);
