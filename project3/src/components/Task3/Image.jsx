import React from "react";

export const Image = ({ link }) => {
 return (
  <div className="w-1/3 md:w-1/4 h-28 md:h-48 bg-black">
   <img
    src={link}
    alt="Forest"
    className="w-full h-full cursor-pointer border-2 border-slate-50 object-cover hover:opacity-50 transition duration-300 ease-in-out"
   ></img>
  </div>
 );
};
