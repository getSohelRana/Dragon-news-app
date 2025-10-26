import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import RightAside from "../components/HomeLayout/RightAside";
import { useLoaderData, useParams } from "react-router";
import NewsDetailsCard from "../components/NewsDetailsCard";

const NewsDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();

  const [detailsNews, setDetailsNews] = useState({});
  // console.log(data, id, detailsNews)
  useEffect(() => {
    const newsDetails = data.find((singleNews) => singleNews.id == id);
    setDetailsNews(newsDetails);
  }, [data, id]);
  return (
    <div>
      <header className="mt-13">
        <Header></Header>
      </header>
      <main className="container mx-auto grid grid-cols-12 gap-5 mt-7">
        <section className="grid col-span-8 p-3">
          <div>
            <h1 className="font-bold text-xl mb-5">News Details</h1>
            <NewsDetailsCard detailsNews={detailsNews}></NewsDetailsCard>
          </div>
        </section>
        <aside className="right grid col-span-4 p-3">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
