import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import NavbarMenu from "./navbar";
import Category from "./category";
import Carousel from "./carousel";
import ProductCard from "./productCard";
import Footer from "./footer";

export default function Home() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div>
      <Container>
        <Row>
          <Col lg={3}>
            <Category />
          </Col>
          <Col lg={9}>
            <Row>
              <Carousel />
              {arr.map((el, i) => (
                <Col key={i} lg={4} md={6} className="mb-4">
                  <ProductCard />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
