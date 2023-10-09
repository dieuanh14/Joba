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
        const responseData = await response.json();
        if (responseData.status === 0) {
          await Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong! Your account has been suspened",
          });
          window.location.reload();
        } else {
          localStorage.setItem("user", JSON.stringify(responseData));
          navigate("/");
        }
        console.log("login data", responseData);
        console.log("response", response);
      } else {
        console.log("login failed");
      }
    } catch (error) {
      console.error("Error calling API:", error);
    }
  };
  // function handleSignOut(event) {
  //   setUser({});
  //   document.getElementById("signInDiv").hidden = false;
  // }
  // useEffect(() => {
  //   google.accounts.id.initialize({
  //     client_id:
  //       "711165076072-c7eela8r74om166rj4k879nse3a8v1c4.apps.googleusercontent.com",
  //     callback: handleCallbackResponse,
  //   });
  //   google.accounts.id.renderButton(document.getElementById("signInDiv"), {
  //     theme: "outline",
  //     size: "large",
  //   });
  //   google.accounts.id.prompt(); // also display the One Tap dialog
  // }, []);
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
