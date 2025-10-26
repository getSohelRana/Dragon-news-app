import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router";

const NewsDetailsCard = ({ detailsNews }) => {
  // console.log(detailsNews);
  const { title, thumbnail_url, details,category_id } =
    detailsNews || {};
  return (
    <div className="card bg-base-100 shadow-sm p-5">
      <figure>
        <img
          className="object-cover w-full m-5 rounded-xl"
          src={thumbnail_url}
          alt={title}
        />
      </figure>
      <div className="card-body">
        <h2 className="font-bold text-[30px]">{title}</h2>
        <p className="text-accent text-justify ">
          {details}
        </p>
        <div className="card-actions mt-5">
          <Link to={`/category/${category_id}`} className="btn btn-secondary"> <FaArrowLeftLong></FaArrowLeftLong>Go to Back</Link>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailsCard;
