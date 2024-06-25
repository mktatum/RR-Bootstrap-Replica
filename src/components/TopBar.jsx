import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

function TopBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand style={{ margin: "5px 0 0 20px" }} href="#home">
        <img
          src="https://www.instacart.com/assets/beetstrap/brand/2022/instacart-logo-color-6678cb82d531f8910d5ba270a11a7e9b56fc261371bda42ea7a5abeff3492e1c.svg"
          alt="instacart logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav
          className="ms-auto"
          style={{
            padding: "24px 40px 20px 40px",
            fontSize: "18px",
            lineHeight: "26px",
            fontWeight: "bolder",
            // display: "flex",
          }}
        >
          <Nav.Link style={{ color: "#343538" }} href="#LogIn">
            Log In
          </Nav.Link>
          <Button
            className="button"
            variant="success"
            style={{ fontSize: "18px" }}
          >
            Sign Up
          </Button>{" "}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default TopBar;
