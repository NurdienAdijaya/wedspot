import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Container, Divider, Dropdown, Icon } from "semantic-ui-react";
import logo from "../image/Logo-white.png";

function Footer() {
  return (
    <div className="text-light green">
      <Container>
        <div className="d-flex pt-5">
          <div className="me-5">
            <p className="fw-bold pb-3">
              <u>About</u>
            </p>
            <p>Venue</p>
            <p>Wedding Organizer</p>
          </div>
          <div>
            <p className="fw-bold underline pb-3">
              <u>Support</u>
            </p>
            <p>Help Center</p>
            <p>Contact us</p>
          </div>
        </div>
        <Divider horizontal>
          <img src={logo} alt="logo"></img>
        </Divider>
        <div className="d-flex justify-content-between pb-5">
          <div className="d-flex">
            <Dropdown
              text={
                <div>
                  <p>
                    {" "}
                    <Icon name="globe" /> English
                  </p>
                </div>
              }
            ></Dropdown>
            <p className="ms-5">Privacy Policy </p>
            <p className="ms-5">Terms Conditions</p>
          </div>
          <p>© Copyright 2021. All right reserved.</p>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
