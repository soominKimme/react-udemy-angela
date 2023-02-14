import React from "react";
import Heading from "./Heading"; //Don't need to mention ".jsx "
import List from "./List";

function App() {
  return (
    <div>
      {/* Self-closing tag => b.c. There is no children. */}
      <Heading />
      <List />
      <List />
    </div>
  );
}

export default App;
