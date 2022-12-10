import React from "react";
import { QUESTIONS } from "./data";

export const QuestionInfo = ({ question }) => {
 return (
  <>
   <div className="text-slate-500 self-center">{question} of 5</div>
   <div className="text-slate-500">Question:</div>
   <div className="text-slate-800">{QUESTIONS[question].text}</div>
  </>
 );
};
