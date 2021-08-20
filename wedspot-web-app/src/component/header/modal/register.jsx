import React, { useState } from "react";
import { Divider, Button, Icon, Checkbox } from "semantic-ui-react";

function Register({ props }) {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <h1>Sign up to your account</h1>
      <form>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control rounded-4"
            id="floatingInput"
            placeholder="Full Name"
            value={fullname}
            onChange={(e) => {
              setFullname(e.target.value);
            }}
          />
          <label htmlFor="floatingInput">Full Name</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control rounded-4"
            id="floatingInput"
            placeholder="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="password"
            className="form-control rounded-4"
            id="floatingPassword"
            placeholder="Password 5+ character"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <label htmlFor="floatingPassword">Password 5+ character</label>
        </div>
        <div className="mt-3 mb-3">
          <Checkbox label="I agree with Wedspot terms & conditions" />
        </div>
        <button
          className=" text-light w-100 btn btn-lg rounded-4 green watch-btn fw-bold p-3 mb-2"
          type="submit"
        >
          Sign Up
        </button>
      </form>

      <Divider horizontal>Or</Divider>

      <div className="d-flex mt-4 mb-5">
        <Button fluid basic size="huge" color="red">
          <Icon name="google" />
          Google
        </Button>
        <Button fluid basic size="huge" color="blue">
          <Icon name="facebook f" />
          Facebook
        </Button>
      </div>
    </div>
  );
}

export default Register;
