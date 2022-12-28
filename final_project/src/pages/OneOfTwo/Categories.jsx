import React from "react";
import { Category } from "../../OneOfTwo/Category";

const Categories = () => {
 return (
  <div className="grid gap-4 grid-cols-2 mt-10 w-[98%] md:w-[70%] ml-[50%] translate-x-[-50%]">
   <Category>Football</Category>
   <Category>Wrestling</Category>
   <Category>TVSeries</Category>
   <Category>Basketbal</Category>
  </div>
 );
};

export default Categories;
