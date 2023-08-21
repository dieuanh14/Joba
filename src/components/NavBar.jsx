import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import logo from "../assets/logo.png";
const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];
import { styled } from "@mui/system";
import { Link } from "@mui/material";
import welcome from '../assets/welcome.png'
import "./nav.scss";
function NavBar() {
  const StyledAppBar = styled("div")({
    // color: "darkslategray",
  });
  // const Link = styled("div")({
  //   // color: "#1D3557",
  //   textDecoration: "none",
  //   marginRight: "2rem",
  //   marginLeft: "2rem",
  //   fontWeight: "600",
  //   fontFamily: "Montserrat",
  //   fontSize: "20px",
  // });
  return (
    <>
      <div className="nav">
        <StyledAppBar position="static">
          <Container className="container" maxWidth="xl">
            <img src={logo} style={{ height: "64px", width: "64px" }} />
            <Toolbar className="tool_bar">
              <Link className="nav_content">Majors</Link>
              <Link className="nav_content">Courses</Link>
              <Link style={{ display: "flex" }} className="nav_content">
                Try Premium
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  style={{ marginLeft: "1rem" }}
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11 22C17.0751 22 22 17.0751 22 11C22 4.92487 17.0751 0 11 0C4.92487 0 0 4.92487 0 11C0 17.0751 4.92487 22 11 22ZM5 5.6875L6.33333 13.25H15.6667L17 5.6875L13.3333 9.125L11 5L8.66667 9.125L5 5.6875ZM15 16C15.4 16 15.6667 15.725 15.6667 15.3125V14.625H6.33333V15.3125C6.33333 15.725 6.6 16 7 16H15Z"
                    fill="#FFB703"
                  />
                </svg>
              </Link>
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
