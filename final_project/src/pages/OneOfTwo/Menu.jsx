import React, { useState, useEffect } from "react";
import { TrophyIcon, ShareIcon } from "@heroicons/react/24/solid";
import { NumberBtn } from "../../components/OneOfTwo/NumberBtn";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "../../axios";

const Menu = () => {
 const [clickedMode, setClickedMode] = useState("8");
 const [subCategory, setSubCategory] = useState();
 const handleModeChoice = (mode) => {
  setClickedMode(mode);
 };

 const { name, id } = useParams();
 const [isLoading, setIsLoading] = useState(true);
 useEffect(() => {
  setIsLoading(true);
  axios
   .get(`/categories/${name}/${id}`)
   .then((res) => {
    setSubCategory(res.data);
   })
   .finally(() => setIsLoading(false));
 }, []);
 return (
  <div className="mt-10 w-[98%] md:w-[70%] ml-[50%] translate-x-[-50%] mb-10">
   {isLoading && <div>Loading...</div>}
   {!isLoading && (
    <>
     <img
      src={subCategory.imgUrl}
      alt="Subcategory"
      className="h-[400px] w-full object-cover"
     />
     <div className="grid gap-4 grid-cols-4 mt-10 w-full">
      <NumberBtn
       isClicked={clickedMode === "8"}
       handleModeChoice={handleModeChoice}
      >
       8
      </NumberBtn>
      <NumberBtn
       isClicked={clickedMode === "16"}
       handleModeChoice={handleModeChoice}
      >
       16
      </NumberBtn>
      <NumberBtn
       isClicked={clickedMode === "32"}
       handleModeChoice={handleModeChoice}
      >
       32
      </NumberBtn>
      <NumberBtn
       isClicked={clickedMode === "64"}
       handleModeChoice={handleModeChoice}
      >
       64
      </NumberBtn>
      <Link
       to={`/1of2/${name}/${id}/rating`}
       className="text-2xl flex justify-center py-2 text-slate-50 bg-gradient-to-r from-cyan-500 to-blue-600 cursor-pointer rounded-2xl hover:scale-110 ease-in-out duration-500"
      >
       <TrophyIcon className="w-7 mr-2" />
       Rating
      </Link>
      <div className="text-2xl flex justify-center py-2 text-slate-50 bg-gradient-to-r from-cyan-500 to-blue-600 cursor-pointer rounded-2xl hover:scale-110 ease-in-out duration-500">
       <ShareIcon className="w-7 mr-2" />
       Share
      </div>
      <div className="text-2xl col-span-2 flex justify-center py-2 text-slate-50 bg-gradient-to-r from-lime-500 to-green-600 cursor-pointer rounded-2xl hover:scale-105 ease-in-out duration-500">
       Start
      </div>
     </div>
    </>
   )}
  </div>
 );
};

export default Menu;
