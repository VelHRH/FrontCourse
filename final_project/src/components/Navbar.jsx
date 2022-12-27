import React from "react";
import { Link } from "react-router-dom";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

export const Navbar = ({ nightMode, setNightMode }) => {
 return (
  <>
   <div
    onClick={() => setNightMode(!nightMode)}
    className={`p-2 border-2 mx-auto w-12 mt-3 rounded-xl ${
     nightMode
      ? "hover:bg-slate-200 bg-slate-50 text-slate-900 border-slate-900"
      : "hover:bg-slate-900 bg-slate-800 text-slate-50 border-slate-50"
    } cursor-pointer`}
   >
    {nightMode ? <SunIcon className="w-7" /> : <MoonIcon className="w-7" />}
   </div>
   <div className="flex w-[50%] h-20">
    <Link to="/convert">
     <button
      className={`bg-pink-500 absolute font-bold left-2 md:left-[15%] top-20 uppercase p-2 md:p-3 text-xl md:text-3xl border-4 ${
       nightMode
        ? "border-slate-50 shadow-slate-50 text-slate-50"
        : "border-slate-900 shadow-slate-900 text-slate-900"
      } shadow-[5px_5px] active:shadow-none active:ml-[5px] active:mt-[5px]`}
     >
      Converter
     </button>
    </Link>
    <Link to="/quiz">
     <button
      className={`${
       nightMode
        ? "border-slate-50 shadow-slate-50 text-slate-50"
        : "border-slate-900 shadow-slate-900 text-slate-900"
      } bg-lime-500 absolute font-bold left-[50%] top-20 translate-x-[-50%] uppercase p-2 md:p-3 text-xl md:text-3xl border-4 shadow-[5px_5px] active:shadow-none active:ml-[5px] active:mt-[5px]`}
     >
      Quiz
     </button>
    </Link>
    <Link to="/photos">
     <button
      className={`${
       nightMode
        ? "border-slate-50 shadow-slate-50 text-slate-50"
        : "border-slate-900 shadow-slate-900 text-slate-900"
      } bg-sky-500 absolute font-bold right-2 md:right-[15%] top-20 uppercase p-2 md:p-3 text-xl md:text-3xl border-4 shadow-[5px_5px] active:shadow-none active:ml-[5px] active:mt-[5px]`}
     >
      PhotoGramm
     </button>
    </Link>
   </div>
  </>
 );
};
