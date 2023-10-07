import React from "react";
import NavBar from "../../components/NavBar";
import "../../scss/yourself.scss";
import { Button } from "@mui/material";
import media from "../../assets/img/florid-teamwork.gif";
import media1 from "../../assets/img/morphis-megaphone-for-online-marketing.png";
import media2 from "../../assets/img/morphis-smartphone-settings-and-options.png";
import media3 from "../../assets/img/morphis-digital-art-online-learning.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux"; // Import useSelector hook
function AboutYourself() {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  return (
    <div className="about__yourself">
      <NavBar />
      <h1>Finding yourself </h1>
      <div className="main__content">
        <div className="left__side">
          <img src={media} alt="" className="media" />
          <img src={media1} alt="" className="media1" />
          <img src={media2} alt="" className="media2" />
          <img src={media3} alt="" className="media3" />
        </div>
        <div className="right__side">
          <span>
            Trước khi bước vào bài test “nhân phẩm”, bạn cần đăng ký tài khoản
            để chúng mình biết bạn đã trải qua bao nhiêu “nồi bánh chưng” rồi
          </span>
          {isLoggedIn ? (
            <Button variant="contained" style={{background:'#1D3557',width:'10rem',margin:'0 auto',borderRadius:'20px'}}>
              <Link to="/yourself1">Start</Link>
            </Button>
          ) : (
            <Button variant="contained" style={{background:'#1D3557',width:'10rem',margin:'0 auto',borderRadius:'20px'}}>
              <Link to="/login">Login</Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default AboutYourself;
