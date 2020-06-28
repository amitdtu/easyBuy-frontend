import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard() {
  return (
    <div className="card h-100">
      <Link to="productDetails">
        <img className="card-img-top" src="http://placehold.it/700x400" alt />
      </Link>
      <div className="card-body">
        <h4 className="card-title">
          {/* <a href="#">Item One</a> */}
          <Link to="productDetails">Item One</Link>
        </h4>
        <h5>$24.99</h5>
        <p className="card-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam
          aspernatur!
        </p>
      </div>
      <div className="card-footer">
        <small className="text-muted">★ ★ ★ ★ ☆</small>
      </div>
    </div>
  );
}
