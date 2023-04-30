import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const RightNav = () => {
  return (
    <div>
      <h4 className="text-dark">Login With</h4>
      <Button className="mb-2" variant="outline-primary">
        <FaGoogle className="me-1" />
        Login With Google
      </Button>
      <Button variant="outline-secondary">
        <FaGithub className="me-1" /> Login With Github
      </Button>
      <div className="my-3">
        <h4 className="fs-5 text"> Find Us On</h4>
        <ListGroup>
          <ListGroup.Item>
            <FaFacebook className="me-1" /> Facebook
          </ListGroup.Item>
          <ListGroup.Item>
            <FaTwitter className="me-1" /> Twitter
          </ListGroup.Item>
          <ListGroup.Item>
            <FaInstagram className="me-1" /> Instagram
          </ListGroup.Item>
        </ListGroup>
      </div>
    </div>
  );
};

export default RightNav;
