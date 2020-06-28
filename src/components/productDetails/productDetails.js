import React, { Fragment, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import ProductReview from "./productReview";

export default function PoductDetails() {
  const [reviewModalShow, setReviewModalShow] = useState(false);

  const openReviewModal = () => setReviewModalShow(true);
  const closeReviewModal = () => setReviewModalShow(false);
  return (
    <Fragment>
      <ProductReview show={reviewModalShow} closeModal={closeReviewModal} />
      <Container className="mt-4">
        <Row>
          <Col lg={9} className="mx-auto">
            <Card>
              <Card.Img
                variant="top"
                src="http://placehold.it/900x400"
                alt=""
              />
              <Card.Body>
                <Card.Title>Product Name</Card.Title>
                <h4>$24.99 &#9733;</h4>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Sapiente dicta fugit fugiat hic aliquam itaque facere, soluta.
                  Totam id dolores, sint aperiam sequi pariatur praesentium
                  animi perspiciatis molestias iure, ducimus!
                </Card.Text>
                <h4 className="stars" className="text-warning">
                  &#9733; &#9733; &#9733; &#9733; &#9734;{" "}
                  <span style={{ color: "black" }}>4.0 stars </span>{" "}
                </h4>
                <Button variant="info" className="mr-2">
                  Add to Cart
                </Button>
                <Button variant="dark">Add to Wishlist</Button>
              </Card.Body>
            </Card>

            <div className="card card-outline-secondary my-4">
              <div className="card-header d-flex justify-content-between align-items-center">
                Product Reviews
                <Button onClick={openReviewModal} variant="success">
                  Leave a Review
                </Button>
              </div>
              <div className="card-body">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Omnis et enim aperiam inventore, similique necessitatibus
                  neque non! Doloribus, modi sapiente laboriosam aperiam fugiat
                  laborum. Sequi mollitia, necessitatibus quae sint natus.
                </p>
                <small className="text-muted">
                  Posted by Anonymous on 3/1/17
                </small>
                <hr />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Omnis et enim aperiam inventore, similique necessitatibus
                  neque non! Doloribus, modi sapiente laboriosam aperiam fugiat
                  laborum. Sequi mollitia, necessitatibus quae sint natus.
                </p>
                <small className="text-muted">
                  Posted by Anonymous on 3/1/17
                </small>
                <hr />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Omnis et enim aperiam inventore, similique necessitatibus
                  neque non! Doloribus, modi sapiente laboriosam aperiam fugiat
                  laborum. Sequi mollitia, necessitatibus quae sint natus.
                </p>
                <small className="text-muted">
                  Posted by Anonymous on 3/1/17
                </small>
                <hr />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Fragment>
    //       </Col>
    //     </Row>
    //   </Container>
    // </Fragment>
  );
}
