import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Clients from "./pages/Clients";
import Cloud from "./pages/Cloud";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/cloud" element={<Cloud />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
