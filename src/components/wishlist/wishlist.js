import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

export default function Wishlist() {
  return (
    <Container className="my-5">
      <Row>
        <Col md={6} lg={6} sm={12} className="m-auto">
          <h3>Your Wishlist</h3>
          <Card className="my-4">
            <Card.Header>Product Name</Card.Header>
            <Card.Body>
              <Card.Title>
                <img
                  className="mr-2"
                  src="https://picsum.photos/id/237/50/50"
                  alt=""
                />
                Product Name
              </Card.Title>
              <Card.Text>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
                  numquam aspernatur!
                </p>
                <p className="font-weight-bold">Rs 2000</p>
              </Card.Text>
              <Button variant="primary">Add To Cart</Button>
            </Card.Body>
          </Card>
          <Card className="my-4">
            <Card.Header>Product Name</Card.Header>
            <Card.Body>
              <Card.Title>
                <img
                  className="mr-2"
                  src="https://picsum.photos/id/237/50/50"
                  alt=""
                />
                Product Name
              </Card.Title>
              <Card.Text>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
                  numquam aspernatur!
                </p>
                <p className="font-weight-bold">Rs 2000</p>
              </Card.Text>
              <Button variant="primary">Add To Cart</Button>
            </Card.Body>
          </Card>
          <Card className="my-4">
            <Card.Header>Product Name</Card.Header>
            <Card.Body>
              <Card.Title>
                <img
                  className="mr-2"
                  src="https://picsum.photos/id/237/50/50"
                  alt=""
                />
                Product Name
              </Card.Title>
              <Card.Text>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
                  numquam aspernatur!
                </p>
                <p className="font-weight-bold">Rs 2000</p>
              </Card.Text>
              <Button variant="primary">Add To Cart</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
