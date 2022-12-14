import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAuthMe } from "../../redux/slices/auth.js";
import { RatingElement } from "../../components/OneOfTwo/RatingElement";
import { Winner } from "../../components/OneOfTwo/Winner.jsx";

const Me = () => {
 const userData = useSelector((state) => state.auth);
 const dispatch = useDispatch();
 useEffect(() => {
  dispatch(fetchAuthMe());
  document.title = "My page";
 }, []);

 const favouriteList = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
   let isIn = false;
   for (let j = 0; j < newArr.length; j++) {
    if (arr[i]._id === newArr[j]._id) {
     isIn = true;
     newArr[j].number += 1;
    }
   }
   if (!isIn) {
    newArr.push({ ...arr[i], number: 1 });
   }
  }
  newArr.sort((a, b) => {
   if (a.number > b.number) return -1;
  });
  return newArr;
 };

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
       className="rounded-full w-[100px] h-[100px] md:w-[200px] md:h-[200px] object-cover m-5"
      />
      <div className="flex-col w-full mx-5 dark:text-slate-50 p-4 rounded-lg border-2 border-slate-600">
       <div className="flex justify-between items-center">
        <div className="text-2xl md:text-5xl">{userData.data.login}</div>
        <div className="flex">
         <button className="p-2 text-lg md:text-xl bg-gradient-to-r text-slate-50 from-cyan-500 to-blue-600 hover:scale-110 mr-4 rounded-md ease-in-out duration-300">
          Edit
         </button>
         <button className="p-2 text-lg md:text-xl bg-gradient-to-r text-slate-50 from-red-400 to-red-700 hover:scale-110 mr-4 rounded-md ease-in-out duration-300">
          Delete
         </button>
        </div>
       </div>
       <div className="text-xl md:text-3xl mt-10">
        1of2 games played:{" "}
        {favouriteList(userData.data.winners).length > 0
         ? userData.data.winners.length
         : "0"}
       </div>
       <div className="text-xl md:text-3xl mt-5">
        Favourite event:{" "}
        {favouriteList(userData.data.winners).length > 0 &&
         favouriteList(userData.data.winners)[0].name}
       </div>
      </div>
     </div>
     <div className="text-xl md:text-3xl border-b-2 border-slate-600 p-2 my-4 dark:text-slate-50">
      Your winners
     </div>
     <div className="grid gap-4 grid-cols-5 md:grid-cols-10">
      {userData.data.winners?.map((winner) => (
       <Winner image={winner.imgUrl} date={winner.date} />
      ))}
     </div>
     <div className="text-xl md:text-3xl border-b-2 border-slate-600 p-2 my-4 mt-7 dark:text-slate-50">
      Your favourites
     </div>
     <div className="flex-col">
      {favouriteList(userData.data.winners)?.map((winner, index) => (
       <RatingElement
        key={winner._id}
        index={index + 1}
        image={winner.imgUrl}
        wins={winner.number}
       >
        {winner.name}
       </RatingElement>
      ))}
     </div>
    </>
   )}
  </div>
 );
};

export default Me;
