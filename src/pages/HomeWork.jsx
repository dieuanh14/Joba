import React from "react";
import NavBar from "../components/NavBar";
import { Breadcrumbs } from "@mui/material";
// import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Textarea from "../components/Textarea";
import '../scss/textarea.scss'
import CustomTextarea from "../components/CustomTextarea";
import { Button } from "@mui/material";
function HomeWork() {
  return (
    <div>
      <NavBar />
      <Container maxWidth="xl">
        <Breadcrumbs
          style={{ marginLeft: "7rem" }}
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
          <Typography color="#8ECAE6">Homework</Typography>
        </Breadcrumbs>
        <h2 style={{ textAlign: "center" }}>
          Your questions about your future major
        </h2>
        <div className="ques__box">
          <Textarea className="box1" style={{with:'30rem'}}></Textarea>
          <CustomTextarea />

        </div>
        <div className="btn__end">
          <Button variand="outlined" className="cancel__btn">Cancel</Button>
          <Button variand="contained" className="done__btn">Done</Button>

        </div>
      </Container>
    </div>
  );
}

export default HomeWork;
