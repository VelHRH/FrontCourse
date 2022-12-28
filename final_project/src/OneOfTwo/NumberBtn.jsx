import React from "react";

export const NumberBtn = ({ isClicked, children }) => {
 return (
  <div
   className={`${
    isClicked
     ? "bg-slate-50 text-blue-600"
     : "bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-50"
   } text-2xl text-center py-2 border-2 border-blue-600 cursor-pointer rounded-2xl`}
  >
   {children}
  </div>
 );
};
