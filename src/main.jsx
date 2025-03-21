import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router";
import PublicRoutes from "./routes/PublicRoutes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import axios from "axios";

const queryClient = new QueryClient();
axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;
// in the .env.local please add VITE_API_BASE_URL=http://localhost:5000

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <PublicRoutes />
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>
);
