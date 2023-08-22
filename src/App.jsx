import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Major from "./pages/Major";
import Course from "./pages/Course";
import Premium from "./pages/Premium";
function App() {
  return (
    <Routes>
    <Route path="/" element={ <Home/> } />
    <Route path="/major" element={ <Major/> } />
    <Route path="/course" element={ <Course/> } />
    <Route path="/premium" element={ <Premium/> } />



  </Routes>
  );
}

export default App;
