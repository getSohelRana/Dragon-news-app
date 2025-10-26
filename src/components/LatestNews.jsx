import React, { use } from "react";
import Marquee from "react-fast-marquee";
import { VscStarEmpty } from "react-icons/vsc";
import { Link, NavLink } from "react-router";
import "animate.css";

// fetch news data (using the experimental React `use` API)
const latestNewsPromise = fetch("../news.json").then((res) => res.json());

const LatestNews = () => {
  const headLines = use(latestNewsPromise);

  return (
    <div className="bg-base-100 flex items-center gap-4 p-3 rounded-md shadow-sm">
      <p className="bg-secondary text-base-100 font-semibold px-4 py-2 rounded-md animate__animated animate__pulse animate__infinite">
        Latest
      </p>

      <Marquee pauseOnHover={true} speed={60} gradient={false}>
        {headLines.map((headLine) => (
          <Link
            to={`/category/${headLine.category_id}`}
            key={headLine.id}
            className="text-secondary mx-4 flex items-center gap-1 hover:text-red-600 transition-colors"
          >
            <VscStarEmpty size={20} className="text-yellow-500 animate__animated animate__flash animate__infinite	infinite" />
            <span className="text-[14px] font-semibold">
              {headLine.title}
            </span>
          </Link>
        ))}
      </Marquee>
    </div>
  );
};

export default LatestNews;
