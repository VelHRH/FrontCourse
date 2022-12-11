import React, { useEffect, useState } from "react";

export const Progressbar = ({ question, qSwitcher, isFinished, questions }) => {
 const [width, setWidth] = useState((100 / questions.length) * question);
 const [timer, setTimer] = useState(10);

 useEffect(() => {
  setWidth((100 / questions.length) * question);
 }, [question, questions]);

 useEffect(() => {
  setTimer(10);
 }, [question, questions]);

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
     className={`h-full`}
     style={{
      width: `${isFinished ? "0" : timer}%`,
      backgroundColor: `${
       timer < 2
        ? "red"
        : timer < 4
        ? "orange"
        : timer < 6
        ? "yellow"
        : timer < 8
        ? "lime"
        : "green"
      }`,
      transition: "background-color 1000ms, width 0.9s",
     }}
    ></div>
   </div>
  </>
 );
};
