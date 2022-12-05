import React from "react";
import { useState } from "react";

export const Form1 = ({
 login,
 setLogin,
 password,
 setPassword,
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
    Логин
   </div>
   <input
    type="text"
    onChange={(val) => setLogin(val.target.value)}
    value={login}
    className={`${
     isValidation && login == "" && "bg-red-300"
    } w-[90%] rounded-xl focus:outline-lime-700 p-2 mb-3`}
   ></input>
   <div
    className={`${
     theme ? "text-white" : "text-slate-700"
    } w-[90%] mr-2 self-left pl-2 pb-1 mt-2`}
   >
    Пароль
   </div>
   <input
    type="password"
    onChange={(val) => setPassword(val.target.value)}
    value={password}
    className={`${
     isValidation && password == "" && "bg-red-300"
    } w-[90%] rounded-xl focus:outline-lime-700 p-2 mb-3`}
   ></input>
  </div>
 );
};
