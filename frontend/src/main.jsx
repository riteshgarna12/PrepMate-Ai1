import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { UserProvider } from "./context/userContext";  // ✅ import context

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserProvider>       {/* ✅ wrap App in UserProvider */}
      <App />
    </UserProvider>
  </StrictMode>
);
