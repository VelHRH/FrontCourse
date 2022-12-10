import React, { useEffect, useState } from "react";

export const Choice = ({
 mr,
 mt,
 children,
 addAnswer,
 question,
 isClicked,
 setIsClicked,
 clearChoices,
}) => {
 useEffect(() => {
  setIsClicked(false);
 }, [question]);

 return (
  <div
   onClick={() => {
    clearChoices();
    setIsClicked(true);
    addAnswer(children);
   }}
   className={`${
    isClicked && "bg-indigo-700 hover:bg-indigo-700 text-slate-50"
   } ${
    !isClicked && "bg-slate-50 hover:bg-slate-100 text-slate-900"
   } w-[45%] ${mr} ${mt} p-2 border-2 rounded-lg border-slate-300 shadow-md cursor-pointer active:bg-indigo-700 active:text-slate-50`}
  >
   {children}
  </div>
 );
};
