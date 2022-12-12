import React, { useState } from "react";

export const Buttons = ({
 start,
 time,
 setResults,
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
 sort,
}) => {
 const [isSort, setIsSort] = useState(false);
 return (
  <div className="flex flex-col items-center mt-5 w-[600px] ml-[50%] translate-x-[-50%]">
   <div className="w-full flex justify-around">
    <div>
     {results.length > 1 &&
      results.map(
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
    </div>
    <div>
     {isSort &&
      []
       .concat(results)
       .sort((a, b) => (a.total > b.total ? 1 : -1))
       .map(
        (item, i) =>
         item.round > 0 &&
         isStarted && (
          <div className="self-start">
           Круг {item.round} -- {item.h > 9 ? item.h : `0${item.h}`}:
           {item.m > 9 ? item.m : `0${item.m}`}:
           {item.s > 9 ? item.s : `0${item.s}`}:
           {item.ms > 9 ? item.ms : `0${item.ms}`}
          </div>
         )
       )}
    </div>
   </div>
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
        setResults([{ round: 0, h: 0, m: 0, s: 0, ms: 0, sum: 0, total: 0 }]);
        setRound(1);
        setIsSort(false);
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
      {results.length > 1 && (
       <button
        onClick={() => {
         setIsSort(true);
        }}
        className="text-3xl mt-5 py-2 px-4 border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-slate-50 mx-2"
       >
        SORT
       </button>
      )}
     </>
    )}
   </div>
  </div>
 );
};
