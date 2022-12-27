import React, { useState, useEffect } from "react";

export const Result = ({ amount, cur1Full, cur2Full, nightMode }) => {
 const [result, setResult] = useState(0);
 useEffect(() => {
  if (cur1Full === "Euro" && cur2Full == "Dollar")
   setResult((amount * 1.05).toFixed(2));
  if (cur1Full === "Euro" && cur2Full == "Hryvnia")
   setResult((amount * 38.76).toFixed(2));
  if (cur1Full === "Euro" && cur2Full == "Euro") setResult(amount);
  if (cur1Full === "Hryvnia" && cur2Full == "Dollar")
   setResult((amount * 0.027).toFixed(2));
  if (cur1Full === "Hryvnia" && cur2Full == "Euro")
   setResult((amount * 0.026).toFixed(2));
  if (cur1Full === "Hryvnia" && cur2Full == "Hryvnia") setResult(amount);
  if (cur1Full === "Dollar" && cur2Full == "Hryvnia")
   setResult((amount * 36.89).toFixed(2));
  if (cur1Full === "Dollar" && cur2Full == "Euro")
   setResult((amount * 0.95).toFixed(2));
  if (cur1Full === "Dollar" && cur2Full == "Dollar") setResult(amount);
 });
 return (
  <div className="flex flex-col ml-2 md:ml-[15%] mt-5">
   <div
    className={`${
     nightMode ? "text-slate-300" : "text-slate-500"
    } font-bold text-lg`}
   >
    {amount} in {cur1Full} =
   </div>
   <div
    className={`${
     nightMode ? "text-slate-100" : "text-slate-700"
    } font-bold text-3xl`}
   >
    {result} in {cur2Full}
   </div>
  </div>
 );
};
