import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router";
import PublicRoutes from "./routes/PublicRoutes";
import {  QueryClient, QueryClientProvider } from "@tanstack/react-query";
import axios from "axios";

const queryClient = new QueryClient();
axios.defaults.baseURL = "http://localhost:5000";
// Please change the baseURL to your own server URL

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <PublicRoutes />
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>
);
