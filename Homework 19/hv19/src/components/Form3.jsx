import React from "react";

export const Form3 = ({ age, setAge, theme, isValidation }) => {
 return (
  <div
   className={`w-[90%] md:w-1/3 bg-lime-500 p-3 flex flex-col mb-2 rounded-2xl ml-[50%] translate-x-[-50%] text-xl font-semibold items-center`}
  >
   <div
    className={`${
     theme ? "text-white" : "text-slate-700"
    } w-[90%] mr-2 self-left pl-2 pb-1 mt-2`}
   >
    Ваш возраст
   </div>
   <input
    type="number"
    min="1"
    max="200"
    onChange={(val) => setAge(val.target.value)}
    value={age}
    className={`${
     isValidation && age == 0 && "bg-red-300"
    } w-[90%] rounded-xl focus:outline-lime-700 p-2 mb-3`}
   ></input>
  </div>
 );
};
