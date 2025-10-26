import React from "react";
import { createBrowserRouter } from "react-router";

import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";
import HomeLayout from "../layout/HomeLayout";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import AuthLayout from "../Layout/AuthLayout";
import NewsDetails from "../pages/NewsDetails";
import PrivateRoutes from "../provider/PrivateRoutes";
import Loading from "../pages/Loading";

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
        hydrateFallbackElement: Loading,
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
  {
    path: "/news-details/:id",
    element: (
      <PrivateRoutes>
        <NewsDetails></NewsDetails>
      </PrivateRoutes>
    ),
    loader: () => fetch("../news.json"),
    hydrateFallbackElement: Loading,
  },
]);

export default router;
