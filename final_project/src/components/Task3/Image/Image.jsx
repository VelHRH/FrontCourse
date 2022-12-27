import React from "react";
import { EyeIcon } from "@heroicons/react/24/solid";
import styles from "./Image.module.css";

export const Image = ({ link, views, id, viewCardHandler }) => {
 return (
  <div
   onClick={() => viewCardHandler(id)}
   className="w-1/2 md:w-1/4 aspect-square bg-black"
  >
   <div className={`w-full h-full ${styles.img}`}>
    <img
     src={link}
     alt="Forest"
     className="w-full h-full cursor-pointer border-2 border-slate-50 object-cover"
    ></img>
    <div
     className={`flex absolute text-white ml-[24%] md:ml-[calc(25%/2)] translate-x-[-50%] cursor-pointer mt-[-155px] ${styles.eye}`}
    >
     <EyeIcon className={`w-12`} />
     <div className="text-2xl font-bold ml-4">{views}</div>
    </div>
   </div>
  </div>
 );
};
