import React from "react";
import ReactCountryFlag from "react-country-flag";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";

export const CurField = ({ cur, curFull, label, setIsDropdown, isDropdown }) => {
 return (
  <div className="flex flex-col font-semibold text-2xl w-5/12 mr-2">
   <div className="font-bold">{label}</div>
   <div
   onClick={() => setIsDropdown(!isDropdown)}
    className={`flex rounded-md border-2 border-slate-300 bg-slate-50 text-xl p-2 w-full justify-between cursor-pointer`}
   >
    <div>
    <ReactCountryFlag
     countryCode={cur}
     svg
     cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
     cdnSuffix="svg"
     style={{
      fontSize: "1.25em",
      lineHeight: "1.75em",
     }}
     className="mr-2"
    />
    {`${cur} - ${curFull}`}
    </div>
    {isDropdown ? <ChevronUpIcon className="w-6" /> : <ChevronDownIcon className="w-6" />}
   </div>
  </div>
 );
};
