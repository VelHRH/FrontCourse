import React from "react";
import { Link } from "react-router-dom";

const Subcategories = () => {
 return (
  <div className="flex flex-col mb-3 mt-10 w-[98%] md:w-[70%] ml-[50%] translate-x-[-50%] items-center">
   <Link
    to={`/1of2/football/:id`}
    className="w-full flex flex-col items-center"
   >
    <img
     src="https://ese-edu.com/wp-content/uploads/2022/11/World-Cup-2022-Blog.jpg"
     alt="Subcategory"
     className="h-[300px] w-2/3 object-cover hover:scale-110 cursor-pointer ease-in-out duration-500 mb-3"
    />
   </Link>
  </div>
 );
};

export default Subcategories;
