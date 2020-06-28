import React, { Fragment } from "react";
import { Col, ListGroup } from "react-bootstrap";

export default function Category() {
  return (
    <Fragment>
      <h1 className="my-4">Shop Name</h1>
      <ListGroup>
        <ListGroup.Item>category 1</ListGroup.Item>
        <ListGroup.Item>category 2</ListGroup.Item>
        <ListGroup.Item>category 3</ListGroup.Item>
        <ListGroup.Item>category 4</ListGroup.Item>
      </ListGroup>
    </Fragment>
  );
}
