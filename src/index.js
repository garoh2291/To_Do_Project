import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";

const aplication = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(aplication);
