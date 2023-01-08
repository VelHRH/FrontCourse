import React, { useState, useEffect } from "react";

export const Result = ({ amount, cur1Full, cur2Full, exchangeRate }) => {
 const [result, setResult] = useState(0);

 return (
  <div className="flex flex-col ml-2 md:ml-[15%] mt-5">
   <div
    className={`dark:text-slate-300 text-slate-500"
    } font-bold text-lg`}
   >
    {amount} in {cur1Full} =
   </div>
   <div className={`dark:text-slate-100 text-slate-700 font-bold text-3xl`}>
    {amount * exchangeRate.toFixed(2)} in {cur2Full}
   </div>
  </div>
 );
};
