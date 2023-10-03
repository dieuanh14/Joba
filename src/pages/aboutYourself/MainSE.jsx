import React from "react";
import NavBar from "../../components/NavBar";
import media from "../../assets/img/florid-woman-wearing-vr-glasses.png";
import media1 from "../../assets/img/florid-school-science-project.gif";
import media2 from "../../assets/img/florid-remote-workflow-1.png";
import { Link } from "react-router-dom";
import "../../scss/overallSE.scss";
function MainSE() {
  return (
    <div className="about__yourself">
      <NavBar />
      <h1>Software Engeenering</h1>
      <span
        style={{ display: "flex", color: "white", justifyContent: "center" }}
      >
        Finding yourself{" "}
      </span>
      <div
        className="main__content"
        style={{ display: "grid", gridTemplateColumns: "1fr", width: "67rem" }}
      >
        <div className="overall__se">
          <div className="meida__container">
            <div >
              <Link to='/yourself1/overallMajor/mainSE/majorBA'>
                <img src={media1} alt="" className="media" />
                <span
                  style={{
                    display: "flex",
                    color: "black",
                    justifyContent: "center",
                  }}
                >
                  Business Analyst
                </span>
              </Link>
            </div>
            <div className="">
              <Link to='/yourself1/overallMajor/mainSE/majorBA'>
                <img src={media} alt="" className="media" />
                <span
                  style={{
                    display: "flex",
                    color: "black",
                    justifyContent: "center",
                  }}
                >
                  Mobile Developer
                </span>
              </Link>
            </div>
            <div className="">
              <Link>
                <img src={media2} alt="" className="media" />
                <span
                  style={{
                    display: "flex",
                    color: "black",
                    justifyContent: "center",
                  }}
                >
                  Software Engeneering
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainSE;
