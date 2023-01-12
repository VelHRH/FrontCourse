import React, { useEffect, useState } from "react";
import { Category } from "../../components/OneOfTwo/Category";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../redux/slices/categories";

const Categories = () => {
 const [searchVal, setSearchVal] = useState("");
 const categories = useSelector((state) => state.categories);
 const dispatch = useDispatch();
 useEffect(() => {
  dispatch(fetchCategories());
  document.title = "1of2";
 }, []);

 return (
  <>
   <div className="mt-10 w-[98%] md:w-[70%] ml-[50%] translate-x-[-50%] bg-gradient-to-r text-slate-50 from-cyan-500 to-blue-600 rounded-2xl p-1 h-10">
    <input
     type="text"
     className="bg-slate-50 w-full h-full rounded-xl focus:outline-none p-1 px-2 text-slate-900"
     onChange={(e) => setSearchVal(e.target.value)}
     value={searchVal}
    />
   </div>
   <div className="grid gap-4 grid-cols-2 mt-7 w-[98%] md:w-[70%] ml-[50%] translate-x-[-50%]">
    {categories.loading && <div>Loading...</div>}
    {!categories.loading && categories.error && (
     <div>Error: {categories.error}</div>
    )}
    {!categories.loading &&
     categories.categories.length &&
     categories.categories.map(
      (category) =>
       category.name.slice(0, searchVal.length) === searchVal && (
        <Category key={category._id}>{category.name}</Category>
       )
     )}
   </div>
  </>
 );
};

export default Categories;
