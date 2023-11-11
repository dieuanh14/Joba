import { useSelector, useDispatch } from "react-redux";
import { Toolbar } from "@mui/material";
import { Link } from "react-router-dom";
import * as React from "react";
import Container from "@mui/material/Container";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import "../scss/nav.scss";
import { styled } from "@mui/system";

function NavBar() {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
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
                className="nav_content"
                to="/yourself1/overallMajor"
                activeClassName="active-link"
              >
                About IT
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
                  style={{
                    height: "30px",
                    width: "30px",
                    marginTop: "1rem",
                    marginLeft: "2px",
                  }}
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11 22C17.0751 22 22 17.0751 22 11C22 4.92487 17.0751 0 11 0C4.92487 0 0 4.92487 0 11C0 17.0751 4.92487 22 11 22ZM5 5.6875L6.33333 13.25H15.6667L17 5.6875L13.3333 9.125L11 5L8.66667 9.125L5 5.6875ZM15 16C15.4 16 15.6667 15.725 15.6667 15.3125V14.625H6.33333V15.3125C6.33333 15.725 6.6 16 7 16H15Z"
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
                <Link
                  to="/login"
                  className="logout__btn"
                  style={{
                    padding: "6px",
                    border: "2px solid #1D3557",
                    borderRadius: "1.5rem",
                  }}
                >
                  Logout
                </Link>
              ) : (
                <>
                  <Link
                    className="signin__btn"
                    style={{
                      padding: "6px",
                      border: "2px solid #1D3557",
                      borderRadius: "1.5rem",
                    }}
                    to="/login"
                  >
                    Sign in
                  </Link>
                  <Link to="/register">Sign up</Link>
                </>
              )}
            </Toolbar>
          </Container>
        </StyledAppBar>
      </div>
    </>
  );
}

export default NavBar;
