import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Major from "./pages/Major";
import Course from "./pages/courses/Course";
import Premium from "./pages/Premium";
import AboutSE from "./pages/AboutSE";
import AboutCourses from "./pages/courses/AboutCourses";
import OverallSE from "./pages/OverallSE";
import DefinitionSE from "./pages/DefinitionSE";
import HomeWork from "./pages/HomeWork";
import AboutYourself from "./pages/aboutYourself/AboutYourself";
import AboutYourself1 from "./pages/aboutYourself/AboutYourself1";
import Register from "./pages/Register";
import TestYourself from "./pages/testYourself/TestYourselfCarousel";
import TestResult from "./pages/testYourself/TestResult";
import Login from "./pages/Login";
import Payment from "./pages/Payment";
import OverallMajor from "./pages/aboutYourself/OverallMajor";
import MainSE from "./pages/aboutYourself/MainSE";
import MajorMobile from "./pages/aboutYourself/MajorMobile";
import MajorBA from "./pages/aboutYourself/MajorBA";
import MajorSE from "./pages/aboutYourself/MajorSE";
import Dasboard from "./pages/dashboard/Dashboard";
import TestYourselfCarousel from "./pages/testYourself/TestYourselfCarousel";
import FailureResult from "./pages/testYourself/FailureResult";
import ReactGA from "react-ga";
import ForgotPwd from "./pages/forgotPwd/ForgotPwd";
import ResetPwd from "./pages/forgotPwd/ResetPwd";
import { CourseContent } from "./pages/courses/CourseContent";
import courses from "./pages/courses/courses.json";
import premiumCourses from "./pages/courses/premiumCourses.json";
import ReadingCourse from "./pages/courses/ReadingCourse";
import ReadMore from "./pages/courses/ReadMore";
import PaymentProcess from "./pages/PaymentProcess";
function App() {
  const TRACKING_ID = "UA-288460125-1";
  ReactGA.initialize(TRACKING_ID);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/forgotPwd" element={<ForgotPwd />} />
        <Route path="/resetPwd" element={<ResetPwd />} />
        <Route path="/dashboard" element={<Dasboard />} />
        <Route path="/major" element={<Major />} />
        <Route path="/course" element={<Course />} />
        <Route path="/courseContent" element={<CourseContent />} />
        <Route path="/readingCourse" element={<ReadingCourse />} />
        <Route path="/readMore" element={<ReadMore />} />
        <Route path="/premium" element={<Premium />} />
        <Route path="/paymentProcess" element={<PaymentProcess />} />
        <Route path="/aboutSE" element={<AboutSE />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/yourself" element={<AboutYourself />} />
        <Route path="/yourself1" element={<AboutYourself1 />} />
        <Route path="/testYourself" element={<TestYourself />} />
        <Route
          path="/testYourselfCarousel"
          element={<TestYourselfCarousel />}
        />
        <Route path="/testResult" element={<TestResult />} />
        <Route path="/failureResult" element={<FailureResult />} />
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
        <Route
          path="/aboutCourse"
          element={
            <AboutCourses courses={courses} premiumCourses={premiumCourses} />
          }
        />

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
