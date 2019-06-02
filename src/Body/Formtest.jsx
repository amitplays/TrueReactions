import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./PageBody.css";
import Slide from "react-reveal/Zoom";

import { Form, InputGroup, Button, Col, Jumbotron } from "react-bootstrap";

class Formtest extends Component {
  constructor(...args) {
    super(...args);

    this.state = { validated: false };
  }

  handleSubmit(event) {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    this.setState({ validated: true });
  }

  render() {
    const { validated } = this.state;
    return (
      <div className="something">
        <Jumbotron className="Jumbo" fluid>
          <Slide top>
            <h1>
              Fill in Your Details to get a chance to be Featured !!{" "}
              <sub> **Toronto Only**</sub>
            </h1>
            <p>
              Where does it come from? Contrary to popular belief, Lorem Ipsum
              is not simply random text. .
            </p>
          </Slide>
        </Jumbotron>

        <Form
          noValidate
          className="Form"
          validated={validated}
          onSubmit={e => this.handleSubmit(e)}
        >
          <Form.Row>
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>Full Name</Form.Label>
              <Form.Control required type="text" placeholder="Full name" />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Age</Form.Label>
              <Form.Control required type="number" placeholder="Age" />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
              <Form.Label>Instagram Username</Form.Label>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  type="email"
                  placeholder="or your Email"
                  aria-describedby="inputGroupPrepend"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please enter the valid data.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="6" controlId="validationCustom03">
              <Form.Label>Things you are good with</Form.Label>
              <Form.Control
                as="select"
                type="text"
                placeholder="Choose.."
                required
              >
                {" "}
                <option>I am good with Numbers</option>
                <option>I am good with Chess</option>
                <option>I am good with X</option>
                <option>I am good with Y</option>
              </Form.Control>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom04">
              <Form.Label>Profession</Form.Label>
              <Form.Control
                as="select"
                type="text"
                placeholder="Profession"
                required
              >
                {" "}
                <option>Student (Above 18)</option>
                <option>Woking Professional</option>
                <option>UnEmployed</option>
                <option>Self-Employed</option>
              </Form.Control>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom05">
              <Form.Label>Contact</Form.Label>
              <Form.Control
                min="1"
                max="10"
                type="number"
                placeholder="Contact"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid Contact.
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="6">
              <Form.Check
                required
                label="Do you smoke Weed ? "
                feedback="You must answer before submitting."
              />
            </Form.Group>
            <Form.Group as={Col} md="6">
              <Form.Check
                required
                label="Do you drink Alcohol ? "
                feedback="You must answer before submitting."
              />
            </Form.Group>

            <Form.Group as={Col} md="12">
              <Form.Check
                required
                label="Agree to terms and conditions"
                feedback="You must agree before submitting."
              />
            </Form.Group>
          </Form.Row>
          <Button variant="success" type="submit">
            Apply Now !
          </Button>
        </Form>
      </div>
    );
  }
}

export default Formtest;
