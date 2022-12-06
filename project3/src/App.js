import { useState } from "react";
import { AmountField } from "./components/Task1/AmountField";
import { CurField } from "./components/Task1/CurField";
import { Result } from "./components/Task1/Result";
import { SwapBtn } from "./components/Task1/SwapBtn";
//import { ChevronDoubleLeftIcon } from "@heroicons/react/24/solid";

function App() {
 const [amount, setAmount] = useState(0);
 const [cur1, setCur1] = useState("EU");
 const [cur1Full, setCur1Full] = useState("Euro");
 const [cur2, setCur2] = useState("EU");
 const [cur2Full, setCur2Full] = useState("Euro");
 return (
  <>
   <div className="flex w-[70%] justify-between ml-[50%] translate-x-[-50%] mt-10">
    <AmountField amount={amount} setAmount={setAmount} />
    <div className="w-2/3 flex justify-between">
     <CurField
      label="From"
      cur={cur1}
      setCur={setCur1}
      curFull={cur1Full}
      setCurFull={setCur1Full}
     />
     <SwapBtn />
     <CurField
      label="To"
      cur={cur2}
      setCur={setCur2}
      curFull={cur2Full}
      setCurFull={setCur2Full}
     />
    </div>
   </div>
   <Result amount={amount} cur1Full={cur1Full} cur2Full={cur2Full} />
   <div className="flex flex-col items-start absolute left-[38.3%] top-[8rem] w-[19.44%]">
    <button className="border-2 border-slate-600 w-full text-left p-2 bg-slate-100 text-">
     UA
    </button>
    <button>US</button>
    <button>EU</button>
   </div>
  </>
 );
}

export default App;
