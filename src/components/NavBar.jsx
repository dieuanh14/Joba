import { useSelector, useDispatch } from "react-redux";
import { Toolbar } from "@mui/material";
import { Link } from "react-router-dom";
import { logoutSuccess } from "../store/features/UserSlice";
import { Button } from "@mui/material";
import * as React from "react";
import Container from "@mui/material/Container";
import logo from "../assets/logo.png";
const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];
import { NavLink } from "react-router-dom";
import "./nav.scss";
import { styled } from "@mui/system";

function NavBar() {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const email = useSelector((state) => state.user.email);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutSuccess());
    localStorage.removeItem("user");
  };
  const StyledAppBar = styled("div")({});
  return (
    <>
      <div className="nav">
        <StyledAppBar position="static">
          <Container className="container" maxWidth="xl">
            <a href="/">
              <img src={logo} style={{ height: "64px", width: "64px" }} />
            </a>
            <Toolbar className="tool_bar">
              <NavLink className="nav_content" to="/major">
                Majors
              </NavLink>
              <NavLink className="nav_content" to="/course">
                Courses
              </NavLink>

              <NavLink
                style={{ display: "flex", alignItems: "center" }}
                className="nav_content"
                to="/premium"
                activeClassName="active-link"
              >
                Try Premium
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="45"
                  height="45"
                  viewBox="0 0 45 45"
                  fill="none"
                  style={{ height: "25px", width: "30px" }}
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M22.5 45C34.9264 45 45 34.9264 45 22.5C45 10.0736 34.9264 0 22.5 0C10.0736 0 0 10.0736 0 22.5C0 34.9264 10.0736 45 22.5 45ZM10.2271 11.6334L12.9544 27.1021H32.0453L34.7726 11.6334L27.2726 18.6646L22.4998 10.2271L17.7271 18.6646L10.2271 11.6334ZM30.6817 32.7271C31.4998 32.7271 32.0453 32.1646 32.0453 31.3209V29.9146H12.9544V31.3209C12.9544 32.1646 13.4998 32.7271 14.318 32.7271H30.6817Z"
                    fill="#FFB703"
                  />
                </svg>
              </NavLink>
              <NavLink
                className="nav_content"
                to="/yourself"
                activeClassName="active-link"
              >
                About yourself
              </NavLink>
            </Toolbar>
            <Toolbar>
              {isLoggedIn ? (
                <>
                  <Link
                    to="/login"
                    style={{
                      padding: "6px",
                      border: "2px solid #1D3557",
                      borderRadius: "1.5rem",
                    }}
                  >
                    {" "}
                    Logout
                  </Link>
                </>
              ) : (
                <Link
                  style={{
                    padding: "6px",
                    border: "2px solid #1D3557",
                    borderRadius: "1.5rem",
                  }}
                  to="/login"
                >
                  Sign in
                </Link>
              )}
            </Toolbar>
          </Container>
        </StyledAppBar>
      </div>
    </>
  );
}

export default NavBar;
