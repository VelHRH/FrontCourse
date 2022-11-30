import { BellAlertIcon } from "@heroicons/react/24/solid";

import { Link } from "react-router-dom";

export const Header = () => {
 return (
  <div className="w-full flex border-b-4 border-violet-400 h-[12%] items-center px-[8%] justify-between fixed bg-slate-50 top-0">
   <Link to="/">
    <div className="font-bold text-transparent text-3xl md:text-5xl bg-clip-text bg-gradient-to-r to-violet-500 from-violet-800 logo">
     reddit
    </div>
   </Link>

   <div className="flex">
    <BellAlertIcon className="w-6 md:w-8 text-red-500 mr-2 md:mr-5 ease-in duration-200 hover:text-red-300" />

    <div className="flex items-center">
     <Link to="/auth/me">
      <img
       src="https://www.w3schools.com/howto/img_avatar2.png"
       alt="Profile"
       className="w-14 h-14 rounded-full cursor-pointer object-cover"
      />
     </Link>
     <Link to="/">
      <div className="border-2 ml-3 border-red-600 p-1 text-sm rounded-md cursor-pointer text-slate-50 bg-red-600 hover:bg-transparent hover:text-red-600 ease-in duration-200">
       Log Out
      </div>
     </Link>
    </div>
   </div>
  </div>
 );
};
