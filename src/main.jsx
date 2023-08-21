import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Footer, NavBar } from "./components/componentindex.js";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <NavBar />
      <App />
      <Footer/>
    </React.StrictMode>
  </BrowserRouter>
);
