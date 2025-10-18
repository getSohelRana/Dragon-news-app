import React from "react";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
  return (
    <div className="container mx-auto">
      <header>
        <Header></Header>
        <section className="my-7">
          <LatestNews></LatestNews>
        </section>
				<nav>
					<Navbar></Navbar>
				</nav>
      </header>
      <main>
        <section className="left-nav"></section>
        <section className="main">
          <outlet></outlet>
        </section>
      </main>
    </div>
  );
};

export default HomeLayout;
