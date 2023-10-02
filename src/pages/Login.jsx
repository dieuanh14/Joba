// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { loginUser } from "../store/features/UserSlice";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const { loading, error } = useSelector((state) => state.user);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     let userCredentials = {
//       email,
//       password,
//     };

//     try {
//       const result = await dispatch(loginUser(userCredentials));
//       if (loginUser.fulfilled.match(result)) {
//         setEmail("");
//         setPassword("");
//         navigate("/");
//       }
//     } catch (error) {
//       console.error("Login Error:", error);
//     }
//   }

//   return (
//     <div>
//       <h2>Login</h2>
//       <form action="" onSubmit={handleLogin}>
//         <input
//           type="text"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button type="submit">{loading ? "Loading..." : "Login"}</button>
//         {error && <div className="alert">{error}</div>}
//       </form>
//     </div>
//   );
// };

// export default Login;

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
                    width: "20rem",
                    marginBottom: "1rem",
                  }}
                >
                  <Link
                    style={{
                      color: "white",
                      marginLeft: "4px",
                      fontSize: "12px",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="16px"
                      height="13px"
                      viewBox="0 0 48 48"
                      style={{ marginLeft: "4px" }}
                    >
                      <path
                        fill="#FFC107"
                        d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                      ></path>
                      <path
                        fill="#FF3D00"
                        d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                      ></path>
                      <path
                        fill="#4CAF50"
                        d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                      ></path>
                      <path
                        fill="#1976D2"
                        d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                      ></path>
                    </svg>
                    Login Google
                  </Link>
                </Button>
                <Button type="submit" className="register__btn">
                  {loading ? "Loading..." : "Login"}
                </Button>
                <span>
                  <Link style={{ color: "white", textAlign: "center" }}>
                    Forgot your password?
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
