import React, { useEffect, useState } from "react";

export const Progressbar = ({ question, setQuestion }) => {
 const [width, setWidth] = useState((100 / 5) * question);
 const [timer, setTimer] = useState(100);
 useEffect(() => {
  setWidth(question * 20);
  console.log(width);
 }, [question]);
 useEffect(() => {
  if (timer > 0) {
   setTimeout(() => setTimer(timer - 1), 1000);
  }
  if (timer === 0) {
   setQuestion(question + 1);
  }
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
     style={{ width: `${timer}%`, transition: "width 0.9s" }}
    ></div>
   </div>
  </>
 );
};
