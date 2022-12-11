import React, { useState } from "react";

export const Mode = ({ mode, setMode }) => {
 return (
  <div className="flex ml-[50%] translate-x-[-50%] mt-10 justify-around">
   <button
    onClick={() => {
     setMode(5);
    }}
    className={`${
     mode === 5
      ? "bg-indigo-700 text-slate-50"
      : "bg-indigo-50 text-indigo-700 hover:bg-slate-300"
    } p-2 border-2 border-indigo-700 rounded-md`}
   >
    5 питань
   </button>
   <button
    onClick={() => {
     setMode(10);
    }}
    className={`${
     mode === 10
      ? "bg-indigo-700 text-slate-50"
      : "bg-slate-50 text-indigo-700 hover:bg-slate-300"
    } p-2 border-2 border-indigo-700 rounded-md`}
   >
    10 питань
   </button>
   <button
    onClick={() => {
     setMode(15);
    }}
    className={`${
     mode === 15
      ? "bg-indigo-700 text-slate-50"
      : "bg-slate-50 text-indigo-700 hover:bg-slate-300"
    } p-2 border-2 border-indigo-700 rounded-md`}
   >
    15 питань
   </button>
  </div>
 );
};
