import React from "react";
import Slider from "react-slick";
import question from "../assets/img/morphis-question-abstract-illustration.png";
import "../scss/carousel.scss";
import NavBar from "./NavBar";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};
function Carousel() {
  return (
    <div className="container">
      <NavBar />
      <div className="content">
        <h1>Software Engeeneering</h1>
        <div className="main">
          <Slider {...settings}>
            <div className="definition">
              <span>Nhánh nhỏ của khoa học máy tính</span>
              <span>
                Thiết kế, phát triển, thử nghiệm và bảo trì các ứng dụng phần
                mềm
              </span>
              <span>
                Sử dụng ngôn ngữ lập trình để xây dựng và sửa lỗi phần mềm
              </span>
              <span>
                <ArrowForwardIcon/>
              </span>
              <img src={question} alt="" />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
