import React from "react";
import NavBar from "../../components/NavBar";
// import "../scss/yourself.scss";
import media from "../../assets/img/florid-teamwork.gif";
import media1 from "../../assets/img/florid-remote-workflow (1).gif";
import { Link } from "react-router-dom";
function AboutYourself1() {
  return (
    <div className="about__yourself">
      <NavBar />
      <h1>Finding yourself </h1>
      <div className="main__content">
        <div
          className="left__side"
          style={{
            display: "grid",
            gap: "5rem",
            gridTemplateColumns: "1fr 1fr",
          }}
        >
          <Link to="/testYourself">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="376"
              height="367"
              viewBox="0 0 376 367"
              fill="none"
              style={{
                position: "relative",
                left: "8%",
                top: "20%",
                height: "23rem",
                width: "23rem",
              }}
            >
              <path
                d="M331.743 162.447C301.994 195.084 334.497 264.373 369.204 306.374C383.794 324.031 378.018 353.94 320.725 363.357C263.431 372.774 254.249 362.465 227.622 349.178C200.995 335.891 134.134 315.952 79.7051 342.49C25.276 369.028 16.4432 298.081 18.8304 259.29C21.0201 223.71 44.3922 192.784 18.8304 143.987C-6.73147 95.1912 -13.6728 46.677 46.1001 62.3929C95.9567 75.5015 130.057 85.8814 201.454 28.9524C272.851 -27.9766 349.764 10.2258 360.114 48.2141C367.184 74.1638 368.42 122.207 331.743 162.447Z"
                fill="#A8DADC"
              />
            </svg>
            <img
              src={media}
              alt=""
              className="media"
              style={{ position: "absolute", top: "12%", left: "15%" }}
            />
          </Link>
          <div style={{ position: "relative", cursor: "not-allowed" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              style={{ position: "absolute", top: "24%" }}
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40ZM9.09082 10.3422L11.5151 24.0922H28.4848L30.909 10.3422L24.2423 16.5922L19.9999 9.09219L15.7575 16.5922L9.09082 10.3422ZM27.2726 29.0922C27.9999 29.0922 28.4848 28.5922 28.4848 27.8422V26.5922H11.5151V27.8422C11.5151 28.5922 11.9999 29.0922 12.7272 29.0922H27.2726Z"
                fill="#FFB703"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="376"
              height="367"
              viewBox="0 0 376 367"
              fill="none"
              style={{
                position: "relative",
                left: "8%",
                top: "16%",
                height: "23rem",
                width: "25rem",
              }}
            >
              <path
                d="M331.743 162.447C301.994 195.084 334.497 264.373 369.204 306.374C383.794 324.031 378.018 353.94 320.725 363.357C263.431 372.774 254.249 362.465 227.622 349.178C200.995 335.891 134.134 315.952 79.7051 342.49C25.276 369.028 16.4432 298.081 18.8304 259.29C21.0201 223.71 44.3922 192.784 18.8304 143.987C-6.73147 95.1912 -13.6728 46.677 46.1001 62.3929C95.9567 75.5015 130.057 85.8814 201.454 28.9524C272.851 -27.9766 349.764 10.2258 360.114 48.2141C367.184 74.1638 368.42 122.207 331.743 162.447Z"
                fill="#A8DADC"
              />
            </svg>

            <img
              src={media1}
              alt=""
              className="media"
              style={{
                height: "23rem",
                width: "22rem",
                position: "absolute",
                top: "2%",
                left: "15%",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutYourself1;
