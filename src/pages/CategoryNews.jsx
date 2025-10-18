import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../components/HomeLayout/NewsCard";

const CategoryNews = () => {
  const { id } = useParams();
  const data = useLoaderData();

  const [categoryNews, setCategoryNews] = useState([]);

  // console.log(id , data)
  // load data
  useEffect(() => {
    if (id == "0") {
      setCategoryNews(data);
    } else if (id == "1") {
      const filteredNews = data.filter(
        (news) => news.others.is_today_pick == true
      );
      setCategoryNews(filteredNews);
    } else {
      const filteredNews = data.filter(
        (news) => news.category_id === Number(id)
      );
      setCategoryNews(filteredNews);
    }
  }, [data, id]);
  return <div>
    <h1 className="font-bold text-xl">Total <span className="text-secondary">{categoryNews.length} </span>News Found</h1>
    <div className="grid grid-cols-1 mt-5 gap-5">
        {
            categoryNews.map((news) => <NewsCard news={news} key={news.id}></NewsCard>)
        }
    </div>
    </div>;
};

export default CategoryNews;
