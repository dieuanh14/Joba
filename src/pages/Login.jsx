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
import TextField from "@mui/material/TextField";
import media from "../assets/img/morphis-reviewing-resumes-of-candidates.png";
import media1 from "../assets/img/morphis-blurred-red-star-in-glass.png";
import media2 from "../assets/img/morphis-blurred-blue-star-in-glass.png";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { loginUser } from "../store/features/UserSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess } from '../store/features/UserSlice'; // Import the loginSuccess action

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loading, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState('');
  
  const handleLogin = async (e) => {
    setIsLoggedIn(true);
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
        setIsLoggedIn(true);
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
                  placeholder='Your mail'
                  onChange={(e) => setEmail(e.target.value)}
                />

                <input
                  className="password"
                  label="Password"
                  type="password"
                  value={password}
                  placeholder='Password'
                  autoComplete
                  onChange={(e) => setPassword(e.target.value)}
                />

                <Button type="submit" className="register__btn">
                  {loading ? "Loading..." : "Login"}{" "}
                </Button>
              </form>
            </div>
          </div>
        </div>
        <div className="to__register">
          <Link to="/register">Register</Link>
        </div>
      </div>
    </>
  );
};

export default Login;
