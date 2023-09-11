import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import logo from "../assets/logo.png";
const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];
import { styled } from "@mui/system";
import { Link } from "@mui/material";
import { NavLink } from "react-router-dom";
import "./nav.scss";
function NavBar() {
  const StyledAppBar = styled("div")({
    // color: "darkslategray",
  });
  return (
    <>
      <div className="nav">
        <StyledAppBar position="static">
          <Container className="container" maxWidth="xl">
            <a href="/">
              <img src={logo} style={{ height: "64px", width: "64px" }} />
            </a>
            <Toolbar className="tool_bar">
              <NavLink
                className="nav_content"
                to="/major"
                // activeClassName="active-link"
              >
                Majors
              </NavLink>
              <NavLink
                className="nav_content"
                to="/course"
              >
                Courses
              </NavLink>
      
              <NavLink
                style={{ display: "flex" }}
                className="nav_content"
                to="/premium"
                activeClassName="active-link"
              >
                Try Premium
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
              <Link style={{ marginRight: "0px" }}>Sign in</Link>
              <Link
                style={{
                  padding: "6px",
                  border: "1px solid #1D3557",
                  borderRadius: "1.5rem",
                }}
              >
                Sign up
              </Link>
            </Toolbar>
          </Container>
        </StyledAppBar>
      </div>
    </>
  );
}
export default NavBar;
