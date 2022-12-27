import React from "react";
import { EyeIcon } from "@heroicons/react/24/solid";

export const FullCard = ({ link, category, views, setOpenedCard }) => {
 return (
  <>
   <div
    onClick={() => setOpenedCard(-1)}
    className="fixed left-0 top-0 w-screen h-screen overscroll-none bg-black z-30 opacity-70"
   ></div>
   <div className="fixed left-[50%] top-[50%] translate-x-[-50%] z-40 translate-y-[-50%] bg-sky-100 p-2 md:p-3 rounded-2xl flex flex-col items-center">
    <img
     src={link}
     alt={category}
     className="w-[500px] h-[250px] md:w-[800px] md:h-[450px] object-cover"
    />
    <div className="text-slate-900 font-semibold text-3xl mt-2">{category}</div>
    <div className="flex text-slate-900 font-semibold text-2xl">
     <EyeIcon className="w-7 mr-2" />
     {views}
    </div>
   </div>
  </>
 );
};
