import React from "react";
import ReactDOM from "react-dom/client";
import PasswordGenerator from "./PasswordGenerator.jsx";
import RgbGenerator from "./RgbGenerator.jsx";
import CurrencyConvertor from "./CurrencyConvertor.jsx";
import "./index.css";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PasswordGenerator />
    <RgbGenerator/>
    <CurrencyConvertor/>
    <App/>
  </React.StrictMode>
);
