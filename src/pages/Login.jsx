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
import { GoogleLogin } from "@react-oauth/google";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loading, error } = useSelector((state) => state.user);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Initialize isLoggedIn as false
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const baseUrl = `https://exe-backend.azurewebsites.net/api/v1/User/LoginWithGoogle`;
  const handleCallbackResponse = async (response1) => {
    try {
      const response = await fetch(baseUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          provider: "google",
          idToken: response1.credential,
        }),
      });
      console.log(response1);
      if (response.ok) {
        setIsLoggedIn(true); // Set isLoggedIn to true
        const responseData = await response.json();
        if (responseData.status === 0) {
          await Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong! Your account has been suspended",
          });
          window.location.reload();
        } else {
          localStorage.setItem("user", JSON.stringify(responseData));
          if (responseData.roleName === "Admin") {
            navigate('/dashboard'); 
          } else {
            navigate('/');
          }
        }
        console.log("login data", responseData);
        console.log("response", response);
      } else {
        await Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong! Your account has been suspended",
        });
        window.location.reload();
      }
    } catch (error) {
      console.error("Error calling API:", error);
    }
  };
  
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
        const userResponse = result.payload; 
        console.log("userResponse:", userResponse);
        if (userResponse.roleName === "Admin") {
          console.log("Admin role detected"); 
          navigate("/dashboard"); 
        } else {
          console.log("Non-admin role detected"); 
          navigate("/"); 
        }
      }
    } catch (error) {
      console.error("Login Error:", error);
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
                <div className="gg__btn">
                  <GoogleLogin
                    onSuccess={handleCallbackResponse}
                    onError={() => {
                      console.log("Login Failed");
                    }}
                  />
                </div>
                <Button type="submit" className="register__btn">
                  {loading ? "Loading..." : "Login"}
                </Button>
                <span>
                  <Link
                    style={{ color: "#F1FAEE", textAlign: "center" }}
                    to="/register"
                  >
                    Don't have account yet? Create one
                  </Link>
                </span>
                <span>
                  <Link
                    style={{ color: "#F1FAEE", textAlign: "center" }}
                    to="/"
                  >
                    Forgot password
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
