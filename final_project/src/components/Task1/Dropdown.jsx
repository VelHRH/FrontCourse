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
   } flex-col items-start absolute ${left} top-[16.5rem] w-[26.44%] md:w-[19.44%]`}
  >
   <button
    onClick={() => {
     setCur("UAH");
     setCurFull("Hryvnia");
     setIsDropdown(!isDropdown);
    }}
    className={`${
     cur === "UAH" ? "bg-slate-300" : "bg-slate-50"
    } border-2 border-slate-600 w-full text-left p-2 font-semibold hover:bg-slate-300 mb-px`}
   >
    UAH
   </button>
   <button
    onClick={() => {
     setCur("USD");
     setCurFull("Dollar");
     setIsDropdown(!isDropdown);
    }}
    className={`${
     cur === "USD" ? "bg-slate-300" : "bg-slate-50"
    } border-2 border-slate-600 w-full text-left p-2 font-semibold hover:bg-slate-300 mb-px`}
   >
    USD
   </button>
   <button
    onClick={() => {
     setCur("EUR");
     setCurFull("Euro");
     setIsDropdown(!isDropdown);
    }}
    className={`${
     cur === "EUR" ? "bg-slate-300" : "bg-slate-50"
    } border-2 border-slate-600 w-full text-left p-2 font-semibold hover:bg-slate-300 mb-px`}
   >
    EUR
   </button>
  </div>
 );
};
