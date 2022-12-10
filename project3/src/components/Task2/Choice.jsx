import React from "react";

export const Choice = ({ mr, mt, children, addAnswer }) => {
 return (
  <div
   onClick={() => addAnswer(children)}
   className={`w-[45%] ${mr} ${mt} p-2 border-2 bg-slate-50 rounded-lg border-slate-300 shadow-md cursor-pointer hover:bg-slate-100 active:bg-indigo-700 active:text-slate-50`}
  >
   {children}
  </div>
 );
};
