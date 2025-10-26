import React, { use } from "react";
import { NavLink } from "react-router";

const categoriesPromise = fetch('../categories.json')
.then(res => res.json());


const Category = () => {
  const categories = use(categoriesPromise);
  // console.log(categories)
  return (
    <div>

      <h1 className="font-bold text-xl">All Categories <span className="text-secondary">{categories.length}</span></h1>
      <div className="grid grid-cols-1 mt-5 gap-3">
        {
          categories.map((category) => 
           <NavLink to={`/category/${category.id}`} className='btn bg-base-100 border-0 hover:bg-base-200 text-accent' key={category.id}>{category.name}</NavLink>
          )}
        
      </div>
    </div>
  );
};

export default Category;
