import React from "react";
import NavBar from "../../components/NavBar";
import media from "../../assets/img/morphis-error-four-hundred-four 1.png";
import "../../scss/result.scss";
import { Link } from "react-router-dom";
import { Button, Container } from "@mui/material";
function FailureResult() {
  return (
    <div className="test__result">
      <NavBar />
	  <Container>
      <h1 style={{ textAlign: "center", color: "white" }}>
        Ngành học sẽ phù hợp với bạn...
      </h1>
      <span style={{ textAlign: "center", color: "white" }}>
        Cannot find anything
      </span>
      <div
        className="result"
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <div className="img__result" style={{ textAlign: "center" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="526"
            height="469"
            viewBox="0 0 526 469"
            fill="none"
            style={{ height: "350px" }}
          >
            <path
              d="M430.653 82.8295C427.936 5.25876 370.662 0.262399 342.364 7.46056C254.075 47.6856 215.024 7.46056 147.959 0.685881C94.3065 -4.73386 63.6319 37.6647 55.0011 59.5414C36.7491 110.352 103.305 199.778 36.7491 237.378C-29.807 274.978 9.01732 318.534 36.749 335.612C84.1907 364.828 133.103 329.26 153.901 391.503C175.512 456.175 231.37 485.461 284.637 459.674C342.364 431.728 320.716 355.936 441.264 344.08C561.812 332.224 527.148 232.156 494.747 183.604C462.346 135.051 433.369 160.4 430.653 82.8295Z"
              fill="#A8DADC"
            />
          </svg>
          <img
            src={media}
            alt=""
            className="media"
            style={{ left: "36%", height: "20rem" }}
          />
          <div
            style={{ color: "#F1FAEE", textAlign: "center", margin: "0 auto" }}
          >
            JOBA thành thật xin lỗi bạn vì sự bất tiện này. Trang web vẫn còn
            đang trong quá trình phát triển thêm nên có nhiều thông tin và dữ
            liệu còn hạn chế. Chúng tôi sẽ mau chóng khắc phục sự cố trên, mong
            bạn thông cảm.
          </div>
        </div>
      </div>
      <div className="result__btn" style={{marginTop:'1rem'}}>
        <Button className="btn__home">
          <Link to="/">Home</Link>
        </Button>
      </div>
	  </Container>
    </div>
  );
}

export default FailureResult;
