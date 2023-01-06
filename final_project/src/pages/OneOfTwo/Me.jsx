import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAuthMe } from "../../redux/slices/auth.js";

const Me = () => {
 const userData = useSelector((state) => state.auth);
 const dispatch = useDispatch();
 useEffect(() => {
  dispatch(fetchAuthMe());
 }, []);
 return (
  <div className="mt-10 w-[98%] md:w-[70%] ml-[50%] translate-x-[-50%] mb-10">
   {userData.status === "loading" && <div>Loading...</div>}
   {userData.status === "error" && <div>Error</div>}
   {userData.status === "loaded" && (
    <>
     <div className="flex items-center w-full">
      <img
       src={userData.data.imgUrl}
       alt="Profile"
       className="rounded-full w-[200px] h-[200px] object-cover"
      />
      <div className="flex-col w-full">
       <div className="flex justify-around items-center">
        <div className="text-5xl">{userData.data.login}</div>
        <div className="flex">
         <button className="p-2 text-xl bg-gradient-to-r text-slate-50 from-cyan-500 to-blue-600 hover:scale-110 mr-4 rounded-md ease-in-out duration-300">
          Edit
         </button>
         <button className="p-2 text-xl bg-gradient-to-r text-slate-50 from-red-400 to-red-700 hover:scale-110 mr-4 rounded-md ease-in-out duration-300">
          Delete
         </button>
        </div>
       </div>
       <div className="text-3xl text-center mt-20">
        1of2 games played: {userData.data.winners.length - 1}
       </div>
      </div>
     </div>
     <div className="text-3xl border-b-2 border-slate-600 p-2 mt-5">
      Your winners
     </div>
    </>
   )}
  </div>
 );
};

export default Me;
