import React from "react";

export const Form2 = ({
 name,
 surname,
 patronymic,
 setName,
 setSurname,
 setPatronymic,
 theme,
 isValidation,
}) => {
 return (
  <div
   className={`w-[90%] md:w-1/3 bg-lime-500 p-3 flex flex-col mb-2 rounded-2xl ml-[50%] translate-x-[-50%] text-xl font-semibold items-center`}
  >
   <div
    className={`${
     theme ? "text-white" : "text-slate-700"
    } w-[90%] mr-2 self-left pl-2 pb-1 mt-2`}
   >
    Имя
   </div>
   <input
    type="text"
    onChange={(val) => setName(val.target.value)}
    value={name}
    className={`${
     isValidation && name == "" && "bg-red-300"
    } w-[90%] rounded-xl focus:outline-lime-700 p-2 mb-3`}
   ></input>
   <div
    className={`${
     theme ? "text-white" : "text-slate-700"
    } w-[90%] mr-2 self-left pl-2 pb-1 mt-2`}
   >
    Фамилия
   </div>
   <input
    type="text"
    onChange={(val) => setSurname(val.target.value)}
    value={surname}
    className={`${
     isValidation && surname == "" && "bg-red-300"
    } w-[90%] rounded-xl focus:outline-lime-700 p-2 mb-3`}
   ></input>
   <div
    className={`${
     theme ? "text-white" : "text-slate-700"
    } text-slate-50 w-[90%] mr-2 self-left pl-2 pb-1 mt-2`}
   >
    Отчество
   </div>
   <input
    type="text"
    onChange={(val) => setPatronymic(val.target.value)}
    value={patronymic}
    className={`${
     isValidation && patronymic == "" && "bg-red-300"
    } w-[90%] rounded-xl focus:outline-lime-700 p-2 mb-3`}
   ></input>
  </div>
 );
};
