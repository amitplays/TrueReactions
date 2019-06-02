import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar, Button } from "react-bootstrap";

class FooterNavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <div className="NavigationBarBody">
        <Navbar
          fixed="top"
          collapseOnSelect
          expand="lg"
          width="40"
          bg="dark"
          variant="dark"
        >
          <Navbar.Brand href="#home">
            <img
              src="/logo.svg"
              width="30"
              size="lg"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            {" True Reactions"}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Button onClick={this.ApplyBtn} size="lg" variant="success">
              Apply Now !
            </Button>

            <Nav className="mr-auto" />
            <Nav>
              <Nav.Link href="#deets">FaQs</Nav.Link>
              <Nav.Link href="#features">About Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default FooterNavBar;
