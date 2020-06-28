import React from "react";
import { Container } from "react-bootstrap";

export default function Footer() {
  return (
    <footer className="py-4 bg-dark fixed-bottom">
      <Container>
        <p className="m-0 text-center text-white">
          Copyright © Your Website 2020
        </p>
      </Container>
    </footer>
  );
}
