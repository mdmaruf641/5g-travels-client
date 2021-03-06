import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

import { HashLink } from "react-router-hash-link";
import useAuth from "./../../../../Hooks/UseAuth";

const Header = () => {
  const logout = <FontAwesomeIcon icon={faSignOutAlt} />;

  const { user, logOut } = useAuth();
  return (
    <>
      <Navbar id="home" collapseOnSelect expand="lg" bg="white" variant="light">
        <Container>
          <Navbar.Brand href="#home">
            <h3>
              <span>5G.</span>Travels
            </h3>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="m-auto">
              <Nav.Link as={HashLink} to="/home#home" className="nav-items">
                Home
              </Nav.Link>
              <Nav.Link as={HashLink} to="/home#service" className="nav-items">
                Packages
              </Nav.Link>
              <Nav.Link as={HashLink} to="/home#about" className="nav-items">
                About
              </Nav.Link>
              <Nav.Link as={HashLink} to="/home#gallery" className="nav-items">
                Gallery
              </Nav.Link>

              <Nav.Link as={HashLink} to="/contact" className="nav-items">
                Contact
              </Nav.Link>
            </Nav>
            <Nav>
              {user?.email ? (
                <>
                  <Nav.Link
                    as={HashLink}
                    to="/dashboard"
                    className="nav-items mt-2"
                  >
                    Dashboard
                  </Nav.Link>
                  <Nav.Link to="/" className=" mt-1 nav-items user-name">
                    <img
                      style={{ width: "40px", borderRadius: "50%" }}
                      src={user.photoURL}
                      alt=""
                    />
                  </Nav.Link>
                  <Nav.Link to="/" className="nav-items user-name mt-2">
                    {user?.displayName}
                  </Nav.Link>
                  <Nav.Link
                    onClick={logOut}
                    as={HashLink}
                    to="/"
                    className="nav-items  text-dark fs-3"
                  >
                    {logout}
                  </Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link
                    as={HashLink}
                    to="/login"
                    className="nav-items  text-dark"
                  >
                    Login
                  </Nav.Link>
                  <Nav.Link
                    as={HashLink}
                    to="/signUp"
                    className="nav-items signUp text-white "
                  >
                    Sign Up
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
