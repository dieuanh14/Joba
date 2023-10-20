import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import NavBar from "../../components/NavBar";
import "../../scss/course/readMore.scss";
import { Container } from "@mui/material";

const ReadMore = () => {
  const location = useLocation();
  const { state } = location || {};
  const selectedReadingTutorial = state && state.selectedReadingTutorial;
  if (selectedReadingTutorial) {
    return (
      <div className="course__page">
        <h1>Software Engineering</h1>
        <Container>
          <div className="tutorial__details">
            <h3>{selectedReadingTutorial.tutorialReadingName}</h3>
            <p>Time: {selectedReadingTutorial.time}</p>
            {/* You can add more details from the selectedReadingTutorial here */}
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

export default ReadMore;
