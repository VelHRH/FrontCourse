import React from "react";

export const AmountField = ({ amount, setAmount, nightMode }) => {
 return (
  <div className="flex flex-col font-semibold text-2xl w-1/5 mr-3">
   <div
    className={`${nightMode ? "text-slate-50" : "text-slate-900"} font-bold`}
   >
    Amount
   </div>
   <input
    type="number"
    className="rounded-md border-2 border-slate-300 bg-slate-50 focus:outline-slate-600 text-xl p-2"
    onChange={(e) => setAmount(e.target.value)}
    value={amount}
   />
  </div>
 );
};
