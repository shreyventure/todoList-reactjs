import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <div className="w-100 d-flex justify-content-between align-items-center">
          <Navbar.Brand>
            <Link
              className="text-light"
              to={"/"}
              style={{ textDecoration: "none" }}
            >
              TODO List
            </Link>
          </Navbar.Brand>
          <div>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ml-auto">
                <Link className="text-light head-link mx-2" to={"/about"}>
                  About
                </Link>
                <Link className="text-light head-link" to={"/contact"}>
                  Contact
                </Link>
              </Nav>
            </Navbar.Collapse>
          </div>
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
