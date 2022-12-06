import React, { useState } from "react";

const CreateToDo = (props) => {
 const [title, setTitle] = useState("");
 const [description, setDescription] = useState("");
 return (
  <div className="flex w-full my-6">
   <div className="flex flex-col w-4/5 text-xl">
    <input
     type="text"
     onChange={(e) => setTitle(e.target.value)}
     value={title}
     placeholder="Title"
     className="border-2"
    />
    <textarea
     onChange={(e) => setDescription(e.target.value)}
     value={description}
     placeholder="Description"
     className="h-20 border-2"
    />
   </div>
   <button
    onClick={() =>
     title != "" && description != "" && props.addToDo(title, description)
    }
    className="w-1/5 bg-sky-400 text-slate-50 text-4xl font-bold ml-10 rounded-2xl hover:bg-sky-600"
   >
    OK
   </button>
  </div>
 );
};

export default CreateToDo;
