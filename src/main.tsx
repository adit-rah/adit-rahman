import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Links shared from the GitHub Pages site used hash routes (/#/resume); send
// them to the matching path. Only the GitHub Pages build has a non-root base,
// so this is compiled out of the Cloudflare build.
if (import.meta.env.BASE_URL !== "/" && location.hash.startsWith("#/")) {
  history.replaceState(null, "", import.meta.env.BASE_URL + location.hash.slice(2));
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
