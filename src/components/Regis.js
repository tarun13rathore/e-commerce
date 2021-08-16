import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

const Regis = () => {
  return (
    <>
      <div style={{ backgroundColor: "#97D1E5" }}>
        <div className="container login">
          <div className="row mt-5 " style={{ backgroundColor: "white" }}>
            <div className="shadow">
              <Form>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      type="text"
                      required
                      placeholder="First Name"
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      type="text"
                      required
                      placeholder="Last Name"
                    />
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                      type="text"
                      required
                      placeholder="Enter Phone"
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Mobile No</Form.Label>
                    <Form.Control
                      type="text"
                      required
                      placeholder="Enter Mobile number"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      required
                      placeholder="Enter Email"
                    />
                  </Form.Group>
                </Row>
                <hr></hr>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Company Name</Form.Label>
                    <Form.Control
                      type="text"
                      required
                      placeholder=" Enter Company Name"
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Company Website</Form.Label>
                    <Form.Control
                      type="text"
                      required
                      placeholder="Company Website"
                    />
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Company Address</Form.Label>
                    <Form.Control
                      type="text"
                      required
                      placeholder=" Enter Company address"
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Company Address 2</Form.Label>
                    <Form.Control type="text" placeholder="Company Address" />
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>City</Form.Label>
                    <Form.Control
                      type="text"
                      required
                      placeholder=" Enter City Name"
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>State</Form.Label>
                    <Form.Control
                      type="text"
                      required
                      placeholder=" Enter Company State"
                    />
                  </Form.Group>
                </Row>

                <div className="text-center">
                  <Button
                    className="mb-3"
                    size="lg"
                    variant="outline-info"
                    type="submit"
                  >
                    Apply
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

export default Regis;
