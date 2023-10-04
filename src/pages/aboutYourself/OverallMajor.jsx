import React from "react";
import NavBar from "../../components/NavBar";
import "../../scss/overallMajor.scss";
import media from "../../assets/img/morphis-digital-art-online-learning.png";
import media1 from "../../assets/img/morphis-smartphone-settings-and-options.png";
import media2 from "../../assets/img/morphis-megaphone-for-online-marketing.png";
import { Link } from "react-router-dom";
function OverallMajor() {
  return (
    <div className="about__yourself">
      <NavBar />
      <h1>Finding yourself </h1>
      <div
        className="main__content"
        style={{ display: "grid", gridTemplateColumns: "1fr" }}
      >
        <div className="meida__container">
          <div className="media">
          <Link to='/yourself1/overallMajor/mainSE'>
            <img src={media1} alt="" />
            <span style={{display:'flex',color:'black',justifyContent:'center'}}>Software Engeenering</span>
            </Link>
          </div>
          <div className="media1">
            <img src={media} alt="" />
            <span>Graphic Design</span>
          </div>
          <div className="media2">
            <img src={media2} alt="" />
            <span>Digital Marketing</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OverallMajor;
