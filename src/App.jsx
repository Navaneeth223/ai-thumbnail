import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Generate from "./pages/Generate";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/generate" element={<Generate />} />
      </Routes>
    </BrowserRouter>
  );
}
