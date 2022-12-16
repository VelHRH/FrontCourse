import React from "react";

export const Dropdown = ({
 cur,
 setCur,
 setCurFull,
 left,
 isDropdown,
 setIsDropdown,
}) => {
 return (
  <div
   className={`${
    isDropdown ? "flex" : "hidden"
   } flex-col items-start absolute ${left} top-[13rem] w-[26.44%] md:w-[19.44%]`}
  >
   <button
    onClick={() => {
     setCur("UA");
     setCurFull("Hryvnia");
     setIsDropdown(!isDropdown);
    }}
    className={`${
     cur === "UA" ? "bg-slate-300" : "bg-slate-50"
    } border-2 border-slate-600 w-full text-left p-2 font-semibold hover:bg-slate-300 mb-px`}
   >
    UA
   </button>
   <button
    onClick={() => {
     setCur("US");
     setCurFull("Dollar");
     setIsDropdown(!isDropdown);
    }}
    className={`${
     cur === "US" ? "bg-slate-300" : "bg-slate-50"
    } border-2 border-slate-600 w-full text-left p-2 font-semibold hover:bg-slate-300 mb-px`}
   >
    US
   </button>
   <button
    onClick={() => {
     setCur("EU");
     setCurFull("Euro");
     setIsDropdown(!isDropdown);
    }}
    className={`${
     cur === "EU" ? "bg-slate-300" : "bg-slate-50"
    } border-2 border-slate-600 w-full text-left p-2 font-semibold hover:bg-slate-300 mb-px`}
   >
    EU
   </button>
  </div>
 );
};
