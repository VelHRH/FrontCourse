import React, { useState } from "react";
import { getCurrentDate } from "./data";
import {
 ChevronDownIcon,
 PencilSquareIcon,
 TrashIcon,
 ChevronUpIcon,
} from "@heroicons/react/24/solid";

const ToDo = (props) => {
 const curId = props.todo.id;

 const [edit, setEdit] = useState(false);
 const [editText, setEditText] = useState(props.todo.title);

 const [full, setFull] = useState(false);
 return (
  <>
   <div className="bg-sky-100 mb-2 flex font-semibold justify-between p-3 rounded-lg">
    <div className="flex">
     <button
      className={`w-8 h-8 border-2 border-sky-700 rounded-lg mr-3 ${
       props.todo.status === "In Progress" && "bg-yellow-500 border-yellow-700"
      } ${props.todo.status === "Done" && "hidden"}`}
      onClick={() => props.changeStatusToDo(props.todo.id)}
     ></button>
     <div
      className={`text-slate-600 text-2xl ${
       props.todo.status === "Done" && "line-through"
      }`}
     >
      {edit ? (
       <div className="flex">
        <input onChange={(e) => setEditText(e.target.value)} value={editText} />{" "}
        <button
         onClick={() => {
          setEdit(false);
          props.todo.title = editText;
          props.todo.updateDate = getCurrentDate();
         }}
        >
         OK
        </button>
       </div>
      ) : (
       props.todo.title
      )}
     </div>
    </div>
    <div className="flex">
     <PencilSquareIcon
      onClick={() => setEdit(true)}
      className="w-7 text-yellow-600 mr-2 hover:text-yellow-300"
     />
     <TrashIcon
      className="w-7 text-red-500 mr-2 hover:text-red-300"
      onClick={() => props.removeToDo(props.todo.id)}
     />
     {full ? (
      <ChevronUpIcon
       onClick={() => setFull(!full)}
       className="w-7 text-sky-600 hover:text-sky-300"
      />
     ) : (
      <ChevronDownIcon
       onClick={() => setFull(!full)}
       className="w-7 text-sky-600 hover:text-sky-300"
      />
     )}
    </div>
   </div>
   {full && (
    <div className="mb-5 flex justify-between">
     {props.todo.description}
     <div className="flex">
      <div className="mr-5">{props.todo.createDate}</div>
      <div>{props.todo.updateDate}</div>
     </div>
    </div>
   )}
  </>
 );
};

export default ToDo;
