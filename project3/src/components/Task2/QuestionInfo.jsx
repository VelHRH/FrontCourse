import React from "react";

export const QuestionInfo = ({ questions, question }) => {
 return (
  <>
   <div className="text-slate-500 self-center">
    {question} of {questions.length}
   </div>
   <div className="text-slate-500">Question:</div>
   <div className="text-slate-800">{questions[question].text}</div>
  </>
 );
};
