import React, { useEffect, useRef } from "react";
import { ShareIcon } from "@heroicons/react/24/solid";
export const Result = ({ answers, questions, result, setResult }) => {
 const dataFetchedRef = useRef(false);
 useEffect(() => {
  if (dataFetchedRef.current) return;
  dataFetchedRef.current = true;
  for (let i = 0; i < answers.length; i++) {
   for (let j = 0; j < 4; j++) {
    console.log(questions[answers[i].question]);
    if (
     answers[i].answer === questions[answers[i].question - 1].options[j].text
    ) {
     if (i === answers.length - 1) {
      answers[i].isTrue = questions[answers[i].question - 1].options[j].isTrue;
     } else if (answers[i].question !== answers[i + 1].question)
      answers[i].isTrue = questions[answers[i].question - 1].options[j].isTrue;
    }
   }
  }

  for (let i = 0; i < answers.length; i++) {
   answers[i].isTrue && setResult((prev) => prev + 1);
  }
 }, []);

 const percent = ((100 / questions.length) * result).toFixed(2);
 return (
  <div className="z-20">
   <div
    className={`${percent > 70 && "bg-green-200"} ${
     percent <= 70 && percent >= 40 && "bg-yellow-200"
    } ${
     percent < 40 && "bg-red-200"
    } flex flex-col w-[400px] h-[300px] z-20 top-[50%] translate-y-[-50%] items-center fixed left-[50%] translate-x-[-50%] shadow-[5px_5px] border-4 border-slate-900 shadow-slate-900 rounded-2xl`}
   >
    <div className="mt-[18%]"></div>
    <div className="text-2xl">
     {percent > 70 && "Вітаємо!"}
     {percent <= 70 && percent >= 40 && "Непогано"}
     {percent < 40 && "Це провал..."}
    </div>
    <div className="text-6xl my-5">{percent}%</div>
    <ShareIcon
     data-tooltip-target="tooltip-default"
     className="w-8 cursor-pointer hover:text-slate-600"
    />
   </div>
  </div>
 );
};
