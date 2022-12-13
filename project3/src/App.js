import { Navbar } from "./components/Navbar";
import Task1 from "./pages/Task1";
import Task2 from "./pages/Task2";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Task3 from "./pages/Task3";

function App() {
 return (
  <>
   <BrowserRouter>
    <Navbar />
    <Routes>
     <Route path="/" element={<Task1 />} />
     <Route path="/quiz" element={<Task2 />} />
     <Route path="/photos" element={<Task3 />} />
     <Route path="*" element={<Task1 />} />
    </Routes>
   </BrowserRouter>
  </>
 );
}

export default App;
