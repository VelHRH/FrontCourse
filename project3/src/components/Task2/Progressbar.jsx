import React, { useEffect, useState } from "react";

export const Progressbar = ({ question, qSwitcher, isFinished }) => {
 const [width, setWidth] = useState((100 / 5) * question);
 const [timer, setTimer] = useState(10);

 useEffect(() => {
  setWidth((100 / 5) * question);
 }, [question]);

 useEffect(() => {
  setTimer(10);
 }, [question]);

 useEffect(() => {
  let counter;
  if (timer > -1) {
   counter = setTimeout(() => setTimer((prev) => prev - 1), 1000);
  }
  if (timer === -1) {
   qSwitcher();
  }
  return () => {
   clearTimeout(counter);
  };
 }, [timer]);

 return (
  <>
   <div className={`h-2 w-full`}>
    <div
     className={`h-full bg-indigo-700`}
     style={{ width: `${width}%` }}
    ></div>
   </div>
   <div className={`h-2 w-full mt-px`}>
    <div
     className={`h-full bg-green-700`}
     style={{
      width: `${isFinished ? "0" : timer}%`,
      transition: "width 0.9s",
     }}
    ></div>
   </div>
  </>
 );
};
