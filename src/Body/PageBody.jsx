import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./PageBody.css";
import Zoom from "react-reveal/Zoom";
import Form from "./Form";
import Formtest from "./Formtest";
import { Button, Image, Jumbotron, Table } from "react-bootstrap";

class PageBody extends Component {
  state = {};
  render() {
    return (
      <div className="bodyMain">
        <Image width="100%" src={require("../banner.png")} fluid />
        <Jumbotron className="Jumbo" fluid>
          <Zoom>
            <h1>About True Reactions</h1>
            <br />
            <p>
              Where does it come from? Contrary to popular belief, Lorem Ipsum
              is not simply random text. It has roots in a piece of classical
              Latin literature from 45 BC, making it over 2000 years old.
              Richard McClintock, a Latin professor at Hampden-Sydney College in
              Virginia, looked up one of the more obscure Latin words,
              consectetur, from a Lorem Ipsum passage, and going through the
              cites of the word in classical literature, discovered the
              undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
              1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good
              and Evil) by Cicero, written in 45 BC. This book is a treatise on
              the theory of ethics, very popular during the Renaissance. The
              first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes
              from a line in section 1.10.32. The standard chunk of Lorem Ipsum
              used since the 1500s is reproduced below for those interested.
              Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum"
              by Cicero are also reproduced in their exact original form,
              accompanied by English versions from the 1914 translation by H.
              Rackham.
            </p>
            <br />
            <p>
              <Button variant="success">Contact Us</Button>
            </p>
          </Zoom>
        </Jumbotron>
        <br />
        <Image width="100%" src={require("../banner.png")} fluid />
        <br />
        <br />
        <br />
        <div className="PaymentDetailsDivision">
          <h1 className="Jumbo">Payment Details</h1>
          <br />
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>#</th>
                <th>Job Type</th>
                <th>Payment</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Interview/Screening</td>
                <td>20$</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Shoot (5 Hrs)</td>
                <td>80$</td>
              </tr>
              <tr>
                <td colSpan="3">
                  <sub>
                    ** Please Read the Terms and{" "}
                    <a href="#Privacy">Condition & privacy policy</a>.**{" "}
                  </sub>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
        {/* ---------- Payment Div ends here --------  */}

        <Formtest />
      </div>
    );
  }
}

export default PageBody;
