import React from "react";
import { FaceFrownIcon } from "@heroicons/react/24/solid";

const Page404 = ({ nightMode }) => {
 return (
  <>
   <div
    className={`${
     nightMode ? "text-slate-50" : "text-slate-900"
    } flex flex-col mt-10 w-[98%] md:w-[70%] ml-[50%] translate-x-[-50%] items-center text-7xl font-bold`}
   >
    <div>404</div>
    <FaceFrownIcon className="w-32" />
   </div>
  </>
 );
};

export default Page404;
