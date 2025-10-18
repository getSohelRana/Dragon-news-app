import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    
			<div className="bg-base-200 flex items-center gap-4 p-3">
      <p className="bg-secondary px-3 py-2 text-base-100">Latest</p>
			<Marquee pauseOnHover={true} speed={60}>
			<p className="text-[14px] font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur at eum perspiciatis recusandae porro illo nam repellat, odit unde harum officia nihil deserunt ex, minus fuga! Similique aliquid iste animi.</p>
			</Marquee>
    </div>
		
  );
};

export default LatestNews;
