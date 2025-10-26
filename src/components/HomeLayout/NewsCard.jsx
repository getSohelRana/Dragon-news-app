import { format } from "date-fns";
import React from "react";
import { CiBookmark } from "react-icons/ci";
import { FaRegEye, FaShareAlt, FaStar } from "react-icons/fa";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  // console.log(news);
  const { id, title, author, thumbnail_url, details, total_view, rating, tags } =
    news || {};
  return (
    <div className="card bg-base-100 shadow border border-base-200 ">
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b border-base-200 bg-base-200">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold text-sm">{author.name}</h3>
            <p className="text-xs text-gray-500">
              {format(new Date(news.author.published_date), "dd-MM-yyyy")}
            </p>
          </div>
        </div>
        <div className="flex gap-2 text-lg text-gray-500">
          <CiBookmark className="cursor-pointer hover:text-primary" />
          <FaShareAlt className="cursor-pointer hover:text-primary" />
        </div>
      </div>

      {/* Body */}
      <div className="p-4">
        <h2 className="font-bold text-lg leading-snug mb-3 hover:text-primary cursor-pointer">
          {title}
        </h2>
        <figure className="mb-4">
          <img
            src={thumbnail_url}
            alt={title}
            className="rounded-lg w-full h-[300px] object-cover"
          />
        </figure>
        <p className="text-sm text-gray-600">
          {details.slice(0, 200)}...
          <Link to={`/news-details/${id}`} className="text-warning font-semibold cursor-pointer hover:underline">
            Read More
          </Link>
        </p>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center p-4 border-t border-base-200">
        <div className="flex items-center gap-1 text-warning">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={i < rating.number ? "text-warning" : "text-gray-300"}
            />
          ))}
          <span className="ml-1  text-gray-600 font-medium items-center">
            {rating.number}
          </span>
        </div>
        <div className="flex items-center gap-1 text-gray-600 text-sm">
          <FaRegEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
