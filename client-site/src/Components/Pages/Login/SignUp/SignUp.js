import React from "react";
import "./SignUp.css";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "./../../../../Hooks/UseAuth";

const SignUp = () => {
  const {
    handleRegister,
    nameHandle,
    emailHandle,
    passwordHandle,
    photoHandle,
    error,
  } = useAuth();
  return (
    <div>
      <Container>
        <div className="form-inner">
          <h1>Please Register</h1>

          <Form onSubmit={handleRegister}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Control
                onChange={nameHandle}
                type="text"
                required
                placeholder="Enter Name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                onChange={emailHandle}
                type="email"
                required
                placeholder="Enter email"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                onChange={passwordHandle}
                type="password"
                required
                placeholder="Password"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                onChange={photoHandle}
                type="text"
                placeholder="Valid Profile Photo URL"
              />
            </Form.Group>
            <div className="text-danger my-1">{error}</div>
            <Button variant="primary" type="submit">
              Sign Up
            </Button>
          </Form>
          <p>
            Already Have an Account? Please{" "}
            <Link className="signUp-link" to="/login">
              Login
            </Link>
          </p>
        </div>
      </Container>
    </div>
  );
};

export default SignUp;
