import { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import Task1 from "./pages/Task1";
import Task2 from "./pages/Task2";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Task3 from "./pages/Task3";
import Page404 from "./pages/Page404";
import Index from "./pages/index";
import Categories from "./pages/OneOfTwo/Categories";
import Subcategories from "./pages/OneOfTwo/Subcategories";
import Info from "./pages/OneOfTwo/Info";

function App() {
 const [nightMode, setNightMode] = useState(false);
 useEffect(() => {
  if (nightMode) {
   document.body.classList.add("bg-slate-800");
   document.documentElement.classList.add("dark");
  } else {
   document.body.classList.remove("bg-slate-800");
   document.documentElement.classList.remove("dark");
  }
 }, [nightMode]);

 return (
  <>
   <BrowserRouter>
    <Navbar nightMode={nightMode} setNightMode={setNightMode} />
    <Routes>
     <Route path="/" element={<Index />} />
     <Route path="/convert" element={<Task1 />} />
     <Route path="/quiz" element={<Task2 />} />
     <Route path="/photos" element={<Task3 />} />
     <Route path="/1of2" element={<Categories />} />
     <Route path="/1of2/:id" element={<Subcategories />} />
     <Route path="/1of2/:id/:id" element={<Info />} />
     <Route path="*" element={<Page404 />} />
    </Routes>
   </BrowserRouter>
  </>
 );
}

export default App;