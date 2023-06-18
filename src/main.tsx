import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./input.css";
import { BrowserRouter as Router } from "react-router-dom";
import { useProgressiveImage } from "./hooks/useProgressiveImage";

const loaded = useProgressiveImage(source);
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  
  <React.StrictMode>
    <Router>
      <App style={{}} />
    </Router>
  </React.StrictMode>
);
