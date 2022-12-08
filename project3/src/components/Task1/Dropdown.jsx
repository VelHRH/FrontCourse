import React from 'react'

export const Dropdown = ({cur, setCur, left}) => {
  return (
    <div className={`flex flex-col items-start absolute left-[${left}] top-[8rem] w-[19.44%]`}>
    <button onClick={() => setCur("UA")} className={`${cur === "UA" ? "bg-slate-300" : "bg-slate-50"} border-2 border-slate-600 w-full text-left p-2 font-semibold hover:bg-slate-300 mb-px`}>
     UA
    </button>
    <button onClick={() => setCur("US")} className={`${cur === "US" ? "bg-slate-300" : "bg-slate-50"} border-2 border-slate-600 w-full text-left p-2 font-semibold hover:bg-slate-300 mb-px`}>US</button>
    <button onClick={() => setCur("EU")} className={`${cur === "EU" ? "bg-slate-300" : "bg-slate-50"} border-2 border-slate-600 w-full text-left p-2 font-semibold hover:bg-slate-300 mb-px`}>EU</button>
   </div>
  )
}
