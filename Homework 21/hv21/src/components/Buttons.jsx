import React, { useState } from "react";

export const Buttons = ({
 start,
 time,
 setTime,
 isStarted,
 intervalId,
 setIntervalId,
 setIsStarted,
 isPaused,
 setIsPaused,
 round,
 setRound,
 results,
 save,
}) => {
 return (
  <div className="flex flex-col items-center mt-5 w-[500px] ml-[50%] translate-x-[-50%]">
   {results.map(
    (result) =>
     result.round > 0 &&
     isStarted && (
      <div className="self-start">
       Круг {result.round} -- {result.h > 9 ? result.h : `0${result.h}`}:
       {result.m > 9 ? result.m : `0${result.m}`}:
       {result.s > 9 ? result.s : `0${result.s}`}:
       {result.ms > 9 ? result.ms : `0${result.ms}`}
      </div>
     )
   )}
   <div className="flex justify-center">
    {!isStarted ? (
     <button
      onClick={() => {
       start();
       setIntervalId(setInterval(start, 10));
      }}
      className="text-3xl mt-5 py-2 px-4 border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-slate-50"
     >
      START
     </button>
    ) : (
     <>
      {!isPaused ? (
       <button
        onClick={() => {
         clearInterval(intervalId);
         setIsPaused(true);
        }}
        className="text-3xl mt-5 py-2 px-4 border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-slate-50"
       >
        PAUSE
       </button>
      ) : (
       <button
        onClick={() => {
         start();
         setIntervalId(setInterval(start, 10));
         setIsPaused(false);
        }}
        className="text-3xl mt-5 py-2 px-4 border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-slate-50"
       >
        RESUME
       </button>
      )}
      <button
       onClick={() => {
        clearInterval(intervalId);
        setIsStarted(false);
       }}
       className="text-3xl mt-5 py-2 px-4 border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-slate-50 mx-2"
      >
       RESET
      </button>
      <button
       onClick={() => {
        setRound((prev) => prev + 1);
        save();
       }}
       className="text-3xl mt-5 py-2 px-4 border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-slate-50"
      >
       SAVE {round}
      </button>
     </>
    )}
   </div>
  </div>
 );
};
