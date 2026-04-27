import React from "react";
import { Link } from "react-router-dom";
import seal from "../assets/seal.png";

export default function Header() {
  return (
    <header style={{ padding: "1rem 2rem", borderBottom: "1px solid #ccc" }}>
      <h1 style={{ margin: 0 }}>Luke Lopez</h1>

      <nav style={{ marginTop: "0.5rem" }}>
        <Link to="/" style={{ marginRight: "1rem" }}>
          Home
        </Link>

        {/* Uncomment when ready */}
         <Link to="/papers" style={{ marginRight: "1rem" }}>
          Projects
        </Link> 

        <Link to="/lr">
          Letters of Recommendation
        </Link>
      </nav>
    </header>
  );
}
