import React from "react";

const Sort = (props) => {
 return (
  <div className="my-3">
   <button
    onClick={() => props.addedTimeSort()}
    className="bg-slate-700 p-2 rounded-md text-white"
   >
    Sort added time
   </button>
   <button
    onClick={() => props.editedTimeSort()}
    className="bg-slate-700 p-2 rounded-md text-white ml-2"
   >
    Sort edited time
   </button>
  </div>
 );
};

export default Sort;
