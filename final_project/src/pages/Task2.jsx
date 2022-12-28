import React, { useEffect, useState } from "react";
import { Choice } from "../components/Task2/Choice";
import { NextBtn } from "../components/Task2/NextBtn";
import { Progressbar } from "../components/Task2/Progressbar";
import { QuestionInfo } from "../components/Task2/QuestionInfo";
import { Result } from "../components/Task2/Result";
import { QUESTIONS } from "../components/Task2/data";
import { Mode } from "../components/Task2/Mode";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./animation.css";

const Task2 = () => {
 const [question, setQuestion] = useState(1);
 const [isFinished, setIsFinished] = useState(false);
 const [answers, setAnswers] = useState([]);
 const [isClicked1, setIsClicked1] = useState(false);
 const [isClicked2, setIsClicked2] = useState(false);
 const [isClicked3, setIsClicked3] = useState(false);
 const [isClicked4, setIsClicked4] = useState(false);
 const [mode, setMode] = useState(5);
 const [result, setResult] = useState(0);
 const [questions, setQuestions] = useState(QUESTIONS.slice(0, mode));

 useEffect(() => {
  setQuestions(QUESTIONS.slice(0, mode));
  setQuestion(1);
  setIsFinished(false);
  setAnswers([]);
 }, [mode]);

 const qSwitcher = () => {
  question < mode && setQuestion(question + 1);
  question === mode && setIsFinished(true);
 };

 const addAnswer = (text) => {
  setAnswers((prev) => [
   ...prev,
   { question: question, answer: text, isTrue: false },
  ]);
 };

 const clearChoices = () => {
  setIsClicked1(false);
  setIsClicked2(false);
  setIsClicked3(false);
  setIsClicked4(false);
 };

 return (
  <>
   <Mode
    mode={mode}
    setMode={setMode}
    setQuestion={setQuestion}
    setIsFinished={setIsFinished}
   />
   <div
    className={`flex flex-col w-[98%] md:w-[70%] ml-[50%] text-lg translate-x-[-50%] 
    font-semibold border-4 rounded-md dark:border-slate-100 dark:bg-slate-800 dark:shadow-slate-100
  border-slate-900 bg-lime-200 shadow-slate-900
    shadow-[10px_5px] mt-5`}
   >
    <Progressbar
     question={question}
     qSwitcher={qSwitcher}
     isFinished={isFinished}
     questions={questions}
    />
    <div className="w-full h-full p-5 flex flex-col">
     {!isFinished && (
      <>
       <QuestionInfo question={question} questions={questions} />
       <div className="flex flex-wrap my-10">
        <Choice
         mr="mr-[10%]"
         addAnswer={addAnswer}
         question={question}
         isClicked={isClicked1}
         setIsClicked={setIsClicked1}
         clearChoices={clearChoices}
        >
         {questions[question - 1].options[0].text}
        </Choice>
        <Choice
         addAnswer={addAnswer}
         question={question}
         isClicked={isClicked2}
         setIsClicked={setIsClicked2}
         clearChoices={clearChoices}
        >
         {questions[question - 1].options[1].text}
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
         {questions[question - 1].options[2].text}
        </Choice>
        <Choice
         addAnswer={addAnswer}
         mt="mt-[4%]"
         question={question}
         isClicked={isClicked4}
         setIsClicked={setIsClicked4}
         clearChoices={clearChoices}
        >
         {questions[question - 1].options[3].text}
        </Choice>
       </div>
       <NextBtn qSwitcher={qSwitcher} />
      </>
     )}
    </div>
   </div>
   <CSSTransition
    in={isFinished}
    classNames="alert"
    timeout={1000}
    unmountOnExit
   >
    <Result
     answers={answers}
     questions={questions}
     result={result}
     setResult={setResult}
    />
   </CSSTransition>
   <CSSTransition
    in={isFinished}
    classNames="back"
    timeout={3000}
    unmountOnExit
   >
    <div
     onClick={() => {
      window.location.reload(false);
     }}
     className="w-full h-screen top-0 absolute z-10 cursor-pointer bg-black opacity-50"
    ></div>
   </CSSTransition>
  </>
 );
};

export default Task2;
