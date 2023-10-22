import React from "react";
import NavBar from "../components/NavBar";
import welcome from "../assets/img/Phân tích, tk hệ thống.gif";
import star from "../assets/star.png";
import "../scss/nav.scss";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div>
      <NavBar />
      <div className="content">
        <div className="container">
          <div className="welcome">
            <img src={star} alt="" className="star" />
            <h1>Welcome to Joba</h1>
            <div
              className="content__home"
              style={{ display: "grid", gridTemplateRows: "1fr 1fr " }}
            >
              <span>
                Are you a high school student about to graduate? Do you find it
                difficult to orient yourself in the future? Do you have a
                headache because you don't know where to start?
              </span>
              <span>
                We - JOBA are here to help you better define the field of study
                that you are interested in. Besides, JOBA also provides you with
                courses from basic to advanced so you can comfortably experience
                the lessons you are about to learn in the future.
              </span>
            </div>
            <div className="readmore_btn">
              <Button variant="contained" className="btn__yourself">
                <Link to="/yourself"> About yourself</Link>
              </Button>
              <Button variant="outlined" className="btn__major">
                <Link to="/major"> About major</Link>
              </Button>
              <img src={star} alt="" className="star" />
            </div>
          </div>

          <div className="welcome_img">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="588"
              height="591"
              viewBox="0 0 588 591"
              fill="none"
            >
              <path
                d="M69.211 329.403C115.733 276.845 64.9034 165.266 10.6278 97.6291C-12.1888 69.1957 -3.15645 21.0315 86.4413 5.86705C176.039 -9.29737 190.398 7.30303 232.038 28.6998C273.678 50.0966 378.237 82.2061 463.355 39.47C548.473 -3.26608 562.286 110.984 558.552 173.451C555.128 230.748 518.578 280.55 558.552 359.129C598.527 437.708 609.382 515.834 515.907 490.525C437.94 469.416 384.612 452.701 272.96 544.376C161.307 636.052 41.0282 574.533 24.8429 513.358C13.7868 471.57 11.8542 394.203 69.211 329.403Z"
                fill="#A8DADC"
              />
            </svg>
            <img src={welcome} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
