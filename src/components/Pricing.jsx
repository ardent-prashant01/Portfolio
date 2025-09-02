import "./Pricing.css";
import { Link } from "react-router-dom";
import React from "react";

export default function Pricing() {
  return (
    <div className="pricing">
      <div className="card-container">
        <div className="card">
          <h2>- Basics -</h2>
          <span className="bar"></span>
          <p className="btc">$ 100</p>
          <p>- 1 days-</p>
          <p>- 3 Pages-</p>
          <p>- Featured-</p>
          <p>- Responsive Design-</p>
          <Link to="/contact" className="btn">
            PURCHASE NOW
          </Link>
        </div>
        <div className="card">
          <h2>- Premium -</h2>
          <span className="bar"></span>
          <p className="btc">$ 100</p>
          <p>- 3 days-</p>
          <p>- 5 Pages-</p>
          <p>- Featured-</p>
          <p>- Responsive Design-</p>
          <Link to="/contact" className="btn">
            PURCHASE NOW
          </Link>
        </div>
        <div className="card">
          <h2>- Bussiness -</h2>
          <span className="bar"></span>
          <p className="btc">$ 300</p>
          <p>- 5 days-</p>
          <p>- 8 Pages-</p>
          <p>- Featured-</p>
          <p>- Responsive Design-</p>
          <Link to="/contact" className="btn">
            PURCHASE NOW
          </Link>
        </div>
      </div>
    </div>
  );
}
