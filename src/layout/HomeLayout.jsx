import React from "react";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";
import LeftAside from "../components/homeLayout/LeftAside";
import RightAside from "../components/HomeLayout/RightAside";
import { Outlet,  useNavigation } from "react-router";
import Loading from "../pages/Loading";

const HomeLayout = () => {
  const {state} = useNavigation()
  return (
    <div className="container mx-auto">
      {/* header content goes here */}
      <header>
        <Header></Header>
        <section className="my-7">
          <LatestNews></LatestNews>
        </section>
        <nav>
          <Navbar></Navbar>
        </nav>
      </header>
      {/* Main content goes here */}
      <main className="grid grid-cols-12 my-5 gap-5">
        <aside className="col-span-3 sticky top-4 h-fit">
          {" "}
          <LeftAside></LeftAside>{" "}
        </aside>
        <section className="main col-span-6">
          {state === "loading" ? <Loading></Loading> : <Outlet></Outlet>}
        </section>
        <aside className="col-span-3 sticky top-4 h-fit">
          <RightAside></RightAside>
        </aside>
      </main>
      {/* Footer content goes here */}
    </div>
  );
};

export default HomeLayout;
