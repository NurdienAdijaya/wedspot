import React from "react";
import logo from "../image/Logo.png";
import SignIn from "./modal/modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Avatar, Notif } from "./dropdown/login";
import { Link } from "react-router-dom";

function Header({ background = "white" }) {
  const token = localStorage.getItem("");

  return (
    <div>
      <Navbar bg={background} expand="md">
        <Container className="ps-5">
          <Navbar.Brand>
            <div className="d-flex align-items-center ">
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
              <Nav.Item className="ps-5">
                <h3>Search Venue or Wedding Organizer</h3>
              </Nav.Item>
            </div>
          </Navbar.Brand>
          {token ? (
            <Nav.Item>
              <div className="d-flex">
                <Avatar />
                <Notif />
              </div>
            </Nav.Item>
          ) : (
            <Nav.Item>
              <SignIn />
            </Nav.Item>
          )}
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
