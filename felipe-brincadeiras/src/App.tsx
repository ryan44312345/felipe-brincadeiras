import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SayMyName from "./pages/Saymyname";

export function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/saymyname" element={<SayMyName />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
