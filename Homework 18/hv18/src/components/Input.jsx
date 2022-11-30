import React from "react";

export const Input = ({ placeHolder }) => {
 return (
  <input
   type="text"
   placeholder={placeHolder}
   className="w-[90%] mt-5 md:w-[50%] focus:outline-none border-b-4 text-xl placeholder-violet-400 text-violet-800 border-violet-400 focus:border-violet-800"
  ></input>
 );
};
