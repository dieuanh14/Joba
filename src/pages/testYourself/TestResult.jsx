import React from "react";
import NavBar from "../../components/NavBar";
import media from "../../assets/img/morphis-smartphone-settings-and-options.png";
import "../../scss/result.scss";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
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
      <div className="result">
        <div className="img__result">
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
        <div className="result__content">
          <ul>
            <li>
              {" "}
              Thông qua các thông tin được chúng tôi tiếp nhận thông qua bài
              kiểm tra vừa rồi, bạn - Vừng A Dính có những yếu tố cơ bản để có
              thể bước vào thế giới công nghệ, coding, bug và phần mềm.
            </li>
            <li>
              Logic, cẩn thận, kiên trì, chăm chỉ là những yếu tố cần thiết
              trong quá trình học kỹ thuật phần mềm.{" "}
            </li>

            <li>
              {" "}
              Thật tốt khi bạn có cho mình những yếu tố ấy để dấn thân vào con
              đường coding.
            </li>

            <li>
              Tuy nhiên trong quá trình học tập, tìm hiểu, bạn cũng nên trau dồi
              cho bản thân nhiều kiến thức, kĩ năng hơn nữa thông qua những bài
              tập mà JOBA cung cấp cũng như tự khám phá trong quá trình học tập
              trên trường.
            </li>

            <li>
              Chúc bạn có một khoảng thời gian vui vẻ cùng những chiếc code và
              bug trong tương lai.
            </li>
          </ul>
        </div>
      </div>
      <div className="result__btn">
        <Button className="btn__home">
          <Link to='/'>Home</Link>
        </Button>
        <Button className="btn__course">
          <Link to='/course'>Learning path</Link>
        </Button>
      </div>
    </div>
  );
}

export default TestResult;
