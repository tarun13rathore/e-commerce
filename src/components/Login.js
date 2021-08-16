import React from "react";
import "./style.css";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div style={{ backgroundColor: "#97E5BA" }}>
        <div className="container login">
          <div className="row mt-5 " style={{ backgroundColor: "white" }}>
            <div className="shadow ">
              <div className="text-center">
                <h1>DenyDesigns</h1>
                <h4>Login Form</h4>
              </div>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <div className="text-center">
                  <Button variant="outline-primary" type="submit">
                    Let's Go
                  </Button>
                </div>
                <div className="pb-2">
                  <h3>Not A Wholesale Partner?</h3>
                  <Button variant="outline-warning" type="submit">
                    Keep Browsing
                  </Button>
                  <Button
                    className="apply"
                    variant="outline-info"
                    type="submit"
                  >
                    <Link to="/register">Apply Here</Link>
                  </Button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
