import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  const [active, setActive] = useState(null);
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <div className="w-100 d-flex justify-content-between align-items-center">
          <Navbar.Brand>
            <Link
              className="text-light"
              to={"/"}
              style={{ textDecoration: "none" }}
              onClick={() => setActive(null)}
            >
              TODO List
            </Link>
          </Navbar.Brand>
          <div>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ml-auto">
                <Link
                  className="head-link mx-2"
                  to={"/about"}
                  onClick={() => setActive("about")}
                  style={{ color: `${active === "about" ? "white" : "grey"}` }}
                >
                  About
                </Link>
                <Link
                  className="head-link"
                  to={"/contact"}
                  onClick={() => setActive("contact")}
                  style={{
                    color: `${active === "contact" ? "white" : "grey"}`,
                  }}
                >
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
