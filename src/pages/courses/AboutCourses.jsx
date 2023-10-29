// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import NavBar from "../../components/NavBar";
// import { Container } from "@mui/material";
// import "../../scss/course/course.scss";
// import { Link, useNavigate } from "react-router-dom";

// const AboutCourses = ({ courses, premiumCourses }) => {
//   const navigate = useNavigate();

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };
//   const handleCourseClick = (selectedCourse) => {
//     navigate("/courseContent", { state: { selectedCourse } });
//   };
//   const courseGroups = [];
//   for (let i = 0; i < courses.length; i += 4) {
//     const group = courses.slice(i, i + 4);
//     courseGroups.push(group);
//   }

//   const coursePremium = [];
//   for (let i = 0; i < premiumCourses.length; i += 4) {
//     const group = premiumCourses.slice(i, i + 4);
//     coursePremium.push(group);
//   }
//   return (
//     <div className="about__course">
//       <NavBar />
//       <h1>Software Engineering</h1>
//       <Container>
//         <div className="free__course">
//           <h4>Free Courses</h4>
//           <Slider {...settings}>
//             {courseGroups.map((group, index) => (
//               <div key={index}>
//                 <div
//                   className="grid-container"
//                   style={{
//                     display: "grid",
//                     gridTemplateColumns: "1fr 1fr 1fr 1fr",
//                     gap: "2px",
//                   }}
//                 >
//                   {group.map((course, courseIndex) => (
//                     <div key={courseIndex}>
//                       <img
//                         src={course.trailer}
//                         onClick={() => handleCourseClick(course)}
//                         style={{
//                           width: "14rem",
//                           height: "7rem",
//                           borderRadius: "10px",
//                         }}
//                       />
//                       <span style={{ marginTop: "4px" }}>
//                         {course.courseName.name}
//                       </span>
//                       <p>
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           width="50"
//                           height="19"
//                           viewBox="0 0 50 19"
//                           fill="none"
//                           style={{ marginRight: "4px" }}
//                         >
//                           <path
//                             d="M0 19V17.4658C0 16.089 0.739875 14.9384 2.21963 14.014C3.69938 13.0895 5.58801 12.6273 7.88551 12.6273C8.19704 12.6273 8.54751 12.647 8.93692 12.6863C9.32632 12.7257 9.75467 12.7847 10.222 12.8634C9.91044 13.4534 9.68653 14.0533 9.55023 14.663C9.41394 15.2728 9.34579 15.8727 9.34579 16.4627V19H0ZM14.0187 19V16.6988C14.0187 15.8398 14.2718 15.0547 14.778 14.3433C15.2843 13.632 16.0436 13.0207 17.0561 12.5093C18.0685 11.9979 19.2368 11.6144 20.5607 11.3587C21.8847 11.103 23.3567 10.9752 24.9766 10.9752C26.6277 10.9752 28.1153 11.103 29.4393 11.3587C30.7632 11.6144 31.9315 11.9979 32.9439 12.5093C33.9564 13.0207 34.7157 13.632 35.222 14.3433C35.7282 15.0547 35.9813 15.8398 35.9813 16.6988V19H14.0187ZM40.6542 19V16.4804C40.6542 15.8085 40.5861 15.1754 40.4498 14.581C40.3135 13.9866 40.109 13.4141 39.8365 12.8634C40.3427 12.7847 40.7808 12.7257 41.1507 12.6863C41.5206 12.647 41.8614 12.6273 42.1729 12.6273C44.4704 12.6273 46.3493 13.0895 47.8096 14.014C49.2699 14.9384 50 16.089 50 17.4658V19H40.6542ZM15.6542 17.3478H34.3458V16.6988C34.3458 15.4793 33.4891 14.4959 31.7757 13.7484C30.0623 13.001 27.8037 12.6273 25 12.6273C22.1963 12.6273 19.9377 13.001 18.2243 13.7484C16.5109 14.4959 15.6542 15.4793 15.6542 16.6988V17.3478ZM7.87004 10.4441C7.0626 10.4441 6.37656 10.1552 5.81192 9.57742C5.24727 8.99967 4.96495 8.30512 4.96495 7.49379C4.96495 6.70704 5.25094 6.02847 5.8229 5.45807C6.39482 4.88768 7.08236 4.60248 7.88551 4.60248C8.66433 4.60248 9.34579 4.88768 9.92991 5.45807C10.514 6.02847 10.8061 6.71292 10.8061 7.51143C10.8061 8.28642 10.5247 8.96894 9.96197 9.55901C9.3992 10.1491 8.70189 10.4441 7.87004 10.4441ZM42.1729 10.4441C41.3941 10.4441 40.7126 10.1491 40.1285 9.55901C39.5444 8.96894 39.2523 8.28642 39.2523 7.51143C39.2523 6.71292 39.5444 6.02847 40.1285 5.45807C40.7126 4.88768 41.3979 4.60248 42.1842 4.60248C42.9944 4.60248 43.6819 4.88768 44.2465 5.45807C44.8111 6.02847 45.0935 6.70704 45.0935 7.49379C45.0935 8.30512 44.8136 8.99967 44.2538 9.57742C43.694 10.1552 43.0004 10.4441 42.1729 10.4441ZM25.0206 9.20497C23.7608 9.20497 22.683 8.7575 21.7874 7.86258C20.8917 6.96765 20.4439 5.88095 20.4439 4.60248C20.4439 3.29845 20.8869 2.20536 21.7728 1.32321C22.6587 0.441071 23.7344 0 25 0C26.2909 0 27.373 0.439065 28.2462 1.3172C29.1195 2.19537 29.5561 3.28352 29.5561 4.58166C29.5561 5.85434 29.1214 6.94306 28.2522 7.84783C27.3828 8.75259 26.3057 9.20497 25.0206 9.20497ZM25.0292 7.55279C25.8275 7.55279 26.509 7.25776 27.0736 6.6677C27.6382 6.07764 27.9206 5.3794 27.9206 4.57298C27.9206 3.76656 27.6407 3.07816 27.0809 2.50776C26.5211 1.93737 25.8275 1.65217 25 1.65217C24.2212 1.65217 23.5397 1.93491 22.9556 2.50039C22.3715 3.06586 22.0794 3.76656 22.0794 4.60248C22.0794 5.38923 22.3715 6.07764 22.9556 6.6677C23.5397 7.25776 24.2309 7.55279 25.0292 7.55279Z"
//                             fill="#1C1B1F"
//                           />
//                         </svg>
//                         {course.access}
//                       </p>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </Slider>
//         </div>
//         <div className="premium__course">
//           <h4>Premium Courses</h4>
//           <Slider {...settings}>
//             {coursePremium.map((group, index) => (
//               <div key={index} style={{ margin: "0 auto" }}>
//                 <div
//                   className="grid-container"
//                   style={{
//                     display: "grid",
//                     gridTemplateColumns: "1fr 1fr 1fr 1fr",
//                     gap: "2px",
//                     margin: "0 auto",
//                   }}
//                 >
//                   {group.map((course, courseIndex) => (
//                     <div key={courseIndex}>
//                       <img
//                         onClick={() => handleCourseClick(course)}
//                         src={course.trailer}
//                         alt=""
//                         style={{
//                           width: "14rem",
//                           height: "7rem",
//                           borderRadius: "10px",
//                         }}
//                       />
//                       <span>{course.courseName.name}</span>
//                       <Link to="/payment">
//                         <span style={{ display: "flex" }}>
//                           <p
//                             style={{
//                               marginRight: "10px",
//                               textDecoration: "line-through",
//                             }}
//                           >
//                             {course.fee}
//                           </p>
//                           <p style={{ color: "red" }}>{course.discountfee}</p>
//                         </span>
//                       </Link>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </Slider>
//         </div>
//       </Container>
//     </div>
//   );
// };

