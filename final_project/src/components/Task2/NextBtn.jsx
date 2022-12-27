import React from "react";

export const NextBtn = ({ qSwitcher }) => {
 return (
  <button
   onClick={() => qSwitcher()}
   className="text-slate-50 bg-slate-900 self-end px-3 py-2 rounded-lg hover:bg-slate-800"
  >
   Next
  </button>
 );
};
