import React from "react";
import { Form, FormControl, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.css";

const Header = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>
          <Link to="/" className="brnd">
            DenyDesigns
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link>
              <Link to="/product">PRODUCTS</Link>
            </Nav.Link>
            <Nav.Link href="#action2">COLLECTIONS</Nav.Link>
            <Nav.Link href="#action2">OUR STORY</Nav.Link>
            <Nav.Link href="#action2">ART</Nav.Link>
            <Nav.Link href="#action2">WHOLESALE</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="mr-2 search1"
              aria-label="Search"
            />
            <i type="button" className="fas fa-search search"></i>
          </Form>
          <Link to="/login">
            <i class="far fa-user user"></i>
          </Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
