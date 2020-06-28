import React from "react";
import {
  Table,
  Container,
  Form,
  Button,
  Card,
  Row,
  Col,
} from "react-bootstrap";

export default function Cart() {
  return (
    <Container>
      <h3 className="my-4">Your Cart</h3>
      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>Product Name</th>
            <th>Quantity</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>
              {" "}
              <img src="https://picsum.photos/id/237/50/50" alt="" />{" "}
            </td>
            <td>toy</td>
            <td>
              <Form>
                <Form.Group controlId="exampleForm.SelectCustom">
                  {/* <Form.Label>Custom select</Form.Label> */}
                  <Form.Control as="select" custom>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </Form.Control>
                </Form.Group>
              </Form>
            </td>
            <td>
              <Button className="cancel-btn" variant="danger">
                x
              </Button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>
              {" "}
              <img src="https://picsum.photos/id/237/50/50" alt="" />{" "}
            </td>
            <td>toy</td>
            <td>
              <Form>
                <Form.Group controlId="exampleForm.SelectCustom">
                  {/* <Form.Label>Custom select</Form.Label> */}
                  <Form.Control as="select" custom>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </Form.Control>
                </Form.Group>
              </Form>
            </td>
            <td>
              <Button className="cancel-btn" variant="danger">
                x
              </Button>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>
              {" "}
              <img src="https://picsum.photos/id/237/50/50" alt="" />{" "}
            </td>
            <td>toy</td>
            <td>
              <Form>
                <Form.Group controlId="exampleForm.SelectCustom">
                  {/* <Form.Label>Custom select</Form.Label> */}
                  <Form.Control as="select" custom>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </Form.Control>
                </Form.Group>
              </Form>
            </td>
            <td>
              <Button className="cancel-btn" variant="danger">
                x
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
      <Container className="my-4">
        <Row>
          <Col className="ml-auto" md={6} lg={6} xs={6}>
            <Table bordered hover>
              <thead>
                <tr>
                  <th colSpan="3">Total</th>
                  {/* <th></th> */}
                  {/* <th></th> */}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Toy</td>
                  <td>Rs 500</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Toy</td>
                  <td>Rs 500</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Toy</td>
                  <td>Rs 500</td>
                </tr>
                <tr>
                  <td colSpan="3">
                    <Button variant="success">Checkout</Button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
