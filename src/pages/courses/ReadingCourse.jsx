import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import NavBar from "../../components/NavBar";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import "../../scss/course/readingCourse.scss";
import { Container } from "@mui/material";
const ReadingCourse = () => {
  const location = useLocation();
  const { state } = location || {};
  const selectedTutorial = state && state.selectedTutorial;
  console.log(selectedTutorial.video.description);
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  if (selectedTutorial) {
    return (
      <div className="reading__course">
        <NavBar />
        <h1>{selectedTutorial.tutorialName}</h1>
        <Container>
          <div className="back__icon">
            <Link onClick={handleGoBack}>
              <ArrowBackIosIcon />
              Back
            </Link>
          </div>
          <div className="main__reading__course">
            <div className="left__reading__course">
              <iframe
                style={{
                  height: "20rem",
                  width: "40rem",
                  display: "flex",
                  borderRadius: "8px",
                }}
                src={selectedTutorial.video.url}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
              <h3>{selectedTutorial.tutorialName}</h3>
              <div className="warning">
                <span style={{ fontWeight: "900" }}>
                  Đừng để lỗi làm gián đoạn con đường học vấn của bạn !!!
                </span>
                <span>
                  Nếu video bị lỗi, bạn có thể click vào đường link bên dưới để
                  có thể xem tiếp bài học nhé.
                </span>
                <span>"https://youtu.be/Da1tpV9TMU0?si=i2R41lL--Fo9dR0t"</span>
              </div>
            </div>
            <div className="right__reading__course">
              <h4>Summary</h4>
              <div className="summary__course">
                <span>
                  <span style={{ fontWeight: "900" }}>
                    {selectedTutorial.tutorialName}:{" "}
                  </span>
                  {selectedTutorial.video.description}
                </span>
                <span>
                  {selectedTutorial.video.operation}
                </span>
                <span style={{ fontWeight: "900" }}>Ưu điểm: </span>
                <ul>
                  <li> {selectedTutorial.video.advantage}</li>
                  <li> {selectedTutorial.video.advantage}</li>
                  <li> {selectedTutorial.video.advantage}</li>
                  <li> {selectedTutorial.video.advantage}</li>
                </ul>
                <span style={{ fontWeight: "900" }}>Nhược điểm: </span>
                <ul>
                  <li> {selectedTutorial.video.disadvantage}</li>
                  <li> {selectedTutorial.video.disadvantage1}</li>

                </ul>
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  } else {
    return (
      <div>
        <h2>Tutorial Not Found</h2>
        <p>The requested tutorial could not be found.</p>
      </div>
    );
  }
};

export default ReadingCourse;
