import React from "react";

export const Form4 = ({ country, setCountry, theme, isValidation }) => {
 return (
  <div
   className={`w-[90%] md:w-1/3 bg-lime-500 p-3 flex flex-col mb-2 rounded-2xl ml-[50%] translate-x-[-50%] text-xl font-semibold items-center`}
  >
   <div
    className={`${
     theme ? "text-white" : "text-slate-700"
    } text-slate-50 w-[90%] mr-2 self-left pl-2 pb-1 mt-2`}
   >
    Ваше гражданство
   </div>
   <select
    className={`w-[90%] rounded-xl focus:outline-lime-700 p-2 mb-3`}
    onChange={(val) => setCountry(val.target.value)}
    value={country}
   >
    <option value="value1" selected>
     Украина
    </option>
    <option value="value2">США</option>
    <option value="value3">Англия</option>
    <option value="value4">Япония</option>
   </select>
  </div>
 );
};
