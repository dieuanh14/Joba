import React from "react";
import NavBar from "../components/NavBar";
import check from "../assets/img/beam-check-mark-in-a-circle.gif";
function PaymentSucess() {
  return (
    <div>
      <NavBar />
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "8rem" ,gap:'3rem'}}
      >
        <img src={check} alt="" style={{ height: "12rem",width:'12rem' }} />
        <div>
          <h3>Thanh toán thành công</h3>
          <p style={{width:'20rem',letterSpacing:'4px',lineHeight:'1.5rem'}}>
            Cảm ơn bạn đã tin tưởng JOBA, mong rằng bạn sẽ có những trải nghiệp
            thật tuyệt tại trang web của chúng mình.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PaymentSucess;
