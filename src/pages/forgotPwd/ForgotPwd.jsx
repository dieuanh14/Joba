import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { initiatePasswordReset } from "../../store/features/ForgotPwdSlice";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import "../../scss/login.scss";
import media from "../../assets/img/morphis-personal-data-protection.png";
import media1 from "../../assets/img/morphis-blurred-red-star-in-glass.png";
// import media2 from "../../assets/img/morphis-blurred-blue-star-in-glass.png";
function ForgotPasswordPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleForgotPassword = () => {
    dispatch(initiatePasswordReset(email))
      .unwrap()
      .then(() => {
        navigate("/resetPwd");
      })
      .catch((error) => {
        console.error("Error initiating password reset:", error);
      });
  };

  return (
    // <div>
    //   <h2>Forgot Password</h2>
    //   <label>Email:</label>
    //   <input
    //     type="email"
    //     value={email}
    //     onChange={(e) => setEmail(e.target.value)}
    //   />
    //   <button onClick={handleForgotPassword}>Submit</button>
    // </div>
    <div className="login__page">
      <div className="main__login">
        <div className="left__login">
          <img src={media} alt="" className="main__img" />
          <img src={media1} alt="" className="media__img" />
          {/* <img src={media2} alt="" className="media__img1" /> */}
          <img src={media1} alt="" className="media__img2" />
          {/* <img src={media2} alt="" className="media__img3" /> */}
        </div>

        <div className="right__login">
          <h3>Forgot Password</h3>
          <div className="input__grp">
            <input
              className="user__name"
              required
              type="email"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />

            <Button
              type="submit"
              className="register__btn"
              onClick={handleForgotPassword}
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPasswordPage;
