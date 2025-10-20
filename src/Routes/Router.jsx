import React from "react";
import { createBrowserRouter } from "react-router";

import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";
import HomeLayout from "../layout/HomeLayout";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import AuthLayout from "../Layout/AuthLayout";

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
        loader: () => fetch("../news.json"),
      },
    ],
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        path: "/auth/login",
        Component: Login,
      },
      {
        path: "/auth/signup",
        Component: Signup,
      },
    ],
  },
]);

export default router;
