import App from "./components/App/";
import Fontra from "./components/Fontra/";
import CASDesignCultures from "./components/CASDesignCultures/";
import { routePaths } from "./route-paths";
import { Routes, Route } from "react-router-dom";

// Helper to find route by name
const getRoute = (name: string) => routePaths.find((r) => r.name === name)!;

export const routes = (
  <Routes>
    <Route path={getRoute("home").path} element={<App />} />
    <Route path={getRoute("fontra").path} element={<Fontra />} />
    <Route
      path={getRoute("casDesignCultures").path}
      element={<CASDesignCultures />}
    />
  </Routes>
);

// Re-export route paths for convenience
export { routePaths } from "./route-paths";
