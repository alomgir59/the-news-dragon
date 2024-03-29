import React from "react";
import logo from "../../../assets/logo.png";
import moment from "moment";
import Marquee from "react-fast-marquee";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const Header = () => {
  return (
    <Container>
      <div className="text-center">
        <img className="mt-2" src={logo} alt="" />
        <p>
          <small className="mt-1">Journalism Without Fear or Favour</small>
        </p>
        <p>{moment().format("dddd, MMMM D, YYYY")}</p>
      </div>

      <div className="d-flex">
        <Button variant="danger">Latest</Button>
        <Marquee className="text-danger" speed={100}>
          I can be a React component, multiple React components, or just some
          text... ... .I can be a React component, multiple React components, or
          just some text... ..... I can be a React component, multiple React
          components, or just some text...
        </Marquee>
      </div>

      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="#features">Home</Nav.Link>
              <Nav.Link href="#pricing"> About </Nav.Link>
              <Nav.Link href="#pricing"> Carrier </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">Profile</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                <Button variant="secondary">Login</Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default Header;
