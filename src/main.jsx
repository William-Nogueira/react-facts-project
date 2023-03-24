import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Facts from "./components/Facts";
import "./styles/main.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <Facts />
  </React.StrictMode>
);
