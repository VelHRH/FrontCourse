import { useState } from "react";
import { AmountField } from "./components/Task1/AmountField";
import { CurField } from "./components/Task1/CurField";
import { Dropdown } from "./components/Task1/Dropdown";
import { Result } from "./components/Task1/Result";
import { SwapBtn } from "./components/Task1/SwapBtn";

function App() {
 const [amount, setAmount] = useState(0);
 const [cur1, setCur1] = useState("UA");
 const [cur1Full, setCur1Full] = useState("Hryvnia");
 const [cur2, setCur2] = useState("UA");
 const [cur2Full, setCur2Full] = useState("Hryvnia");
 const [isDropdown1, setIsDropdown1] = useState(false);
 const [isDropdown2, setIsDropdown2] = useState(false);
 return (
  <>
   <div className="flex w-[70%] justify-between ml-[50%] translate-x-[-50%] mt-10">
    <AmountField amount={amount} setAmount={setAmount} />
    <div className="w-2/3 flex justify-between">
     <CurField
      label="From"
      cur={cur1}
      curFull={cur1Full}
      isDropdown={isDropdown1}
      setIsDropdown={setIsDropdown1}
     />
     <SwapBtn cur1={cur1} setCur1={setCur1} cur2={cur2} setCur2={setCur2} cur1Full={cur1Full} setCur1Full={setCur1Full} cur2Full={cur2Full} setCur2Full={setCur2Full} />
     <CurField
      label="To"
      cur={cur2}
      curFull={cur2Full}
      isDropdown={isDropdown2}
      setIsDropdown={setIsDropdown2}
     />
    </div>
   </div>
   <Result amount={amount} cur1Full={cur1Full} cur2Full={cur2Full} />
   
   <Dropdown cur={cur1} setCur={setCur1} setCurFull={setCur1Full} left="left-[38.3%]" isDropdown={isDropdown1} />
   <Dropdown cur={cur2} setCur={setCur2} setCurFull={setCur2Full} left="left-[65%]" isDropdown={isDropdown2} />
  </>
 );
}

export default App;
