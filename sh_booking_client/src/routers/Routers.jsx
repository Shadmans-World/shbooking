import { createBrowserRouter } from "react-router-dom";

import BasicLayout from "../Layout/BasicLayout";
import Home from "../Pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <BasicLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
