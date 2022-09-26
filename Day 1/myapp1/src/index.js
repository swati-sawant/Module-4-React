import ReactDOM from "react-dom/client";
import React from "react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<h1>Hello Clans!</h1>);

const p1 = ReactDOM.createRoot(document.getElementById("p1")).render(
  <h1>This is Blazeclan!</h1>
);

const p = ReactDOM.createRoot(document.querySelector("#p")).render(
  <h1>Hi, My Name is Meet !</h1>
);

const navbar = (
  <nav>
    <h1>React features</h1>
    <ul>
      <li>JSX</li>
      <li>Components</li>
      <li>Virtual DOM</li>
      <li>Simplicity</li>
      <li>Performance</li>
    </ul>
  </nav>
);

ReactDOM.createRoot(document.getElementById("nv")).render(navbar);
console.log("Data is displayed");
