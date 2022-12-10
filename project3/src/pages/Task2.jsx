import React, { useEffect, useState } from "react";
import { Choice } from "../components/Task2/Choice";
import { NextBtn } from "../components/Task2/NextBtn";
import { Progressbar } from "../components/Task2/Progressbar";
import { QuestionInfo } from "../components/Task2/QuestionInfo";
import { Result } from "../components/Task2/Result";
import { QUESTIONS } from "../components/Task2/data";

const Task2 = () => {
 const [question, setQuestion] = useState(1);
 const [isFinished, setIsFinished] = useState(false);
 const [answers, setAnswers] = useState([]);
 const [isClicked1, setIsClicked1] = useState(false);
 const [isClicked2, setIsClicked2] = useState(false);
 const [isClicked3, setIsClicked3] = useState(false);
 const [isClicked4, setIsClicked4] = useState(false);

 const qSwitcher = () => {
  question < 5 && setQuestion(question + 1);
  question === 5 && setIsFinished(true);
 };

 const addAnswer = (text) => {
  setAnswers((prev) => [...prev, { question: question, answer: text }]);
 };

 const clearChoices = () => {
  setIsClicked1(false);
  setIsClicked2(false);
  setIsClicked3(false);
  setIsClicked4(false);
 };

 return (
  <div className="flex flex-col w-[70%] ml-[50%] text-lg translate-x-[-50%] font-semibold bg-white border-4 rounded-md border-slate-300 shadow-lg mt-10">
   <Progressbar question={question} qSwitcher={qSwitcher} />
   <div className="w-full h-full p-5 flex flex-col">
    {!isFinished && (
     <>
      <QuestionInfo question={question} />
      <div className="flex flex-wrap my-10">
       <Choice
        mr="mr-[10%]"
        addAnswer={addAnswer}
        question={question}
        isClicked={isClicked1}
        setIsClicked={setIsClicked1}
        clearChoices={clearChoices}
       >
        {QUESTIONS[question].options[0].text}
       </Choice>
       <Choice
        addAnswer={addAnswer}
        question={question}
        isClicked={isClicked2}
        setIsClicked={setIsClicked2}
        clearChoices={clearChoices}
       >
        {QUESTIONS[question].options[1].text}
       </Choice>
       <Choice
        addAnswer={addAnswer}
        mr="mr-[10%]"
        mt="mt-[4%]"
        question={question}
        isClicked={isClicked3}
        setIsClicked={setIsClicked3}
        clearChoices={clearChoices}
       >
        {QUESTIONS[question].options[2].text}
       </Choice>
       <Choice
        addAnswer={addAnswer}
        mt="mt-[4%]"
        question={question}
        isClicked={isClicked4}
        setIsClicked={setIsClicked4}
        clearChoices={clearChoices}
       >
        {QUESTIONS[question].options[3].text}
       </Choice>
      </div>
      <NextBtn qSwitcher={qSwitcher} />
     </>
    )}
    {isFinished && <Result answers={answers} />}
   </div>
  </div>
 );
};

export default Task2;
