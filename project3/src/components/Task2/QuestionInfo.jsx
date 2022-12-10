import React from "react";

export const QuestionInfo = ({ number }) => {
 return (
  <>
   <div className="text-slate-500 self-center">{number} of 5</div>
   <div className="text-slate-500">Question:</div>
   <div className="text-slate-800">
    Відрізок що поєднує середини двох сторін трикутника?
   </div>
  </>
 );
};
