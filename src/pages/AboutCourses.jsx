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
        <div style={{ display: "flex" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="45"
            height="45"
            viewBox="0 0 45 45"
            fill="none"
            style={{ height: "35px" }}
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M22.5 45C34.9264 45 45 34.9264 45 22.5C45 10.0736 34.9264 0 22.5 0C10.0736 0 0 10.0736 0 22.5C0 34.9264 10.0736 45 22.5 45ZM10.2271 11.6334L12.9544 27.1021H32.0453L34.7726 11.6334L27.2726 18.6646L22.4998 10.2271L17.7271 18.6646L10.2271 11.6334ZM30.6817 32.7271C31.4998 32.7271 32.0453 32.1646 32.0453 31.3209V29.9146H12.9544V31.3209C12.9544 32.1646 13.4998 32.7271 14.318 32.7271H30.6817Z"
              fill="#FFB703"
            />
          </svg>
          <div className="inner__course">
            <img src={media2} alt="" className="media2" />
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
        <div style={{ display: "flex" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="45"
            height="45"
            viewBox="0 0 45 45"
            fill="none"
            style={{ height: "35px" }}
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M22.5 45C34.9264 45 45 34.9264 45 22.5C45 10.0736 34.9264 0 22.5 0C10.0736 0 0 10.0736 0 22.5C0 34.9264 10.0736 45 22.5 45ZM10.2271 11.6334L12.9544 27.1021H32.0453L34.7726 11.6334L27.2726 18.6646L22.4998 10.2271L17.7271 18.6646L10.2271 11.6334ZM30.6817 32.7271C31.4998 32.7271 32.0453 32.1646 32.0453 31.3209V29.9146H12.9544V31.3209C12.9544 32.1646 13.4998 32.7271 14.318 32.7271H30.6817Z"
              fill="#FFB703"
            />
          </svg>
          <div className="inner__course">
            <img
              src={media3}
              className="media3 "
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
    </div>
  );
}

export default AboutCourses;
