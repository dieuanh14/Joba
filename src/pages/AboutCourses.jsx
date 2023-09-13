import React from "react";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";

import human from "../assets/img/man.png";
import media2 from "../assets/img/casual-life-3d-side-view-of-young-woman-sitting-and-waving-at-robot.png";
import media3 from "../assets/img/3d-casual-life-young-man-sitting-with-a-laptop-and-waving-his-hand.png";
import "../scss/course.scss";
const SLIDES = [
  {
    definition: "Beginning",
    title: "Video: Giới thiệu ngành học ",
    description: "Bài đọc: Những điều cần biết về Kỹ thuật phần mềm ",
    description1: "Bài tập: Câu hỏi thắc mắc về ngành học ",
  },
  {
    definition: "Overall",
    title: "Video: Làm quen với coding ",
    description: "Bài đọc: Những điều cần biết về coding và phần mềm ",
    description1: "Bài tập: Câu hỏi thắc mắc về bài học",
  },
  {
    definition: "Interact with machine",
    title: "Video: Ngôn ngữ lập trình ",
    description: "Bài đọc: Ngôn ngữ máy và những điều cần biết ",
    description1: "Bài tập: Câu hỏi thắc mắc về bài học",
  },
];

function AboutCourses() {
  return (
    <div className="about__course">
      <NavBar />
      <h1>Software Engeenring</h1>
      <div className="main__courses">
      
        <div className="inner__course">
        <Link to="overallSE">
          <img src={human} alt="" />
          <div className="slide__detail">
            <h3>Beginning</h3>
            <span>
              <span style={{ fontWeight: "900" }}> Video: </span>
              Giới thiệu ngành học{" "}
            </span>
            <span>
              <span style={{ fontWeight: "900" }}> Reading: </span>
              Những điều cần biết về Kỹ thuật phần mềm
            </span>
            <span>
              <span style={{ fontWeight: "900" }}> Homework: </span>
              Câu hỏi thắc mắc về ngành học{" "}
            </span>
          </div>
          </Link>
        </div>
        <div className="inner__course">
          <img src={media2} alt="" />
          <div className="slide__detail">
            <h3>Beginning</h3>
            <span>
              <span style={{ fontWeight: "900" }}> Video: </span>
              Giới thiệu ngành học{" "}
            </span>
            <span>
              <span style={{ fontWeight: "900" }}> Reading: </span>
              Những điều cần biết về Kỹ thuật phần mềm
            </span>
            <span>
              <span style={{ fontWeight: "900" }}> Homework: </span> Câu hỏi
              thắc mắc về ngành học{" "}
            </span>
          </div>
        </div>
        <div className="inner__course">
          <img
            src={media3}
            alt=""
            style={{ height: "10rem", width: "11rem" }}
          />
          <div className="slide__detail">
            <h3>Beginning</h3>
            <span>
              <span style={{ fontWeight: "900" }}> Video: </span>
              Giới thiệu ngành học{" "}
            </span>
            <span>
              <span style={{ fontWeight: "900" }}> Reading: </span>
              Những điều cần biết về Kỹ thuật phần mềm
            </span>
            <span>
              <span style={{ fontWeight: "900" }}> Homework: </span> Câu hỏi
              thắc mắc về ngành học{" "}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutCourses;
