import React from "react";
import ReactDOM from "react-dom/client";
import PasswordGenerator from "./PasswordGenerator.jsx";
import RgbGenerator from "./rgbGenerator.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PasswordGenerator />
    <RgbGenerator/>
  </React.StrictMode>
);
