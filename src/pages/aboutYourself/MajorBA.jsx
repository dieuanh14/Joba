import React from "react";
import NavBar from "../../components/NavBar";
import "../../scss/majorBA.scss";
import mobileDev from "../../assets/img/florid-woman-wearing-vr-glasses.png";
function MajorBA() {
  return (
    <div className="about__yourself major__BA">
      <NavBar />
      <h1>Software Engeenering</h1>
      <small>Finding Yourself</small>
      <div
        className="main__content"
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", width: "67rem",alignItems:'center' }}
      >
		<img src={mobileDev} alt="" className="mobile__dev"/>
		<div className="ba__definition">Lorem ipsum, dolor sit amet consectetur adipisicing elit. At incidunt et quidem ratione, soluta quisquam? Libero, dolorum architecto autem quis eveniet obcaecati. Consectetur nemo error optio, natus minus harum fugit et magnam quod praesentium ipsum ratione ipsam cumque eius quam?</div>
	  </div>
    </div>
  );
}

export default MajorBA;
