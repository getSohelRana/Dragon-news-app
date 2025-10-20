import React from "react";
import Navbar from "../components/Navbar";
import Login from "../pages/Login";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className="bg-base-200 p-5">
      <div className="container mx-auto">
        <header>
          <Navbar></Navbar>
        </header>
        <main>
            <Outlet></Outlet>
        </main>
      </div>
    </div>
  );
};

export default AuthLayout;
