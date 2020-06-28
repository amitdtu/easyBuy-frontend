import React from "react";
import { Card, Button, Container } from "react-bootstrap";

export default function Orders() {
  return (
    <Container className="my-5">
      <Card className="my-4">
        <Card.Header>
          <div className="d-flex justify-content-between">
            <h4 className="text-danger">Pending</h4>
            {/* <h4 className="text-success">Delivered</h4> */}
            <p>Order Id ds4a6da5d4a65d46as5</p>
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Title>
            <img src="https://picsum.photos/id/237/50/50" alt=""></img> Product
            Name
          </Card.Title>
          <Card.Text>Placed at 12/06/2020</Card.Text>
          <Button variant="info">Buy Again</Button>
        </Card.Body>
      </Card>
      <Card className="my-4">
        <Card.Header>
          <div className="d-flex justify-content-between">
            <h4 className="text-success">Delivered</h4>
            <p>Order Id 4d65as4dfshds5d45s4</p>
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Title>
            {" "}
            <img src="https://picsum.photos/id/237/50/50" alt=""></img> Product
            Name
          </Card.Title>
          <Card.Text>Placed at 18/07/2020</Card.Text>
          <Button variant="info">Buy Again</Button>
        </Card.Body>
      </Card>
    </Container>
  );
}
