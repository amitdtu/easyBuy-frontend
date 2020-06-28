import React, { useState, Fragment } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import logo from "../../logo.svg";
import Login from "../auth/login";
import Signup from "../auth/signUp";

export default function NavbarMenu() {
  const history = useHistory();

  const [openLogin, setOpenLogin] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);

  // const closeLogin = () => setOpenLogin(false);

  return (
    <Fragment>
      <Login show={openLogin} close={() => setOpenLogin(false)} />
      <Signup show={openSignup} close={() => setOpenSignup(false)} />
      <Navbar sticky="top" bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand
            onClick={() => history.push("/")}
            style={{ cursor: "pointer" }}
          >
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            EasyBuy
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link onClick={() => history.push("/checkout")}>
                Cart
              </Nav.Link>
              <Nav.Link onClick={() => history.push("/wishlist")}>
                Wishlist
              </Nav.Link>
              <Nav.Link onClick={() => history.push("/orders")}>
                Orders
              </Nav.Link>
              <Nav.Link onClick={() => history.push("/adminPanel")}>
                Admin
              </Nav.Link>
              <Nav.Link onClick={() => setOpenSignup(true)}>Sign Up</Nav.Link>
              <Nav.Link onClick={() => setOpenLogin(true)}>Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fragment>
  );
}
