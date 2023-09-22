import React from "react";
import NavBar from "../../components/NavBar";
import media from "../../assets/img/morphis-smartphone-settings-and-options.png";
import "../../scss/slider.scss";

function TestResult() {
  return (
    <div className="test__result">
      <NavBar />
      <h1 style={{ textAlign: "center", color: "white" }}>
        Ngành học sẽ phù hợp với bạn...
      </h1>
      <span style={{ textAlign: "center", color: "white" }}>
        Software Engeneering
      </span>
      <svg
	  className="bg"
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
      <img src={media} alt="" className="media" />
    </div>
  );
}

export default TestResult;
