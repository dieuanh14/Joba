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
import AboutYourself from "./pages/aboutYourself/AboutYourself";
import AboutYourself1 from "./pages/aboutYourself/AboutYourself1";
import Register from "./pages/Register";
import TestYourself from "./pages/testYourself/TestYourselfCarousel";
import TestYourself1 from "./pages/testYourself/TestYourself";
import TestResult from "./pages/testYourself/TestResult";
import Login from "./pages/Login";
import Payment from "./pages/Payment";
import OverallMajor from "./pages/aboutYourself/OverallMajor";
import MainSE from "./pages/aboutYourself/MainSE";
import MajorMobile from "./pages/aboutYourself/MajorMobile";
import MajorBA from "./pages/aboutYourself/MajorBA";
import MajorSE from "./pages/aboutYourself/MajorSE";
import Dasboard from "./pages/dashboard/Dashboard";
import { gapi } from "gapi-script";
import { useEffect } from "react";
import Accessibility from "./pages/dashboard/Accessibility";
import TestYourselfCarousel from "./pages/testYourself/TestYourselfCarousel";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dasboard />} />
        <Route path="/dashboard/accessibility" element={<Accessibility />} />
        <Route path="/major" element={<Major />} />
        <Route path="/course" element={<Course />} />
        <Route path="/premium" element={<Premium />} />
        <Route path="/aboutSE" element={<AboutSE />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/yourself" element={<AboutYourself />} />
        <Route path="/yourself1" element={<AboutYourself1 />} />
        <Route path="/testYourself" element={<TestYourself />} />
        <Route path="/testYourselfCarousel" element={<TestYourselfCarousel />} />
        <Route path="/testResult" element={<TestResult />} />
        <Route path="/yourself1/overallMajor/mainSE" element={<MainSE />} />
        <Route
          path="/yourself1/overallMajor/mainSE/majorMobile"
          element={<MajorMobile />}
        />
        <Route
          path="/yourself1/overallMajor/mainSE/majorBA"
          element={<MajorBA />}
        />
        <Route
          path="/yourself1/overallMajor/mainSE/majorSE"
          element={<MajorSE />}
        />

        <Route path="/payment" element={<Payment />} />
        <Route path="/yourself1/overallMajor" element={<OverallMajor />} />
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
