import React from "react";

export const Form5 = ({ gender, setGender, theme, isValidation }) => {
 const handleChange = (val) => {
  setGender(val.target.value);
 };
 return (
  <div
   className={`w-[90%] md:w-1/3 bg-lime-500 p-3 flex flex-col mb-2 rounded-2xl ml-[50%] translate-x-[-50%] text-xl font-semibold items-center`}
  >
   <div
    className={`${
     theme ? "text-white" : "text-slate-700"
    } text-slate-50 w-[90%] mr-2 self-left pl-2 pb-1 mt-2`}
   >
    Ваш пол
   </div>
   <div
    className={`${
     isValidation && gender == 0
      ? "text-red-400"
      : theme
      ? "text-white"
      : "text-slate-700"
    } w-[90%] rounded-xl focus:outline-lime-700 p-2 mb-3 flex flex-col`}
   >
    <div className="flex">
     <input
      type="radio"
      id="Choice1"
      name="gender"
      onChange={handleChange}
      checked={gender === "man"}
      value="man"
     />
     <label for="Choice1" className="ml-2">
      Мужской
     </label>
    </div>

    <div className="flex">
     <input
      type="radio"
      id="Choice2"
      name="gender"
      onChange={handleChange}
      checked={gender === "woman"}
      value="woman"
     />
     <label for="Choice2" className="ml-2">
      Женский
     </label>
    </div>

    <div className="flex">
     <input
      type="radio"
      id="Choice3"
      name="gender"
      onChange={handleChange}
      checked={gender === "mixed"}
      value="mixed"
     />
     <label for="Choice3" className="ml-2">
      Общий
     </label>
    </div>
   </div>
  </div>
 );
};
