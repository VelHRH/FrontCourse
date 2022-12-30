import React, { useEffect } from "react";
import { Category } from "../../components/OneOfTwo/Category";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../redux/slices/categories";

const Categories = () => {
 const categories = useSelector((state) => state.categories);
 const dispatch = useDispatch();
 useEffect(() => {
  dispatch(fetchCategories());
 }, []);
 return (
  <div className="grid gap-4 grid-cols-2 mt-10 w-[98%] md:w-[70%] ml-[50%] translate-x-[-50%]">
   {categories.loading && <div>Loading...</div>}
   {!categories.loading && categories.error && (
    <div>Error: {categories.error}</div>
   )}
   {!categories.loading &&
    categories.categories.length &&
    categories.categories.map((category) => (
     <Category key={category._id}>{category.name}</Category>
    ))}
  </div>
 );
};

export default Categories;
