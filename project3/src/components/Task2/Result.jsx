import React from "react";

export const Result = ({ answers }) => {
 console.log(answers);
 return answers.map((answer) => {
  return <div key={answer.question}>{answer.answer}</div>;
 });
};
