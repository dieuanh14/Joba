import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Major from "./pages/Major";
import Course from "./pages/Course";
import Premium from "./pages/Premium";
import AboutSE from "./pages/AboutSE";
import AboutCourses from "./pages/AboutCourses";
import OverallSE from "./pages/OverallSE";

// import EmblaCarousel from "../src/js/EmblaCarousel";
// const SLIDE_COUNT = 12;
// const slides = Array.from(Array(SLIDE_COUNT).keys());
function App() {
  return (
    <>
      {/* <EmblaCarousel slides={slides} /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/major" element={<Major />} />
        <Route path="/course" element={<Course />} />
        <Route path="/premium" element={<Premium />} />
        <Route path="/aboutSE" element={<AboutSE />} />
        <Route path="/aboutCourse" element={<AboutCourses />} />
        <Route path="/aboutCourse/overallSE" element={<OverallSE />} />


      </Routes>
    </>
  );
}

export default App;
