import React from "react";
import ReactDOM from "react-dom/client";

const heading= React.createElement(
    "h1",
    {id: "heading"},
    "Hi React !"
);
console.log("heading");
const jsxheading= <h1 id="heading">Hi React ! in JSX</h1>
console.log("jsxheading");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);