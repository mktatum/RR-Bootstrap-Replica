import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import "./Banner.css";

function Banner() {
  return (
    <div className="homepageBanner">
      <Container className="homepageContainer">
        <Row>
          <Col xs={6} md={8}>
            <h2>Order groceries for delivery or pickup today</h2>
            <p>
              Whatever you want from local stores, brought right to your door.
            </p>
            <form>
              <input
                className="form-control"
                placeholder="Enter your address here"
              ></input>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Banner;
