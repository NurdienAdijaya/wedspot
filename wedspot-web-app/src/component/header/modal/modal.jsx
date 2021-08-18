import React, { useState } from "react";
import "./modal.css";
import { Modal, Container } from "react-bootstrap";
import { Button } from "semantic-ui-react";
import Login from "./login";
import pic from "../../image/pic1.png";
import Register from "./register";
import { FailedMessage } from "../../alert-message/message";

function SignIn() {
  const [show, setShowLogin] = useState(false);
  const [showreg, setShowRegister] = useState(false);
  return (
    <>
      <Button onClick={() => setShowLogin(true)} className="green">
        Login
      </Button>
      <Button onClick={() => setShowRegister(true)} className="bg-light">
        Register
      </Button>

      {/* SIGN IN MODAL */}

      <Modal
        show={show}
        onHide={() => setShowLogin(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="d-flex">
            <img src={pic} alt="left"></img>
            <Container className=" d-flex flex-column p-5 justify-content-center">
              <h1>Sign in to your account</h1>

              <Login />

              <div className="text-muted fw-bolder mt-5 text-center">
                Don't have an account ?
                <span
                  className="fw-bolder pink ps-1"
                  onClick={() => [setShowLogin(false), setShowRegister(true)]}
                >
                  Sign Up
                </span>
              </div>
            </Container>
          </div>
        </Modal.Body>
      </Modal>

      {/* SIGN UP MODAL */}

      <Modal
        show={showreg}
        onHide={() => setShowRegister(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="d-flex">
            <img src={pic} alt="left"></img>
            <Container className=" d-flex flex-column p-5 justify-content-center">
              <Register />
              <div className="text-muted fw-bolder mt-5 text-center">
                Already have an account ?
                <span
                  className="fw-bolder pink ps-1"
                  onClick={() => [setShowLogin(true), setShowRegister(false)]}
                >
                  Sign In
                </span>
              </div>
            </Container>
          </div>
          <FailedMessage message="from parents" />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default SignIn;
