import React, { useState } from "react";
import { Choice } from "../components/Task2/Choice";
import { NextBtn } from "../components/Task2/NextBtn";
import { QuestionInfo } from "../components/Task2/QuestionInfo";

const Task2 = () => {
 const [question, setQuestion] = useState(1);
 return (
  <div className="flex flex-col w-[70%] ml-[50%] text-lg translate-x-[-50%] font-semibold bg-white border-4 rounded-md border-slate-300 p-5 shadow-lg mt-10">
   <QuestionInfo number={question} />
   <div className="flex flex-wrap my-10">
    <Choice mr="mr-[10%]">Медіана</Choice>
    <Choice>Бісектриса</Choice>
    <Choice mr="mr-[10%]" mt="mt-[4%]">
     Середня лінія
    </Choice>
    <Choice mt="mt-[4%]">Висота</Choice>
   </div>
   <NextBtn question={question} setQuestion={setQuestion} />
  </div>
 );
};

export default Task2;
