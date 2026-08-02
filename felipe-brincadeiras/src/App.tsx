import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SayMyName from "./pages/Saymyname";
import Grades from "./pages/Grades";

export function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/saymyname" element={<SayMyName />} />
        <Route path="/grades" element={<Grades />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
