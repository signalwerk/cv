import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { hydrate, render } from "react-dom";
import App from "./components/App/";
import Fontra from "./components/Fontra/";
import reportWebVitals from "./reportWebVitals";

const rootElement = document.getElementById("root");

if (rootElement?.hasChildNodes()) {
  hydrate(
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/fontra" element={<Fontra />} />
        </Routes>
      </Router>
    </React.StrictMode>,
    rootElement
  );
} else if (rootElement) {
  render(
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/fontra" element={<Fontra />} />
        </Routes>
      </Router>
    </React.StrictMode>,
    rootElement
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
