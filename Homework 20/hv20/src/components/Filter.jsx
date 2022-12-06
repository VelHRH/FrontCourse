import React from "react";

const Filter = (props) => {
 return (
  <div className="my-3">
   <button
    onClick={() => props.allToDos()}
    className="bg-slate-500 p-2 rounded-md text-white"
   >
    All
   </button>
   <button
    onClick={() => props.open()}
    className="bg-slate-500 p-2 rounded-md text-white ml-2"
   >
    Open
   </button>
   <button
    onClick={() => props.inProgress()}
    className="bg-slate-500 p-2 rounded-md text-white ml-2"
   >
    In Progress
   </button>
   <button
    onClick={() => props.done()}
    className="bg-slate-500 p-2 rounded-md text-white ml-2"
   >
    Done
   </button>
  </div>
 );
};

export default Filter;
