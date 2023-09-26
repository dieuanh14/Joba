import React from "react";
import "../scss/login.scss";
import TextField from "@mui/material/TextField";
import media from "../assets/img/morphis-reviewing-resumes-of-candidates.png";
import media1 from "../assets/img/morphis-blurred-red-star-in-glass.png";
import media2 from "../assets/img/morphis-blurred-blue-star-in-glass.png";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
function Login() {
  return (
    <>
      <div className="login__page">
        <div className="main__login">
          <div className="left__login">
            <img src={media} alt="" className="main__img" />
            <img src={media1} alt="" className="media__img" />
            <img src={media2} alt="" className="media__img1" />
            <img src={media1} alt="" className="media__img2" />
            <img src={media2} alt="" className="media__img3" />
          </div>

          <div className="right__login">
            <h3>Login</h3>
            <div className="input__grp">
              <TextField
                className="user__name"
                required
                id="outlined-required"
                label="Username"
              />

              <TextField
                className="password"
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
              />

              <Button type="submit" className="register__btn">
                Login
              </Button>
            </div>
          </div>
        </div>
        <div className="to__register">
          <Link to="/register">Register</Link>
        </div>
      </div>
    </>
  );
}

export default Login;
