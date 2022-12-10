import React, { useEffect, useState } from "react";
import { Choice } from "../components/Task2/Choice";
import { NextBtn } from "../components/Task2/NextBtn";
import { Progressbar } from "../components/Task2/Progressbar";
import { QuestionInfo } from "../components/Task2/QuestionInfo";
import { Result } from "../components/Task2/Result";

const Task2 = () => {
 const [question, setQuestion] = useState(1);
 const [isFinished, setIsFinished] = useState(false);

 const qSwitcher = () => {
  question < 5 && setQuestion(question + 1);
  question === 5 && setIsFinished(true);
 };

 return (
  <div className="flex flex-col w-[70%] ml-[50%] text-lg translate-x-[-50%] font-semibold bg-white border-4 rounded-md border-slate-300 shadow-lg mt-10">
   <Progressbar question={question} qSwitcher={qSwitcher} />
   <div className="w-full h-full p-5 flex flex-col">
    {!isFinished && (
     <>
      <QuestionInfo question={question} />
      <div className="flex flex-wrap my-10">
       <Choice mr="mr-[10%]">Медіана</Choice>
       <Choice>Бісектриса</Choice>
       <Choice mr="mr-[10%]" mt="mt-[4%]">
        Середня лінія
       </Choice>
       <Choice mt="mt-[4%]">Висота</Choice>
      </div>
      <NextBtn qSwitcher={qSwitcher} />
     </>
    )}
    {isFinished && <Result />}
   </div>
  </div>
 );
};

export default Task2;
