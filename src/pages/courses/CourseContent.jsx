import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../../scss/course/courseContent.scss";
import { Container } from "@mui/material";
export const CourseContent = () => {
  const location = useLocation();
  const { state } = location || {};
  const selectedCourse = state && state.selectedCourse;
  console.log(selectedCourse);
  if (selectedCourse) {
    return (
      <div className="course__page">
        <h1>Software Engeering</h1>
        <Container>
          <div className="course__title">
            <div className="left__title">
              <h3>Course Content for {selectedCourse.courseName.name}</h3>
              <p> {selectedCourse.courseName.content}</p>
            </div>
            <div className="right__title">
              <img src={selectedCourse.trailer} alt="" />
              <ul className="right__title__content">
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M8 13H10L10.15 11.75C10.2833 11.7 10.4042 11.6417 10.5125 11.575C10.6208 11.5083 10.7167 11.4333 10.8 11.35L11.95 11.85L12.95 10.15L11.95 9.4C11.9833 9.26667 12 9.13333 12 9C12 8.86667 11.9833 8.73333 11.95 8.6L12.95 7.85L11.95 6.15L10.8 6.65C10.7167 6.56667 10.6208 6.49167 10.5125 6.425C10.4042 6.35833 10.2833 6.3 10.15 6.25L10 5H8L7.85 6.25C7.71667 6.3 7.59583 6.35833 7.4875 6.425C7.37917 6.49167 7.28333 6.56667 7.2 6.65L6.05 6.15L5.05 7.85L6.05 8.6C6.01667 8.73333 6 8.86667 6 9C6 9.13333 6.01667 9.26667 6.05 9.4L5.05 10.15L6.05 11.85L7.2 11.35C7.28333 11.4333 7.37917 11.5083 7.4875 11.575C7.59583 11.6417 7.71667 11.7 7.85 11.75L8 13ZM9 10.5C8.58333 10.5 8.22917 10.3542 7.9375 10.0625C7.64583 9.77083 7.5 9.41667 7.5 9C7.5 8.58333 7.64583 8.22917 7.9375 7.9375C8.22917 7.64583 8.58333 7.5 9 7.5C9.41667 7.5 9.77083 7.64583 10.0625 7.9375C10.3542 8.22917 10.5 8.58333 10.5 9C10.5 9.41667 10.3542 9.77083 10.0625 10.0625C9.77083 10.3542 9.41667 10.5 9 10.5ZM3 20V15.7C2.05 14.8333 1.3125 13.8208 0.7875 12.6625C0.2625 11.5042 0 10.2833 0 9C0 6.5 0.875 4.375 2.625 2.625C4.375 0.875 6.5 0 9 0C11.0833 0 12.9292 0.6125 14.5375 1.8375C16.1458 3.0625 17.1917 4.65833 17.675 6.625L18.975 11.75C19.0583 12.0667 19 12.3542 18.8 12.6125C18.6 12.8708 18.3333 13 18 13H16V16C16 16.55 15.8042 17.0208 15.4125 17.4125C15.0208 17.8042 14.55 18 14 18H12V20H3Z"
                      fill="#1D3557"
                    />
                  </svg>
                  Level: {selectedCourse.courseName.level}
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="18"
                    viewBox="0 0 20 18"
                    fill="none"
                  >
                    <path
                      d="M2 18C1.45 18 0.979167 17.8042 0.5875 17.4125C0.195833 17.0208 0 16.55 0 16V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H18C18.55 0 19.0208 0.195833 19.4125 0.5875C19.8042 0.979167 20 1.45 20 2V16C20 16.55 19.8042 17.0208 19.4125 17.4125C19.0208 17.8042 18.55 18 18 18H2ZM2 16H4V14H2V16ZM16 16H18V14H16V16ZM9 14H11V8H9V14ZM2 12H4V10H2V12ZM16 12H18V10H16V12ZM2 8H4V6H2V8ZM16 8H18V6H16V8ZM10 6C10.2833 6 10.5208 5.90417 10.7125 5.7125C10.9042 5.52083 11 5.28333 11 5C11 4.71667 10.9042 4.47917 10.7125 4.2875C10.5208 4.09583 10.2833 4 10 4C9.71667 4 9.47917 4.09583 9.2875 4.2875C9.09583 4.47917 9 4.71667 9 5C9 5.28333 9.09583 5.52083 9.2875 5.7125C9.47917 5.90417 9.71667 6 10 6ZM2 4H4V2H2V4ZM16 4H18V2H16V4Z"
                      fill="#1D3557"
                    />
                  </svg>
                  Video: {selectedCourse.courseName.video}
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M12.25 15.75C12.45 15.75 12.625 15.675 12.775 15.525C12.925 15.375 13 15.2 13 15C13 14.8 12.925 14.625 12.775 14.475C12.625 14.325 12.45 14.25 12.25 14.25C12.05 14.25 11.875 14.325 11.725 14.475C11.575 14.625 11.5 14.8 11.5 15C11.5 15.2 11.575 15.375 11.725 15.525C11.875 15.675 12.05 15.75 12.25 15.75ZM15 15.75C15.2 15.75 15.375 15.675 15.525 15.525C15.675 15.375 15.75 15.2 15.75 15C15.75 14.8 15.675 14.625 15.525 14.475C15.375 14.325 15.2 14.25 15 14.25C14.8 14.25 14.625 14.325 14.475 14.475C14.325 14.625 14.25 14.8 14.25 15C14.25 15.2 14.325 15.375 14.475 15.525C14.625 15.675 14.8 15.75 15 15.75ZM17.75 15.75C17.95 15.75 18.125 15.675 18.275 15.525C18.425 15.375 18.5 15.2 18.5 15C18.5 14.8 18.425 14.625 18.275 14.475C18.125 14.325 17.95 14.25 17.75 14.25C17.55 14.25 17.375 14.325 17.225 14.475C17.075 14.625 17 14.8 17 15C17 15.2 17.075 15.375 17.225 15.525C17.375 15.675 17.55 15.75 17.75 15.75ZM15 20C13.6167 20 12.4375 19.5125 11.4625 18.5375C10.4875 17.5625 10 16.3833 10 15C10 13.6167 10.4875 12.4375 11.4625 11.4625C12.4375 10.4875 13.6167 10 15 10C16.3833 10 17.5625 10.4875 18.5375 11.4625C19.5125 12.4375 20 13.6167 20 15C20 16.3833 19.5125 17.5625 18.5375 18.5375C17.5625 19.5125 16.3833 20 15 20ZM4 6H14V4H4V6ZM8.675 18H2C1.45 18 0.979167 17.8042 0.5875 17.4125C0.195833 17.0208 0 16.55 0 16V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H16C16.55 0 17.0208 0.195833 17.4125 0.5875C17.8042 0.979167 18 1.45 18 2V8.7C17.5167 8.46667 17.0292 8.29167 16.5375 8.175C16.0458 8.05833 15.5333 8 15 8C14.8167 8 14.6458 8.00417 14.4875 8.0125C14.3292 8.02083 14.1667 8.04167 14 8.075V8H4V10H10.125C9.825 10.2833 9.55417 10.5917 9.3125 10.925C9.07083 11.2583 8.85833 11.6167 8.675 12H4V14H8.075C8.04167 14.1667 8.02083 14.3292 8.0125 14.4875C8.00417 14.6458 8 14.8167 8 15C8 15.55 8.05 16.0625 8.15 16.5375C8.25 17.0125 8.425 17.5 8.675 18Z"
                      fill="#1D3557"
                    />
                  </svg>
                  Reading: {selectedCourse.courseName.reading}
                </li>
                <li>
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M13.3 14.7L14.7 13.3L11 9.6V5H9V10.4L13.3 14.7ZM10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20Z"
                      fill="#1D3557"
                    />
                  </svg>
                  Time: {selectedCourse.courseName.time}{" "}
                </li>
              </ul>
            </div>
          </div>
          <div className="course__content">
            <h3>Main Content</h3>
            <div style={{ display: "flex" }}>
              <span>
                <span style={{ fontWeight: "900", marginRight: "2px" }}>
                  {selectedCourse.courseName.video}
                </span>
                chương
              </span>
              <span style={{ marginLeft: "2px", marginRight: "2px" }}> - </span>
              <span>
                <span style={{ fontWeight: "900", marginRight: "2px" }}>8</span>
                bài
              </span>
              <span> - </span>

              <span>
                <span style={{ fontWeight: "900", marginRight: "2px" }}>
                  Time: {selectedCourse.courseName.time}
                </span>
              </span>
            </div>
            <div className="course__video">
              {selectedCourse &&
                selectedCourse.tutorial &&
                selectedCourse.tutorial.map((tutorial, index) =>
                  index % 2 === 0 ? (
                    <div key={index} className="course__video-row">
                      <div className="tutorial-link">{tutorial.session}</div>
                      <Link
                        to="/readingCourse"
                        state={{
                          selectedTutorial: tutorial,
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="19"
                          height="19"
                          viewBox="0 0 19 19"
                          fill="#E63946"
                        >
                          <path d="M7.125 13.775L13.775 9.5L7.125 5.225V13.775Z" />
                        </svg>
                        <span className="tutorial-info">
                          <span
                            className={`tutorial-name ${
                              index % 2 === 0 ? "even-tutorial" : "odd-tutorial"
                            }`}
                          >
                            {tutorial.tutorialName}
                          </span>
                          <span className="tutorial-duration">
                            {tutorial.duration}
                          </span>
                        </span>
                      </Link>
                      {index + 1 < selectedCourse.tutorial.length && (
                        <div className="course__video-row">
                          <Link
                            to="/readingCourse"
                            state={{
                              selectedTutorial:
                                selectedCourse.tutorial[index + 1],
                            }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="19"
                              height="19"
                              viewBox="0 0 19 19"
                              fill="#E63946"
                            >
                              <path d="M7.125 13.775L13.775 9.5L7.125 5.225V13.775Z" />
                            </svg>

                            <span className="tutorial-info">
                              <span
                                className={`tutorial-name ${
                                  index % 2 === 0
                                    ? "even-tutorial"
                                    : "odd-tutorial"
                                }`}
                              >
                                {
                                  selectedCourse.tutorial[index + 1]
                                    .tutorialName
                                }
                              </span>
                              <span className="tutorial-duration">
                                {selectedCourse.tutorial[index + 1].duration}
                              </span>
                            </span>
                          </Link>
                        </div>
                      )}
                    </div>
                  ) : null
                )}
            </div>
          </div>
        </Container>
      </div>
    );
  } else {
    return (
      <div>
        <h2>Course Not Found</h2>
        <p>The requested course could not be found.</p>
      </div>
    );
  }
};
