import React from "react";
import NavBar from "../components/NavBar";
import course from "../scss/course.scss";
import it from "../assets/it.png";
import gd from "../assets/gd.png";
import marketing from "../assets/marketing.png";
import { Link } from "react-router-dom";
function Course() {
  return (
    <>
      <NavBar />

      <h1 style={{padding:'2rem'}}>Courses</h1>
      <div className="container">
        <div className="all_courses">
          <div className="course_1">
            <Link to="/aboutCourse">
              <img src={it} alt="" />
              <span> Software Engeneering</span>
            </Link>
          </div>
          <div className="course_2">
            <img src={gd} alt="" />
            <span>Graphic Design</span>
          </div>
          <div className="course_3">
            <img src={marketing} alt="" />
            <span>Digital Marketing</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Course;
