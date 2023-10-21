import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Planet from "./Pages/Planet";
import Header from "./Components/Header";
import Menu from "./Pages/Menu";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-[#070724] bg-[url('./images/background-stars.svg')] bg-no-repeat bg-cover">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/:planet" element={<Planet />} />
      </Routes>
    </div>
  );
}

export default App;
