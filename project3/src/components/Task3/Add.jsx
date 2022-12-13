import React from "react";
import { PlusIcon } from "@heroicons/react/24/solid";

export const Add = ({ addImage }) => {
 return (
  <div className="flex self-end mb-2">
   <input
    type="text"
    className="p-2 rounded-l-xl border-4 border-sky-600 focus:outline-none"
    placeholder="Вставьте ссылку"
   />
   <button
    onClick={() => {
     addImage(
      "https://upload.wikimedia.org/wikipedia/commons/4/41/Idku_sea.jpg",
      "Nature"
     );
    }}
    className="p-2 bg-sky-600 hover:bg-sky-800 rounded-r-xl"
   >
    <PlusIcon className="w-7 text-slate-50" />
   </button>
  </div>
 );
};
