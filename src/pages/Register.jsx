import { useState } from "react";
import "../scss/register.scss";
import { TextField, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { registerUser } from "../store/features/UserSlice";
import { useNavigate } from "react-router-dom";

function Register() {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [Email, setEmail] = useState("");
  const [Birthday, setBirthday] = useState(new Date());

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    const userData = {
      Username,
      Email,
      Password,
      Birthday
    };

    try {
      const result = await dispatch(registerUser(userData));
      console.log(result);
      if (registerUser.fulfilled.match(result)) {
        console.log("Registration successful");
        navigate("/login"); // Redirect to login page after successful registration
      }
    } catch (error) {
      console.error("Registration Error:", error);
    }
  };

  return (
    <>
      <div className="register__page">
        <div className="main__register">
          {/* Rest of the code */}
          <div className="right__register">
            <h3>Register</h3>
            <div className="input__grp">
              <form onSubmit={handleRegister}>
                <TextField
                  required
                  fullWidth
                  label="Username"
                  value={Username}
                  onChange={(e) => setUsername(e.target.value)}
                />

                <TextField
                  fullWidth
                  type="date"
                  label="Date"
                  value={Birthday}
                  onChange={(e) => setBirthday(e.target.value)}
                />

                <TextField
                  required
                  fullWidth
                  label="Email"
                  type="email"
                  value={Email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <TextField
                  required
                  fullWidth
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                  value={Password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <Button type="submit" className="register__btn">
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