import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import "../../scss/course/readingCourse.scss";
import { Link, useNavigate } from "react-router-dom";
import { Button, Container } from "@mui/material";
function ReadingCourse() {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div className="reading__course">
      <h2>Course Introduction</h2>
      <Container>
        <div className="back__icon">
          <Button onClick={handleGoBack} className="btn__back">
            <ArrowBackIosIcon />
            Back
          </Button>
        </div>
        <div className="main__reading">
          <div className="reading__left">
            <iframe
              style={{
                height: "25rem",
                width: "45rem",
                display: "flex",
                borderRadius: "8px",
              }}
              src="https://www.youtube.com/embed/fgt0xpPfq1U?si=t_aeZNf3jyXaEyJW"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <div className="reading__content">
              <h3>Bài giới thiệu</h3>
              <p>
                Ở 4 chương mở đầu này, JOBA sẽ cung cấp cho bạn những thông tin
                tổng quan nhất về ngành IT nói chung và lập trình web nói riêng{" "}
              </p>
            </div>
          </div>
          <div className="reading__right">
            <h5>1. Introduction</h5>
            <div className="first__part">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "1rem",
                }}
              >
                <Link
                  to="/readingCourse"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <span style={{ display: "flex" }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="none"
                    >
                      <path
                        d="M7.125 13.775L13.775 9.5L7.125 5.225V13.775ZM9.5 19C8.18583 19 6.95083 18.7506 5.795 18.2519C4.63917 17.7531 3.63375 17.0763 2.77875 16.2213C1.92375 15.3663 1.24688 14.3608 0.748125 13.205C0.249375 12.0492 0 10.8142 0 9.5C0 8.18583 0.249375 6.95083 0.748125 5.795C1.24688 4.63917 1.92375 3.63375 2.77875 2.77875C3.63375 1.92375 4.63917 1.24688 5.795 0.748125C6.95083 0.249375 8.18583 0 9.5 0C10.8142 0 12.0492 0.249375 13.205 0.748125C14.3608 1.24688 15.3663 1.92375 16.2213 2.77875C17.0763 3.63375 17.7531 4.63917 18.2519 5.795C18.7506 6.95083 19 8.18583 19 9.5C19 10.8142 18.7506 12.0492 18.2519 13.205C17.7531 14.3608 17.0763 15.3663 16.2213 16.2213C15.3663 17.0763 14.3608 17.7531 13.205 18.2519C12.0492 18.7506 10.8142 19 9.5 19Z"
                        fill="#E63946"
                      />
                    </svg>
                    First Introduction
                  </span>
                  <span>11:35</span>
                </Link>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "1rem",
                }}
              >
                <Link
                  to="/readingCourse"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <span style={{ display: "flex" }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="none"
                    >
                      <path
                        d="M7.125 13.775L13.775 9.5L7.125 5.225V13.775ZM9.5 19C8.18583 19 6.95083 18.7506 5.795 18.2519C4.63917 17.7531 3.63375 17.0763 2.77875 16.2213C1.92375 15.3663 1.24688 14.3608 0.748125 13.205C0.249375 12.0492 0 10.8142 0 9.5C0 8.18583 0.249375 6.95083 0.748125 5.795C1.24688 4.63917 1.92375 3.63375 2.77875 2.77875C3.63375 1.92375 4.63917 1.24688 5.795 0.748125C6.95083 0.249375 8.18583 0 9.5 0C10.8142 0 12.0492 0.249375 13.205 0.748125C14.3608 1.24688 15.3663 1.92375 16.2213 2.77875C17.0763 3.63375 17.7531 4.63917 18.2519 5.795C18.7506 6.95083 19 8.18583 19 9.5C19 10.8142 18.7506 12.0492 18.2519 13.205C17.7531 14.3608 17.0763 15.3663 16.2213 16.2213C15.3663 17.0763 14.3608 17.7531 13.205 18.2519C12.0492 18.7506 10.8142 19 9.5 19Z"
                        fill="#E63946"
                      />
                    </svg>
                    Second Introduction
                  </span>
                  <span>10:5</span>
                </Link>
              </div>
              <hr />
            </div>

            <div className="second__part">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "1rem",
                }}
              >
                <Link
                  to="/readingCourse"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <span style={{ display: "flex" }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="none"
                    >
                      <path
                        d="M7.125 13.775L13.775 9.5L7.125 5.225V13.775ZM9.5 19C8.18583 19 6.95083 18.7506 5.795 18.2519C4.63917 17.7531 3.63375 17.0763 2.77875 16.2213C1.92375 15.3663 1.24688 14.3608 0.748125 13.205C0.249375 12.0492 0 10.8142 0 9.5C0 8.18583 0.249375 6.95083 0.748125 5.795C1.24688 4.63917 1.92375 3.63375 2.77875 2.77875C3.63375 1.92375 4.63917 1.24688 5.795 0.748125C6.95083 0.249375 8.18583 0 9.5 0C10.8142 0 12.0492 0.249375 13.205 0.748125C14.3608 1.24688 15.3663 1.92375 16.2213 2.77875C17.0763 3.63375 17.7531 4.63917 18.2519 5.795C18.7506 6.95083 19 8.18583 19 9.5C19 10.8142 18.7506 12.0492 18.2519 13.205C17.7531 14.3608 17.0763 15.3663 16.2213 16.2213C15.3663 17.0763 14.3608 17.7531 13.205 18.2519C12.0492 18.7506 10.8142 19 9.5 19Z"
                        fill="#E63946"
                      />
                    </svg>
                    First Introduction
                  </span>
                  <span>11:35</span>
                </Link>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "1rem",
                }}
              >
                <Link
                  to="/readingCourse"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <span style={{ display: "flex" }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="20"
                      viewBox="0 0 16 20"
                      fill="none"
                    >
                      <path
                        d="M4 16H12V14H4V16ZM4 12H12V10H4V12ZM2 20C1.45 20 0.979167 19.8042 0.5875 19.4125C0.195833 19.0208 0 18.55 0 18V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H10L16 6V18C16 18.55 15.8042 19.0208 15.4125 19.4125C15.0208 19.8042 14.55 20 14 20H2ZM9 7H14L9 2V7Z"
                        fill="#E63946"
                      />
                    </svg>
                    Học IT xong ra làm gì?...{" "}
                  </span>
                  <span>~1 min</span>
                </Link>
              </div>
              <hr />
            </div>
            <div className="third__part">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "1rem",
                }}
              >
                <Link
                  to="/readingCourse"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <span style={{ display: "flex" }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="none"
                    >
                      <path
                        d="M7.125 13.775L13.775 9.5L7.125 5.225V13.775ZM9.5 19C8.18583 19 6.95083 18.7506 5.795 18.2519C4.63917 17.7531 3.63375 17.0763 2.77875 16.2213C1.92375 15.3663 1.24688 14.3608 0.748125 13.205C0.249375 12.0492 0 10.8142 0 9.5C0 8.18583 0.249375 6.95083 0.748125 5.795C1.24688 4.63917 1.92375 3.63375 2.77875 2.77875C3.63375 1.92375 4.63917 1.24688 5.795 0.748125C6.95083 0.249375 8.18583 0 9.5 0C10.8142 0 12.0492 0.249375 13.205 0.748125C14.3608 1.24688 15.3663 1.92375 16.2213 2.77875C17.0763 3.63375 17.7531 4.63917 18.2519 5.795C18.7506 6.95083 19 8.18583 19 9.5C19 10.8142 18.7506 12.0492 18.2519 13.205C17.7531 14.3608 17.0763 15.3663 16.2213 16.2213C15.3663 17.0763 14.3608 17.7531 13.205 18.2519C12.0492 18.7506 10.8142 19 9.5 19Z"
                        fill="#E63946"
                      />
                    </svg>
                    First Introduction
                  </span>
                  <span>11:35</span>
                </Link>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "1rem",
                }}
              >
                <Link
                  to="/readingCourse"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <span style={{ display: "flex" }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="20"
                      viewBox="0 0 16 20"
                      fill="none"
                    >
                      <path
                        d="M4 16H12V14H4V16ZM4 12H12V10H4V12ZM2 20C1.45 20 0.979167 19.8042 0.5875 19.4125C0.195833 19.0208 0 18.55 0 18V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H10L16 6V18C16 18.55 15.8042 19.0208 15.4125 19.4125C15.0208 19.8042 14.55 20 14 20H2ZM9 7H14L9 2V7Z"
                        fill="#E63946"
                      />
                    </svg>
                    Học IT xong ra làm gì?...{" "}
                  </span>
                  <span>~1 min</span>
                </Link>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default ReadingCourse;
