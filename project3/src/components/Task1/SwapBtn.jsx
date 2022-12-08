import React from "react";
import { ArrowPathIcon } from "@heroicons/react/24/solid";

export const SwapBtn = ({cur1, setCur1, cur2, setCur2, cur2Full, cur1Full, setCur2Full, setCur1Full}) => {
  
  const Swap = () => {
    const temp = cur1;
    const tempFull = cur1Full;
    setCur1(cur2);
    setCur2(temp);
    setCur1Full(cur2Full);
    setCur2Full(tempFull);
  }
 return (
  <button onClick={Swap} className="rounded-full border-2 border-slate-300 bg-slate-50 text-xl p-2 w-[2.75rem] h-[2.75rem] mr-2 self-end hover:bg-slate-200 text-slate-700">
   <ArrowPathIcon className="w-6" />
  </button>
 );
};
