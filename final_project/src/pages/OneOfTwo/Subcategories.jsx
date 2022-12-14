import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "../../axios";

const Subcategories = () => {
 const { name } = useParams();
 const [subCategories, setSubCategories] = useState();
 const [isLoading, setIsLoading] = useState(true);
 useEffect(() => {
  document.title = "Subcategories";
  setIsLoading(true);
  axios
   .get(`/categories/${name}`)
   .then((res) => {
    setSubCategories(res.data.subcategories);
   })
   .finally(() => setIsLoading(false));
 }, []);
 return (
  <div className="flex flex-col mb-3 mt-10 w-[98%] md:w-[70%] ml-[50%] translate-x-[-50%] items-center">
   {isLoading && <div>Loading...</div>}
   {!isLoading &&
    subCategories.map((subCategory) => (
     <div className="group flex-col w-full h-full">
      <Link
       key={subCategory.name}
       to={`/1of2/${name}/${subCategory.name}`}
       className="w-full flex flex-col items-center"
      >
       <img
        src={subCategory.imgUrl}
        alt={subCategory.name}
        className="group-hover:opacity-20 h-[300px] w-2/3 object-cover hover:scale-110 cursor-pointer ease-in-out duration-500 mb-3"
       />
      </Link>
      <span
       class="group-hover:opacity-100 ease-in-out duration-500 px-1 text-4xl text-slate-900 rounded-md absolute left-1/2 
      -translate-x-1/2 translate-y-[-450%] opacity-0 cursor-pointer"
      >
       {subCategory.name}
      </span>
     </div>
    ))}
  </div>
 );
};

export default Subcategories;
