import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./PageBody.css";
import Slide from "react-reveal/Zoom";
import { Row, Card, Jumbotron, Col } from "react-bootstrap";

class Form extends Component {
  state = {};
  render() {
    return (
      <div className="MainForm">
        <Jumbotron className="Jumbo" fluid>
          <Slide top>
            <h1>
              Fill in Your Details to get a chance to be Featured !!{" "}
              <sub> **Toronto Only**</sub>
            </h1>
            <br />
            <p>
              Where does it come from? Contrary to popular belief, Lorem Ipsum
              is not simply random text. It has roots in a piece of classical
              Latin literature from 45 BC, making it over 2000 years old.
              Richard McClintock, a Latin professor at Hampden-Sydney College in
              Virginia, looked up one of the more obscure Latin words,
              consectetur, from a Lorem Ipsum passage, and going through the
              cites of the word in classical literature, discovered. Rackham.
            </p>
            <br />
          </Slide>
        </Jumbotron>
        {/* This the Actual Form */}
      </div>
    );
  }
}

export default Form;
