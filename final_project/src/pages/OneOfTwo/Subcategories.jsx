import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "../../axios";

const Subcategories = () => {
 const { name } = useParams();
 const [subCategories, setSubCategories] = useState();
 const [isLoading, setIsLoading] = useState(true);
 useEffect(() => {
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
     <Link
      key={subCategory.name}
      to={`/1of2/${name}/${subCategory.name}`}
      className="w-full flex flex-col items-center"
     >
      <img
       src={subCategory.imgUrl}
       alt={subCategory.name}
       className="h-[300px] w-2/3 object-cover hover:scale-110 cursor-pointer ease-in-out duration-500 mb-3"
      />
     </Link>
    ))}
  </div>
 );
};

export default Subcategories;
