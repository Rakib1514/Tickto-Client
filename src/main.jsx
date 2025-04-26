import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import axios from "axios";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router";
import "./index.css";

import { store } from "./App/store";
import router from "./routes/Router";

const queryClient = new QueryClient();
axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;
// in the .env.local please add VITE_API_BASE_URL=http://localhost:5000

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
    </Provider>
  </StrictMode>
);
