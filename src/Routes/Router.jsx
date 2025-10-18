import React from "react";
import { createBrowserRouter } from "react-router";

import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";
import HomeLayout from "../layout/HomeLayout";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        path: "",
        Component: Home,
      },
      {
        path: "/category/:id",
        Component: CategoryNews,
      },
    ],
  },
]);

export default router;
