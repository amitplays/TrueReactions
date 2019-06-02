import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./PageBody.css";
import ReactBootstrap, { Modal, Button, Alert } from "react-bootstrap";

import Formtest from "../Body/Formtest";
import Slide from "react-reveal/Zoom";

class ApplyNowModal extends Component {
  render() {
    let modalClose = () => this.setState({ modalShow: false });
    console.log("Console log on line 12 ApplyNowModal,jsx");

    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Apply now to get a call !
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Please fill in your details</h4>
          <Formtest />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default ApplyNowModal;
