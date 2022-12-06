import { useState } from "react";
import ReactCountryFlag from "react-country-flag";
//import { ChevronDoubleLeftIcon } from "@heroicons/react/24/solid";

function App() {
 const [amount, setAmount] = useState(0);
 const [cur1, setCur1] = useState("EU");
 const [cur1Full, setCur1Full] = useState("Euro");
 const [cur2, setCur2] = useState("EU");
 const [cur2Full, setCur2Full] = useState("Euro");
 return (
  <>
   <div className="flex w-[60%] justify-between ml-[50%] translate-x-[-50%] mt-10">
    <div className="flex flex-col font-semibold text-2xl w-1/4 mr-3">
     <div className="font-bold">Amount</div>
     <input
      type="number"
      className="rounded-md border-2 border-slate-300 focus:outline-slate-600 text-xl p-2"
      onChange={(e) => setAmount(e.target.value)}
      value={amount}
     />
    </div>
    <div className="flex flex-col font-semibold text-2xl w-1/4 mr-2">
     <div className="font-bold">From</div>
     <div
      className={`flex rounded-md border-2 border-slate-300 text-xl p-2 w-full`}
     >
      <ReactCountryFlag
       countryCode={cur1}
       svg
       cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
       cdnSuffix="svg"
       style={{
        fontSize: "1.25em",
        lineHeight: "1.75em",
       }}
       className="mr-2"
      />
      {`${cur1} - ${cur1Full}`}
     </div>
    </div>
    <button className="rounded-full border-2 border-slate-300 text-xl p-2 w-10 h-[2.75rem] mr-2 self-end hover:bg-slate-200">
     d
    </button>
    <div className="flex flex-col font-semibold text-2xl w-1/4">
     <div className="font-bold">To</div>
     <div
      className={`flex rounded-md border-2 border-slate-300 text-xl p-2 w-full`}
     >
      <ReactCountryFlag
       countryCode={cur2}
       svg
       cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
       cdnSuffix="svg"
       style={{
        fontSize: "1.25em",
        lineHeight: "1.75em",
       }}
       className="mr-2"
      />
      {`${cur2} - ${cur2Full}`}
     </div>
    </div>
   </div>
   <div className="flex flex-col ml-[20%] mt-5">
    <div className="font-bold text-slate-500 text-lg">
     {amount} {cur1Full} =
    </div>
    <div className="font-bold text-slate-700 text-3xl">
     {amount * 2} {cur2Full}
    </div>
   </div>
  </>
 );
}

export default App;
