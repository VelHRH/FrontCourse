import React, { useState } from "react";
import { PlusIcon } from "@heroicons/react/24/solid";

export const Add = ({ addImage }) => {
 const [link, setLink] = useState("");
 return (
  <div className="flex self-end">
   <input
    type="text"
    className="p-2 rounded-l-xl border-4 border-sky-600 focus:outline-none"
    placeholder="Вставьте ссылку"
    onChange={(e) => setLink(e.target.value)}
    value={link}
   />
   <button
    onClick={() => {
     addImage(link);
    }}
    className="p-2 bg-sky-600 hover:bg-sky-800 rounded-r-xl"
   >
    <PlusIcon className="w-7 text-slate-50" />
   </button>
  </div>
 );
};
