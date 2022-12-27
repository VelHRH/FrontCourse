import React, { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

export const Search = ({ searchVal, setSearchVal }) => {
 return (
  <div className="flex self-end">
   <input
    type="text"
    className="p-2 rounded-xl border-4 border-sky-600 focus:outline-none"
    placeholder="Искать"
    onChange={(e) => setSearchVal(e.target.value)}
    value={searchVal}
   />
  </div>
 );
};
