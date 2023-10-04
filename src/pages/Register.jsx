import React, { useState } from "react";
import "../scss/register.scss";
import { TextField, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { registerUser } from "../store/features/UserSlice";
import { useNavigate } from "react-router-dom";
import media from "../assets/img/morphis-reviewing-resumes-of-candidates.png";
import media1 from "../assets/img/morphis-blurred-red-star-in-glass.png";
import media2 from "../assets/img/morphis-blurred-blue-star-in-glass.png";
function Register() {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [Email, setEmail] = useState("");
  const [Birthday, setBirthday] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    const userData = {
      Username,
      Email,
      Password,
      Birthday,
    };
    console.log(Birthday);
    try {
      const result = await dispatch(registerUser(userData));
      if (registerUser.fulfilled.match(result)) {
        console.log("Registration successful");
        navigate("/login");
      }
    } catch (error) {
      console.error("Registration Error:", error);
    }
  };

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
              <form onSubmit={handleRegister} style={{display:'flex'}}>
                <input
                  className="user__name"
                  required
                  fullWidth
                  placeholder="Username"
                  value={Username}
                  onChange={(e) => setUsername(e.target.value)}
                />

                <input
                  className="user__name"
                  required
                  fullWidth
                  type="date"
                  value={Birthday}
                  onChange={(e) => setBirthday(e.target.value)}
                />

                <input
                  className="email"
                  required
                  fullWidth
                  placeholder="Email"
                  type="email"
                  value={Email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <input
                  className="password"
                  required
                  fullWidth
                  placeholder="Password"
                  type="password"
                  autoComplete="current-password"
                  value={Password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <Button type="submit" className="register__btn" style={{margin:'0 auto'}}> 
                  Register
                </Button>
              </form>
            </div>
          </div>
          {/* Rest of the code */}
        </div>
      </div>
    </>
  );
}

export default Register;
