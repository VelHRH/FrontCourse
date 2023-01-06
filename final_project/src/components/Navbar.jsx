import React from "react";
import { Link } from "react-router-dom";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { useSelector, useDispatch } from "react-redux";
import { logout, selectIsAuth } from "../redux/slices/auth";

export const Navbar = ({ nightMode, setNightMode }) => {
 const dispatch = useDispatch();
 const isLogged = useSelector(selectIsAuth);
 const userData = useSelector((state) => state.auth.data);

 const onClickLogout = () => {
  if (window.confirm("You sure you want to log out?")) {
   dispatch(logout());
   window.localStorage.removeItem("token");
  }
 };
 return (
  <>
   <div className="flex justify-around items-center mt-3">
    <div
     onClick={() => setNightMode(!nightMode)}
     className={`p-2 border-2 w-12 rounded-xl ${
      nightMode
       ? "hover:bg-slate-200 bg-slate-50 text-slate-900 border-slate-900"
       : "hover:bg-slate-900 bg-slate-800 text-slate-50 border-slate-50"
     } cursor-pointer`}
    >
     {nightMode ? <SunIcon className="w-7" /> : <MoonIcon className="w-7" />}
    </div>
    {isLogged ? (
     <div className="flex items-center">
      <Link to="/1of2/me">
       <img
        src={userData.imgUrl}
        alt="Profile"
        className="w-14 h-14 rounded-full cursor-pointer object-cover"
       />
      </Link>
      <Link to="/1of2">
       <div
        onClick={onClickLogout}
        className="border-2 ml-3 p-1 text-sm rounded-md cursor-pointer text-slate-50 bg-red-500 hover:scale-110 ease-in duration-200"
       >
        Log Out
       </div>
      </Link>
     </div>
    ) : (
     <div className="flex font-semibold cursor-pointer">
      <Link to="/1of2/auth">
       <div className="border-2 p-2 rounded-md border-transparent ease-in duration-200">
        Sing In
       </div>
      </Link>
      <Link to="/1of2/register">
       <div className="border-2 p-2 rounded-md bg-gradient-to-r text-slate-50 from-cyan-500 to-blue-600 hover:scale-110 ease-in duration-200">
        Register
       </div>
      </Link>
     </div>
    )}
   </div>
   <div className="flex w-[50%] h-20">
    <Link to="/convert">
     <button
      className={`bg-pink-500 absolute font-bold left-2 md:left-[15%] top-20 uppercase p-2 md:p-3 text-xl md:text-3xl border-4 ${
       nightMode
        ? "border-slate-50 shadow-slate-50 text-slate-50"
        : "border-slate-900 shadow-slate-900 text-slate-900"
      } shadow-[5px_5px] active:shadow-none active:ml-[5px] active:mt-[5px]`}
     >
      Converter
     </button>
    </Link>
    <Link to="/quiz">
     <button
      className={`${
       nightMode
        ? "border-slate-50 shadow-slate-50 text-slate-50"
        : "border-slate-900 shadow-slate-900 text-slate-900"
      } bg-lime-500 absolute font-bold left-[50%] top-20 translate-x-[-50%] uppercase p-2 md:p-3 text-xl md:text-3xl border-4 shadow-[5px_5px] active:shadow-none active:ml-[5px] active:mt-[5px]`}
     >
      Quiz
     </button>
    </Link>
    <Link to="/1of2">
     <button
      className={`${
       nightMode
        ? "border-slate-50 shadow-slate-50 text-slate-50"
        : "border-slate-900 shadow-slate-900 text-slate-900"
      } bg-sky-500 absolute font-bold right-2 md:right-[15%] top-20 uppercase p-2 md:p-3 text-xl md:text-3xl border-4 shadow-[5px_5px] active:shadow-none active:ml-[5px] active:mt-[5px]`}
     >
      1 of 2
     </button>
    </Link>
   </div>
  </>
 );
};
