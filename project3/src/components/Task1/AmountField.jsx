import React from "react";

export const AmountField = ({ amount, setAmount }) => {
 return (
  <div className="flex flex-col font-semibold text-2xl w-1/5 mr-3">
   <div className="font-bold">Amount</div>
   <input
    type="number"
    className="rounded-md border-2 border-slate-300 focus:outline-slate-600 text-xl p-2"
    onChange={(e) => setAmount(e.target.value)}
    value={amount}
   />
  </div>
 );
};
