
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Major from "./pages/Major";
import Course from "./pages/Course";
import Premium from "./pages/Premium";
import AboutSE from "./pages/AboutSE";
import AboutCourses from "./pages/AboutCourses";
import OverallSE from "./pages/OverallSE";
import DefinitionSE from "./pages/DefinitionSE";
import HomeWork from "./pages/HomeWork";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/major" element={<Major />} />
        <Route path="/course" element={<Course />} />
        <Route path="/premium" element={<Premium />} />
        <Route path="/aboutSE" element={<AboutSE />} />
        <Route path="/aboutCourse" element={<AboutCourses />} />
        <Route path="/aboutCourse/overallSE" element={<OverallSE />} />
        <Route path="/aboutCourse/overallSE/definitionSE" element={<DefinitionSE />} />
        <Route path="/aboutCourse/overallSE/definitionSE/homework" element={<HomeWork />} />


      </Routes>
    </>
  );
}

export default App;
