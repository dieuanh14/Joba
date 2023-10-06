import { useState } from "react";
import "../scss/login.scss";
import media from "../assets/img/morphis-reviewing-resumes-of-candidates.png";
import media1 from "../assets/img/morphis-blurred-red-star-in-glass.png";
import media2 from "../assets/img/morphis-blurred-blue-star-in-glass.png";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../store/features/UserSlice";
import { Link } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import { loginWithGoogle } from "../store/features/UserSlice";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loading, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    let userCredentials = {
      email,
      password,
    };
    try {
      const result = await dispatch(loginUser(userCredentials));
      if (loginUser.fulfilled.match(result)) {
        setEmail("");
        setPassword("");
        navigate("/");
      }
    } catch (error) {
      console.error("Login Error:", error);
    }
  };
  const responseGoogle = (response) => {
    if (response && response.tokenId) {
      const googleIdToken = response.tokenId;
      console.log("tokenId", response.tokenId);
      dispatch(loginWithGoogle({ googleIdToken }), "123");
      navigate("/");
    } else {
    }
  };

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
              <form action="" onSubmit={handleLogin}>
                <input
                  className="user__name"
                  required
                  type="email"
                  value={email}
                  autoComplete
                  placeholder="Your mail"
                  onChange={(e) => setEmail(e.target.value)}
                />

                <input
                  className="password"
                  label="Password"
                  type="password"
                  value={password}
                  placeholder="Password"
                  autoComplete
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Button
                  className="btn__gg"
                  style={{
                    marginBottom: "1rem",
                  }}
                >
                  <GoogleLogin
                    clientId=""
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                  />
                </Button>
                <Button type="submit" className="register__btn">
                  {loading ? "Loading..." : "Login"}
                </Button>
                <span>
                  <Link
                    style={{ color: "white", textAlign: "center" }}
                    to="/register"
                  >
                    Don't have account yet? Create one
                  </Link>
                </span>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
