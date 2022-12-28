import React from "react";

export const NextBtn = ({ qSwitcher }) => {
 return (
  <button
   onClick={() => qSwitcher()}
   className="text-slate-50 absolute shadow-[5px_5px] shadow-slate-900 dark:shadow-slate-50 active:shadow-none active:ml-[5px] active:mt-[5px] dark:bg-lime-600 dark:hover:bg-lime-700 bg-lime-500 self-end px-3 py-2 rounded-lg hover:bg-lime-600"
  >
   Next
  </button>
 );
};
