import React from "react";
import "../scss/register.scss";
import TextField from "@mui/material/TextField";
import media from "../assets/img/morphis-reviewing-resumes-of-candidates.png";
import media1 from "../assets/img/morphis-blurred-red-star-in-glass.png";
import media2 from "../assets/img/morphis-blurred-blue-star-in-glass.png";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
function Register() {
  return (
    <>
      <div className="register__page">
        <div className="main__register">
          <div className="left__register">
            <img src={media} alt="" className="main__img" />
            <img src={media1} alt="" className="media__img" />
            <img src={media2} alt="" className="media__img1" />
            <img src={media1} alt="" className="media__img2" />
            <img src={media2} alt="" className="media__img3" />
          </div>

          <div className="right__register">
            <h3>Register</h3>
            <div className="input__grp">
              <TextField
                className="user__name"
                required
                id="outlined-required"
                label="Username"
              />

              <TextField
                className="date"
                id="outlined-password-input"
                type="date"
                autoComplete="current-password"
                min="2023-09-25"
                max="2023-12-31"
              />
              <TextField
                className="email"
                id="outlined-password-input"
                label="Email"
                type="email"
                autoComplete="current-password"
              />
              <TextField
                className="password"
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
              />
              <TextField
                className="re__password"
                id="outlined-password-input"
                label="Enter again"
                type="password"
                autoComplete="current-password"
              />
              <Button type="submit" className="register__btn">
                Register
              </Button>
            </div>
          </div>
        </div>
        <div className="to__login">
          <Link to="/login">Login</Link>
        </div>
      </div>
    </>
  );
}

export default Register;
