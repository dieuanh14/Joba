import React from "react";
import NavBar from "../components/NavBar";
import waiting from "../assets/img/florid-waiting.gif";
function PaymentProcess() {
  return (
    <div>
      <NavBar />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="489"
        height="479"
        viewBox="0 0 489 479"
        fill="none"
	// 	margin-top: 5%;
    // height: 30rem;
    // left: 36%;
        style={{ position: "relative",marginTop:'7%',height:'24rem',left:'36%' }}
      >
        <path
          d="M57.5174 266.928C96.1237 224.372 53.9427 134.027 8.90204 79.2615C-10.0324 56.2392 -2.53687 17.241 71.816 4.96243C146.169 -7.31611 158.084 6.12513 192.639 23.45C227.194 40.7748 313.963 66.7737 384.598 32.1705C455.234 -2.43261 466.696 90.075 463.598 140.654C460.757 187.047 430.426 227.371 463.598 290.996C496.771 354.622 505.779 417.879 428.209 397.387C363.508 380.295 319.254 366.761 226.599 440.99C133.944 515.219 34.1298 465.407 20.6985 415.875C11.5235 382.039 9.91975 319.395 57.5174 266.928Z"
          fill="#A8DADC"
        />
      </svg>
	  <img src={waiting} alt="" style={{ position:"absolute",top:'21%',left:'38%',width:'25rem',height:'27rem'}} />

    </div>
  );
}

export default PaymentProcess;
