import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "semantic-ui-css/semantic.min.css";
import { Divider, Button, Icon } from "semantic-ui-react";
import { userLogin } from "../../../store/action/user";
import { FailedMessage } from "../../message/message";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isError, message, isLoading } = useSelector(
    (state) => state.userData
  );

  useEffect(() => {
    console.log("loading");
  }, [isLoading]);

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(userLogin(email, password));
  };

  return (
    <div>
      <form onSubmit={(e) => handleLogin(e)}>
        <div className="form-floating mb-0">
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
        <div className="form-floating my-2">
          <input
            type="password"
            className="form-control rounded-4"
            id="floatingPassword"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <button
          className=" text-light w-100 btn btn-lg rounded-4 green watch-btn fw-bold p-3 mb-4"
          type="submit"
          style={{
            background: "#455437",
            fontSize: "1.1rem",
          }}
          onClick={handleLogin}
        >
          Sign In
        </button>
        <p className="pink mb-5">FORGOT PASSWORD</p>

        <Divider horizontal>Or</Divider>

        <div className="d-flex mt-5 mb-5">
          <Button fluid basic size="huge" color="red">
            <Icon name="google" />
            Google
          </Button>
          <Button fluid basic size="huge" color="blue">
            <Icon name="facebook f" />
            Facebook
          </Button>
        </div>
      </form>
      {isError ? (
        <div>
          <FailedMessage message={message[0]} />
        </div>
      ) : null}
    </div>
  );
}

export default Login;
