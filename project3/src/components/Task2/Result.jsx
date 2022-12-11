import React, { useEffect, useState, useRef } from "react";
import { QUESTIONS } from "./data";

export const Result = ({ answers }) => {
 const [rows, setRows] = useState([]);
 const [result, setResult] = useState(0);
 const dataFetchedRef = useRef(false);
 useEffect(() => {
  if (dataFetchedRef.current) return;
  dataFetchedRef.current = true;
  for (let i = 0; i < answers.length; i++) {
   for (let j = 0; j < QUESTIONS[answers[i].question].options.length; j++) {
    if (
     answers[i].answer === QUESTIONS[answers[i].question - 1].options[j].text
    ) {
     if (i === answers.length - 1) {
      answers[i].isTrue = QUESTIONS[answers[i].question - 1].options[j].isTrue;
     } else if (answers[i].question !== answers[i + 1].question)
      answers[i].isTrue = QUESTIONS[answers[i].question - 1].options[j].isTrue;
    }
   }
  }

  for (let i = 0; i < answers.length; i++) {
   if (i === answers.length - 1) {
    answers[i].isTrue && setResult((prev) => prev + 1);
    setRows((prev) => [
     ...prev,
     <div
      key={answers[i].question}
      className={`${answers[i].isTrue ? "text-green-500" : "text-red-500"}`}
     >
      {answers[i].question} - {answers[i].answer}
     </div>,
    ]);
   } else if (answers[i].question !== answers[i + 1].question) {
    answers[i].isTrue && setResult((prev) => prev + 1);
    setRows((prev) => [
     ...prev,
     <div
      key={answers[i].question}
      className={`${answers[i].isTrue ? "text-green-500" : "text-red-500"}`}
     >
      {answers[i].question} - {answers[i].answer}
     </div>,
    ]);
   }
  }
 }, []);

 return (
  <div className="flex justify-between">
   <div className="flex flex-col">{rows}</div>
   <div className="flex flex-col mr-[20%] self-center">
    <div>Ваш результат:</div>
    <div className="text-6xl">{(100 / 5) * result}%</div>
   </div>
  </div>
 );
};
