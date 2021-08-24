import React from "react";
import logo from "../../component/image/Logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar, Container } from "react-bootstrap";

export default function Sidebar() {
  return (
    <div>
      <Navbar bg="light" expand="md">
        <Container className="ps-5">
          <Navbar.Brand>
              <img src={logo} alt="logo" />
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}


