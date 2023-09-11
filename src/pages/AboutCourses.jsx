import React from "react";
import NavBar from "../components/NavBar";
import Carousel from "../components/Carousel";
const SLIDES = [
  {
    definition: "Beginning",
    title: "Bài đọc: Những điều cần biết về Kỹ thuật phần mềm",
    description: "Bài tập: Câu hỏi thắc mắc về ngành học ",
  },
  {
    definition: "Beginning",
    title: "Bài đọc: Những điều cần biết về Kỹ thuật phần mềm",
    description: "Bài tập: Câu hỏi thắc mắc về ngành học ",
  },
  {
    definition: "Beginning",
    title: "Bài đọc: Những điều cần biết về Kỹ thuật phần mềm",
    description: "Bài tập: Câu hỏi thắc mắc về ngành học ",
  },
];

function AboutCourses() {
  return (
    <div>
      <NavBar />
      <Carousel slides={SLIDES} />
    </div>
  );
}

export default AboutCourses;
