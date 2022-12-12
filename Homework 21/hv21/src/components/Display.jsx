import React from "react";

export const Display = ({ time }) => {
 return (
  <div className="ml-[50%] translate-x-[-50%] flex flex-col items-center mt-5">
   <div className="flex items-center text-5xl">
    <div className="py-3 w-16 text-center bg-indigo-600 text-slate-50 rounded-lg mx-2">
     {time.h > 9 ? time.h : `0${time.h}`}
    </div>
    :
    <div className="py-3 w-16 text-center bg-indigo-600 text-slate-50 rounded-lg mx-2">
     {time.m > 9 ? time.m : `0${time.m}`}
    </div>
    :
    <div className="py-3 w-16 text-center bg-indigo-600 text-slate-50 rounded-lg mx-2">
     {time.s > 9 ? time.s : `0${time.s}`}
    </div>
    :
    <div className="py-3 w-16 text-center bg-indigo-600 text-slate-50 rounded-lg mx-2">
     {time.ms > 9 ? time.ms : `0${time.ms}`}
    </div>
   </div>
  </div>
 );
};
