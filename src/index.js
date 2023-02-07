import React from "react";
import ReactDOM from "react-dom";

// ReactDOM.render(WHAT TO SHOW, WHERE TO SHOW IT);
// Render method can only take a single HTML element.
// ReactDOM.render(<h1>Hello World!</h1>, document.getElementById("root"));
ReactDOM.render(
  <div>
    <h1>Hello World!</h1>
    <p>This is a paragraph,</p>
  </div>,
  document.getElementById("root")
);
