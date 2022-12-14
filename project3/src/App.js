import { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import Task1 from "./pages/Task1";
import Task2 from "./pages/Task2";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Task3 from "./pages/Task3";
import Page404 from "./pages/Page404";
import Index from "./pages/index";

function App() {
 const [nightMode, setNightMode] = useState(false);
 useEffect(() => {
  nightMode
   ? document.body.classList.add("bg-slate-800")
   : document.body.classList.remove("bg-slate-800");
 }, [nightMode]);

 return (
  <>
   <BrowserRouter>
    <Navbar nightMode={nightMode} setNightMode={setNightMode} />
    <Routes>
     <Route path="/" element={<Index />} />
     <Route path="/convert" element={<Task1 nightMode={nightMode} />} />
     <Route path="/quiz" element={<Task2 />} />
     <Route path="/photos" element={<Task3 />} />
     <Route path="*" element={<Page404 nightMode={nightMode} />} />
    </Routes>
   </BrowserRouter>
  </>
 );
}

export default App;
