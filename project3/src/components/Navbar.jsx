import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
 return (
  <div className="flex w-[50%] h-20">
   <Link to="/">
    <button className="bg-pink-400 absolute font-bold left-28 top-5 uppercase p-3 text-3xl border-4 border-slate-900 shadow-[5px_5px] active:shadow-none active:ml-[5px] active:mt-[5px]">
     Converter
    </button>
   </Link>
   <Link to="/quiz">
    <button className="bg-lime-400 absolute font-bold left-[50%] top-5 translate-x-[-50%] uppercase p-3 text-3xl border-4 border-slate-900 shadow-[5px_5px] active:shadow-none active:ml-[5px] active:mt-[5px]">
     Quiz
    </button>
   </Link>
   <Link to="/photos">
    <button className="bg-sky-400 absolute font-bold right-28 top-5 uppercase p-3 text-3xl border-4 border-slate-900 shadow-[5px_5px] active:shadow-none active:ml-[5px] active:mt-[5px]">
     PhotoGramm
    </button>
   </Link>
  </div>
 );
};
