import React from "react";
import { Link } from "react-router-dom";

export const Category = ({ children }) => {
 return (
  <Link to={`/1of2/${children.toLowerCase()}`}>
   <div className="text-center py-2 text-2xl rounded-xl bg-gradient-to-r text-slate-50 from-cyan-500 to-blue-600 hover:scale-110 cursor-pointer ease-in-out duration-500">
    {children}
   </div>
  </Link>
 );
};
