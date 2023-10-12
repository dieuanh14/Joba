import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NavBar from "../../components/NavBar";
import { Container } from "@mui/material";
import "../../scss/course.scss";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const AboutCourses = ({ courses, premiumCourses }) => {
  const navigate = useNavigate(); 

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const handleCourseClick = (selectedCourse) => {
    console.log(selectedCourse)
    navigate(`/courseContent`, { state: { selectedCourse } });
  };
  

  const courseGroups = [];
  for (let i = 0; i < courses.length; i += 4) {
    const group = courses.slice(i, i + 4);
    courseGroups.push(group);
  }

  const coursePremium = [];
  for (let i = 0; i < premiumCourses.length; i += 4) {
    const group = premiumCourses.slice(i, i + 4);
    coursePremium.push(group);
  }
  return (
    <div className="about__course">
      <NavBar />
      <h1>Software Engineering</h1>
      <Container>
        <div className="free__course">
          <h4>Free Courses</h4>
          <Slider {...settings}>
            {courseGroups.map((group, index) => (
              <div key={index}>
                <div
                  className="grid-container"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr 1fr 1fr",
                    gap: "2px",
                  }}
                >
                  {group.map((course, courseIndex) => (
                    <div key={courseIndex}>
                      <Link to={`/courseContent`} onClick={() => handleCourseClick(course)}>
                        <img
                          src={course.trailer}
                          alt=""
                          style={{
                            width: "14rem",
                            height: "7rem",
                            borderRadius: "10px",
                          }}
                        />
                      </Link>
                      <span>{course.courseName.name}</span>
                      <p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="50"
                          height="19"
                          viewBox="0 0 50 19"
                          fill="none"
                        >
                          {/* ... (your existing code) */}
                        </svg>{" "}
                        {course.access}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="premium__course">
          <h4>Premium Courses</h4>
          <Slider {...settings}>
            {coursePremium.map((group, index) => (
              <div key={index}>
                <div
                  className="grid-container"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr 1fr 1fr",
                    gap: "2px",
                  }}
                >
                  {group.map((course, courseIndex) => (
                    <div key={courseIndex}>
                      <Link to={`/courseContent/${course.courseName.name}`}>
                        <img
                          src={course.trailer}
                          alt=""
                          style={{
                            width: "14rem",
                            height: "7rem",
                            borderRadius: "10px",
                          }}
                        />
                      </Link>
                      <span>{course.courseName.name}</span>
                      <span style={{ display: "flex" }}>
                        <p
                          style={{
                            marginRight: "10px",
                            textDecoration: "line-through",
                          }}
                        >
                          {course.fee}
                        </p>
                        <p style={{ color: "red" }}>{course.discountfee}</p>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </Container>
    </div>
  );
};

export default AboutCourses;
