import React from "react";
import { TrophyIcon } from "@heroicons/react/24/solid";

export const RatingElement = ({
 index,
 image,
 children,
 wins,
 handleClick,
}) => {
 return (
  <div
   onClick={() => handleClick(index - 1)}
   className="w-full rounded-xl justify-between flex items-center bg-sky-200 dark:text-slate-50 dark:bg-slate-900 p-4 mb-2 cursor-pointer hover:bg-sky-300 hover:dark:bg-black"
  >
   <div className="flex items-center">
    <div className="text-2xl md:text-3xl">{index}</div>
    <img
     src={image}
     alt="Pic"
     className="w-[100px] h-[100px] object-cover mx-4 rounded-md"
    />
    <div className="text-xl md:text-2xl">{children}</div>
   </div>
   <div className="flex items-center p-2 rounded-2xl text-xl md:text-2xl">
    {wins}
    <TrophyIcon className="w-9 ml-2" />
   </div>
  </div>
 );
};
