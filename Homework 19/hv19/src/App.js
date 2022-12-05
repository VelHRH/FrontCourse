import {
 ChevronDoubleLeftIcon,
 ChevronDoubleRightIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./index.css";

function App() {
 const [page, setPage] = useState(1);
 const [showbtn, setShowbtn] = useState(true);
 const [direction, setDirection] = useState(true);

 const btnLeftClickhandle = () => {
  setPage(page - 1);
  setDirection(false);
  setShowbtn((showbtn) => !showbtn);
  setTimeout(() => {
   setShowbtn((showbtn) => !showbtn);
  }, 300);
 };

 const btnRightClickhandle = () => {
  setPage(page + 1);
  setDirection(true);
  setShowbtn((showbtn) => !showbtn);
  setTimeout(() => {
   setShowbtn((showbtn) => !showbtn);
  }, 300);
 };

 return (
  <>
   <CSSTransition
    in={page === 1}
    timeout={300}
    classNames={direction ? "left" : "right"}
    unmountOnExit
   >
    <div
     className={`w-[90%] md:w-1/3 bg-lime-500 p-3 flex flex-col mb-2 rounded-2xl ml-[50%] translate-x-[-50%] text-xl font-semibold items-center`}
    >
     <div className="text-slate-50 w-[90%] mr-2 self-left pl-2 pb-1 mt-2">
      Пароль
     </div>
     <input
      type="text"
      className="w-[90%] rounded-xl focus:outline-lime-700 p-2 mb-3"
     ></input>
     <div className="text-slate-50 w-[90%] mr-2 self-left pl-2 pb-1 mt-2">
      Пароль
     </div>
     <input
      type="text"
      className="w-[90%] rounded-xl focus:outline-lime-700 p-2 mb-3"
     ></input>
    </div>
   </CSSTransition>
   <CSSTransition
    in={page === 2}
    timeout={300}
    classNames={direction ? "left" : "right"}
    unmountOnExit
   >
    <div
     className={`w-[90%] md:w-1/3 bg-lime-500 p-3 flex flex-col mb-2 rounded-2xl ml-[50%] translate-x-[-50%] text-xl font-semibold items-center`}
    >
     <div className="text-slate-50 w-[90%] mr-2 self-left pl-2 pb-1 mt-2">
      Имя
     </div>
     <input
      type="text"
      className="w-[90%] rounded-xl focus:outline-lime-700 p-2 mb-3"
     ></input>
     <div className="text-slate-50 w-[90%] mr-2 self-left pl-2 pb-1 mt-2">
      Фамилия
     </div>
     <input
      type="text"
      className="w-[90%] rounded-xl focus:outline-lime-700 p-2 mb-3"
     ></input>
     <div className="text-slate-50 w-[90%] mr-2 self-left pl-2 pb-1 mt-2">
      Отчество
     </div>
     <input
      type="text"
      className="w-[90%] rounded-xl focus:outline-lime-700 p-2 mb-3"
     ></input>
    </div>
   </CSSTransition>

   <div className="w-[90%] md:w-1/3 ml-[50%] translate-x-[-50%] flex justify-between">
    <button
     onClick={() => {
      page > 1 && btnLeftClickhandle();
     }}
     className={`${
      page < 2 &&
      "bg-transparent text-transparent border-transparent hover:text-transparent cursor-default"
     } ${!showbtn && "hidden"} ${
      page >= 2 && "bg-lime-500 text-white border-lime-500 hover:text-lime-500"
     } p-2 rounded-xl border-2 hover:bg-transparent`}
    >
     <ChevronDoubleLeftIcon className="w-6" />
    </button>
    <button
     onClick={() => {
      page < 5 && btnRightClickhandle();
     }}
     className={`${
      page > 4 &&
      "bg-transparent text-transparent border-transparent hover:text-transparent cursor-default"
     } ${!showbtn && "hidden"} ${
      page <= 4 && "bg-lime-500 text-white border-lime-500 hover:text-lime-500"
     } text-white p-2 rounded-xl border-2 hover:bg-transparent`}
    >
     <ChevronDoubleRightIcon className="w-6" />
    </button>
   </div>
  </>
 );
}

export default App;
