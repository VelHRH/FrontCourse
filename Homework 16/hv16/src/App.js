import './App.css';
import React, { useState, useEffect, useRef } from "react";

function App() {
 const initDate = new Date();
 const [clock, setClock] = useState(initDate.toLocaleTimeString());
 const [toggle, setToggle] = useState(false);
 const interval = useRef();

 useEffect(() => {
  if (toggle) {
   interval.current = setInterval(() => {
    const date = new Date();
    setClock(date.toLocaleTimeString());
   }, 1000);
  } else {
   clearInterval(interval.current);
  }
 }, [toggle]);

 return (
  <>
   <div style={{ fontSize: "50px" }}>{clock}</div>
   <button style={{ margin: "5px" }} onClick={() => setToggle(!toggle)}>
    {toggle ? "Stop" : "Start"}
   </button>
  </>
 );
}

export default App;
