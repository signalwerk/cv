import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { hydrateRoot, createRoot } from "react-dom/client";
import { routes } from "./routes";

const rootElement = document.getElementById("root");

if (rootElement) {
  // Use hydrate if there's pre-rendered content, otherwise use render
  if (rootElement.hasChildNodes()) {
    hydrateRoot(
      rootElement,
      <React.StrictMode>
        <Router>{routes}</Router>
      </React.StrictMode>,
    );
  } else {
    createRoot(rootElement).render(
      <React.StrictMode>
        <Router>{routes}</Router>
      </React.StrictMode>,
    );
  }
}
