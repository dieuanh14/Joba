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
import AboutYourself from "./pages/AboutYourself";
import Register from "./pages/Register";
import TestYourself from "./pages/testYourself/TestYourself";
import TestYourself1 from "./pages/testYourself/TestYourself1";
import TestResult from "./pages/testYourself/TestResult";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/major" element={<Major />} />
        <Route path="/course" element={<Course />} />
        <Route path="/premium" element={<Premium />} />
        <Route path="/aboutSE" element={<AboutSE />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route path="/yourself" element={<AboutYourself />} />
        <Route path="/testYourself" element={<TestYourself />} />
        <Route path="/testYourself1" element={<TestYourself1 />} />
        <Route path="/testResult" element={<TestResult />} />
        <Route path="/aboutCourse" element={<AboutCourses />} />
        <Route path="/aboutCourse/overallSE" element={<OverallSE />} />
        <Route
          path="/aboutCourse/overallSE/definitionSE"
          element={<DefinitionSE />}
        />
        <Route
          path="/aboutCourse/overallSE/definitionSE/homework"
          element={<HomeWork />}
        />
      </Routes>
    </>
  );
}

export default App;
