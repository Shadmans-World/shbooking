import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import { router } from "../src/routers/Routers";
import AuthProvider from "./Providers/AuthProviders/AuthProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <div
        className="max-w-full md:max-w-[95%] md:mx-auto 
     "
      >
        <RouterProvider router={router} />
      </div>
    </AuthProvider>
  </StrictMode>
);
