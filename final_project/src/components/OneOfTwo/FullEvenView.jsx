import React from "react";
import {
 TrophyIcon,
 CursorArrowRaysIcon,
 HandRaisedIcon,
} from "@heroicons/react/24/solid";

export const FullEvenView = ({
 setIsEventOpened,
 link,
 name,
 wins,
 likes,
 dislikes,
}) => {
 return (
  <>
   <div
    onClick={() => setIsEventOpened(-1)}
    className="absolute left-0 top-0 w-screen h-screen overscroll-none bg-slate-800 z-30 opacity-90"
   ></div>
   <img
    src={link}
    alt="Image"
    className="w-[800px] h-[450px] object-cover absolute left-[50%] translate-x-[-50%] top-10 z-40"
   />
   <div className="flex flex-col absolute bottom-20 left-[50%] translate-x-[-50%] z-50 items-center">
    <div className="text-yellow-400 text-4xl mb-4">{name}</div>
    <div className="flex">
     <div className="flex flex-col text-green-400 text-2xl items-center">
      <div className="mb-1">Clicks:</div>
      <div className="flex">
       <CursorArrowRaysIcon className="w-8 mr-2" />
       <div>{likes}</div>
      </div>
     </div>
     <div className="flex flex-col text-yellow-400 text-3xl items-center mx-40">
      <div className="mb-1">Wins:</div>
      <div className="flex">
       <TrophyIcon className="w-9 mr-2" />
       <div>{wins}</div>
      </div>
     </div>
     <div className="flex flex-col text-red-400 text-2xl items-center">
      <div className="mb-1">Misses:</div>
      <div className="flex">
       <HandRaisedIcon className="w-8 mr-2" />
       <div>{dislikes}</div>
      </div>
     </div>
    </div>
   </div>
  </>
 );
};
