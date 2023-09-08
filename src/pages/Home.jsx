import React from "react";
import NavBar from "../components/NavBar";
import welcome from "../assets/welcome.png";
import star from "../assets/star.png";
import "../components/nav.scss";
import Button from "@mui/material/Button";

function Home() {
  return (
    <div>
      <NavBar />
      <div className="content">
        <div className="container">
          <div className="welcome">
            <img src={star} alt="" className="star" />
            <h1>Welcome to Joba</h1>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet vero
              eos commodi aliquam velit necessitatibus, officia ea possimus
              veritatis vel ipsum quo! Libero, soluta at facere quam enim
              molestias pariatur fugit exercitationem atque repellat, totam
              aliquam eaque debitis asperiores aliquid.
            </span>
            <div className="readmore_btn">
              <Button variant="contained">About yourself</Button>
              <Button variant="outlined">About major</Button>
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
