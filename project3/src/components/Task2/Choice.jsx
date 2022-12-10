import React, { useEffect, useState } from "react";

export const Choice = ({ mr, mt, children, addAnswer, question }) => {
 const [isClicked, setIsClicked] = useState(false);

 useEffect(() => {
  setIsClicked(false);
 }, [question]);

 return (
  <div
   onClick={() => {
    setIsClicked(true);
    addAnswer(children);
   }}
   className={`${
    isClicked && "bg-indigo-700 hover:bg-indigo-700 text-slate-50"
   } w-[45%] ${mr} ${mt} p-2 border-2 bg-slate-50 rounded-lg border-slate-300 shadow-md cursor-pointer hover:bg-slate-100 active:bg-indigo-700 active:text-slate-50`}
  >
   {children}
  </div>
 );
};
