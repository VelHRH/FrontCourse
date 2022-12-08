import React from 'react'

export const Dropdown = ({cur, setCur, setCurFull, left, isDropdown}) => {
  return (
    <div className={`${isDropdown ? "flex" : "hidden"} flex-col items-start absolute ${left} top-[8rem] w-[19.44%]`}>
    <button onClick={() => {setCur("UA"); setCurFull("Hryvnia");}} className={`${cur === "UA" ? "bg-slate-300" : "bg-slate-50"} border-2 border-slate-600 w-full text-left p-2 font-semibold hover:bg-slate-300 mb-px`}>
     UA
    </button>
    <button onClick={() => {setCur("US"); setCurFull("Dollar");}} className={`${cur === "US" ? "bg-slate-300" : "bg-slate-50"} border-2 border-slate-600 w-full text-left p-2 font-semibold hover:bg-slate-300 mb-px`}>US</button>
    <button onClick={() => {setCur("EU"); setCurFull("Euro");}} className={`${cur === "EU" ? "bg-slate-300" : "bg-slate-50"} border-2 border-slate-600 w-full text-left p-2 font-semibold hover:bg-slate-300 mb-px`}>EU</button>
   </div>
  )
}
