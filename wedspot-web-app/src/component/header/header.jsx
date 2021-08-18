import React from "react";
import logo from "../image/Logo.png";
import SignIn from "./modal/modal";
import { Nav, Navbar, Container } from "react-bootstrap";
function Header() {
  return (
    <div>
      <Navbar bg="light" expand="md">
        <Container className="ps-5">
          <Navbar.Brand href="/">
            <div className="d-flex align-items-center ">
              <img src={logo} alt="logo" />
              <Nav.Item className="ps-5">
                <h3>Search Venue or Wedding Organizer</h3>
              </Nav.Item>
            </div>
          </Navbar.Brand>
          <Nav.Item>
            <SignIn />
          </Nav.Item>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
