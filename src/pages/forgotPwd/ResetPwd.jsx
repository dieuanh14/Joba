// ResetPasswordPage.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { resetPassword } from "../../store/features/ForgotPwdSlice";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import "../../scss/login.scss";
import media from "../../assets/img/morphis-personal-data-protection.png";
import media1 from "../../assets/img/morphis-blurred-red-star-in-glass.png";
import Swal from "sweetalert2";

function ResetPwd() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleResetPassword = () => {
    dispatch(resetPassword({ code, newPassword, confirmPassword }))
      .unwrap()
      .then(() => {
        Swal.fire({
          icon: 'success',
          text: 'Change Password Successfully!',
        })
        navigate("/login"); 
      })
      .catch((error) => {
        console.error("Error resetting the password:", error);
      });
  };

  return (
    // <div>
    //   <h2>Reset Password</h2>
    //   <label>Code:</label>
    //   <input
    //     type="text"
    //     value={code}
    //     onChange={(e) => setCode(e.target.value)}
    //   />
    //   <label>New Password:</label>
    //   <input
    //     type="password"
    //     value={newPassword}
    //     onChange={(e) => setNewPassword(e.target.value)}
    //   />
    //   <label>Confirm Password:</label>
    //   <input
    //     type="password"
    //     value={confirmPassword}
    //     onChange={(e) => setConfirmPassword(e.target.value)}
    //   />
    //   <button onClick={handleResetPassword}>Submit</button>
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
          <h3>Reset Password</h3>
          <div className="input__grp">
            <input
              className="user__name"
              required
              placeholder="Code"
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
            <input
              className="user__name"
              type="password"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <label>Confirm Password:</label>
            <input
              className="user__name"
              type="password"
              placeholder="Confirm new password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <Button
              type="submit"
              className="register__btn"
              onClick={handleResetPassword}
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResetPwd;
