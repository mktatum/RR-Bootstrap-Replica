import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import "./Banner.css";
import { Image } from "react-bootstrap";

function StoreListing() {
  const stores = [
    {
      name: "Aldi",
      img: "https://p7.hiclipart.com/preview/687/518/570/aldi-grocery-store-supermarket-chicago-company-aldi-logo.jpg",
      desc: "Delivery * Pickup",
    },
    {
      name: "Sprouts Farmers Market",
      img: "https://banner2.cleanpng.com/20180705/ayk/kisspng-sprouts-farmers-market-organic-food-grocery-store-5b3e4c65a9adc4.086858351530809445695.jpg",
      desc: "Delivery * Pickup",
    },
    {
      name: "Kroger",
      img: "https://cdn.imgbin.com/21/17/22/imgbin-kroger-logo-grocery-store-retail-brand-eti-logo-Aec01BTyiE5VprQgTYJdFrveL.jpg",
      desc: "Delivery * Pickup",
    },
  ];
  return (
    <div style={{ margin: "auto" }}>
      <h2
        style={{
          fontSize: "36px",
          lineHeight: "50px",
          marginTop: "20px",
          textAlign: "center",
          fontWeight: "normal",
        }}
      >
        Browse stores in Houston
      </h2>
      <Container style={{ marginTop: "40px", textAlign: "left" }}>
        <Row>
          {stores.concat(stores).map(({ name, img, desc }, i) => (
            <Col key={i} className="d-flex gap-3 mb-3" xs="4">
              <Image
                className="img-fluid"
                style={{
                  objectFit: "contain",
                  width: "50px",
                  height: "50px",
                  border: "1px solid gray",
                  borderRadius: "50%",
                }}
                src={img}
                alt={`${name} logo`}
              />
              <div>
                <div>
                  <strong>{name}</strong>
                </div>
                <div>{desc}</div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default StoreListing;
