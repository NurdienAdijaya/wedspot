import React from "react";
import logo from "../../component/image/Logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar, Container } from "react-bootstrap";

export default function ProfileHeader() {
  return (
    <div>
      <Navbar bg="light" expand="md">
        <div className="ps-5 pt-3">
          <Navbar.Brand>
              <img src={logo} alt="logo" />
          </Navbar.Brand>
        </div>
      </Navbar>
    </div>
  );
}


