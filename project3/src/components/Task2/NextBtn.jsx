import React from "react";

export const NextBtn = ({ question, setQuestion }) => {
 return (
  <button
   onClick={() => {
    question < 5 && setQuestion(question + 1);
   }}
   className="text-slate-50 bg-slate-900 self-end px-3 py-2 rounded-lg hover:bg-slate-800"
  >
   Next
  </button>
 );
};
