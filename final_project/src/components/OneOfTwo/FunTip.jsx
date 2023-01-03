import React, { useState } from "react";
import { FaceSmileIcon } from "@heroicons/react/24/outline";

export const FunTip = ({ tipText }) => {
 return (
  <div className="p-2 bg-sky-200 rounded-xl text-lg w-[90%] mb-5">
   <div>{tipText}</div>
   <FaceSmileIcon className="w-8 ml-[90%]" />
  </div>
 );
};
