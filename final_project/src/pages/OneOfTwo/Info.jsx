import React from "react";
import { TrophyIcon, ShareIcon } from "@heroicons/react/24/solid";
import { NumberBtn } from "../../components/OneOfTwo/NumberBtn";

const Info = () => {
 return (
  <div className="mb-3 mt-10 w-[98%] md:w-[70%] ml-[50%] translate-x-[-50%] mb-10">
   <img
    src="https://ese-edu.com/wp-content/uploads/2022/11/World-Cup-2022-Blog.jpg"
    alt="Subcategory"
    className="h-[400px] w-full object-cover"
   />
   <div className="grid gap-4 grid-cols-4 mt-10 w-full">
    <NumberBtn isClicked={false}>8</NumberBtn>
    <NumberBtn isClicked={true}>16</NumberBtn>
    <NumberBtn isClicked={false}>32</NumberBtn>
    <NumberBtn isClicked={false}>64</NumberBtn>
    <div className="text-2xl flex justify-center py-2 text-slate-50 bg-gradient-to-r from-cyan-500 to-blue-600 cursor-pointer rounded-2xl hover:scale-110 ease-in-out duration-500">
     <TrophyIcon className="w-7 mr-2" />
     Rating
    </div>
    <div className="text-2xl flex justify-center py-2 text-slate-50 bg-gradient-to-r from-cyan-500 to-blue-600 cursor-pointer rounded-2xl hover:scale-110 ease-in-out duration-500">
     <ShareIcon className="w-7 mr-2" />
     Share
    </div>
    <div className="text-2xl col-span-2 flex justify-center py-2 text-slate-50 bg-gradient-to-r from-lime-500 to-green-600 cursor-pointer rounded-2xl hover:scale-105 ease-in-out duration-500">
     Start
    </div>
   </div>
  </div>
 );
};

export default Info;
