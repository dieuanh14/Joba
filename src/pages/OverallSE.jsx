import React from "react";
import NavBar from "../components/NavBar";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Container from "@mui/material/Container";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import "../scss/course.scss";
function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

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
        </div>
      </Container>
    </div>
  );
}

export default OverallSE;
