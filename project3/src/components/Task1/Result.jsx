import React from "react";

export const Result = ({ amount, cur1Full, cur2Full }) => {
 return (
  <div className="flex flex-col ml-[15%] mt-5">
   <div className="font-bold text-slate-500 text-lg">
    {amount} in {cur1Full} =
   </div>
   <div className="font-bold text-slate-700 text-3xl">
    {amount * 1.73} in {cur2Full}
   </div>
  </div>
 );
};
