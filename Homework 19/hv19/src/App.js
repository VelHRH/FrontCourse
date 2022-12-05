import {
 ChevronDoubleLeftIcon,
 ChevronDoubleRightIcon,
 SunIcon,
 MoonIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { Form1 } from "./components/Form1";
import { Form2 } from "./components/Form2";
import { Form3 } from "./components/Form3";
import { Form4 } from "./components/Form4";
import { Form5 } from "./components/Form5";
import "./index.css";

function App() {
 const [page, setPage] = useState(1);
 const [showbtn, setShowbtn] = useState(true);
 const [direction, setDirection] = useState(true);
 const [password, setPassword] = useState("");
 const [login, setLogin] = useState("");
 const [name, setName] = useState("");
 const [surname, setSurname] = useState("");
 const [patronymic, setPatronymic] = useState("");
 const [age, setAge] = useState(0);
 const [country, setCountry] = useState("");
 const [gender, setGender] = useState("");
 const [theme, setTheme] = useState(true);
 const [isValidation, setIsValidation] = useState(false);

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

 const submitHandle = () => {
  setIsValidation(true);
 };

 return (
  <div
   className={`${
    theme ? "bg-slate-50" : "bg-slate-700"
   } w-screen h-screen pt-10`}
  >
   <button
    onClick={() => setTheme(!theme)}
    className={`p-2 ${
     theme
      ? "text-white bg-slate-900 hover:bg-slate-700"
      : "text-slate-900 bg-slate-50 hover:bg-slate-200"
    } absolute left-5 top-5 rounded-xl`}
   >
    {theme ? <MoonIcon className="w-7" /> : <SunIcon className="w-7" />}
   </button>
   <CSSTransition
    in={page === 1}
    timeout={300}
    classNames={direction ? "left" : "right"}
    unmountOnExit
   >
    <Form1
     login={login}
     theme={theme}
     setLogin={setLogin}
     password={password}
     setPassword={setPassword}
     isValidation={isValidation}
    />
   </CSSTransition>
   <CSSTransition
    in={page === 2}
    timeout={300}
    classNames={direction ? "left" : "right"}
    unmountOnExit
   >
    <Form2
     name={name}
     setName={setName}
     surname={surname}
     setSurname={setSurname}
     patronymic={patronymic}
     setPatronymic={setPatronymic}
     theme={theme}
     isValidation={isValidation}
    />
   </CSSTransition>
   <CSSTransition
    in={page === 3}
    timeout={300}
    classNames={direction ? "left" : "right"}
    unmountOnExit
   >
    <Form3
     age={age}
     setAge={setAge}
     theme={theme}
     isValidation={isValidation}
    />
   </CSSTransition>

   <CSSTransition
    in={page === 4}
    timeout={300}
    classNames={direction ? "left" : "right"}
    unmountOnExit
   >
    <Form4
     country={country}
     setCountry={setCountry}
     theme={theme}
     isValidation={isValidation}
    />
   </CSSTransition>

   <CSSTransition
    in={page === 5}
    timeout={300}
    classNames={direction ? "left" : "right"}
    unmountOnExit
   >
    <Form5
     gender={gender}
     setGender={setGender}
     theme={theme}
     isValidation={isValidation}
    />
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
      page >= 2 &&
      `bg-lime-500 ${
       theme ? "text-white" : "text-slate-700"
      } border-lime-500 hover:text-lime-500`
     } p-2 rounded-xl border-2 hover:bg-transparent`}
    >
     <ChevronDoubleLeftIcon className="w-6" />
    </button>
    <button
     onClick={() => {
      page < 5 && btnRightClickhandle();
      page === 5 && submitHandle();
     }}
     className={`${!showbtn && "hidden"} ${
      page <= 5 &&
      `bg-lime-500 ${
       theme ? "text-white" : "text-slate-700"
      } border-lime-500 hover:text-lime-500`
     } text-white p-2 rounded-xl border-2 hover:bg-transparent font-bold`}
    >
     {page <= 4 ? <ChevronDoubleRightIcon className="w-6" /> : "OK"}
    </button>
   </div>
  </div>
 );
}

export default App;
