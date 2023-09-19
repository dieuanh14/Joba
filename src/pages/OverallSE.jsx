import React from "react";
import NavBar from "../components/NavBar";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import "../scss/course.scss";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
function OverallSE() {
  return (
    <div className="overall__se">
      <NavBar />
      <Container maxWidth="xl" style={{ paddingLeft: "8.5rem" }}>
        <div className="main__video">
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Link color="inherit" href="/course" underline="hover">
              Courses
            </Link>
            <Link color="inherit" href="/aboutSE" underline="hover">
              Software Engeneering
            </Link>
            <Link color="inherit" href="#" underline="hover">
              Beginning
            </Link>
            <Typography color="textPrimary">Video</Typography>
          </Breadcrumbs>
          <h1>Introduction to Software Engeneering</h1>
          <iframe
            style={{
              margin: "0 auto",
              height: "25rem",
              width: "60rem",
              display: "flex",
              borderRadius: "8px",
            }}
            src="https://www.youtube.com/embed/tgbNymZ7vqY"
          ></iframe>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <div className="link__ytb">
              <span>If the video above does not work, try this link !</span>
              <span>https://youtu.be/fgt0xpPfq1U</span>
            </div>

            <Link
              to="/aboutCourse/overallSE/definitionSE"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "1.5rem",
              }}
            >
              <ArrowForwardIcon style={{ height: "3rem", width: "3rem" }} />
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default OverallSE;