// export default AboutCourses;

import { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NavBar from "../../components/NavBar";
import { Container } from "@mui/material";
import "../../scss/course/course.scss";
import { useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchPaymentStatus } from "../../store/features/UserSlice";
const AboutCourses = ({ courses, premiumCourses, userId }) => {
  const paymentStatus = useSelector((state) => state.user.paymentStatus);
  console.log(paymentStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPaymentStatus(userId));
  }, [dispatch, userId]);
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const handleCourseClick = (selectedCourse) => {
    navigate("/courseContent", { state: { selectedCourse } });
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
                      <img
                        src={`${baseUrl}/${course.trailer}`}
                        onClick={() => handleCourseClick(course)}
                        style={{
                          width: "14rem",
                          height: "7rem",
                          borderRadius: "10px",
                        }}
                      />
                      <span style={{ marginTop: "4px" }}>
                        {course.courseName.name}
                      </span>
                      <p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="50"
                          height="19"
                          viewBox="0 0 50 19"
                          fill="none"
                          style={{ marginRight: "4px" }}
                        >
                          <path
                            d="M0 19V17.4658C0 16.089 0.739875 14.9384 2.21963 14.014C3.69938 13.0895 5.58801 12.6273 7.88551 12.6273C8.19704 12.6273 8.54751 12.647 8.93692 12.6863C9.32632 12.7257 9.75467 12.7847 10.222 12.8634C9.91044 13.4534 9.68653 14.0533 9.55023 14.663C9.41394 15.2728 9.34579 15.8727 9.34579 16.4627V19H0ZM14.0187 19V16.6988C14.0187 15.8398 14.2718 15.0547 14.778 14.3433C15.2843 13.632 16.0436 13.0207 17.0561 12.5093C18.0685 11.9979 19.2368 11.6144 20.5607 11.3587C21.8847 11.103 23.3567 10.9752 24.9766 10.9752C26.6277 10.9752 28.1153 11.103 29.4393 11.3587C30.7632 11.6144 31.9315 11.9979 32.9439 12.5093C33.9564 13.0207 34.7157 13.632 35.222 14.3433C35.7282 15.0547 35.9813 15.8398 35.9813 16.6988V19H14.0187ZM40.6542 19V16.4804C40.6542 15.8085 40.5861 15.1754 40.4498 14.581C40.3135 13.9866 40.109 13.4141 39.8365 12.8634C40.3427 12.7847 40.7808 12.7257 41.1507 12.6863C41.5206 12.647 41.8614 12.6273 42.1729 12.6273C44.4704 12.6273 46.3493 13.0895 47.8096 14.014C49.2699 14.9384 50 16.089 50 17.4658V19H40.6542ZM15.6542 17.3478H34.3458V16.6988C34.3458 15.4793 33.4891 14.4959 31.7757 13.7484C30.0623 13.001 27.8037 12.6273 25 12.6273C22.1963 12.6273 19.9377 13.001 18.2243 13.7484C16.5109 14.4959 15.6542 15.4793 15.6542 16.6988V17.3478ZM7.87004 10.4441C7.0626 10.4441 6.37656 10.1552 5.81192 9.57742C5.24727 8.99967 4.96495 8.30512 4.96495 7.49379C4.96495 6.70704 5.25094 6.02847 5.8229 5.45807C6.39482 4.88768 7.08236 4.60248 7.88551 4.60248C8.66433 4.60248 9.34579 4.88768 9.92991 5.45807C10.514 6.02847 10.8061 6.71292 10.8061 7.51143C10.8061 8.28642 10.5247 8.96894 9.96197 9.55901C9.3992 10.1491 8.70189 10.4441 7.87004 10.4441ZM42.1729 10.4441C41.3941 10.4441 40.7126 10.1491 40.1285 9.55901C39.5444 8.96894 39.2523 8.28642 39.2523 7.51143C39.2523 6.71292 39.5444 6.02847 40.1285 5.45807C40.7126 4.88768 41.3979 4.60248 42.1842 4.60248C42.9944 4.60248 43.6819 4.88768 44.2465 5.45807C44.8111 6.02847 45.0935 6.70704 45.0935 7.49379C45.0935 8.30512 44.8136 8.99967 44.2538 9.57742C43.694 10.1552 43.0004 10.4441 42.1729 10.4441ZM25.0206 9.20497C23.7608 9.20497 22.683 8.7575 21.7874 7.86258C20.8917 6.96765 20.4439 5.88095 20.4439 4.60248C20.4439 3.29845 20.8869 2.20536 21.7728 1.32321C22.6587 0.441071 23.7344 0 25 0C26.2909 0 27.373 0.439065 28.2462 1.3172C29.1195 2.19537 29.5561 3.28352 29.5561 4.58166C29.5561 5.85434 29.1214 6.94306 28.2522 7.84783C27.3828 8.75259 26.3057 9.20497 25.0206 9.20497ZM25.0292 7.55279C25.8275 7.55279 26.509 7.25776 27.0736 6.6677C27.6382 6.07764 27.9206 5.3794 27.9206 4.57298C27.9206 3.76656 27.6407 3.07816 27.0809 2.50776C26.5211 1.93737 25.8275 1.65217 25 1.65217C24.2212 1.65217 23.5397 1.93491 22.9556 2.50039C22.3715 3.06586 22.0794 3.76656 22.0794 4.60248C22.0794 5.38923 22.3715 6.07764 22.9556 6.6677C23.5397 7.25776 24.2309 7.55279 25.0292 7.55279Z"
                            fill="#1C1B1F"
                          />
                        </svg>
                        {course.access}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </Slider>
        </div>
        {paymentStatus === "Premium" ? (
          <div className="premium__course">
            <h4>Premium Courses</h4>
            <Slider {...settings}>
              {coursePremium.map((group, index) => (
                <div key={index} style={{ margin: "0 auto" }}>
                  <div
                    className="grid-container"
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr 1fr 1fr",
                      gap: "2px",
                      margin: "0 auto",
                    }}
                  >
                    {group.map((course, courseIndex) => (
                      <div key={courseIndex}>
                        <img
                          onClick={() => handleCourseClick(course)}
                          src={course.trailer}
                          alt=""
                          style={{
                            width: "14rem",
                            height: "7rem",
                            borderRadius: "10px",
                          }}
                        />
                        <span>{course.courseName.name}</span>
                        <Link to="/payment">
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
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        ) : (
          <Link to="/payment">
            <h4 style={{ textAlign: "center", marginTop: "4rem" }}>
              You are using trial. Please upgrade to premium to explore more !!!{" "}
            </h4>
          </Link>
        )}
      </Container>
    </div>
  );
};

export default AboutCourses;
// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchPaymentStatus } from "../../store/features/UserSlice";

// const AboutCourse = ({userId}) => {
//   const dispatch = useDispatch();
//   const paymentStatus = useSelector((state) => state.user.status);
//   console.log(paymentStatus)
//   const loading = useSelector((state) => state.user.loading);
//   const error = useSelector((state) => state.user.error);

//   useEffect(() => {
//     dispatch(fetchPaymentStatus(userId));
//   }, [dispatch, userId]);
//   console.log(userId);
//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div>
//       <h1>About Course</h1>
//       <p>Payment Status: {paymentStatus}</p>
//     </div>
//   );
// };

// export default AboutCourse;
